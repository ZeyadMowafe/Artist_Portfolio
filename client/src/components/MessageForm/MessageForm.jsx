import React, { useState } from 'react';

function MessageForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Close the box after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Message Box - Right Side */}
      <div className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-50 shadow-2xl transform transition-transform duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 text-3xl font-light"
        >
          ×
        </button>

        {/* Form Content */}
        <div className="h-full overflow-y-auto p-8 md:p-12">
          
          {/* Title */}
          <h3 
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider mb-12 mt-4"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            WRITE A MESSAGE
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Field */}
            <div>
              <label 
                className="block text-sm font-light text-gray-600 tracking-wider mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="YOUR NAME"
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 text-gray-900"
                style={{ fontFamily: 'Inter, sans-serif' }}
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                className="block text-sm font-light text-gray-600 tracking-wider mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                E-MAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-MAIL"
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 text-gray-900"
                style={{ fontFamily: 'Inter, sans-serif' }}
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label 
                className="block text-sm font-light text-gray-600 tracking-wider mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="PHONE NUMBER"
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 text-gray-900"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                className="block text-sm font-light text-gray-600 tracking-wider mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                YOUR MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="YOUR MESSAGE"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 text-gray-900 resize-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
                required
              ></textarea>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1"
                required
              />
              <label 
                htmlFor="privacy"
                className="text-sm font-light text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                I agree to the{' '}
                <a href="/privacy-policy" className="underline hover:text-gray-900">
                  privacy policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white text-lg font-light tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              SEND MESSAGE
            </button>

          </form>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </>
  );
}

export default MessageForm;