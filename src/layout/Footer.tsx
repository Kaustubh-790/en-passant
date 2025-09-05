import {
  Crown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    club: [
      { label: "About Us", href: "#about" },
      { label: "Events", href: "#events" },
      { label: "Membership", href: "#membership" },
      { label: "Gallery", href: "#gallery" },
    ],
    resources: [
      { label: "Chess Rules", href: "#rules" },
      { label: "Tournaments", href: "#tournaments" },
      { label: "Leaderboard", href: "#leaderboard" },
      { label: "Resources", href: "#resources" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Help Center", href: "#help" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-chess-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-chess-gold" />
              <span className="text-xl font-bold text-chess-gold">
                En Passant
              </span>
            </div>
            <p className="text-chess-light text-sm leading-relaxed">
              A premier chess club dedicated to fostering excellence, community,
              and the timeless art of chess strategy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-chess-light text-sm">
                <MapPin className="w-4 h-4 text-chess-gold" />
                <span>123 Chess Street, Board City</span>
              </div>
              <div className="flex items-center gap-2 text-chess-light text-sm">
                <Phone className="w-4 h-4 text-chess-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-chess-light text-sm">
                <Mail className="w-4 h-4 text-chess-gold" />
                <span>info@enpassantchess.com</span>
              </div>
            </div>
          </div>

          {/* Club Links */}
          <div>
            <h3 className="text-lg font-semibold text-chess-gold mb-4">Club</h3>
            <ul className="space-y-2">
              {footerLinks.club.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-chess-light hover:text-chess-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-chess-gold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-chess-light hover:text-chess-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-chess-gold mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-chess-light hover:text-chess-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-chess-gold/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-chess-light text-sm">
              © {currentYear} En Passant Chess Club. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-chess-light hover:text-chess-gold transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
