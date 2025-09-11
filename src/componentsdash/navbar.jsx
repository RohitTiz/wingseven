// componentsdash/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = ({ onSidebarToggle }) => {
  const navigate = useNavigate();
  const { getCartItemsCount } = useCart();
  const [notifications, setNotifications] = useState(5);
  const cartItems = getCartItemsCount();
  const { darkMode } = useDarkMode();

  const handleCartClick = () => {
    navigate('/dashboard/cart');
  };

  return (
    <header className={`flex items-center justify-between px-3 py-2 border-b h-14 sm:h-16 sm:px-6 md:px-8 lg:px-10 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-700 text-gray-100' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      {/* Breadcrumb and sidebar toggle */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {/* Hamburger icon for mobile */}
        <button
          className={`p-2 rounded-full transition sm:hidden ${
            darkMode 
              ? 'hover:bg-gray-800 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-700'
          }`}
          onClick={onSidebarToggle}
          aria-label="Open sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        {/* Breadcrumb - responsive text handling */}
        <nav className={`flex items-center text-xs sm:text-sm gap-1 flex-nowrap overflow-hidden ${
          darkMode ? 'text-gray-400' : 'text-gray-400'
        }`}>
          <span className={`whitespace-nowrap truncate ${
            darkMode ? 'text-gray-300' : 'text-gray-500'
          }`}>
            Courses
          </span>
          <span className="hidden xs:inline">/</span>
          <span className="hidden xs:inline whitespace-nowrap truncate">UIUX Design</span>
          <span className="xs:hidden whitespace-nowrap">...</span>
          <span className="hidden xs:inline">/</span>
          <span className={`whitespace-nowrap truncate ${
            darkMode ? 'text-gray-300' : 'text-gray-500'
          }`}>
            Figma from A to Z
          </span>
        </nav>
      </div>
      
      {/* Right icons with cart and notification */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-shrink-0">
        {/* Cart icon with badge */}
        <button 
          onClick={handleCartClick}
          className={`relative p-2 group rounded-full transition-colors ${
            darkMode 
              ? 'hover:bg-gray-800' 
              : 'hover:bg-gray-100'
          }`}
        >
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
              darkMode 
                ? 'text-gray-400 group-hover:text-blue-400' 
                : 'text-gray-500 group-hover:text-blue-600'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
              {cartItems}
            </span>
          )}
        </button>
        
        {/* Notification icon with badge */}
        <button className={`relative p-2 group rounded-full transition-colors ${
          darkMode 
            ? 'hover:bg-gray-800' 
            : 'hover:bg-gray-100'
        }`}>
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
              darkMode 
                ? 'text-gray-400 group-hover:text-blue-400' 
                : 'text-gray-500 group-hover:text-blue-600'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
        
        {/* User profile (visible on larger screens) */}
        <div className={`hidden md:flex items-center ml-2 cursor-pointer p-1 rounded-lg transition-colors ${
          darkMode 
            ? 'hover:bg-gray-800' 
            : 'hover:bg-gray-100'
        }`}>
          {/* User profile content would go here */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;