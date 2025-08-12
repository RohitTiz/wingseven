import React from "react";
import { FaBars, FaEnvelope, FaBell } from "react-icons/fa";

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
          <FaBars className="text-2xl text-gray-700" />
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
          <FaEnvelope className="text-xl text-gray-500" />
        </button>
        <button className="relative">
          <FaBell className="text-xl text-gray-500" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
