import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import Navbar from '../componentsdash/navbar';
import Sidebar from '../componentsdash/sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode } = useDarkMode();

  // CSS classes based on dark mode
  const bgClass = darkMode ? 'dark-bg' : 'light-bg';
  const textClass = darkMode ? 'light-text' : 'dark-text';
  const borderClass = darkMode ? 'dark-border' : 'light-border';
  const cardClass = darkMode ? 'dark-card' : 'light-card';

  return (
    <div className={`flex h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Sidebar for desktop */}
      <div className="hidden sm:block">
        <div className={`h-full border-r transition-colors duration-300 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <Sidebar open={true} setOpen={() => {}} />
        </div>
      </div>

      {/* Sidebar modal for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className={`relative w-4/5 max-w-xs h-full shadow-2xl z-50 animate-slideInLeft border-r transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <button
              className={`absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 z-50 ${
                darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Sidebar open={true} setOpen={setSidebarOpen} isMobile />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Enhanced Navbar with shadow and better styling */}
        <div className={`border-b shadow-sm transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <Navbar onSidebarToggle={() => setSidebarOpen(true)} />
        </div>

        {/* Main Content Area with improved styling */}
        <main className={`flex-1 overflow-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
          <div className="h-full p-6 lg:p-8">
            {/* Content Container with proper spacing and styling */}
            <div className="max-w-full mx-auto">
              <div className={`rounded-xl shadow-sm border transition-colors duration-300 min-h-[calc(100vh-8rem)] p-6 lg:p-8 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;