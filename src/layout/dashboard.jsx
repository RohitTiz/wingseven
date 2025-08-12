import React, { useState } from 'react';
import Navbar from '../componentsdash/navbar';
import Sidebar from '../componentsdash/sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <div className="hidden sm:block">
        <Sidebar open={true} setOpen={() => {}} />
      </div>
      {/* Sidebar modal for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative w-4/5 max-w-xs h-full bg-white shadow-xl z-50 animate-slideInLeft">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 z-50"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              &times;
            </button>
            <Sidebar open={true} setOpen={setSidebarOpen} isMobile />
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <Navbar onSidebarToggle={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 overflow-auto bg-gray-50 flex justify-center items-start">
          <div className="w-full p-1 min-h-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
