import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { useDarkMode } from '../context/DarkModeContext';

const EditProfile = () => {
  const navigate = useNavigate();
  const { profile, updateProfile } = useProfile();
  const { darkMode } = useDarkMode();
  const [name, setName] = useState(profile.name);
  const [profileImage, setProfileImage] = useState(profile.profileImage);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);
  const [isSaved, setIsSaved] = useState(false);

  // Update form fields when profile changes
  useEffect(() => {
    setName(profile.name);
    setProfileImage(profile.profileImage);
    setEmail(profile.email);
    setBio(profile.bio);
  }, [profile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 1MB)
      if (file.size > 1024 * 1024) {
        alert('File size too large. Please select an image under 1MB.');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      name,
      profileImage,
      email,
      bio
    });
    setIsSaved(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSaved(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${darkMode ? 'dark-bg' : 'light-bg'}`}>
      <div className={`max-w-2xl mx-auto rounded-lg shadow-md p-6 transition-colors duration-300 ${darkMode ? 'dark-card' : 'light-card'}`}>
        <h1 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
          Edit Profile
        </h1>
        
        {/* Success Message */}
        {isSaved && (
          <div className={`mb-6 p-4 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700'}`}>
            Profile updated successfully! Redirecting...
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {/* Profile Image */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
              Profile Photo
            </label>
            <div className="flex items-center space-x-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="profile-upload"
                />
                <label
                  htmlFor="profile-upload"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors inline-block"
                >
                  Change Photo
                </label>
                <p className={`text-sm mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  JPG, PNG or GIF. Max 1MB.
                </p>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300 ${darkMode ? 'dark-border dark-bg light-text' : 'light-border light-bg dark-text'}`}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300 ${darkMode ? 'dark-border dark-bg light-text' : 'light-border light-bg dark-text'}`}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="4"
              className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300 ${darkMode ? 'dark-border dark-bg light-text' : 'light-border light-bg dark-text'}`}
              placeholder="Tell us about yourself"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ${darkMode ? 'dark-border text-gray-300 hover:bg-gray-700' : 'light-border text-gray-700 hover:bg-gray-100'}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;