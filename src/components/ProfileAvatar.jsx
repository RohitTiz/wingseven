import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileAvatar = ({ 
  user = { name: 'User', email: 'user@example.com' }, 
  onSignOut = () => console.log('Signing out...'),
  onDashboardClick = null // Optional custom handler
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleDashboardClick = () => {
    setShowDropdown(false);
    if (onDashboardClick) {
      onDashboardClick(); // Custom handler if provided
    } else {
      navigate('/dashboard'); // Default behavior
    }
  };

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        aria-label="User menu"
        aria-expanded={showDropdown}
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        {getInitials(user?.name || user?.email?.split('@')[0])}
      </button>

      {/* Dropdown Overlay */}
      {showDropdown && (
        <>
          <div 
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10" 
            onClick={() => setShowDropdown(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown Content */}
          <div 
            className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden animate-fade-in"
            role="menu"
          >
            {/* User Info Section */}
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center shrink-0">
                  {getInitials(user?.name || user?.email?.split('@')[0])}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate" title={user?.name}>
                    {user?.name || user?.email?.split('@')[0]}
                  </div>
                  <div className="text-sm text-gray-500 truncate" title={user?.email}>
                    {user?.email || 'No email'}
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button 
                onClick={handleDashboardClick}
                className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              
              <button 
                className="w-full px-4 py-3 text-left text-blue-600 hover:bg-gray-50 flex items-center gap-3 transition-colors focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium">Account Settings</span>
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between gap-2 text-xs">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Light
                </button>
                
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Dark
                </button>
                
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Auto
                </button>
              </div>
            </div>

            {/* Sign Out */}
            <div className="border-t border-gray-200">
              <button 
                onClick={onSignOut}
                className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors focus:outline-none focus:bg-red-100"
                role="menuitem"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

ProfileAvatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  onSignOut: PropTypes.func,
  onDashboardClick: PropTypes.func
};

export default ProfileAvatar;