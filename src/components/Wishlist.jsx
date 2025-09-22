import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Wishlist = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen py-8 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Wishlist</h1>
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <p>Your wishlisted items will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;