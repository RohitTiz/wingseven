import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { label: "Study Materials", icon: BookIcon, path: "/dashboard/study-materials" },
  { label: "Courses", icon: CoursesIcon, path: "/dashboard/courses" },
  { label: "Code Challenges", icon: CodeIcon, path: "/dashboard/questions" },
];

const Sidebar = ({ open, setOpen, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [currentProfile, setCurrentProfile] = useState(profile);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    if (isMobile && setOpen) setOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    if (isMobile && setOpen) setOpen(false);
  };

  const handleProfileClick = () => {
    navigate("/dashboard/edit-profile");
    if (isMobile && setOpen) setOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // For mobile, use the original open prop, for desktop use isCollapsed
  const sidebarOpen = isMobile ? open : !isCollapsed;

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      <div
        className={`flex flex-col h-full bg-white shadow-sm border-r border-gray-100 transition-all duration-300 ${
          isMobile 
            ? `fixed top-0 left-0 z-50 transform ${open ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`
            : "relative"
        } ${sidebarOpen ? "w-64" : "w-16"}`}
        style={{
          backgroundColor: 'rgba(246, 248, 250, 255)',
          height: isMobile ? '100vh' : '100%',
          overflowY: 'auto'
        }}
      >
        {/* Collapse Toggle Button - Only show on desktop */}
        {!isMobile && (
          <button
            onClick={toggleCollapse}
            className="absolute -right-3 top-8 bg-white border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 z-10 hover:bg-gray-50"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg 
              className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Mobile close button */}
        {isMobile && (
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Logo Section */}
        <div className="flex flex-col px-4 pt-6 pb-4 border-b border-gray-50 bg-white rounded-lg">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            {sidebarOpen && (
              <div className="flex flex-col min-w-0">
                <span className="text-lg font-bold text-gray-900 truncate">
                  Code Brain
                </span>
                <span className="text-xs text-gray-500 -mt-1 truncate">
                  Learning Platform
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Profile Section */}
        {sidebarOpen && (
          <div className="px-4 py-4 border-b border-gray-50 bg-white rounded-lg mt-2">
            <div 
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group"
              onClick={handleProfileClick}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={currentProfile.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 group-hover:border-purple-200 transition-colors"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0QxRDFEMSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjIxIDAgNCAxLjc5IDQgNHMtMS43OSA0LTQgNC00LTEuNzktNC00IDEuNzktNCA0LTR6bTAgMTcuMDJjLTMuMzMgMC02LjI4LTEuNzEtOC02LjAyIDIuMDUtMy4xNiA1LjI2LTUgOC41OC01IDMuMzIgMCA2LjUzIDEuODQgOC41OCA1LTIuMDUgMy4zMS01LjI2IDUuMDItOC41OCA1LjAyeiIvPjwvc3ZnPg==";
                  }}
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{currentProfile.name || "User"}</p>
                <p className="text-xs text-gray-500 truncate">Student</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1 mt-2 bg-white rounded-lg">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative
                  ${isActive 
                    ? "bg-purple-50 text-purple-700 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
                onClick={handleMenuClick}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-r-full"></div>
                )}
                
                <div className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
                  isActive ? "bg-purple-100" : "bg-transparent group-hover:bg-gray-100"
                }`}>
                  <IconComponent active={isActive} />
                </div>
                
                {sidebarOpen && (
                  <span className="text-sm font-medium flex-1 truncate">
                    {item.label}
                  </span>
                )}
                
                {/* Tooltip for collapsed state */}
                {!sidebarOpen && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="px-3 pb-4 mt-auto space-y-1 bg-white rounded-lg mt-2">
          <div
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-all group relative"
            onClick={handleMenuClick}
          >
            <div className="p-1.5 rounded-lg group-hover:bg-gray-100 transition-colors flex-shrink-0">
              <SettingsIcon />
            </div>
            {sidebarOpen && <span className="text-sm font-medium truncate">Settings</span>}
            
            {!sidebarOpen && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                Settings
              </div>
            )}
          </div>
          
          <div
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-all group relative"
            onClick={handleMenuClick}
          >
            <div className="p-1.5 rounded-lg group-hover:bg-gray-100 transition-colors flex-shrink-0">
              <SupportIcon />
            </div>
            {sidebarOpen && <span className="text-sm font-medium truncate">Support</span>}
            
            {!sidebarOpen && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                Support
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

/* ==== ICONS ==== */
function DashboardIcon({ active }) {
  return (
    <svg className="w-5 h-5" fill={active ? "#7C3AED" : "currentColor"} viewBox="0 0 24 24">
      <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9 0h7v7h-7v-7zm0-9h7v7h-7V4z"/>
    </svg>
  );
}

function BookIcon({ active }) {
  return (
    <svg className="w-5 h-5" fill={active ? "#7C3AED" : "currentColor"} viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  );
}

function CoursesIcon({ active }) {
  return (
    <svg className="w-5 h-5" fill={active ? "#7C3AED" : "currentColor"} viewBox="0 0 24 24">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  );
}

function CodeIcon({ active }) {
  return (
    <svg className="w-5 h-5" fill={active ? "#7C3AED" : "currentColor"} viewBox="0 0 24 24">
      <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
    </svg>
  );
}

export default Sidebar;