import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignupModal from './SignupModal';

const Header = ({ userEmail, setUserEmail }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); // Close menu on route change

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', showModal);
    return () => document.body.classList.remove('modal-open');
  }, [showModal]);

  const handleSignUp = (email) => {
    setUserEmail(email);
  };

  return (
    <header className="bg-white border-b border-gray-300 font-roboto sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center px-6 py-3 flex-wrap">
        <div className="flex items-center font-semibold text-2xl text-blue-900">
          <img src="/image/mainlogo.png" alt="Logo" className="h-10 mr-2.5" />
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={`${isMobile ? 'block' : 'hidden'} text-2xl bg-transparent border-none cursor-pointer text-blue-900`}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <nav className={`${isMobile ? (menuOpen ? 'flex' : 'hidden') : 'flex'} ${isMobile ? 'flex-col items-start mt-2.5 w-full' : 'flex-row items-center'} gap-5 text-base font-semibold`}>
          <Link to="/" className="no-underline text-blue-900">Home</Link>
          <Link to="/course" className="no-underline text-blue-900">Courses</Link>
          <Link to="/specializations" className="no-underline text-blue-900">Specializations</Link>
          <a href="#contact" className="no-underline text-blue-900">Contact Us</a>
          <Link to="/about" className="no-underline text-blue-900">About Us</Link>
        </nav>

        {!isMobile && (
          <div className="flex gap-2.5 items-center">
            <button className="bg-transparent text-blue-500 border-2 border-blue-500 rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold">
              Book a Demo
            </button>
            <button 
              className="bg-blue-500 text-white border-none rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold" 
              onClick={() => !userEmail && setShowModal(true)}
            >
              {userEmail ? userEmail.substring(0, 5) : 'Signup'}
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="flex gap-2.5 items-center px-6">
          <button className="bg-transparent text-blue-500 border-2 border-blue-500 rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold">
            Book a Demo
          </button>
          <button 
            className="bg-blue-500 text-white border-none rounded-lg px-4 py-2 cursor-pointer text-sm font-semibold" 
            onClick={() => !userEmail && setShowModal(true)}
          >
            {userEmail ? userEmail.substring(0, 5) : 'Signup'}
          </button>
        </div>
      )}

      {showModal && <SignupModal onClose={() => setShowModal(false)} onSignUp={handleSignUp} />}
    </header>
  );
};

export default Header;