import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/products';
import { ProductCard } from './Card';
import { FaArrowRight } from 'react-icons/fa';
import BackgroundPattern from './BackgroundPattern';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimerRef = useRef(null);
  const autoplayDelay = 5000; // 5 seconds
  
  // Manage autoplay timer
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        nextProduct();
      }, autoplayDelay);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, activeIndex]);
  
  const nextProduct = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevProduct = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and subtitle with staggered animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our handpicked selection of premium products
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Products Grid with AnimatePresence for smooth transitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: index === activeIndex ? 1.05 : 1,
                    zIndex: index === activeIndex ? 10 : 0
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                  style={{ 
                    display: (index >= activeIndex && index < activeIndex + 4) ||
                            (activeIndex + 4 > featuredProducts.length && 
                             index < (activeIndex + 4) % featuredProducts.length)
                            ? "block" : "none"
                  }}
                  className={`transform transition-all duration-500`}
                >
                  <ProductCard 
                    product={product}
                    className="h-[400px]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Product dots indicators */}
        <div className="flex justify-center mt-20 gap-3">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-12 bg-primary' : 'w-4 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/products" 
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 group text-lg"
          >
            View All Products
            <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 