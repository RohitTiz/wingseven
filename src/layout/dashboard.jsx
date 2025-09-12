import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import Navbar from '../componentsdash/navbar';
import Sidebar from '../componentsdash/sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true); // Desktop sidebar state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // Mobile sidebar state
  const { darkMode } = useDarkMode();

  const toggleDesktopSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className={`flex h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block flex-shrink-0">
        <Sidebar 
          isVisible={sidebarVisible} 
          onToggle={toggleDesktopSidebar}
          isMobile={false}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar 
          isVisible={mobileSidebarOpen} 
          onToggle={toggleMobileSidebar}
          isMobile={true}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <div className={`border-b shadow-sm transition-colors duration-300 flex-shrink-0 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <Navbar onSidebarToggle={toggleMobileSidebar} />
        </div>

        {/* Main Content */}
        <main className={`flex-1 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
        }`}>
          <div className="h-full p-4 lg:p-6">
            <div className="max-w-full mx-auto h-full">
              <div className={`rounded-xl shadow-sm border transition-colors duration-300 h-full p-4 lg:p-6 overflow-auto ${
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