import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/products';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Categories = () => {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
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
            Shop by Categories
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our curated collection of premium products across different categories
          </motion.p>
        </motion.div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link 
                to={`/categories/${category.id}`}
                className="block h-full"
              >
                <div className="bg-dark-800 rounded-2xl overflow-hidden h-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-dark-700 group-hover:border-primary/30">
                  {/* Category Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent" />
                  </div>
                  
                  {/* Category Content */}
                  <div className="p-8">
                    <motion.h2 
                      className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {category.name}
                    </motion.h2>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    
                    {/* Category Stats */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {category.productCount} Products
                      </span>
                      <span className="text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/products" 
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 group text-lg"
          >
            View All Products
            <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories; 