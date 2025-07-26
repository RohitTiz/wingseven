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
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 w-full max-w-sm text-center relative shadow-lg">
        <button 
          onClick={onBack} 
          className="absolute top-4 left-4 bg-transparent border-none text-gray-500 text-lg cursor-pointer"
          aria-label="Go back"
        >
          ←
        </button>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-transparent border-none text-gray-500 text-xl cursor-pointer"
          aria-label="Close modal"
        >
          ×
        </button>
        
        {step === 'phone' ? (
          <>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6 leading-relaxed">
              Enter your phone number and we'll send you an OTP to reset your password
            </p>
            
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className="w-full md:w-28 p-3 rounded-xl border border-gray-300 text-sm outline-none bg-gray-50 cursor-pointer"
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
                className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none"
                inputMode="numeric"
              />
            </div>
            
            <button 
              onClick={handleSendOtp}
              className="w-full p-3 bg-gray-900 text-white border-none rounded-xl text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Enter OTP</h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6 leading-relaxed">
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
                  className="w-10 h-12 rounded-xl border-2 border-gray-300 text-lg text-center outline-none font-semibold focus:border-gray-900"
                  maxLength="1"
                  inputMode="numeric"
                />
              ))}
            </div>
            
            <button 
              onClick={handleVerifyOtp}
              className="w-full p-3 bg-gray-900 text-white border-none rounded-xl text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors"
            >
              Verify OTP
            </button>
            
            <div className="text-xs md:text-sm text-gray-500 mt-4">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-blue-500 cursor-pointer hover:text-blue-600 focus:outline-none"
                >
                  Resend OTP
                </button>
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
      <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[4000] animate-fadeIn p-4">
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg max-w-sm w-full transform transition-all animate-popIn">
          <div className="text-5xl text-green-500 mb-4 animate-bounce">✓</div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            {activeTab === 'signup' ? 'Successfully Registered!' : 'Successfully Logged In!'}
          </h2>
          <div className="my-4">
            <ProfileAvatar user={user} onSignOut={handleSignOut} />
          </div>
          <p className="text-sm text-gray-500 mb-5">
            Welcome back, {user.name}!
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gray-900 text-white border-none rounded-lg text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors"
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
        /* Better mobile input zoom behavior */
        @media screen and (max-width: 640px) {
          input, select, textarea {
            font-size: 16px !important;
          }
          input[type="text"],
          input[type="password"],
          input[type="email"],
          input[type="tel"] {
            min-height: 44px; /* Better touch target */
          }
        }
      `}</style>
      
      <div className="fixed inset-0 backdrop-blur flex justify-center items-center z-[2000] p-4">
        <div className={`bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 w-full max-w-md text-center shadow-lg relative flex flex-col no-scrollbar ${
          activeTab === 'signup' ? 'min-h-[580px] max-h-[90vh]' : 'min-h-[520px] max-h-[90vh]'
        }`}>
          <button 
            onClick={onClose} 
            className="absolute -top-6 -right-6 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 text-xl cursor-pointer z-[2100] shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>

          <div className="flex justify-center bg-gray-200 rounded-full mb-5 overflow-hidden">
            <button
              onClick={() => setActiveTab('login')}
              className={`px-4 py-2 ${
                activeTab === 'login' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
              } border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1 hover:bg-gray-300`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`px-4 py-2 ${
                activeTab === 'signup' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
              } border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1 hover:bg-gray-300`}
            >
              Register
            </button>
          </div>

          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            {activeTab === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mb-5 leading-relaxed">
            {activeTab === 'signup' 
              ? 'Please fill in your details to get started'
              : 'Sign in to continue to your account'
            }
          </p>

          <div className="flex-1 overflow-y-auto no-scrollbar px-2">
            <div className="max-w-xs mx-auto w-full">
              {activeTab === 'signup' && (
                <>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none mb-3 focus:border-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none mb-3 focus:border-gray-900"
                  />
                </>
              )}

              <input
                type="email"
                placeholder={activeTab === 'signup' ? 'Enter your email' : 'Enter your email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none mb-3 focus:border-gray-900"
                inputMode="email"
              />

              {activeTab === 'signup' && (
                <div className="flex flex-col md:flex-row mb-3 gap-2">
                  <select
                    value={countryCode}
                    onChange={e => setCountryCode(e.target.value)}
                    className="w-full md:w-24 p-3 rounded-xl border border-gray-300 text-sm outline-none bg-gray-50 text-gray-700 cursor-pointer"
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
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none focus:border-gray-900"
                    inputMode="tel"
                  />
                </div>
              )}

              <input
                type="password"
                placeholder={activeTab === 'signup' ? 'Create a password' : 'Enter your password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none mb-3 focus:border-gray-900"
              />

              {activeTab === 'signup' && (
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm outline-none mb-3 focus:border-gray-900"
                />
              )}

              <div className={`text-right text-xs text-gray-500 mb-3 ${
                activeTab === 'login' ? 'visible' : 'invisible'
              }`}>
                <button
                  onClick={handleForgotPassword} 
                  className="text-blue-500 cursor-pointer hover:text-blue-600 focus:outline-none"
                >
                  Forgot Password?
                </button>
              </div>

              {activeTab === 'signup' && (
                <div className="flex items-center justify-start mb-4 text-xs text-gray-500">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={e => setAgreeToTerms(e.target.checked)}
                    className="mr-2 accent-gray-900 w-4 h-4"
                  />
                  <label htmlFor="terms" className="cursor-pointer">
                    I agree to the <a href="#" className="text-blue-500 hover:text-blue-600">Terms</a>
                  </label>
                </div>
              )}

              <button 
                onClick={handleSignUp}
                className="w-full p-3 bg-gray-900 text-white border-none rounded-xl text-sm font-semibold cursor-pointer mb-3 hover:bg-gray-800 transition-colors"
              >
                {activeTab === 'signup' ? 'Create Account' : 'Sign In'}
              </button>

              {activeTab === 'signup' ? (
                <div className="text-xs text-gray-500">
                  Already have an account?{' '}
                  <button
                    onClick={() => setActiveTab('login')} 
                    className="text-blue-500 cursor-pointer hover:text-blue-600 focus:outline-none"
                  >
                    Login
                  </button>
                </div>
              ) : (
                <div className="text-xs text-gray-500">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setActiveTab('signup')} 
                    className="text-blue-500 cursor-pointer hover:text-blue-600 focus:outline-none"
                  >
                    Register
                  </button>
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
                <button 
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  aria-label="Login with Google"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="18" />
                </button>
                <button 
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  aria-label="Login with Facebook"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="18" />
                </button>
                <button 
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  aria-label="Login with Apple"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="Apple" width="18" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && !user && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[4000] animate-fadeIn p-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg max-w-sm w-full transform animate-popIn">
            <div className="text-5xl text-green-500 mb-4 animate-bounce">✓</div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">
              {activeTab === 'signup' ? 'Successfully Registered!' : 'Successfully Logged In!'}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;