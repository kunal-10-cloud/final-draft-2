import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/products';

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Browse our collection of products across different categories
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={`/categories/${category.id}`}
                className="block h-full"
              >
                <div className="bg-dark-800 rounded-lg overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative pb-[70%] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{category.productCount} Products</span>
                      <span className="text-primary font-medium">Shop Now →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 