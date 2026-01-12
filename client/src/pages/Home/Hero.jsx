import React from "react";
import { Link } from "react-router-dom";

// Placeholder images - replace with your actual images
import Art3 from "../../assets/art3.jpg";
import Art4 from "../../assets/art4.jpg";

function Hero() {
  return (
    <>
      {/* Hero Section with Fixed Image */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${Art4})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>

        {/* Spacer for fixed navbar */}
        <div className="h-24"></div>

        {/* Content */}
        <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 py-32 flex items-center justify-center min-h-[calc(100vh-6rem)]">
          <div className="text-center space-y-6">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight drop-shadow-2xl"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Creative Portfolio
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Designing Experiences, Not Just Art
            </p>
            <div className="pt-10">
              <a
                href="#works"
                className="inline-block px-12 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-normal tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 hover:scale-105 shadow-2xl uppercase text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* My Story Section with Fixed Image */}
      <div className="relative overflow-hidden min-h-[600px]">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${Art3})`,
          }}
        >
          {/* Simple Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 py-32">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h2
                className="text-5xl lg:text-6xl font-light text-white tracking-tight"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                My Story
              </h2>
              <p
                className="text-lg md:text-xl text-white/80 font-light leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Every artist has a unique journey. Discover mine.
              </p>
            </div>

            {/* Arrow pointing down to button */}
            <div className="flex flex-col items-center gap-6">
              <svg
                className="w-8 h-8 text-white/60 animate-bounce"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>

              <Link
                to="/about"
                className="inline-block px-14 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-light tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600&family=Cinzel:wght@400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap');
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Hero;
