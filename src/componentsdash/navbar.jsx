import React from "react";

const Navbar = ({ onSidebarToggle }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b h-16">
      {/* Breadcrumb and sidebar toggle */}
      <div className="flex items-center gap-2">
        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden p-2 rounded-full hover:bg-gray-100 transition mr-2"
          onClick={onSidebarToggle}
          aria-label="Open sidebar"
        >
          <svg
            className="w-6 h-6 text-gray-700"
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
        <nav className="flex items-center text-gray-400 text-sm gap-1">
          <span className="flex items-center gap-1 text-gray-500">
            Courses
          </span>
          <span>/</span>
          <span>UIUX Design</span>
          <span>/</span>
          <span className="text-gray-500">Figma from A to Z</span>
        </nav>
      </div>
      {/* Right icons */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
        <button className="relative">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;