import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/"
            className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link 
            to="/products"
            className="bg-transparent border border-gray-600 hover:border-white text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Browse Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound; 