import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '../../context/CartContext';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-dark text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout; 