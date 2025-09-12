import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { useDarkMode } from '../context/DarkModeContext';

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { label: "Study Materials", icon: BookIcon, path: "/dashboard/study-materials" },
  { label: "Courses", icon: CoursesIcon, path: "/dashboard/courses" },
  { label: "Code Challenges", icon: CodeIcon, path: "/dashboard/questions" },
];

const Sidebar = ({ isVisible, onToggle, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { darkMode } = useDarkMode();
  const [currentProfile, setCurrentProfile] = useState(profile);

  // Update local state when profile changes
  useEffect(() => {
    setCurrentProfile(profile);
  }, [profile]);

  // Listen for profile updates
  useEffect(() => {
    const handleProfileUpdate = () => {
      const savedProfile = localStorage.getItem('userProfile');
      if (savedProfile) {
        setCurrentProfile(JSON.parse(savedProfile));
      }
    };

    window.addEventListener('profileUpdated', handleProfileUpdate);
    window.addEventListener('storage', handleProfileUpdate);
    
    return () => {
      window.removeEventListener('profileUpdated', handleProfileUpdate);
      window.removeEventListener('storage', handleProfileUpdate);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) onToggle();
  };

  const handleLogoClick = () => {
    navigate("/");
    if (isMobile) onToggle();
  };

  const handleProfileClick = () => {
    navigate("/dashboard/edit-profile");
    if (isMobile) onToggle();
  };

  // Dynamic classes based on dark mode
  const bgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-200' : 'text-gray-700';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  if (!isVisible && !isMobile) {
    return (
      <div className="relative">
        {/* Toggle button when sidebar is hidden */}
        <button
          onClick={onToggle}
          className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 rounded-full shadow-lg border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
          aria-label="Show sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onToggle}
        />
      )}
      
      <div
        className={`flex flex-col h-full shadow-lg border-r transition-all duration-300 ${borderClass} ${bgClass} ${
          isMobile 
            ? `fixed top-0 left-0 z-50 transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`
            : "relative"
        }`}
        style={{
          width: '276px', // Reduced by 4px to account for padding
          height: isMobile ? 'calc(100vh - 4px)' : 'calc(100% - 4px)', // Account for padding
          maxWidth: isMobile ? '85vw' : 'none'
        }}
      >
        {/* Toggle Button for Desktop */}
        {!isMobile && (
          <button
            onClick={onToggle}
            className={`absolute -right-3 top-6 w-6 h-6 rounded-full shadow-md border flex items-center justify-center z-50 transition-all duration-200 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
            aria-label="Hide sidebar"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Mobile close button */}
        {isMobile && (
          <button
            onClick={onToggle}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-50 transition-colors duration-200 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Content Container - Adjusted for padding */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo Section */}
          <div className={`px-5 py-5 border-b ${borderClass}`}>
            <div 
              className="flex items-center gap-3 cursor-pointer group transition-transform duration-200 hover:scale-105"
              onClick={handleLogoClick}
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl w-11 h-11 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 flex-shrink-0">
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Code Brain
                </span>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Learning Platform
                </span>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className={`px-5 py-3 border-b ${borderClass}`}>
            <div 
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}
              onClick={handleProfileClick}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={currentProfile.profileImage}
                  alt="Profile"
                  className={`w-11 h-11 rounded-full object-cover border-2 transition-all duration-200 ${
                    darkMode 
                      ? 'border-gray-700 group-hover:border-purple-500' 
                      : 'border-gray-100 group-hover:border-purple-300'
                  }`}
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0QxRDFEMSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjIxIDAgNCAxLjc5IDQgNHMtMS43OSA0LTQgNC00LTEuNzktNC00IDEuNzktNCA0LTR6bTAgMTcuMDJjLTMuMzMgMC02LjI4LTEuNzEtOC02LjAyIDIuMDUtMy4xNiA1LjI2LTUgOC41OC01IDMuMzIgMCA2LjUzIDEuODQgOC41OCA1LTIuMDUgMy4zMS01LjI2IDUuMDItOC41OCA1LjAyeiIvPjwvc3ZnPg==";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentProfile.name || "User"}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Student
                </p>
              </div>
              <div className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${
                darkMode 
                  ? 'bg-purple-900 text-purple-300 group-hover:bg-purple-800' 
                  : 'bg-purple-100 text-purple-700 group-hover:bg-purple-200'
              }`}>
                Edit
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-3 py-5 overflow-y-auto">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
                      isActive 
                        ? `${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-50 text-purple-700'} shadow-sm` 
                        : `${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                    }`}
                    onClick={handleMenuClick}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-2 bottom-2 w-1 bg-purple-500 rounded-r-full"></div>
                    )}
                    
                    <div className={`p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                      isActive 
                        ? `${darkMode ? 'bg-purple-800' : 'bg-purple-100'}` 
                        : `${darkMode ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100'}`
                    }`}>
                      <IconComponent active={isActive} darkMode={darkMode} />
                    </div>
                    
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Settings and Support Items */}
          <div className={`px-3 py-3 border-t space-y-1 ${borderClass}`}>
            <div
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group ${
                darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={handleMenuClick}
            >
              <div className={`p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                darkMode ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100'
              }`}>
                <SettingsIcon darkMode={darkMode} />
              </div>
              <span className="text-sm font-medium">Settings</span>
            </div>
            
            <div
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group ${
                darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={handleMenuClick}
            >
              <div className={`p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                darkMode ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100'
              }`}>
                <SupportIcon darkMode={darkMode} />
              </div>
              <span className="text-sm font-medium">Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ==== ICONS ==== */
function DashboardIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "currentColor");
  return (
    <svg className="w-5 h-5" fill={color} viewBox="0 0 24 24">
      <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9 0h7v7h-7v-7zm0-9h7v7h-7V4z"/>
    </svg>
  );
}

function BookIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "currentColor");
  return (
    <svg className="w-5 h-5" fill={color} viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  );
}

function CoursesIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "currentColor");
  return (
    <svg className="w-5 h-5" fill={color} viewBox="0 0 24 24">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  );
}

function CodeIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "currentColor");
  return (
    <svg className="w-5 h-5" fill={color} viewBox="0 0 24 24">
      <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
    </svg>
  );
}

function SettingsIcon({ darkMode }) {
  const color = darkMode ? "#D1D5DB" : "currentColor";
  return (
    <svg className="w-5 h-5" fill={color} viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  );
}

function SupportIcon({ darkMode }) {
  const color = darkMode ? "#D1D5DB" : "currentColor";
  return (
    <svg className="w-5 h-5" fill={color} viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
    </svg>
  );
}

export default Sidebar;