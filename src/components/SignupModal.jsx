import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
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
      
      // Auto submit if all fields are filled
      if (index === 5 && value) {
        const allFilled = newOtp.every(digit => digit !== '');
        if (allFilled) {
          handleVerifyOtp();
        }
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

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-5 w-full max-w-sm text-center relative shadow-xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onBack} 
          className="absolute top-4 left-4 bg-transparent border-none text-gray-500 text-xl cursor-pointer p-1"
          aria-label="Go back"
        >
          ←
        </button>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-transparent border-none text-gray-500 text-2xl cursor-pointer p-1"
          aria-label="Close modal"
        >
          ×
        </button>
        
        {step === 'phone' ? (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-3 mt-2">Forgot Password?</h2>
            <p className="text-sm text-gray-600 mb-6 px-2">
              Enter your phone number and we'll send you an OTP to reset your password
            </p>
            
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={e => setCountryCode(e.target.value)}
                  className="w-28 p-4 rounded-xl border border-gray-300 text-base outline-none bg-gray-50 cursor-pointer"
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
                  className="flex-1 p-4 rounded-xl border border-gray-300 text-base outline-none"
                  inputMode="numeric"
                />
              </div>
            </div>
            
            <button 
              onClick={handleSendOtp}
              className="w-full p-4 bg-gray-900 text-white border-none rounded-xl text-base font-semibold cursor-pointer hover:bg-gray-800 transition-colors active:bg-gray-700"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-3 mt-2">Enter OTP</h2>
            <p className="text-sm text-gray-600 mb-6 px-2">
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
                  onKeyDown={e => handleKeyDown(e, index)}
                  className="w-12 h-14 rounded-xl border-2 border-gray-300 text-xl text-center outline-none font-semibold focus:border-gray-900"
                  maxLength="1"
                  inputMode="numeric"
                  autoFocus={index === 0}
                />
              ))}
            </div>
            
            <button 
              onClick={handleVerifyOtp}
              className="w-full p-4 bg-gray-900 text-white border-none rounded-xl text-base font-semibold cursor-pointer hover:bg-gray-800 transition-colors active:bg-gray-700 mb-4"
            >
              Verify OTP
            </button>
            
            <div className="text-sm text-gray-600">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 focus:outline-none p-2"
                >
                  Resend OTP
                </button>
              ) : (
                <p className="p-2">Resend OTP in {timer}s</p>
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

  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 text-center shadow-xl max-w-sm w-full">
          <div className="text-5xl text-green-500 mb-4">✓</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {activeTab === 'signup' ? 'Successfully Registered!' : 'Successfully Logged In!'}
          </h2>
          <div className="my-4">
            <ProfileAvatar user={user} onSignOut={handleSignOut} />
          </div>
          <p className="text-sm text-gray-600 mb-5">
            Welcome back, {user.name}!
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-900 text-white border-none rounded-xl text-base font-semibold cursor-pointer hover:bg-gray-800 transition-colors active:bg-gray-700"
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
        @media screen and (max-width: 640px) {
          input, select, textarea {
            font-size: 16px !important; /* Prevent zoom on iOS */
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className={`bg-white rounded-2xl p-5 w-full max-w-md text-center shadow-xl relative flex flex-col no-scrollbar ${
          activeTab === 'signup' ? 'min-h-[85vh] max-h-[90vh]' : 'min-h-[75vh] max-h-[85vh]'
        }`}>
          <button 
            onClick={onClose} 
            className="absolute -top-12 right-0 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 text-xl cursor-pointer z-10 shadow-md hover:bg-gray-100 transition-colors active:bg-gray-200"
            aria-label="Close modal"
          >
            ×
          </button>

          <div className="flex bg-gray-200 rounded-full mb-6 overflow-hidden p-1">
            <button
              onClick={() => setActiveTab('login')}
              className={`px-5 py-3 ${
                activeTab === 'login' ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-600'
              } border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1 active:bg-gray-800 active:text-white`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`px-5 py-3 ${
                activeTab === 'signup' ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-600'
              } border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1 active:bg-gray-800 active:text-white`}
            >
              Register
            </button>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {activeTab === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-gray-600 mb-6 px-2">
            {activeTab === 'signup' 
              ? 'Please fill in your details to get started'
              : 'Sign in to continue to your account'
            }
          </p>

          <div className="flex-1 overflow-y-auto no-scrollbar px-1 pb-2">
            <div className="max-w-xs mx-auto w-full space-y-3">
              {activeTab === 'signup' && (
                <>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-300 text-base outline-none focus:border-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-300 text-base outline-none focus:border-gray-900"
                  />
                </>
              )}

              <input
                type="email"
                placeholder={activeTab === 'signup' ? 'Enter your email' : 'Email address'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 text-base outline-none focus:border-gray-900"
                inputMode="email"
              />

              {activeTab === 'signup' && (
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={e => setCountryCode(e.target.value)}
                    className="w-28 p-4 rounded-xl border border-gray-300 text-base outline-none bg-gray-50 text-gray-700 cursor-pointer"
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
                    className="flex-1 p-4 rounded-xl border border-gray-300 text-base outline-none focus:border-gray-900"
                    inputMode="tel"
                  />
                </div>
              )}

              <input
                type="password"
                placeholder={activeTab === 'signup' ? 'Create a password' : 'Password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 text-base outline-none focus:border-gray-900"
              />

              {activeTab === 'signup' && (
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full p-4 rounded-xl border border-gray-300 text-base outline-none focus:border-gray-900"
                />
              )}

              <div className={`text-right text-sm text-gray-600 ${activeTab === 'login' ? 'visible' : 'invisible'}`}>
                <button
                  onClick={handleForgotPassword} 
                  className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 focus:outline-none py-2 px-1 active:text-blue-800"
                >
                  Forgot Password?
                </button>
              </div>

              {activeTab === 'signup' && (
                <div className="flex items-center justify-start text-sm text-gray-600">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={e => setAgreeToTerms(e.target.checked)}
                    className="mr-3 accent-gray-900 w-5 h-5"
                  />
                  <label htmlFor="terms" className="cursor-pointer text-left">
                    I agree to the <a href="#" className="text-blue-600 hover:text-blue-700 active:text-blue-800">Terms</a>
                  </label>
                </div>
              )}

              <button 
                onClick={handleSignUp}
                className="w-full p-4 bg-gray-900 text-white border-none rounded-xl text-base font-semibold cursor-pointer hover:bg-gray-800 transition-colors active:bg-gray-700 mt-2"
              >
                {activeTab === 'signup' ? 'Create Account' : 'Sign In'}
              </button>

              <div className="text-sm text-gray-600 pt-2">
                {activeTab === 'signup' ? (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setActiveTab('login')} 
                      className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 active:text-blue-800"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={() => setActiveTab('signup')} 
                      className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 active:text-blue-800"
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {activeTab === 'login' && (
            <div className="pt-4 mt-2 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-3">
                Or log in with
              </div>
              <div className="flex justify-center gap-4">
                <button 
                  className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100"
                  aria-label="Login with Google"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-6 h-6" />
                </button>
                <button 
                  className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100"
                  aria-label="Login with Facebook"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
                </button>
                <button 
                  className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100"
                  aria-label="Login with Apple"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="Apple" className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-xl max-w-sm w-full">
            <div className="text-5xl text-green-500 mb-4">✓</div>
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