import React, { useState, useEffect } from 'react';

const ReferAFriend = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const referralCode = "FRIEND2024";
  const referralLink = "https://yourapp.com/invite/FRIEND2024";

  // Rotating background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop'
  ];

  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement for card tilt effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

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

  if (!isOpen) return null;

  const tiltX = mousePosition.y * 10;
  const tiltY = mousePosition.x * -10;
  const glareX = mousePosition.x * 100;
  const glareY = mousePosition.y * 100;

  return (
    <>
      {/* Dynamic Background with Changing Images */}
      <div className="fixed inset-0 z-40 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80"></div>
          </div>
        ))}
        
        {/* Animated particles/dots overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Modal Container */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        onClick={() => setIsOpen(false)}
      >
        {/* Premium Card with Tilt Animation */}
        <div 
          className="relative max-w-lg w-full perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => e.stopPropagation()}
          style={{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Floating Shadow */}
          <div 
            className="absolute inset-0 bg-black/40 rounded-2xl blur-xl transform translate-y-4 scale-95"
            style={{
              transform: `translateY(${8 + Math.abs(tiltX) * 0.5}px) scale(${0.95 + Math.abs(tiltX + tiltY) * 0.002})`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>

          {/* Main Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Holographic Glare Effect */}
            <div 
              className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(circle at ${50 + glareX * 0.3}% ${50 + glareY * 0.3}%, 
                  rgba(255,255,255,0.8) 0%, 
                  rgba(255,255,255,0.4) 30%, 
                  transparent 70%)`,
              }}
            ></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-gray-900"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L1 13M1 1l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Header - Reduced Height */}
            <div className="relative h-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=150&fit=crop&crop=center" 
                alt="Team collaboration"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <h1 className="text-xl font-light tracking-wide mb-1">Refer Friends</h1>
                <p className="text-xs text-gray-200 font-light">Earn rewards together</p>
              </div>
            </div>

            <div className="p-5">
              {/* Benefits - Compact */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
                  <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=24&h=24&fit=crop" 
                       alt="Money" className="w-5 h-5 rounded mx-auto mb-2"/>
                  <h3 className="text-xs font-medium text-emerald-800 mb-1">$20 Credit</h3>
                  <p className="text-xs text-emerald-600">Per referral</p>
                </div>
                
                <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=24&h=24&fit=crop" 
                       alt="Gift" className="w-5 h-5 rounded mx-auto mb-2"/>
                  <h3 className="text-xs font-medium text-blue-800 mb-1">Exclusive</h3>
                  <p className="text-xs text-blue-600">Special deals</p>
                </div>
                
                <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                  <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=24&h=24&fit=crop" 
                       alt="Crown" className="w-5 h-5 rounded mx-auto mb-2"/>
                  <h3 className="text-xs font-medium text-purple-800 mb-1">VIP Status</h3>
                  <p className="text-xs text-purple-600">Premium access</p>
                </div>
              </div>

              {/* Referral Code - Compact */}
              <div className="text-center mb-6">
                <p className="text-xs text-gray-500 mb-2">Your referral code</p>
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-3 mb-3">
                  <span className="text-lg font-mono tracking-widest text-gray-900">{referralCode}</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
                    copied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy referral link'}
                </button>
              </div>

              {/* Share Options - Compact */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                  onClick={shareViaWhatsApp}
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                  </svg>
                  <span className="text-sm">WhatsApp</span>
                </button>
                
                <button
                  onClick={shareViaEmail}
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm">Email</span>
                </button>
              </div>

              {/* Progress - Minimized */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">Progress</span>
                  <span className="text-xs text-gray-500">3/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-gray-800 h-1.5 rounded-full transition-all duration-500" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo: Button to reopen modal */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-colors duration-200"
          >
            Refer Friends
          </button>
        </div>
      )}
    </>
  );
};

export default ReferAFriend;