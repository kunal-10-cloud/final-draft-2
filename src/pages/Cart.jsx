import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart, FaCrown, FaCheck } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, totalPrice: subtotal, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Apply discount if promo code is applied
  const discount = promoApplied ? subtotal * 0.1 : 0;
  
  // Calculate shipping (free for orders over $100)
  const shipping = subtotal > 100 ? 0 : 9.99;
  
  // Calculate total
  const total = subtotal - discount + shipping;
  
  // Handle quantity change
  const handleQuantityChange = (id, newQuantity, color, size) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity, color, size);
  };
  
  // Handle remove item
  const handleRemoveItem = (id, color, size) => {
    removeFromCart(id, color, size);
  };
  
  // Handle apply promo code
  const handleApplyPromo = () => {
    // Simulate promo code validation
    if (promoCode.toLowerCase() === 'save10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };
  
  // Separate membership and regular products
  const membershipItems = cart.filter(item => item.isMembership);
  const regularItems = cart.filter(item => !item.isMembership);
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-dark-800 rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left pb-4 font-medium text-gray-300">Product</th>
                        <th className="text-center pb-4 font-medium text-gray-300">Quantity</th>
                        <th className="text-right pb-4 font-medium text-gray-300">Price</th>
                        <th className="text-right pb-4 font-medium text-gray-300">Total</th>
                        <th className="pb-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {regularItems.map(item => (
                        <tr key={`${item.id}-${item.color}-${item.size}`} className="border-b border-gray-700 last:border-b-0">
                          <td className="py-4">
                            <div className="flex items-center">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-16 h-16 object-cover rounded mr-4" 
                              />
                              <div>
                                <h3 className="text-white font-medium">
                                  <Link to={`/products/${item.id}`} className="hover:text-primary">
                                    {item.name}
                                  </Link>
                                </h3>
                                <div className="text-sm text-gray-400 mt-1">
                                  {item.color && `Color: ${item.color}`}
                                  {item.color && item.size && ' / '}
                                  {item.size && `Size: ${item.size}`}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.color, item.size)}
                                className="border border-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-l-md hover:bg-dark-700"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value), item.color, item.size)}
                                className="w-12 h-8 bg-dark-800 border-t border-b border-gray-600 text-center text-white"
                              />
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.color, item.size)}
                                className="border border-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-r-md hover:bg-dark-700"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 text-right text-white">${item.price.toFixed(2)}</td>
                          <td className="py-4 text-right font-medium text-white">${(item.price * item.quantity).toFixed(2)}</td>
                          <td className="py-4 text-right">
                            <button
                              onClick={() => handleRemoveItem(item.id, item.color, item.size)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="Remove item"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Membership Items */}
              {membershipItems.length > 0 && (
                <div className="bg-dark-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="flex items-center text-xl font-bold text-white mb-4">
                      <FaCrown className="text-primary mr-2" />
                      Membership
                    </h2>
                    
                    {membershipItems.map(item => (
                      <div key={item.id} className="border border-gray-700 rounded-lg p-4 mb-4 last:mb-0">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-r from-primary to-purple-600 p-3 rounded-lg mr-4">
                              <FaCrown className="text-white h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium text-lg">{item.name}</h3>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-white font-medium mr-6">${item.price.toFixed(2)}/month</span>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="Remove membership"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                        
                        <div className="pl-14">
                          <h4 className="text-gray-300 text-sm mb-2">Membership benefits:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.features && item.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <FaCheck className="text-green-500 h-3 w-3 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-primary mt-2">
                            <Link to="/membership" className="hover:underline">View all membership details</Link>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-dark-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Subtotal</span>
                      <span className="text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {membershipItems.length > 0 && (
                      <div className="flex justify-between text-primary">
                        <span>Membership</span>
                        <span>${membershipItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}/month</span>
                      </div>
                    )}
                    
                    {promoApplied && (
                      <div className="flex justify-between text-green-500">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Shipping</span>
                      <span className="text-white">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-primary text-xl">${total.toFixed(2)}</span>
                      </div>
                      
                      {membershipItems.length > 0 && (
                        <div className="flex justify-between text-sm mt-1 text-gray-400">
                          <span>Monthly subscription:</span>
                          <span>${membershipItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}/month</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label htmlFor="promo" className="block text-sm font-medium text-gray-300 mb-2">
                      Promo Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                        placeholder="Enter promo code"
                        className="flex-grow bg-dark-700 text-white border border-gray-600 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button
                        onClick={handleApplyPromo}
                        disabled={promoApplied || !promoCode}
                        className={`bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-r-md transition-colors ${
                          promoApplied || !promoCode ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="mt-2 text-sm text-green-500">Promo code applied successfully!</p>
                    )}
                  </div>
                  
                  {/* Checkout Button */}
                  <Button 
                    variant="primary" 
                    className="w-full mb-3"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <Link 
                    to="/products" 
                    className="flex items-center justify-center text-gray-300 hover:text-white"
                  >
                    <FaArrowLeft className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-gray-400 mb-6">
              <FaShoppingCart className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-medium text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-300 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/products" 
              className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 