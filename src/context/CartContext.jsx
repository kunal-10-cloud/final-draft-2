import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, quantity, color, size } = action.payload;
      
      // For membership products, we only allow one of each type
      if (product.isMembership) {
        // Check if this membership is already in the cart
        const existingMembership = state.items.find(
          item => item.id === product.id && item.isMembership
        );
        
        if (existingMembership) {
          // Membership already exists in cart, don't duplicate
          return state;
        }
        
        // Add new membership item
        const newItem = {
          ...product,
          quantity: 1 // Always 1 for membership
        };
        
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price,
        };
      }
      
      // Handle regular products
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id && item.color === color && item.size === size
      );
      
      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + quantity,
          totalPrice: state.totalPrice + (product.price * quantity),
        };
      } else {
        // Add new item
        const newItem = {
          ...product,
          quantity: quantity,
          color: color || (product.colors ? product.colors[0] : ''),
          size: size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : ''),
        };
        
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + quantity,
          totalPrice: state.totalPrice + (product.price * quantity),
        };
      }
    }
    
    case REMOVE_FROM_CART: {
      const { id, color, size } = action.payload;
      
      // For membership products, we only need to match by ID
      const isMembershipItem = state.items.find(item => item.id === id && item.isMembership);
      
      const itemToRemove = isMembershipItem || state.items.find(
        item => item.id === id && item.color === color && item.size === size
      );
      
      if (!itemToRemove) return state;
      
      let updatedItems;
      if (isMembershipItem) {
        updatedItems = state.items.filter(item => !(item.id === id && item.isMembership));
      } else {
        updatedItems = state.items.filter(
          item => !(item.id === id && item.color === color && item.size === size)
        );
      }
      
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
    }
    
    case UPDATE_QUANTITY: {
      const { id, color, size, quantity } = action.payload;
      
      // Find the item - handle both membership and regular products
      const isMembershipItem = state.items.find(item => item.id === id && item.isMembership);
      
      let existingItemIndex;
      if (isMembershipItem) {
        // Membership quantity cannot be changed - always 1
        return state;
      } else {
        existingItemIndex = state.items.findIndex(
          item => item.id === id && item.color === color && item.size === size
        );
      }
      
      if (existingItemIndex === -1) return state;
      
      const item = state.items[existingItemIndex];
      const quantityDifference = quantity - item.quantity;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        const updatedItems = state.items.filter(
          item => !(item.id === id && item.color === color && item.size === size)
        );
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - (item.price * item.quantity),
        };
      } else {
        // Update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...item,
          quantity: quantity,
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + quantityDifference,
          totalPrice: state.totalPrice + (item.price * quantityDifference),
        };
      }
    }
    
    case CLEAR_CART:
      return initialState;
      
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage if available
  const loadCartFromStorage = () => {
    if (typeof window === 'undefined') return initialState;
    
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : initialState;
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return initialState;
    }
  };
  
  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
  
  // Action creators
  const addToCart = (product, quantity = 1, color, size) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { product, quantity, color, size },
    });
  };
  
  const removeFromCart = (id, color, size) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { id, color, size },
    });
  };
  
  const updateQuantity = (id, quantity, color, size) => {
    dispatch({
      type: UPDATE_QUANTITY,
      payload: { id, quantity, color, size },
    });
  };
  
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  
  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 