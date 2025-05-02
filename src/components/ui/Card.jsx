import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  ...props 
}) => {
  const baseClasses = 'bg-dark-800 rounded-lg shadow-md overflow-hidden';
  const hoverClasses = hoverable ? 'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

export const ProductCard = ({ 
  product, 
  className = '' 
}) => {
  const { id, name, price, image, description, rating, reviews } = product;
  const [isWishlist, setIsWishlist] = React.useState(false);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);
  
  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Select first color and size if available
    const color = product.colors && product.colors.length > 0 ? product.colors[0] : '';
    const size = product.sizes && product.sizes.length > 0 ? product.sizes[0] : '';
    
    addToCart(product, 1, color, size);
    
    // Show feedback
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
  };

  const handleImageError = () => {
    setImgError(true);
  };
  
  return (
    <div className="relative aspect-square w-full">
      <Link to={`/products/${id}`} className="block h-full">
        <Card 
          hoverable 
          className={`h-full flex flex-col ${className} group transform transition-all duration-300 hover:-translate-y-1`}
          data-product-id={id}
        >
          <div className="relative overflow-hidden flex-shrink-0" style={{ height: '60%' }}>
            {/* Badge for sale or new items */}
            {product.featured && (
              <div className="absolute top-0 left-0 m-3 z-10">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-md font-medium">
                  Featured
                </span>
              </div>
            )}
            
            {/* Wishlist button */}
            <button 
              onClick={toggleWishlist}
              className="absolute top-0 right-0 m-3 bg-dark-800/70 backdrop-blur-sm p-2 rounded-full z-10 transition-all duration-300 hover:bg-primary"
              aria-label={isWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              {isWishlist ? 
                <FaHeart className="h-4 w-4 text-primary" /> : 
                <FaRegHeart className="h-4 w-4 text-white" />
              }
            </button>
            
            <div className="h-full bg-dark-700">
              <img 
                src={imgError ? "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" : image} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Quick add to cart button appears here, outside of the image div */}
          <div className="absolute w-full px-4 bottom-[40%] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary-600 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2"
            >
              <FaShoppingCart className="h-4 w-4" />
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
          
          <div className="p-3 flex flex-col flex-grow z-0">
            {/* Rating */}
            <div className="flex items-center mb-1">
              <div className="flex text-yellow-400 mr-1">
                <FaStar className="h-3 w-3" />
                <span className="ml-1 text-xs text-gray-300">{rating} ({reviews})</span>
              </div>
            </div>
            
            <h3 className="text-md font-medium text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">{name}</h3>
            <p className="mt-1 text-xs text-gray-400 line-clamp-1 flex-grow">{description}</p>
            <div className="mt-2">
              <p className="text-lg font-semibold text-white">${price.toFixed(2)}</p>
            </div>
          </div>
        </Card>
      </Link>

      {/* Feedback toast */}
      {addedToCart && (
        <div className="absolute top-0 left-0 right-0 mx-auto text-center animate-fade-in-out">
          <div className="inline-block bg-primary text-white text-sm font-medium py-1 px-3 rounded-md shadow-lg">
            Added to cart!
          </div>
        </div>
      )}
    </div>
  );
}; 