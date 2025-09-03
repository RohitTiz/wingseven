import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { label: "Study Materials", icon: BookIcon, path: "/dashboard/study-materials" },
  { label: "Courses", icon: CoursesIcon, path: "/dashboard/courses" },
  { label: "Code Challenges", icon: CodeIcon, path: "/dashboard/questions" },
  { label: "Community", icon: CommunityIcon, path: "/dashboard/community" },
  { label: "Certificate", icon: CertificateIcon, path: "/dashboard/certificate" },
];

const Sidebar = ({ open, setOpen, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useProfile();
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

  return (
    <div
      className={`flex flex-col h-full bg-white shadow-lg transition-all duration-300 ${
        open ? "w-64" : "w-15"
      } relative`}
      style={isMobile ? { width: '100%', maxWidth: 320, minWidth: 240, height: '100vh', paddingRight: 0 } : {}}
    >
      {/* Logo */}
      <div className="flex flex-col px-6 pt-8">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="bg-purple-500 rounded-lg w-10 h-10 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">C</span>
          </div>
          {open && (
            <span className="text-lg font-semibold text-gray-800">
              Lets Code Brain
            </span>
          )}
        </div>
      </div>

      {/* Profile */}
      {open && (
        <div 
          className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={handleProfileClick}
        >
          <img
            src={currentProfile.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-gray-800 font-medium flex-1">{currentProfile.name}</span>
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-colors select-none
                ${isActive ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-50"}
              `}
              onClick={handleMenuClick}
            >
              <IconComponent active={isActive} />
              {open && (
                <span className={`text-base font-medium`}>
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Settings/Support */}
      <div className="px-2 pb-6">
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer`}
          onClick={handleMenuClick}
        >
          <SettingsIcon />
          {open && <span className="text-base font-medium">Settings</span>}
        </div>
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer`}
          onClick={handleMenuClick}
        >
          <SupportIcon />
          {open && <span className="text-base font-medium">Support</span>}
        </div>
      </div>
    </div>
  );
};

/* ==== ICONS ==== */
function DashboardIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill={active ? "#7C3AED" : "#6B7280"} viewBox="0 0 24 24">
      <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9 0h7v7h-7v-7zm0-9h7v7h-7V4z"/>
    </svg>
  );
}

function BookIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill={active ? "#7C3AED" : "#6B7280"} viewBox="0 0 24 24">
      <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm8 14H5V5h6v14zm8 0h-6V5h6v14z"/>
    </svg>
  );
}

function CoursesIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill={active ? "#7C3AED" : "#6B7280"} viewBox="0 0 24 24">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  );
}

function CodeIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill={active ? "#7C3AED" : "#6B7280"} viewBox="0 0 24 24">
      <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
    </svg>
  );
}

function CommunityIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill={active ? "#7C3AED" : "#6B7280"} viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.93 0 3.68.78 4.95 2.05l-2.09 2.09C14.2 7.72 13.14 7 12 7s-2.2.72-2.86 1.84L7.05 6.05C8.32 4.78 10.07 4 12 4zm0 16c-1.93 0-3.68-.78-4.95-2.05l2.09-2.09C9.8 16.28 10.86 17 12 17s2.2-.72 2.86-1.84l2.09 2.09C15.68 19.22 13.93 20 12 20zm-1-8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
    </svg>
  );
}

function CertificateIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill={active ? "#7C3AED" : "#6B7280"} viewBox="0 0 24 24">
      <path d="M4 3h16v2H4V3zm0 4h16v2H4V7zm0 4h16v2H4v-2zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-6 h-6" fill="#6B7280" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-6 h-6" fill="#6B7280" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
    </svg>
  );
}

export default Sidebar;