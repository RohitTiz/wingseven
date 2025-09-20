import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { useDarkMode } from '../context/DarkModeContext';

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { label: "Study Materials", icon: BookIcon, path: "/dashboard/study-materials" },
  { label: "Courses", icon: CoursesIcon, path: "/dashboard/courses" },
  { label: "Code Challenges", icon: CodeIcon, path: "/dashboard/questions" },
  { label: "Payment History", icon: PaymentIcon, path: "/dashboard/payment-history" },
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

  // Sign out function
  const handleSignOut = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    
    // Redirect to home page
    navigate("/");
    
    // Close sidebar if on mobile
    if (isMobile) onToggle();
    
    // Dispatch event to notify other components
    window.dispatchEvent(new Event('userSignedOut'));
  };

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
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-white';
  const textClass = darkMode ? 'text-gray-200' : 'text-gray-700';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';
  const hoverBgClass = darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50';
  // Enhanced shadow for floating effect
  const shadowClass = darkMode 
    ? 'shadow-[0_0_25px_rgba(0,0,0,0.5)]' 
    : 'shadow-[0_0_25px_rgba(0,0,0,0.15)]';

  if (!isVisible && !isMobile) {
    return (
      <div className="relative">
        {/* Toggle button when sidebar is hidden */}
        <button
          onClick={onToggle}
          className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 rounded-full shadow-lg border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800' 
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
        className={`flex flex-col h-full border-r transition-all duration-300 ${borderClass} ${bgClass} ${shadowClass} ${
          isMobile 
            ? `fixed top-0 left-0 z-50 transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`
            : "relative"
        }`}
        style={{
          width: '280px',
          height: isMobile ? '100vh' : '100%',
          maxWidth: isMobile ? '85vw' : 'none',
          borderRadius: isMobile ? '0 12px 12px 0' : '0'
        }}
      >
        {/* Toggle Button for Desktop */}
        {!isMobile && (
          <button
            onClick={onToggle}
            className={`absolute -right-3 top-6 w-6 h-6 rounded-full shadow-md border flex items-center justify-center z-50 transition-all duration-200 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800' 
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
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Content Container */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo Section - Reduced size by 20% and centered */}
          <div className="px-1 py-4 flex justify-center">
            <div 
              className="flex items-center justify-center cursor-pointer group transition-transform duration-200 hover:scale-105"
              onClick={handleLogoClick}
            >
              <img 
                src="/image/mainlogo.png" 
                alt="Code Brain Logo" 
                className={`object-contain ${darkMode ? 'filter brightness-0 invert' : ''}`}
                style={{ width: '250px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Profile Section - Fixed width to match navigation items */}
          <div className="px-3 py-4">
            <div 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={handleProfileClick}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={currentProfile.profileImage}
                  alt="Profile"
                  className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-200 ${
                    darkMode 
                      ? 'border-gray-700' 
                      : 'border-gray-100'
                  }`}
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0QxRDFEMSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjIxIDAgNCA1Ljc5IDQgNHMtMS43OSA0LTQgNC00LTEuNzktNC00IDEuNzktNCA0LTR6bTAgMTcuMDJjLTMuMzMgMCA2LjI4LTEuNzEtOC02LjAyIDIuMDUtMy4xNiA1LjI2LTUgOC41OC01IDMuMzIgMCA2LjUzIDEuODQgOC41OCA1LTIuMDUgMy4zMS01LjI2IDUuMDItOC41OCA1LjAyeiIvPjwvc3ZnPg==";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontSize: '0.92rem' }}>
                  {currentProfile.name || "User"}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} style={{ fontSize: '0.736rem' }}>
                  Student
                </p>
              </div>
              <div className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${
                darkMode 
                  ? 'bg-purple-900 text-purple-300' 
                  : 'bg-purple-100 text-purple-700'
              }`} style={{ fontSize: '0.736rem' }}>
                Edit
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-3 py-4 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                      isActive 
                        ? `${darkMode ? 'bg-purple-900 text-white' : 'bg-purple-50 text-purple-700'} shadow-sm` 
                        : `${darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                    }`}
                    onClick={handleMenuClick}
                    style={{ fontSize: '0.92rem' }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-2 bottom-2 w-1 bg-purple-500 rounded-r-full"></div>
                    )}
                    
                    <div className={`p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                      isActive 
                        ? `${darkMode ? 'bg-purple-800' : 'bg-purple-100'}` 
                        : `${darkMode ? 'group-hover:bg-gray-700' : 'group-hover:bg-gray-100'}`
                    }`}>
                      <IconComponent active={isActive} darkMode={darkMode} />
                    </div>
                    
                    <span className="font-medium">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom Items */}
          <div className={`px-3 py-4 border-t space-y-1 ${borderClass}`}>
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={handleMenuClick}
              style={{ fontSize: '0.92rem' }}
            >
              <div className={`p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                darkMode ? 'group-hover:bg-gray-700' : 'group-hover:bg-gray-100'
              }`}>
                <SupportIcon darkMode={darkMode} />
              </div>
              <span className="font-medium">Support</span>
            </div>
            
            {/* Sign Out Button */}
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                darkMode ? 'text-red-400 hover:bg-red-900/30 hover:text-red-300' : 'text-red-600 hover:bg-red-50 hover:text-red-700'
              }`}
              onClick={handleSignOut}
              style={{ fontSize: '0.92rem' }}
            >
              <div className={`p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                darkMode ? 'group-hover:bg-red-800/30' : 'group-hover:bg-red-100'
              }`}>
                <SignOutIcon darkMode={darkMode} />
              </div>
              <span className="font-medium">Sign Out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ==== ICONS ==== */
function DashboardIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "#4B5563");
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function BookIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "#4B5563");
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function CoursesIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "#4B5563");
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

function CodeIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "#4B5563");
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function PaymentIcon({ active, darkMode }) {
  const color = active ? "#7C3AED" : (darkMode ? "#D1D5DB" : "#4B5563");
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

function SupportIcon({ darkMode }) {
  const color = darkMode ? "#D1D5DB" : "#4B5563";
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SignOutIcon({ darkMode }) {
  const color = darkMode ? "#F87171" : "#EF4444";
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}

export default Sidebar;