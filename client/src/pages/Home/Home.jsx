import React from 'react';
import Hero from './Hero.jsx';

// Placeholder images - replace with your actual artwork images
import Art5 from '../../assets/art5.JPG';
import Art6 from '../../assets/art6.JPG';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - هيظهر تحت الـ Navbar */}
      <Hero />

      {/* Works Section */}
      <section id="works" className="py-32 px-0">
        <div className="w-full mx-auto">
          
          {/* Title */}
          <div className="text-center mb-20">
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-tight"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              WORKS
            </h2>
          </div>

          {/* Two Artworks Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Left Artwork */}
            <a 
              href="/works" 
              className="group relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={Art5} 
                  alt="Artwork 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/0 md:group-hover:bg-black/40 transition-all duration-500"></div>
                
                {/* Text Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p 
                    className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-wider"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    ESCAPE
                  </p>
                  <p 
                    className="text-white text-lg md:text-xl font-medium tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    More Arts
                  </p>
                </div>
              </div>
            </a>

            {/* Right Artwork */}
            <a 
              href="/works" 
              className="group relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={Art6} 
                  alt="Artwork 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/0 md:group-hover:bg-black/40 transition-all duration-500"></div>
                
                {/* Text Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p 
                    className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-wider"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    ESCAPE
                  </p>
                  <p 
                    className="text-white text-lg md:text-xl font-medium tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    More Arts
                  </p>
                </div>
              </div>
            </a>

          </div>

        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
}

export default Home;
