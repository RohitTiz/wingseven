import React, { useState } from 'react';
import Header from './Header';

const AuthSection = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
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