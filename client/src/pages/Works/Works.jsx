import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your artwork images - replace with your actual images
import Art1 from '/src/assets/Art_works1.jpg';
import Art2 from '/src/assets/Art_works2.jpg';
import Art3 from '/src/assets/Art_works3.jpg';
import Art4 from '/src/assets/Art_works4.jpg';
import Art5 from '/src/assets/Art_works5.jpg';
import Art6 from '/src/assets/Art_works6.jpg';
import Art7 from '/src/assets/Art_works7.jpg'; 

function Works() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of artworks - each can have multiple images
  const artworks = [
    {
      id: 1,
      images: [Art1], // Multiple images for this artwork
      title: 'Abstract Emotions I',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '60 x 60 cm'
    },
    {
      id: 2,
      images: [Art2], // Multiple images
      title: 'Color Symphony',
      year: '2024',
      medium: 'Mixed Media',
      dimensions: '100 x 100 cm'
    },
    {
      id: 3,
      images: [Art3], // Multiple images
      title: 'Texture Dreams',
      year: '2023',
      medium: 'Acrylic on Canvas',
      dimensions: '90 x 90 cm'
    },
    {
      id: 4,
      images: [Art4], // Multiple images
      title: 'Flow State',
      year: '2023',
      medium: 'Oil on Canvas',
      dimensions: '90 x 110 cm'
    },
    {
      id: 5,
      images: [Art5], // Multiple images
      title: 'Inner Landscape',
      year: '2023',
      medium: 'Acrylic on Canvas',
      dimensions: '100 x 100 cm'
    },
    {
      id: 6,
      images: [Art6], // Multiple images
      title: 'Abstract Emotions II',
      year: '2022',
      medium: 'Mixed Media',
      dimensions: '100 x 90 cm'
    },
    {
      id: 7,
      images: [Art7], // Multiple images for this artwork
      title: 'Duality of Color',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '120 x 80 cm'

    }

  ];

  const handleOpenArtwork = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(0);
  };

  const handleCloseArtwork = () => {
    setSelectedArtwork(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedArtwork && currentImageIndex < selectedArtwork.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20 text-center">
          <h1 
            className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            MY WORKS
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A collection of abstract expressions and emotional landscapes
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12">
            {artworks.map((artwork) => (
              <div 
                key={artwork.id}
                className="group relative overflow-hidden cursor-pointer bg-gray-100 max-w-sm mx-auto"
                onClick={() => handleOpenArtwork(artwork)}
              >
                {/* Image Container - Show first image as thumbnail */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={artwork.images[0]} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge showing number of images */}
                  {artwork.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {artwork.images.length} 
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                      <h3 
                        className="text-white text-2xl font-semibold mb-2 text-center"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {artwork.title}
                      </h3>
                      <p 
                        className="text-white/80 text-sm text-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {artwork.year} • {artwork.medium}
                      </p>
                      <p 
                        className="text-white/70 text-sm mt-2 text-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {artwork.dimensions}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Section - Always Visible on Mobile */}
                <div className="lg:hidden p-4 bg-white">
                  <h3 
                    className="text-gray-900 text-lg font-semibold mb-1"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {artwork.title}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {artwork.year} • {artwork.medium}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal with Image Navigation */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
          onClick={handleCloseArtwork}
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={handleCloseArtwork}
              className="fixed top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 z-20 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {currentImageIndex > 0 && (
              <button
                onClick={handlePrevImage}
                className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 z-20 shadow-xl"
              >
                <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
              </button>
            )}

            {/* Next Button */}
            {currentImageIndex < selectedArtwork.images.length - 1 && (
              <button
                onClick={handleNextImage}
                className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 z-20 shadow-xl"
              >
                <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
              </button>
            )}

            {/* Image Container */}
            <div 
              className="max-w-6xl w-full flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center py-20 md:py-0"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Image with Counter */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full">
              <div className="relative w-full max-w-4xl h-[50vh] md:h-[70vh] flex items-center justify-center">
                <img 
                  src={selectedArtwork.images[currentImageIndex]} 
                  alt={`${selectedArtwork.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Image Counter */}
              {selectedArtwork.images.length > 1 && (
                <div className="text-gray-600 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {currentImageIndex + 1} / {selectedArtwork.images.length}
                </div>
              )}

              {/* Thumbnail Navigation */}
              {selectedArtwork.images.length > 1 && (
                <div className="flex gap-2 mt-2">
                  {selectedArtwork.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-gray-900 scale-110 shadow-lg' 
                          : 'border-gray-300 hover:border-gray-600'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Panel */}
            <div className="w-full md:w-80 text-gray-900 space-y-4 bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 shadow-xl">
              <h2 
                className="text-2xl md:text-3xl font-light mb-3 md:mb-4"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {selectedArtwork.title}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:space-y-3 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">Year</p>
                  <p className="text-base md:text-lg">{selectedArtwork.year}</p>
                </div>
                
                <div>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">Medium</p>
                  <p className="text-base md:text-lg">{selectedArtwork.medium}</p>
                </div>
                
                <div className="col-span-2 md:col-span-1">
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">Dimensions</p>
                  <p className="text-base md:text-lg">{selectedArtwork.dimensions}</p>
                </div>
              </div>

              {/* Optional: Add Purchase/Inquiry Button */}
              <div className="pt-4 md:pt-6">
                <button 
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider text-xs md:text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inquire About This Piece
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}

export default Works;
