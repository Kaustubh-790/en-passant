import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSocialIcon } from "@/components/animatedSocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
  ];

  const resources = [
    { label: "Chess Puzzles", href: "#puzzles" },
    { label: "Online Platforms", href: "#platforms" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transparent text-white relative overflow-hidden border-t border-gray-700">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="En Passant" width={32} height={32} />
              <span className="text-2xl font-bold chess-heading text-chess-gold">
                En Passant
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Uniting chess enthusiasts to learn, play, and grow together.
            </p>

            <div className="flex items-center gap-4">
              <AnimatedSocialIcon
                icon="instagram"
                size={50}
                hoverAnimation={true}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/enpassant.abesec/",
                    "_blank"
                  )
                }
              />
              <AnimatedSocialIcon
                icon="whatsapp"
                size={50}
                hoverAnimation={true}
                onClick={() => window.open("#", "_blank")}
              />
              <AnimatedSocialIcon
                icon="chess"
                size={50}
                hoverAnimation={true}
                onClick={() =>
                  window.open(
                    "https://www.chess.com/club/en-passant-abesec",
                    "_blank"
                  )
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-chess-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-chess-gold transition-colors duration-200 text-sm transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-chess-gold mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.href}>
                    <button
                      onClick={() => scrollToSection(resource.href)}
                      className="text-gray-300 hover:text-chess-gold transition-colors duration-200 text-sm transform"
                    >
                      {resource.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-chess-gold mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-chess-gold flex-shrink-0" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-chess-gold flex-shrink-0" />
                  <span>enpassant.abesec@gmail.com</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-chess-gold flex-shrink-0 mt-0.5" />
                  <span>ABES Engineering College, Ghaziabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} En Passant Chess Club. All rights reserved.
            </div>

            {/* <div className="flex items-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-chess-gold transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-chess-gold transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-chess-gold transition-colors duration-200">
                Cookie Policy
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
