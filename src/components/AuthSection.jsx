// AuthSection.jsx
import React, { useState } from 'react';
import Header from './Header';

const AuthSection = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

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
        setUserEmail={setUserEmail}
        userName={userName}
        setUserName={setUserName}
      />
    </div>
  );
};

export default AuthSection;