import React, { useState, useEffect } from 'react';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import StudioImage from '../../assets/art_profile.jpg';
import AboutMeImage from '../../assets/art_aboutme.jpg';

function AboutMe() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari browser
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser = ua.indexOf('safari') !== -1 && 
                           ua.indexOf('chrome') === -1 && 
                           ua.indexOf('android') === -1;
    setIsSafari(isSafariBrowser);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Intuition',
      description: 'Letting emotion and feeling guide every brushstroke'
    },
    {
      icon: Award,
      title: 'Authenticity',
      description: 'Creating work that reflects personal vision'
    },
    {
      icon: Briefcase,
      title: 'Exploration',
      description: 'Constant experimentation with materials and techniques'
    },
    {
      icon: GraduationCap,
      title: 'Evolution',
      description: 'Growing through observation and practice'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section with Bold Quote */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center ${!isSafari ? 'bg-fixed' : ''}`}
          style={{ 
            backgroundImage: `url(${StudioImage})`,
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight drop-shadow-2xl px-4"
            style={{ 
              fontFamily: 'Cinzel, serif', 
              fontWeight: 700,
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            I DRAW WHAT<br />I CANNOT SAY
          </h1>
          
          <div className="w-24 sm:w-32 h-1 bg-white mx-auto opacity-60"></div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-xl leading-relaxed text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-xl sm:text-2xl md:text-2xl leading-relaxed">
              <span className="font-semibold text-gray-900">Mai Zaghloul</span> is a self-taught artist from Egypt. Her practice is rooted in abstraction, where intuition and emotion take precedence over form or subject.
            </p>
            
            <p>
              From an early age, she found solace and inspiration in creation, letting colour, texture, and movement guide her hand and imagination. Her work explores the interaction between elements — layers, rhythms, and surfaces — to build immersive spaces that pulse with life and feeling.
            </p>
            
            <p>
              She is fascinated by the ways colour and texture can evoke mood, movement, and presence without relying on recognizable forms. Each piece is a reflection of her personal vision, an invitation to experience emotion, energy, and freedom in a direct, unmediated way.
            </p>
            
            <p>
              Her art is not about representation, but about the intensity of sensation, the flow of energy, and the subtle interplay of materials that make each work unique.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fixed Background Image - Safari Optimized */}
        <div 
          className={`absolute inset-0 bg-cover bg-center ${!isSafari ? 'bg-fixed' : ''}`}
          style={{ 
            backgroundImage: `url(${AboutMeImage})`,
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content - Bottom Left */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto flex justify-start items-end min-h-[70vh] sm:min-h-[80vh]">
            <div className="max-w-2xl text-white space-y-6 sm:space-y-8 pb-12 sm:pb-16 pl-0">
              
              <div className="space-y-4 sm:space-y-6">
                <div className="w-32 sm:w-40 md:w-50 h-0.5 bg-white"></div>
                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed sm:leading-loose font-light px-2 sm:px-0" 
                   style={{ 
                     fontFamily: 'Playfair Display, serif', 
                     fontWeight: 300, 
                     lineHeight: '1.8' 
                   }}>
                  Her art moves fluidly between realism and abstraction, shaped by an individual and experimental vision.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-12 sm:mb-16 md:mb-20 text-center tracking-tight px-4"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            My Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300 px-4"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@300;400;500;600&display=swap');
      `}</style>
    </div>
  );
}

export default AboutMe;
