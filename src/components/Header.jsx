import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignupModal from './SignupModal';
import ProfileAvatar from './ProfileAvatar';

const Header = ({ userEmail = null, setUserEmail = () => {}, userName = null, setUserName = () => {} }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add theme switching logic here if needed
  };

  return (
    <header className="bg-white border-b border-gray-300 font-roboto sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center px-6 py-3 flex-wrap">
        <div className="flex items-center font-semibold text-2xl text-blue-900">
          <Link to="/" className="flex items-center">
            <img src="/image/mainlogo.png" alt="Logo" className="h-10 mr-2.5" />
          </Link>
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={`${isMobile ? 'block' : 'hidden'} text-2xl bg-transparent border-none cursor-pointer text-blue-900`}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <nav className={`${isMobile ? (menuOpen ? 'flex' : 'hidden') : 'flex'} ${isMobile ? 'flex-col items-start mt-2.5 w-full' : 'flex-row items-center'} gap-5 text-base font-semibold`}>
          <Link to="/" className="no-underline text-blue-900 hover:text-blue-700">Home</Link>
          <Link to="/course" className="no-underline text-blue-900 hover:text-blue-700">Courses</Link>
          <Link to="/specializations" className="no-underline text-blue-900 hover:text-blue-700">Blogs</Link>
          <a href="#contact" className="no-underline text-blue-900 hover:text-blue-700">Contact Us</a>
          <Link to="/about" className="no-underline text-blue-900 hover:text-blue-700">About Us</Link>
        </nav>

        {!isMobile && (
          <div className="flex gap-2.5 items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
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
            <button className="bg-transparent text-blue-500 border-2 border-blue-500 rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold hover:bg-blue-50 transition-colors">
              Book a Demo
            </button>
            {userEmail ? (
              <ProfileAvatar 
                user={{ email: userEmail, name: userName || userEmail.split('@')[0] }} 
                onSignOut={handleSignOut}
              />
            ) : (
              <button 
                className="bg-blue-500 text-white border-none rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold hover:bg-blue-600 transition-colors" 
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
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
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
          <button className="bg-transparent text-blue-500 border-2 border-blue-500 rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold hover:bg-blue-50 transition-colors">
            Book a Demo
          </button>
          {userEmail ? (
            <ProfileAvatar 
              user={{ email: userEmail, name: userName || userEmail.split('@')[0] }} 
              onSignOut={handleSignOut}
            />
          ) : (
            <button 
              className="bg-blue-500 text-white border-none rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold hover:bg-blue-600 transition-colors" 
              onClick={() => setShowModal(true)}
            >
              Signup
            </button>
          )}
        </div>
      )}

      {showModal && <SignupModal onClose={() => setShowModal(false)} onSignUp={handleSignUp} />}
    </header>
  );
};

export default Header;