import React, { createContext, useContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

export const useProfile = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
  // Get initial profile data from localStorage or use defaults
  const getInitialProfile = () => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      return JSON.parse(savedProfile);
    }
    return {
      name: "Scott M.",
      profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "scott@example.com",
      bio: "Web developer and coding enthusiast"
    };
  };

  const [profile, setProfile] = useState(getInitialProfile());

  // Listen for storage events to sync across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'userProfile') {
        const newProfile = e.newValue ? JSON.parse(e.newValue) : getInitialProfile();
        setProfile(newProfile);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
    
    // Dispatch a custom event to notify components within the same tab
    window.dispatchEvent(new Event('profileUpdated'));
  };

  const value = {
    profile,
    updateProfile
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};