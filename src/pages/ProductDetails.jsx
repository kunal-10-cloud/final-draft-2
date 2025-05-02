import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      
      if (foundProduct) {
        setSelectedColor(foundProduct.colors[0] || '');
        setSelectedSize(foundProduct.sizes[0] || '');
      }
      
      setLoading(false);
    }, 500);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedColor, selectedSize);
    }
  };
  
  // Render loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Render not found state
  if (!product) {
    return (
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
        <p className="text-gray-300 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-md inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Products
        </Link>
      </div>
    );
  }
  
  // Render product details
  const { name, price, description, image, colors, sizes, rating, reviews } = product;
  
  // Generate rating stars
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-200">{name}</span>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-800 rounded-lg overflow-hidden">
              <img src={image} alt={name} className="w-full object-cover" style={{ maxHeight: '600px' }} />
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-4">{name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderRatingStars(rating)}
              </div>
              <span className="text-gray-300">({reviews} reviews)</span>
            </div>
            
            {/* Price */}
            <p className="text-2xl font-bold text-white mb-6">${price.toFixed(2)}</p>
            
            {/* Description */}
            <p className="text-gray-300 mb-6">{description}</p>
            
            {/* Color Selection */}
            {colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-200 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 border rounded-md text-sm ${
                        selectedColor === color
                          ? 'border-primary text-primary'
                          : 'border-gray-600 text-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-200 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-10 flex items-center justify-center border rounded-md text-sm ${
                        selectedSize === size
                          ? 'border-primary text-primary'
                          : 'border-gray-600 text-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-200 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border border-gray-600 text-white w-10 h-10 flex items-center justify-center rounded-l-md hover:bg-dark-700"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 bg-dark-800 border-t border-b border-gray-600 text-center text-white"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-600 text-white w-10 h-10 flex items-center justify-center rounded-r-md hover:bg-dark-700"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 w-full sm:w-auto"
                size="lg"
              >
                <FaShoppingCart /> Add to Cart
              </Button>
              
              <Button 
                variant="secondary"
                className="w-full sm:w-auto"
                size="lg"
              >
                Buy Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 