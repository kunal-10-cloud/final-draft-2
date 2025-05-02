import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowRight, FaShoppingBag, FaTag, FaTruck, FaLeaf, FaHeart, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The quality of products and customer service is exceptional. I've been shopping here for years and have never been disappointed.",
      rating: 5,
      author: "Sarah Johnson",
      role: "Fashion Enthusiast"
    },
    {
      id: 2,
      quote: "Their commitment to sustainable fashion is impressive. Every piece I've purchased has been both stylish and eco-friendly.",
      rating: 5,
      author: "Michael Chen",
      role: "Sustainability Advocate"
    },
    {
      id: 3,
      quote: "The shopping experience is seamless, and their delivery is always on time. Highly recommend for anyone looking for premium fashion.",
      rating: 5,
      author: "Emma Rodriguez",
      role: "Loyal Customer"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
        {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-primary font-medium">🎉 Our Journey</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the journey of our premium fashion brand and our commitment to excellence.
            </p>
          </motion.div>
        </div>
        </div>
        
      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-primary font-medium">Our Journey</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Beginning of Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Founded with a vision to revolutionize the fashion industry, our store began as a small boutique with a big dream. We wanted to create a space where quality, style, and sustainability intersect.
            </p>
            <p className="text-gray-300 mb-6">
              Our commitment to excellence has driven us to curate only the finest collections, ensuring that every piece tells a story of craftsmanship and attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-dark-800/50 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
                <p className="text-gray-400">Years of Excellence</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-dark-800/50 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
                <p className="text-gray-400">Happy Customers</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl transform rotate-3" />
              <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Our Store"
              className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
          </div>
          
      {/* Values Section */}
      <div className="bg-dark-800/50 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-primary font-medium">Our Values</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to our customers.
            </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on quality, ensuring every product meets our high standards.",
                icon: <FaShieldAlt className="text-primary text-3xl" />
              },
              {
                title: "Sustainable Fashion",
                description: "Committed to eco-friendly practices and sustainable materials in our collections.",
                icon: <FaLeaf className="text-primary text-3xl" />
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is our priority, with exceptional service at every step.",
                icon: <FaHeart className="text-primary text-3xl" />
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-900/50 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
        
      {/* Testimonials Section */}
      <div className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-primary font-medium">Testimonials</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Customers</span> Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our valued customers about their experiences with our brand.
          </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-800/50 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="text-primary text-3xl" />
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 