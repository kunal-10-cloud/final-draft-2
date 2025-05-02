import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaUser, FaBars, FaTimes, FaCrown } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-dark-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">LUXE</span>
              <span className="text-white font-light text-xl">SHOP</span>
            </Link>
            
            <div className="hidden md:flex md:ml-6 space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-primary">Home</Link>
              <Link to="/products" className="px-3 py-2 text-sm font-medium hover:text-primary">Products</Link>
              <Link to="/categories" className="px-3 py-2 text-sm font-medium hover:text-primary">Categories</Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium hover:text-primary">About</Link>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:text-primary">Contact</Link>
            </div>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/membership" className="flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 transition-all duration-300">
              <FaCrown className="h-4 w-4 mr-1.5" />
              <span className="text-sm font-medium">Become a Member</span>
            </Link>
            
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-dark-800 focus:outline-none"
              aria-label="Search"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            
            <Link to="/account" className="p-2 rounded-full hover:bg-dark-800">
              <FaUser className="h-5 w-5" />
            </Link>
            
            <Link to="/cart" className="p-2 rounded-full hover:bg-dark-800 relative">
              <FaShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-0.5 text-xs font-bold rounded-full bg-primary text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link to="/cart" className="p-2 rounded-full hover:bg-dark-800 relative">
              <FaShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-0.5 text-xs font-bold rounded-full bg-primary text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-dark-800 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium hover:bg-dark-700 rounded-md">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-base font-medium hover:bg-dark-700 rounded-md">Products</Link>
            <Link to="/categories" className="block px-3 py-2 text-base font-medium hover:bg-dark-700 rounded-md">Categories</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium hover:bg-dark-700 rounded-md">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium hover:bg-dark-700 rounded-md">Contact</Link>
            <Link to="/account" className="block px-3 py-2 text-base font-medium hover:bg-dark-700 rounded-md">Account</Link>
            <Link to="/membership" className="flex items-center px-3 py-2 text-base font-medium bg-gradient-to-r from-primary to-purple-600 rounded-md">
              <FaCrown className="h-4 w-4 mr-1.5" />
              <span>Become a Member</span>
            </Link>
          </div>
        </div>
      )}
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full z-10 bg-dark-900 p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 p-2 bg-dark-800 text-white border-none rounded-l focus:outline-none"
              autoFocus
            />
            <button className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-r">
              <FaSearch className="h-5 w-5" />
            </button>
            <button 
              onClick={toggleSearch}
              className="ml-4 p-2 rounded-full hover:bg-dark-700"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 