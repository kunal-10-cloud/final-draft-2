import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaTruck, FaStar, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary/20" />
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-primary font-medium">🎉 Premium Fashion</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Exclusive</span> Style
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience luxury fashion curated for the modern individual. Premium quality, sustainable materials, and timeless designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                >
                  Explore Collection
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-dark-800 text-white rounded-lg font-medium border border-gray-700 hover:border-primary/50 transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-dark-800/50 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaShoppingBag className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">10K+</h3>
                    <p className="text-gray-400">Premium Products</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-dark-800/50 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaGlobe className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">50+</h3>
                    <p className="text-gray-400">Countries</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-dark-800/50 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaHeart className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">98%</h3>
                    <p className="text-gray-400">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Modern Fashion Store"
              className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500 w-full max-w-xl mx-auto h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 