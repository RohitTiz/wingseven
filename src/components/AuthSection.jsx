// AuthSection.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';

const AuthSection = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUserEmail = localStorage.getItem('userEmail');
    const savedUserName = localStorage.getItem('userName');
    
    if (savedUserEmail) {
      setUserEmail(savedUserEmail);
    }
    
    if (savedUserName) {
      setUserName(savedUserName);
    }

    // Handle scroll for subtle UI changes
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle user sign up
  const handleSetUserEmail = (email) => {
    setUserEmail(email);
    localStorage.setItem('userEmail', email);
  };

  // Handle user name setting
  const handleSetUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  // Handle user sign out
  const handleSignOut = () => {
    setUserEmail(null);
    setUserName(null);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
  };

  return (
    <>
      {/* Viewport meta tag for proper mobile rendering */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      
      <div style={{ 
        fontFamily: 'Roboto, sans-serif',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'white',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'box-shadow 0.3s ease',
        padding: '0 env(safe-area-inset-right) 0 env(safe-area-inset-left)'
      }}>
        <Header 
          userEmail={userEmail} 
          setUserEmail={handleSetUserEmail}
          userName={userName}
          setUserName={handleSetUserName}
          onSignOut={handleSignOut}
        />
      </div>
      
      {/* Add padding to prevent content from being hidden behind fixed header */}
      <div style={{ 
        height: '60px',
        '@media (max-width: 768px)': {
          height: '50px'
        }
      }} />
    </>
  );
};

export default AuthSection;