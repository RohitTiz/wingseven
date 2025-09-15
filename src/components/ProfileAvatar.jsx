import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { useDarkMode } from '../context/DarkModeContext';

const ProfileAvatar = ({ 
  onSignOut = () => console.log('Signing out...'),
  onDashboardClick = null
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { profile } = useProfile();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      document.addEventListener('keydown', handleEscapeKey);
      
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [showDropdown]);

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .filter(n => n.length > 0)
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleDashboardClick = () => {
    setShowDropdown(false);
    if (onDashboardClick) {
      onDashboardClick();
    } else {
      navigate('/dashboard');
    }
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const userName = profile?.name || 'User';
  const userEmail = profile?.email || 'user@example.com';
  const initials = getInitials(userName);

  const bgClass = darkMode ? 'dark-bg' : 'light-bg';
  const textClass = darkMode ? 'light-text' : 'dark-text';
  const borderClass = darkMode ? 'dark-border' : 'light-border';
  const cardClass = darkMode ? 'dark-card' : 'light-card';

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        aria-label="User menu"
        aria-expanded={showDropdown}
        aria-haspopup="true"
        onClick={() => setShowDropdown(!showDropdown)}
        onKeyDown={(e) => handleKeyDown(e, () => setShowDropdown(!showDropdown))}
        className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white focus:outline-none focus:ring-2 focus:ring-purple-400 md:w-12 md:h-12 ${darkMode ? 'border-gray-700' : 'border-white'}`}
      >
        {profile?.profileImage ? (
          <img 
            src={profile.profileImage} 
            alt={userName}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          initials
        )}
      </button>

      {showDropdown && (
        <>
          <div 
            className={`fixed inset-0 z-40 backdrop-blur-sm transition-colors duration-300 ${darkMode ? 'bg-black/50' : 'bg-black/30'} md:bg-transparent md:backdrop-blur-0`} 
            onClick={() => setShowDropdown(false)}
            aria-hidden="true"
          />
          
          <div 
            ref={dropdownRef}
            className={`fixed bottom-0 left-0 right-0 w-full rounded-t-2xl shadow-2xl z-50 overflow-hidden animate-slide-up md:absolute md:bottom-auto md:top-full md:right-0 md:left-auto md:mt-2 md:rounded-xl md:animate-fade-in md:shadow-lg md:w-auto md:min-w-[280px] transition-colors duration-300 ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="flex justify-center py-2 md:hidden">
              <div className={`w-10 h-1 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            </div>

            <div className={`p-4 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center shrink-0 overflow-hidden">
                  {profile?.profileImage ? (
                    <img 
                      src={profile.profileImage} 
                      alt={userName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    initials
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`} title={userName}>
                    {userName}
                  </div>
                  <div className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} title={userEmail}>
                    {userEmail}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2">
              <button 
                onClick={handleDashboardClick}
                onKeyDown={(e) => handleKeyDown(e, handleDashboardClick)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-200 focus:outline-none ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}
                role="menuitem"
                tabIndex={0}
              >
                <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-sm font-medium">Dashboard</span>
              </button>
            </div>

            <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <button 
                onClick={onSignOut}
                onKeyDown={(e) => handleKeyDown(e, onSignOut)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-200 focus:outline-none ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'}`}
                role="menuitem"
                tabIndex={0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
            
            <div className="h-4 md:hidden"></div>
          </div>
        </>
      )}
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        @media (max-width: 767px) {
          body:has(.fixed.inset-0.z-40.backdrop-blur-sm) {
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileAvatar;