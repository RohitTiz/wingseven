// AuthSection.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';

const AuthSection = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

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
    <div style={{ 
      fontFamily: 'Roboto, sans-serif',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <Header 
        userEmail={userEmail} 
        setUserEmail={handleSetUserEmail}
        userName={userName}
        setUserName={handleSetUserName}
        onSignOut={handleSignOut}
      />
    </div>
  );
};

export default AuthSection;