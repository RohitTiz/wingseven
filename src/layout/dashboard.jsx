import React, { useState } from 'react';
import Navbar from '../componentsdash/navbar';
import Sidebar from '../componentsdash/sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden sm:block">
        <div className="h-full border-r border-gray-200 shadow-sm bg-white">
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
          <div className="relative w-4/5 max-w-xs h-full bg-white shadow-2xl z-50 animate-slideInLeft border-r border-gray-200">
            <button
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-50"
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
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <Navbar onSidebarToggle={() => setSidebarOpen(true)} />
        </div>

        {/* Main Content Area with improved styling */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="h-full p-6 lg:p-8">
            {/* Content Container with proper spacing and styling */}
            <div className="max-w-full mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[calc(100vh-8rem)] p-6 lg:p-8">
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