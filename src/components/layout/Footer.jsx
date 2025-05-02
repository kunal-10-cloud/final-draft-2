import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-primary font-bold text-xl">LUXE</span>
              <span className="text-white font-light text-xl">SHOP</span>
            </Link>
            <p className="mb-4 text-sm">
              Discover premium products with exceptional quality. Our commitment is to provide you with a seamless shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-primary mr-3 mt-1" />
                <span>123 Fashion Street<br />Bandra West, Mumbai<br />Maharashtra 400050</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-primary mr-3" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-primary mr-3" />
                <span>support@luxeshop.in</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white text-lg font-medium mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm">Get the latest updates on new products and upcoming sales</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-dark-800 text-white px-4 py-2 rounded-l w-full md:w-64 focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LUXE SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 