import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../components/ui/Button';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or feedback? Our team is here to help. Reach out to us through any of the channels below.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 rounded-2xl p-8 shadow-xl border border-dark-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {formStatus.submitted ? (
              <div className="bg-green-900/30 border border-green-800 text-green-300 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-medium mb-2">Thank you for contacting us!</h3>
                <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`w-full ${formStatus.submitting ? 'cursor-not-allowed opacity-70' : ''}`}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-dark-800 rounded-2xl p-8 shadow-xl border border-dark-700">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-4 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Visit Us</h3>
                    <p className="text-gray-300">
                      123 Fashion Street<br />
                      Bandra West, Mumbai<br />
                      Maharashtra 400050
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-4 rounded-full mr-4">
                    <FaEnvelope className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Email Us</h3>
                    <p className="text-gray-300">
                      support@luxeshop.in
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-4 rounded-full mr-4">
                    <FaPhone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Call Us</h3>
                    <p className="text-gray-300">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800 rounded-2xl p-8 shadow-xl border border-dark-700">
              <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-dark-800 rounded-2xl overflow-hidden shadow-xl border border-dark-700"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="LUXESHOP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709642!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659114078127!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 