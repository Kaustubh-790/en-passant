import React, { useState } from "react";
import { SocialIconProps } from "@/types/socialIcons";
import {
  InstagramIcon,
  WhatsAppIcon,
  ChessIcon,
} from "@/components/icons/socialIcons";

interface AnimatedSocialIconProps extends SocialIconProps {
  icon: "instagram" | "whatsapp" | "chess";
  size?: number;
  brandColor?: string;
  hoverAnimation?: boolean;
  rippleEffect?: boolean;
}

const iconComponents = {
  whatsapp: WhatsAppIcon,
  instagram: InstagramIcon,
  chess: ChessIcon,
};

const brandColors = {
  whatsapp: "#25D366",
  instagram: "#E4405F",
  chess: "#f5de0cb0",
};

export const AnimatedSocialIcon: React.FC<AnimatedSocialIconProps> = ({
  icon,
  size = 60,
  className = "",
  brandColor,
  hoverAnimation = true,
  rippleEffect = true,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconComponents[icon];
  const color = brandColor || brandColors[icon];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rippleEffect) {
      const ripple = document.createElement("span");
      const rect = e.currentTarget.getBoundingClientRect();
      const rippleSize = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - rippleSize / 2;
      const y = e.clientY - rect.top - rippleSize / 2;

      ripple.style.width = ripple.style.height = rippleSize + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = `${color}33`;
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "rippleEffect 0.6s linear";
      ripple.style.pointerEvents = "none";

      e.currentTarget.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    }

    if (onClick) onClick();
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: size,
    height: size,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: onClick ? "pointer" : "default",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
    userSelect: "none",
    WebkitUserSelect: "none",
    ...(isHovered &&
      hoverAnimation && {
        transform: "translateY(-8px) scale(1.1)",
        cursor: onClick ? "pointer" : "default",
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }),
  };

  const iconStyle = {
    transition: "all 0.4s ease",
    ...(isHovered &&
      hoverAnimation && {
        transform: "scale(1.2)",
      }),
  };

  return (
    <div
      className={className}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <IconComponent
        size={size * 0.4}
        fill={isHovered && hoverAnimation ? color : "#888"}
        style={iconStyle}
        {...props}
      />
      <style>
        {`
          @keyframes rippleEffect {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
