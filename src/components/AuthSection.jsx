import React, { useState } from 'react';
import Header from './Header';

const AuthSection = () => {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Header userEmail={userEmail} setUserEmail={setUserEmail} />
      
    </div>
  );
};

export default AuthSection;