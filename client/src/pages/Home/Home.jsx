import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero.jsx';

// Placeholder images - replace with your actual artwork images
import Art5 from '../../assets/art5.JPG';
import Art6 from '../../assets/art6.JPG';

function Home() {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Works Section */}
      <section id="works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="w-full mx-auto max-w-7xl">
          
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 tracking-tight px-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              WORKS
            </h2>
          </div>

          {/* Two Artworks Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-0">
            
            {/* Left Artwork */}
            <Link 
              to="/works"
              onClick={scrollToTop}
              className="group relative overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-500 block rounded-lg lg:rounded-none"
            >
              <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
                <img 
                  src={Art5} 
                  alt="Artwork 1"
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ 
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-black/40 lg:bg-black/0 lg:group-hover:bg-black/40 transition-all duration-500"
                  style={{ 
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                ></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <p 
                    className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-wider px-4 text-center"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    ESCAPE
                  </p>
                  <p 
                    className="text-white text-base sm:text-lg md:text-xl font-medium tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    More Arts
                  </p>
                </div>
              </div>
            </Link>

            {/* Right Artwork */}
            <Link 
              to="/works"
              onClick={scrollToTop}
              className="group relative overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-500 block rounded-lg lg:rounded-none"
            >
              <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
                <img 
                  src={Art6} 
                  alt="Artwork 2"
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ 
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-black/40 lg:bg-black/0 lg:group-hover:bg-black/40 transition-all duration-500"
                  style={{ 
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                ></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <p 
                    className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-wider px-4 text-center"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    ESCAPE
                  </p>
                  <p 
                    className="text-white text-base sm:text-lg md:text-xl font-medium tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    More Arts
                  </p>
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
        
        /* Safari-specific fixes */
        @supports (-webkit-touch-callout: none) {
          .group img {
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
