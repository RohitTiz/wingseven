// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignupModal from './SignupModal';
import ProfileAvatar from './ProfileAvatar';
// In Header.jsx
import { useDarkMode } from '../context/DarkModeContext'; // Correct path

const Header = ({ userEmail = null, setUserEmail = () => {}, userName = null, setUserName = () => {} }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', showModal);
    return () => document.body.classList.remove('modal-open');
  }, [showModal]);

  const handleSignUp = (email, name) => {
    setUserEmail(email);
    setUserName(name || email.split('@')[0]);
  };

  const handleSignOut = () => {
    setUserEmail(null);
    setUserName(null);
  };

  // Function to handle Contact Us navigation
  const handleContactClick = (e) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      // Use React Router navigation to go to homepage
      // The actual navigation will be handled by the Link component
      return; // Let the Link handle navigation
    }
    
    // If we're already on homepage, scroll to contact section
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic classes based on dark mode
  const headerClasses = `${
    darkMode 
      ? 'bg-gray-900 border-gray-700' 
      : 'bg-white border-gray-300'
  } border-b font-roboto sticky top-0 z-50 w-full transition-colors duration-300`;

  const logoTextClasses = `flex items-center font-semibold text-2xl ${
    darkMode ? 'text-white' : 'text-blue-900'
  } transition-colors duration-300`;

  const menuButtonClasses = `${isMobile ? 'block' : 'hidden'} text-2xl bg-transparent border-none cursor-pointer ${
    darkMode ? 'text-white' : 'text-blue-900'
  } transition-colors duration-300`;

  const navLinkClasses = (isActive = false) => `no-underline ${
    darkMode 
      ? 'text-gray-200 hover:text-white' 
      : 'text-blue-900 hover:text-blue-800'
  } hover:scale-105 transition-all duration-300 py-2 px-1`;

  const toggleButtonClasses = `p-2 rounded-full ${
    darkMode 
      ? 'hover:bg-gray-700' 
      : 'hover:bg-gray-200'
  } transition-colors duration-300`;

  const demoButtonClasses = `bg-transparent ${
    darkMode 
      ? 'text-blue-400 border-blue-400 hover:bg-blue-900/20' 
      : 'text-blue-500 border-blue-500 hover:bg-blue-50'
  } border-2 rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold transition-colors duration-300`;

  const signupButtonClasses = `${
    darkMode 
      ? 'bg-blue-600 hover:bg-blue-700' 
      : 'bg-blue-500 hover:bg-blue-600'
  } text-white border-none rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold transition-colors duration-300`;

  return (
    <header className={headerClasses}>
      <div className="flex justify-between items-center px-6 py-3 flex-wrap">
        <div className={logoTextClasses}>
          <Link to="/" className="flex items-center">
            <img 
              src="/image/mainlogo.png" 
              alt="Logo" 
              className={`h-12 mr-2.5 ${darkMode ? 'filter brightness-0 invert' : ''} transition-all duration-300`} 
            />
          </Link>
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={menuButtonClasses}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <nav className={`${isMobile ? (menuOpen ? 'flex' : 'hidden') : 'flex'} ${isMobile ? 'flex-col items-start mt-2.5 w-full' : 'flex-row items-center'} gap-4 text-lg font-semibold`}>
          <Link to="/" className={navLinkClasses()}>Home</Link>
          <Link to="/course" className={navLinkClasses()}>Courses</Link>
          <Link to="/specializations" className={navLinkClasses()}>Blogs</Link>
          <Link to="/testimonials" className={navLinkClasses()}>Testimonials</Link>
          
          {/* Updated Contact Us link */}
          <Link 
            to="/#contact" 
            onClick={handleContactClick}
            className={navLinkClasses()}
          >
            Contact Us
          </Link>
          
          <Link to="/about" className={navLinkClasses()}>About Us</Link>
        </nav>

        {!isMobile && (
          <div className="flex gap-2.5 items-center">
            <button 
              onClick={toggleDarkMode}
              className={toggleButtonClasses}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button className={demoButtonClasses}>
              Book a Demo
            </button>
            {userEmail ? (
              <ProfileAvatar 
                user={{ email: userEmail, name: userName || userEmail.split('@')[0] }} 
                onSignOut={handleSignOut}
                darkMode={darkMode}
              />
            ) : (
              <button 
                className={signupButtonClasses} 
                onClick={() => setShowModal(true)}
              >
                Signup
              </button>
            )}
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="flex gap-2.5 items-center px-6 pb-3">
          <button 
            onClick={toggleDarkMode}
            className={toggleButtonClasses}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button className={demoButtonClasses}>
            Book a Demo
          </button>
          {userEmail ? (
            <ProfileAvatar 
              user={{ email: userEmail, name: userName || userEmail.split('@')[0] }} 
              onSignOut={handleSignOut}
              darkMode={darkMode}
            />
          ) : (
            <button 
              className={signupButtonClasses} 
              onClick={() => setShowModal(true)}
            >
              Signup
            </button>
          )}
        </div>
      )}

      {showModal && (
        <SignupModal 
          onClose={() => setShowModal(false)} 
          onSignUp={handleSignUp} 
          darkMode={darkMode}
        />
      )}
    </header>
  );
};

export default Header;