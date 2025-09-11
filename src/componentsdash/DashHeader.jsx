// componentsdash/DashHeader.jsx
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const DashHeader = ({ showActions, courseTitle }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark-bg dark-border' : 'bg-white light-border'} shadow-sm border-b p-4 transition-colors duration-300`}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-xl font-semibold ${darkMode ? 'light-text' : 'text-gray-800'}`}>
            {courseTitle || "My Dashboard"}
          </h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Welcome back! Here's your progress.
          </p>
        </div>
        
        {showActions && (
          <div className="flex space-x-3">
            <button className={`px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors ${
              darkMode ? 'hover:bg-purple-500' : ''
            }`}>
              Download Resources
            </button>
            <button className={`px-4 py-2 border border-purple-600 rounded-lg text-sm font-medium transition-colors ${
              darkMode 
                ? 'text-purple-400 hover:bg-purple-900' 
                : 'text-purple-600 hover:bg-purple-50'
            }`}>
              Ask Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashHeader;