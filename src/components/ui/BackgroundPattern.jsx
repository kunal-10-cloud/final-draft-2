import React from 'react';
import { motion } from 'framer-motion';

const BackgroundPattern = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none ${className}`}>
      <div className="relative w-full h-full">
        {/* Vertical Lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`vline-${index}`}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${index * 5}%` }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ 
              duration: 2.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Horizontal Lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`hline-${index}`}
            className="absolute left-0 right-0 h-px bg-white"
            style={{ top: `${index * 5}%` }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 2.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Diagonal Lines */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.05) 100px,
              rgba(255, 255, 255, 0.05) 101px
            )`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Floating Circles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`circle-${index}`}
            className="absolute rounded-full bg-primary/10"
            style={{ 
              width: `${Math.random() * 150 + 50}px`, 
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            initial={{ 
              scale: 0,
              opacity: 0 
            }}
            animate={{ 
              scale: 1,
              opacity: 0.3 
            }}
            transition={{ 
              duration: 2, 
              delay: index * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern; 