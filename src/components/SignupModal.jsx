import React, { useState } from 'react';
import ProfileAvatar from './ProfileAvatar';

// Forgot Password Modal Component
const ForgotPasswordModal = ({ onClose, onBack }) => {
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const popularCountries = [
    { code: '+1', country: 'US', name: 'United States' },
    { code: '+91', country: 'IN', name: 'India' },
    { code: '+44', country: 'GB', name: 'United Kingdom' },
    { code: '+86', country: 'CN', name: 'China' },
    { code: '+81', country: 'JP', name: 'Japan' },
    { code: '+49', country: 'DE', name: 'Germany' },
    { code: '+33', country: 'FR', name: 'France' },
    { code: '+61', country: 'AU', name: 'Australia' }
  ];

  React.useEffect(() => {
    if (step === 'otp' && timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setCanResend(true);
    }
  }, [timer, step]);

  const handleSendOtp = () => {
    if (phoneNumber) {
      setStep('otp');
      setTimer(30);
      setCanResend(false);
    } else {
      alert('Please enter your phone number');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      alert('Password reset link sent to your phone!');
      onClose();
    } else {
      alert('Please enter complete OTP');
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    alert('OTP resent successfully!');
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 w-full max-w-sm text-center relative shadow-lg">
        <button 
          onClick={onBack} 
          className="absolute top-5 left-5 bg-transparent border-none text-gray-500 text-lg cursor-pointer"
        >
          ←
        </button>
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 bg-transparent border-none text-gray-500 text-xl cursor-pointer"
        >
          ×
        </button>
        
        {step === 'phone' ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Enter your phone number and we'll send you an OTP to reset your password
            </p>
            
            <div className="flex gap-2 mb-4">
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className="w-28 p-3 rounded-xl border border-gray-300 text-sm outline-none bg-gray-50 cursor-pointer"
              >
                {popularCountries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.code} {country.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                className="flex-1 p-3 rounded-xl border border-gray-300 text-sm outline-none"
              />
            </div>
            
            <button 
              onClick={handleSendOtp}
              className="w-full p-3 bg-gray-900 text-white border-none rounded-xl text-sm font-semibold cursor-pointer"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter OTP</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              We've sent a 6-digit code to {countryCode} {phoneNumber}
            </p>
            
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={e => handleOtpChange(index, e.target.value)}
                  className="w-10 h-12 rounded-xl border-2 border-gray-300 text-lg text-center outline-none font-semibold"
                  maxLength="1"
                />
              ))}
            </div>
            
            <button 
              onClick={handleVerifyOtp}
              className="w-full p-3 bg-gray-900 text-white border-none rounded-xl text-sm font-semibold cursor-pointer"
            >
              Verify OTP
            </button>
            
            <div className="text-sm text-gray-500 mt-4">
              {canResend ? (
                <span 
                  onClick={handleResend}
                  className="text-blue-500 cursor-pointer"
                >
                  Resend OTP
                </span>
              ) : (
                `Resend OTP in ${timer}s`
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Enhanced Signup Modal Component
const SignupModal = ({ onClose, onSignUp }) => {
  const [activeTab, setActiveTab] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [userType, setUserType] = useState('Student');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [user, setUser] = useState(null);

  const popularCountries = [
    { code: '+1', country: 'US', name: 'United States' },
    { code: '+91', country: 'IN', name: 'India' },
    { code: '+44', country: 'GB', name: 'United Kingdom' },
    { code: '+86', country: 'CN', name: 'China' },
    { code: '+81', country: 'JP', name: 'Japan' },
    { code: '+49', country: 'DE', name: 'Germany' },
    { code: '+33', country: 'FR', name: 'France' },
    { code: '+61', country: 'AU', name: 'Australia' }
  ];

  const handleSignUp = () => {
    if (activeTab === 'signup') {
      if (firstName && lastName && email && phoneNumber && password && confirmPassword && agreeToTerms) {
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          const userData = { email, name: `${firstName} ${lastName}` };
          setUser(userData);
          onSignUp(email, `${firstName} ${lastName}`);
          onClose();
        }, 1500);
      } else {
        alert('Please fill out all fields and agree to the terms and conditions');
      }
    } else {
      if (email && password && userType) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          const userData = { email, name: 'John Doe' };
          setUser(userData);
          onSignUp(email, 'John Doe');
          onClose();
        }, 1500);
      } else {
        alert('Please fill out all fields');
      }
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  const handleSignOut = () => {
    setUser(null);
    onSignUp(null, null);
  };

  if (showForgotPassword) {
    return <ForgotPasswordModal onClose={onClose} onBack={handleBackToLogin} />;
  }

  if (user) {
    return (
      <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[4000] animate-fadeIn">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg max-w-sm w-[90%] transform transition-all animate-popIn">
          <div className="text-5xl text-green-500 mb-4 animate-bounce">✓</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {activeTab === 'signup' ? 'Successfully Registered!' : 'Successfully Logged In!'}
          </h2>
          <div className="my-4">
            <ProfileAvatar user={user} onSignOut={handleSignOut} />
          </div>
          <p className="text-gray-500 mb-5">
            Welcome back, {user.name}!
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gray-900 text-white border-none rounded-lg text-sm font-semibold cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 60%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          80% { transform: translateY(-5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-popIn {
          animation: popIn 0.4s ease-out;
        }
        .animate-bounce {
          animation: bounce 0.6s ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* CHANGED: Increased backdrop blur effect by 20% (from backdrop-blur-sm to backdrop-blur) */}
      <div className="fixed inset-0 backdrop-blur flex justify-center items-center z-[2000]">
        {/* CHANGED: Increased height of register page by 15px (from h-[580px] to h-[595px] and h-[520px] to h-[535px]) */}
        <div className={`bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 w-full max-w-[85%] sm:max-w-md text-center shadow-lg relative flex flex-col no-scrollbar ${
          activeTab === 'signup' ? 'h-[640px]' : 'h-[580px]'
        }`}>
          <button 
            onClick={onClose} 
            className="absolute -top-6 -right-6 bg-transparent border-none text-gray-600 text-xl cursor-pointer z-[2100]"
          >
            ×
          </button>

          <div className="flex justify-center bg-gray-200 rounded-full mb-5 overflow-hidden">
            <button
              onClick={() => setActiveTab('login')}
              className={`px-5 py-2 ${
                activeTab === 'login' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
              } border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`px-5 py-2 ${
                activeTab === 'signup' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
              } border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1`}
            >
              Register
            </button>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {activeTab === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            {activeTab === 'signup' 
              ? 'Please fill in your details to get started'
              : 'Sign in to continue to your account'
            }
          </p>

          <div className="flex-1 overflow-y-auto no-scrollbar px-2">
            <div className="max-w-xs mx-auto">
              {activeTab === 'signup' && (
                <>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 text-sm outline-none mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 text-sm outline-none mb-3"
                  />
                </>
              )}

              <input
                type="email"
                placeholder={activeTab === 'signup' ? 'Enter your email' : 'Enter your email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-gray-300 text-sm outline-none mb-3"
              />

              {activeTab === 'signup' && (
                <div className="flex mb-3 gap-2">
                  <select
                    value={countryCode}
                    onChange={e => setCountryCode(e.target.value)}
                    className="w-24 p-2 rounded-xl border border-gray-300 text-sm outline-none bg-gray-50 text-gray-700 cursor-pointer text-center"
                  >
                    {popularCountries.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.code} {country.country}
                      </option>
                    ))}
                  </select>
                  
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="flex-1 p-2.5 rounded-xl border border-gray-300 text-sm outline-none"
                  />
                </div>
              )}
                {/* PASSOWRDD */}
              {activeTab === 'login' && (
                <label className="block text-left text-xs font-medium text-gray-700 mb-1"></label>
              )}

              <input
                type="password"
                placeholder={activeTab === 'signup' ? 'Create a password' : 'Enter your password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-gray-300 text-sm outline-none mb-3"
              />

              {activeTab === 'signup' && (
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 text-sm outline-none mb-3"
                />
              )}

              <div className={`text-right text-xs text-gray-500 mb-3 ${
                activeTab === 'login' ? 'visible' : 'invisible'
              }`}>
                <span 
                  onClick={handleForgotPassword} 
                  className="text-blue-500 cursor-pointer"
                >
                  Forgot Password?
                </span>
              </div>

              {activeTab === 'signup' && (
                <div className="flex items-center justify-start mb-4 text-xs text-gray-500">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={e => setAgreeToTerms(e.target.checked)}
                    className="mr-2 accent-gray-900"
                  />
                  <label htmlFor="terms">
                    I agree to the <a href="#" className="text-blue-500 cursor-pointer">Terms</a>
                  </label>
                </div>
              )}

              <button 
                onClick={handleSignUp}
                className="w-full p-2.5 bg-gray-900 text-white border-none rounded-xl text-sm font-semibold cursor-pointer mb-3"
              >
                {activeTab === 'signup' ? 'Create Account' : 'Sign In'}
              </button>

              {activeTab === 'signup' ? (
                <div className="text-xs text-gray-500">
                  Already have an account? <span 
                    onClick={() => setActiveTab('login')} 
                    className="text-blue-500 cursor-pointer"
                  >
                    Login
                  </span>
                </div>
              ) : (
                <div className="text-xs text-gray-500">
                  Don't have an account? <span 
                    onClick={() => setActiveTab('signup')} 
                    className="text-blue-500 cursor-pointer"
                  >
                    Register
                  </span>
                </div>
              )}
            </div>
          </div>

          {activeTab === 'login' && (
            <div className="pt-2">
              <div className="text-xs text-gray-500 mb-2">
                Or log in with
              </div>
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="18" />
                </button>
                <button className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="18" />
                </button>
                <button className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="Apple" width="18" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && !user && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[4000] animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform animate-popIn">
            <div className="text-5xl text-green-500 mb-4 animate-bounce">✓</div>
            <div className="text-xl font-semibold text-gray-900">
              {activeTab === 'signup' ? 'Successfully Registered!' : 'Successfully Logged In!'}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;