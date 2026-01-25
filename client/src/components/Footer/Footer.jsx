import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';

// TikTok icon as SVG since lucide-react doesn't have it
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/maizaghloul1?igsh=MWIzaHhkcmFhMml0cQ==",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@meem.zz?_r=1&_t=ZS-93N0i3P7i5f",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h3 
            className="text-2xl md:text-3xl font-light tracking-widest mb-8"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            FOLLOW ME ON SOCIAL MEDIA
          </h3>
          
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-12"></div>

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p 
              className="text-gray-400 text-sm font-light tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © 2026 DeVexa
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 rtl:space-x-reverse">
            <a 
              href="/works" 
              className="text-gray-300 hover:text-white transition-colors text-sm font-light tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              MY WORKS
            </a>
            <a 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors text-sm font-light tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ABOUT ME
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-gray-400 hover:text-white transition-colors group"
          >
            <span 
              className="text-sm font-light tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Back to top
            </span>
            <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </footer>
  );
}

export default Footer;
