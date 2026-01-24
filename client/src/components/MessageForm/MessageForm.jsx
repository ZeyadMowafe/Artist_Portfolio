import React, { useState } from 'react';

function MessageForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '0041b8b6-1cc2-4aa3-bf75-027213881cff',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Message'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Close window after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
               Your message has been sent successfully!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
               An error occurred, please try again
            </div>
          )}

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1"
                required
                disabled={isSubmitting}
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
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gray-900 text-white text-lg font-light tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
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
