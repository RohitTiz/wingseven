// componentsdash/DashHeader.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const DashHeader = ({ showActions, courseTitle, customAction }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className={`${darkMode ? 'dark-bg dark-border' : 'bg-white light-border'} shadow-sm border-b transition-colors duration-300`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Side - Back Arrow + Course Info */}
        <div className="flex items-center space-x-4">
          {/* Back Arrow - Plain, no box */}
          <button 
            onClick={handleBackClick}
            className="transition-colors hover:opacity-70"
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M15 18L9 12L15 6" 
                stroke={darkMode ? '#ffffff' : '#000000'} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Course Info */}
          <div>
            {/* Title and Badge */}
            <div className="flex items-center space-x-3 mb-2">
              <h1 className={`text-2xl font-bold transition-all duration-300 hover:text-purple-600 ${darkMode ? 'text-white hover:text-purple-400' : 'text-black'}`}>
                {courseTitle || "Figma from A to Z"}
              </h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}>
                UI/UX Design
              </span>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-center space-x-6 text-sm">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polygon 
                    points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
                    fill="#FFD700"
                    stroke="none"
                  />
                </svg>
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  4.6
                </span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  (1020 reviews)
                </span>
              </div>
              
              {/* Lessons */}
              <div className="flex items-center space-x-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke={darkMode ? '#9CA3AF' : '#6B7280'} strokeWidth="2" fill="none"/>
                  <path d="M7 8h10M7 12h10M7 16h6" stroke={darkMode ? '#9CA3AF' : '#6B7280'} strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  34 lessons
                </span>
              </div>
              
              {/* Duration */}
              <div className="flex items-center space-x-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke={darkMode ? '#9CA3AF' : '#6B7280'} strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke={darkMode ? '#9CA3AF' : '#6B7280'} strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  2h 30min
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Action Buttons */}
        {showActions && (
          <div className="flex items-center space-x-3 actions-container">
            {customAction || (
              <>
                {/* Default buttons if no customAction provided */}
                <button className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Share
                </button>

                {/* Brochure Button - More elegant and professional */}
                <button className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  darkMode 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5'
                }`}>
                  Brochure
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashHeader;