import React, { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const navLinks = [
    { name: "MY WORKS", href: "/works" },
    { name: "ABOUT ME", href: "/about", isRoute: true },
    { name: "CONTACT", href: "#contact", isContact: true },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: "https://tiktok.com",
      color: "hover:text-gray-900",
    },
  ];

  return (
    <>
      <nav
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/60 backdrop-blur-xl shadow-lg border-b border-gray-200/30"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="group relative text-sm font-normal tracking-wide text-white hover:text-white/70 transition-all duration-300 uppercase"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"></span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={link.isContact ? handleContactClick : undefined}
                    className="group relative text-sm font-normal tracking-wide text-white hover:text-white/70 transition-all duration-300 uppercase"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"></span>
                  </a>
                )
              ))}
            </div>

            {/* Center Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 group"
            >
              <div className="relative overflow-hidden">
                <h1
                  className="text-2xl md:text-3xl lg:text-4xl font-normal text-white tracking-wider italic relative whitespace-nowrap"
                  style={{
                    fontFamily: "Dancing Script, cursive",
                    fontWeight: 600,
                  }}
                >
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.1s" }}
                  >
                    M
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.2s" }}
                  >
                    a
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.3s" }}
                  >
                    i
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    &nbsp;
                  </span>

                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.6s" }}
                  >
                    Z
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.7s" }}
                  >
                    a
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.8s" }}
                  >
                    g
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "0.9s" }}
                  >
                    l
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "1.0s" }}
                  >
                    o
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "1.1s" }}
                  >
                    u
                  </span>
                  <span
                    className="inline-block animate-fadeIn"
                    style={{ animationDelay: "1.2s" }}
                  >
                    l
                  </span>
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
              </div>
            </Link>

            {/* Right Social Icons */}
            <div className="hidden lg:flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-gray-900 border border-white/20"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-normal text-white hover:text-white/70 transition-colors duration-300 tracking-wide uppercase"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={link.isContact ? handleContactClick : () => setIsOpen(false)}
                    className="block text-base font-normal text-white hover:text-white/70 transition-colors duration-300 tracking-wide uppercase"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.name}
                  </a>
                )
              ))}

              <div className="pt-6 border-t border-white/20">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-4">
                  Follow Me
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600&family=Cinzel:wght@400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}

export default Navbar;