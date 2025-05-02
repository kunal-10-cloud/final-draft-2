import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { ProductCard } from '../components/ui/Card';
import { products, categories } from '../data/products';

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundCategory = categories.find(c => c.id === id);
      setCategory(foundCategory);
      
      const filteredProducts = products.filter(product => product.category === id);
      setCategoryProducts(filteredProducts);
      
      setLoading(false);
    }, 500);
  }, [id]);
  
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });
  
  // Render loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Render not found state
  if (!category) {
    return (
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Category Not Found</h2>
        <p className="text-gray-300 mb-6">The category you're looking for doesn't exist or has been removed.</p>
        <Link to="/categories" className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-md inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/categories" className="text-gray-400 hover:text-white">Categories</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-200">{category.name}</span>
          </nav>
        </div>
        
        {/* Category Header */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-transparent flex flex-col justify-center p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h1>
              <p className="text-gray-300 max-w-xl">{category.description}</p>
            </div>
          </div>
        </div>
        
        {/* Sort Controls */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-300">{categoryProducts.length} Products</p>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="text-gray-300 mr-2 text-sm">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-800 text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard 
                product={product} 
              />
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-white mb-2">No products found</h3>
            <p className="text-gray-300 mb-6">There are no products in this category yet.</p>
            <Link to="/products" className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-md">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails; 