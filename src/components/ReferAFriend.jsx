import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const ReferAFriend = () => {
  const [copied, setCopied] = useState(false);
  const { darkMode } = useDarkMode();

  const referralCode = "FRIEND2024";
  const referralLink = "https://yourapp.com/invite/FRIEND2024";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareViaWhatsApp = () => {
    const message = `Join me on this amazing platform! Use my referral code: ${referralCode} - ${referralLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareViaEmail = () => {
    const subject = "Join me with this referral!";
    const body = `Hey! I think you'll love this platform. Use my referral code ${referralCode} to get started: ${referralLink}`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className={`min-h-screen py-8 px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className={`relative rounded-3xl overflow-hidden shadow-2xl mb-8 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Refer a Friend</h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Share the love, earn rewards! Get amazing coupons and discounts.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <span className="text-3xl md:text-4xl font-bold text-white">🎁</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className={`rounded-2xl p-6 text-center shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Earn $20 Credit</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Get $20 credit for every friend who signs up
            </p>
          </div>
          
          <div className={`rounded-2xl p-6 text-center shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-4xl mb-4">🎫</div>
            <h3 className="text-xl font-bold mb-2">Exclusive Coupons</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Unlock special coupons for you and your friends
            </p>
          </div>
          
          <div className={`rounded-2xl p-6 text-center shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">Premium Benefits</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Get premium features when you refer 5+ friends
            </p>
          </div>
        </div>

        {/* Referral Code Section */}
        <div className={`rounded-2xl p-8 mb-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-2xl font-bold mb-4 text-center">Your Referral Code</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className={`text-3xl font-bold px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
              {referralCode}
            </div>
            <button
              onClick={copyToClipboard}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className={`rounded-2xl p-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-2xl font-bold mb-6 text-center">Share Via</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={shareViaWhatsApp}
              className={`flex items-center justify-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              <span className="text-2xl">💬</span>
              WhatsApp
            </button>
            
            <button
              onClick={shareViaEmail}
              className={`flex items-center justify-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              <span className="text-2xl">📧</span>
              Email
            </button>
            
            <button
              onClick={copyToClipboard}
              className={`flex items-center justify-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
              }`}
            >
              <span className="text-2xl">🔗</span>
              Copy Link
            </button>
          </div>
        </div>

        {/* Progress Section */}
        <div className={`rounded-2xl p-8 mt-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-2xl font-bold mb-4 text-center">Your Referral Progress</h2>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-blue-500">3/5 Friends</div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Refer 2 more friends to unlock premium benefits!
            </p>
          </div>
          <div className={`w-full bg-gray-200 rounded-full h-4 ${darkMode ? 'bg-gray-700' : ''}`}>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full w-3/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;