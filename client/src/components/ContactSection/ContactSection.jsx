import React, { useState } from 'react';
import MessageForm from '../MessageForm/MessageForm';

function ContactSection() {
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="text-center py-16">
        <button 
          onClick={() => setIsMessageBoxOpen(true)}
          className="inline-block px-12 py-4 bg-gray-900 text-white text-lg font-light tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          WRITE MESSAGE
        </button>
        
        {/* Contact Email */}
        <div className="mt-8">
          <p 
            className="text-gray-600 text-sm font-light tracking-wider mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Contact mail:
          </p>
          <a 
            href="mailto:Zaghloulmai57@gmail.com"
            className="text-gray-900 text-lg font-light tracking-wide hover:text-gray-600 transition-colors duration-300 underline decoration-1 underline-offset-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Zaghloulmai57@gmail.com
          </a>
          
          {/* Phone Number */}
          <p 
            className="text-gray-600 text-sm font-light tracking-wider mb-2 mt-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Phone:
          </p>
          <a 
            href="tel:+201031914191"
            className="text-gray-900 text-lg font-light tracking-wide hover:text-gray-600 transition-colors duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            +201031914191
          </a>
        </div>
      </section>

      {/* Message Form */}
      <MessageForm 
        isOpen={isMessageBoxOpen} 
        onClose={() => setIsMessageBoxOpen(false)} 
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </>
  );
}

export default ContactSection;