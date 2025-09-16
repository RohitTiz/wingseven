import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useDarkMode } from '../context/DarkModeContext'; // Import the dark mode hook

// Forgot Password Modal Component
const ForgotPasswordModal = ({ onClose, onBack }) => {
  const { darkMode } = useDarkMode(); // Get dark mode state
  
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
    <div className={`fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-colors duration-300 ${darkMode ? 'bg-dark-bg/80' : 'bg-light-bg/80'}`}>
      <div className={`rounded-2xl p-6 w-full max-w-sm text-center relative shadow-lg transition-colors duration-300 ${darkMode ? 'bg-dark-card from-gray-800 to-gray-900' : 'bg-light-card from-blue-50 to-white'} bg-gradient-to-b`}>
        <button 
          onClick={onBack} 
          className={`absolute top-4 left-4 bg-transparent border-none text-lg cursor-pointer transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}
          aria-label="Go back"
        >
          ←
        </button>
        <button 
          onClick={onClose} 
          className={`absolute top-4 right-4 bg-transparent border-none text-xl cursor-pointer transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}
          aria-label="Close modal"
        >
          ×
        </button>
        
        {step === 'phone' ? (
          <>
            <h2 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>Forgot Password?</h2>
            <p className={`text-xs md:text-sm mb-6 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
              Enter your phone number and we'll send you an OTP to reset your password
            </p>
            
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className={`w-full md:w-28 p-3 rounded-xl border text-sm outline-none cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text' : 'bg-light-card border-light-border text-dark-text'}`}
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
                className={`w-full p-3 rounded-xl border text-sm outline-none transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                inputMode="numeric"
              />
            </div>
            
            <button 
              onClick={handleSendOtp}
              className={`w-full p-3 text-white border-none rounded-xl text-sm font-semibold cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-light-text hover:bg-gray-300' : 'bg-dark-text hover:bg-gray-800'}`}
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <h2 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>Enter OTP</h2>
            <p className={`text-xs md:text-sm mb-6 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
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
                  className={`w-10 h-12 rounded-xl border-2 text-lg text-center outline-none font-semibold transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                  maxLength="1"
                  inputMode="numeric"
                />
              ))}
            </div>
            
            <button 
              onClick={handleVerifyOtp}
              className={`w-full p-3 text-white border-none rounded-xl text-sm font-semibold cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-light-text hover:bg-gray-300' : 'bg-dark-text hover:bg-gray-800'}`}
            >
              Verify OTP
            </button>
            
            <div className={`text-xs md:text-sm mt-4 transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
              {canResend ? (
                <button
                  onClick={handleResend}
                  className={`cursor-pointer focus:outline-none transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}
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
  const { darkMode } = useDarkMode(); // Get dark mode state
  const navigate = useNavigate(); // Initialize navigate for redirection
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
    // Check for admin credentials
    if (email.includes('admin') && password === '1234') {
      // Redirect to admin page
      navigate('/admin');
      onClose(); // Close the modal
      return;
    }

    if (activeTab === 'signup') {
      if (firstName && lastName && email && phoneNumber && password && confirmPassword && agreeToTerms) {
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
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

  if (showForgotPassword) {
    return <ForgotPasswordModal onClose={onClose} onBack={handleBackToLogin} />;
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
      
      <div className={`fixed inset-0 backdrop-blur flex justify-center items-center z-[2000] p-4 transition-colors duration-300 ${darkMode ? 'bg-dark-bg/80' : 'bg-light-bg/80'}`}>
        <div className={`rounded-2xl p-6 w-full max-w-md text-center shadow-lg relative flex flex-col no-scrollbar transition-colors duration-300 ${darkMode ? 'bg-dark-card from-gray-800 to-gray-900' : 'bg-light-card from-blue-50 to-white'} bg-gradient-to-b ${
          activeTab === 'signup' ? 'min-h-[580px] max-h-[90vh]' : 'min-h-[520px] max-h-[90vh]'
        }`}>
          <button 
            onClick={onClose} 
            className={`absolute -top-6 -right-6 border rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer z-[2100] shadow-md transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text hover:bg-gray-700' : 'bg-light-card border-light-border text-dark-text hover:bg-gray-100'}`}
            aria-label="Close modal"
          >
            ×
          </button>

          <div className={`flex justify-center rounded-full mb-5 overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <button
              onClick={() => setActiveTab('login')}
              className={`px-4 py-2 border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1 ${activeTab === 'login' ? (darkMode ? 'bg-light-text text-dark-text' : 'bg-dark-text text-light-text') : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-500 hover:bg-gray-300')}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`px-4 py-2 border-none font-semibold rounded-full cursor-pointer transition-all text-sm flex-1 ${activeTab === 'signup' ? (darkMode ? 'bg-light-text text-dark-text' : 'bg-dark-text text-light-text') : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-500 hover:bg-gray-300')}`}
            >
              Register
            </button>
          </div>

          <h2 className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
            {activeTab === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className={`text-xs md:text-sm mb-5 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
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
                    className={`w-full p-3 rounded-xl border text-sm outline-none mb-3 transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-sm outline-none mb-3 transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                  />
                </>
              )}

              <input
                type="email"
                placeholder={activeTab === 'signup' ? 'Enter your email' : 'Enter your email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`w-full p-3 rounded-xl border text-sm outline-none mb-3 transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                inputMode="email"
              />

              {activeTab === 'signup' && (
                <div className="flex flex-col md:flex-row mb-3 gap-2">
                  <select
                    value={countryCode}
                    onChange={e => setCountryCode(e.target.value)}
                    className={`w-full md:w-24 p-3 rounded-xl border text-sm outline-none cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text' : 'bg-light-card border-light-border text-dark-text'}`}
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
                    className={`w-full p-3 rounded-xl border text-sm outline-none transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                    inputMode="tel"
                  />
                </div>
              )}

              <input
                type="password"
                placeholder={activeTab === 'signup' ? 'Create a password' : 'Enter your password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`w-full p-3 rounded-xl border text-sm outline-none mb-3 transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
              />

              {activeTab === 'signup' && (
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-sm outline-none mb-3 transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border text-light-text focus:border-light-border' : 'bg-light-card border-light-border text-dark-text focus:border-dark-border'}`}
                />
              )}

              <div className={`text-right text-xs mb-3 transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'} ${
                activeTab === 'login' ? 'visible' : 'invisible'
              }`}>
                <button
                  onClick={handleForgotPassword} 
                  className={`cursor-pointer focus:outline-none transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}
                >
                  Forgot Password?
                </button>
              </div>

              {activeTab === 'signup' && (
                <div className={`flex items-center justify-start mb-4 text-xs transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={e => setAgreeToTerms(e.target.checked)}
                    className={`mr-2 w-4 h-4 transition-colors duration-300 ${darkMode ? 'accent-light-text' : 'accent-dark-text'}`}
                  />
                  <label htmlFor="terms" className="cursor-pointer">
                    I agree to the <a href="#" className={`transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}>Terms</a>
                  </label>
                </div>
              )}

              <button 
                onClick={handleSignUp}
                className={`w-full p-3 text-white border-none rounded-xl text-sm font-semibold cursor-pointer mb-3 transition-colors duration-300 ${darkMode ? 'bg-light-text hover:bg-gray-300' : 'bg-dark-text hover:bg-gray-800'}`}
              >
                {activeTab === 'signup' ? 'Create Account' : 'Sign In'}
              </button>

              {activeTab === 'signup' ? (
                <div className={`text-xs transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
                  Already have an account?{' '}
                  <button
                    onClick={() => setActiveTab('login')} 
                    className={`cursor-pointer transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}
                  >
                    Login
                  </button>
                </div>
              ) : (
                <div className={`text-xs transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setActiveTab('signup')} 
                    className={`cursor-pointer transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>

          {activeTab === 'login' && (
            <div className="pt-2">
              <div className={`text-xs mb-2 transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
                Or log in with
              </div>
              <div className="flex justify-center gap-3">
                <button 
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border hover:bg-gray-700' : 'bg-light-card border-light-border hover:bg-gray-50'}`}
                  aria-label="Login with Google"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="18" />
                </button>
                <button 
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border hover:bg-gray-700' : 'bg-light-card border-light-border hover:bg-gray-50'}`}
                  aria-label="Login with Facebook"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="18" />
                </button>
                <button 
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-dark-card border-dark-border hover:bg-gray-700' : 'bg-light-card border-light-border hover:bg-gray-50'}`}
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
      {showSuccess && (
        <div className={`fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[4000] animate-fadeIn p-4 transition-colors duration-300 ${darkMode ? 'bg-dark-bg/80' : 'bg-light-bg/80'}`}>
          <div className={`rounded-2xl p-6 text-center shadow-lg max-w-sm w-full transform animate-popIn transition-colors duration-300 ${darkMode ? 'bg-dark-card' : 'bg-light-card'}`}>
            <div className="text-5xl text-green-500 mb-4 animate-bounce">✓</div>
            <div className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
              {activeTab === 'signup' ? 'Successfully Registered!' : 'Successfully Logged In!'}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;