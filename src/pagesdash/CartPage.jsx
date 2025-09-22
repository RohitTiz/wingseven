import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';
import CartCourseCard from '../components/CartCourseCard';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});

  // Initialize selectedItems when items change
  useEffect(() => {
    const initialSelection = items.reduce((acc, item) => ({ 
      ...acc, 
      [item.id]: true 
    }), {});
    setSelectedItems(initialSelection);
  }, [items]);

  const handleCheckout = () => {
    const selectedCourses = items.filter(item => selectedItems[item.id]);
    navigate('/checkout', { state: { courses: selectedCourses } });
  };

  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const selectAllItems = () => {
    const allSelected = Object.values(selectedItems).every(val => val);
    const newSelection = items.reduce((acc, item) => ({ 
      ...acc, 
      [item.id]: !allSelected 
    }), {});
    setSelectedItems(newSelection);
  };

  // Calculate totals for selected items only
  const selectedItemsList = items.filter(item => selectedItems[item.id]);
  const subtotal = selectedItemsList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  // Dynamic CSS classes based on dark mode
  const backgroundClass = darkMode ? 'dark-bg' : 'light-bg';
  const textClass = darkMode ? 'light-text' : 'dark-text';
  const borderClass = darkMode ? 'dark-border' : 'light-border';
  const cardClass = darkMode ? 'dark-card' : 'light-card';

  if (items.length === 0) {
    return (
      <div className={`max-w-6xl mx-auto px-4 py-8 transition-colors duration-300 ${backgroundClass} ${textClass}`}>
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className={`rounded-lg shadow-sm p-8 text-center transition-colors duration-300 ${cardClass}`}>
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <h2 className={`text-xl font-medium mb-2 ${textClass}`}>Your cart is empty</h2>
          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start shopping to add items to your cart</p>
          <button
            onClick={() => navigate('/courses')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-6xl mx-auto px-4 py-8 transition-colors duration-300 ${backgroundClass} ${textClass}`}>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className={`rounded-lg shadow-sm overflow-hidden transition-colors duration-300 ${cardClass}`}>
            <div className={`p-4 border-b transition-colors duration-300 ${borderClass} flex justify-between items-center`}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={items.length > 0 && Object.values(selectedItems).every(val => val)}
                  onChange={selectAllItems}
                  className="h-4 w-4 text-blue-600 rounded mr-3"
                />
                <h2 className="text-lg font-medium">
                  Select all ({items.length} {items.length === 1 ? 'Course' : 'Courses'})
                </h2>
              </div>
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-300"
              >
                Clear cart
              </button>
            </div>
            
            <div className={`divide-y transition-colors duration-300 ${borderClass}`}>
              {items.map((item) => (
                <CartCourseCard
                  key={item.id}
                  course={item}
                  selected={selectedItems[item.id] || false}
                  onSelect={() => toggleItemSelection(item.id)}
                  onRemove={() => removeFromCart(item.id)}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <div className={`rounded-lg shadow-sm p-6 sticky top-4 transition-colors duration-300 ${cardClass}`}>
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Selected Items ({selectedItemsList.length})</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes (18%)</span>
                <span>₹{tax}</span>
              </div>
              <div className={`border-t pt-3 flex justify-between font-medium transition-colors duration-300 ${borderClass}`}>
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              disabled={selectedItemsList.length === 0}
              className={`w-full text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${
                selectedItemsList.length === 0 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              Checkout ({selectedItemsList.length})
            </button>
            
            <p className={`text-xs mt-4 text-center transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              7-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;