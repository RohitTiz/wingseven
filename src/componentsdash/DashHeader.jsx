// componentsdash/DashHeader.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const DashHeader = ({ showActions, courseTitle, customAction }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className={`${darkMode ? 'dark-bg dark-border' : 'bg-white light-border'} shadow-sm border-b transition-colors duration-300`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left Side - Back Arrow + Course Info */}
        <div className="flex items-start w-full md:w-auto">
          {/* Back Arrow - Plain, no box */}
          <button 
            onClick={handleBackClick}
            className="transition-colors hover:opacity-70 mt-1 md:mt-0 mr-3 md:mr-4 flex-shrink-0"
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
          <div className="flex-1 min-w-0">
            {/* Title and Badge */}
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 mb-2">
              <h1 className={`text-xl md:text-2xl font-bold transition-all duration-300 hover:text-purple-600 truncate ${darkMode ? 'text-white hover:text-purple-400' : 'text-black'}`}>
                {courseTitle || "Figma from A to Z"}
              </h1>
              <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 self-start md:self-auto ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}>
                UI/UX Design
              </span>
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <polygon 
                    points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
                    fill="#FFD700"
                    stroke="none"
                  />
                </svg>
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  4.6
                </span>
                <span className={`hidden xs:inline ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  (1020 reviews)
                </span>
              </div>
              
              {/* Lessons */}
              <div className="flex items-center space-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke={darkMode ? '#9CA3AF' : '#6B7280'} strokeWidth="2" fill="none"/>
                  <path d="M7 8h10M7 12h10M7 16h6" stroke={darkMode ? '#9CA3AF' : '#6B7280'} strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  34 lessons
                </span>
              </div>
              
              {/* Duration */}
              <div className="flex items-center space-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
          <div className="flex items-center justify-end md:justify-start space-x-2 md:space-x-3 actions-container mt-3 md:mt-0 w-full md:w-auto">
            {customAction || (
              <>
                {/* Default buttons if no customAction provided */}
                <button className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-md border transition-colors ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Share
                </button>

                {/* Brochure Button - More elegant and professional */}
                <button className={`px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium rounded-md transition-all duration-200 ${
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