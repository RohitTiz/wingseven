import React, { useState } from 'react';

const Checkout = () => {
  // Mock course data for demonstration
  const course = {
    title: "Complete Web Development Bootcamp",
    originalPrice: 3499,
    discountedPrice: 499,
    discountPercentage: 86
  };

  // Form state
  const [formData, setFormData] = useState({
    country: 'India',
    state: 'Delhi',
    paymentMethod: 'upi',
    upiMode: 'qr',
    upiId: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    netBankingBank: '',
    wallet: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  // Country and state options
  const countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'];
  const states = {
    'India': ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'West Bengal', 'Uttar Pradesh'],
    'United States': ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
    'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia']
  };

  const banks = ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Punjab National Bank', 'Bank of Baroda'];
  const wallets = ['Paytm', 'PhonePe', 'Google Pay', 'Amazon Pay', 'Mobikwik'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Payment method specific validations
    if (formData.paymentMethod === 'upi' && formData.upiMode === 'upi_id') {
      if (!formData.upiId) {
        newErrors.upiId = 'UPI ID is required';
      } else if (!formData.upiId.includes('@')) {
        newErrors.upiId = 'Please enter a valid UPI ID';
      }
    }

    if (formData.paymentMethod === 'cards') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      else if (formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = 'Please enter a valid card number';
      
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      else if (formData.cvv.length < 3) newErrors.cvv = 'Please enter a valid CVV';
      
      if (!formData.cardholderName) newErrors.cardholderName = 'Cardholder name is required';
    }

    if (formData.paymentMethod === 'netbanking' && !formData.netBankingBank) {
      newErrors.netBankingBank = 'Please select a bank';
    }

    if (formData.paymentMethod === 'wallets' && !formData.wallet) {
      newErrors.wallet = 'Please select a wallet';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    
    if (formData.paymentMethod === 'upi' && formData.upiMode === 'qr') {
      setShowQRCode(true);
      setIsProcessing(false);
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment processed successfully! 🎉');
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const renderPaymentForm = () => {
    switch (formData.paymentMethod) {
      case 'upi':
        return (
          <div className="border-2 border-blue-200 rounded-lg p-4 mb-4 bg-blue-50">
            <div className="flex items-center mb-4">
              <input 
                type="radio" 
                name="payment" 
                checked={formData.paymentMethod === 'upi'}
                onChange={() => handleInputChange('paymentMethod', 'upi')}
                className="mr-2 w-4 h-4" 
              />
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">UPI</span>
              </div>
              <span className="font-medium">UPI</span>
            </div>

            <div className="flex gap-4 mb-4">
              <button 
                onClick={() => {
                  handleInputChange('upiMode', 'qr');
                  setShowQRCode(false);
                }}
                className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-all ${
                  formData.upiMode === 'qr' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                QR code
              </button>
              <button 
                onClick={() => {
                  handleInputChange('upiMode', 'upi_id');
                  setShowQRCode(false);
                }}
                className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-all ${
                  formData.upiMode === 'upi_id' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                UPI ID
              </button>
            </div>

            {formData.upiMode === 'qr' ? (
              <div className="text-center">
                {showQRCode ? (
                  <div className="p-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-900 to-blue-600 mx-auto mb-4 flex items-center justify-center text-white text-xs rounded-lg shadow-lg">
                      <div className="text-center">
                        <div className="grid grid-cols-8 gap-1 mb-2">
                          {Array.from({length: 64}).map((_, i) => (
                            <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}></div>
                          ))}
                        </div>
                        <p className="text-xs">UPI QR</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 font-medium">Scan this QR code with any UPI app</p>
                    <p className="text-lg font-bold text-green-600 mb-2">₹{course.discountedPrice}</p>
                    <p className="text-xs text-gray-500">Payment will be processed automatically after scanning</p>
                  </div>
                ) : (
                  <p className="text-center text-sm text-gray-600 py-4">Click the "Proceed" button to generate a QR code for UPI payment.</p>
                )}
              </div>
            ) : (
              <div>
                <label className="block mb-2 text-gray-700 font-medium">UPI ID *</label>
                <input
                  type="text"
                  placeholder="yourname@paytm / yourname@gpay"
                  value={formData.upiId}
                  onChange={(e) => handleInputChange('upiId', e.target.value)}
                  className={`w-full border-2 rounded-lg px-4 py-3 transition-colors ${errors.upiId ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
                />
                {errors.upiId && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.upiId}
                  </p>
                )}
              </div>
            )}
          </div>
        );

      case 'cards':
        return (
          <div className="border-2 border-blue-200 rounded-lg p-6 mb-4 bg-blue-50">
            <div className="flex items-center mb-6">
              <input 
                type="radio" 
                name="payment" 
                checked={formData.paymentMethod === 'cards'}
                onChange={() => handleInputChange('paymentMethod', 'cards')}
                className="mr-3 w-4 h-4" 
              />
              <span className="font-medium">Credit/Debit Cards</span>
              <span className="ml-auto flex gap-2">
                <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" className="w-8 h-8" />
                <img src="https://img.icons8.com/color/32/mastercard.png" alt="MasterCard" className="w-8 h-8" />
                <img src="https://img.icons8.com/color/32/amex.png" alt="Amex" className="w-8 h-8" />
                <img src="https://img.icons8.com/color/32/rupay.png" alt="RuPay" className="w-8 h-8" />
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Card Number *</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                  maxLength="19"
                  className={`w-full border-2 rounded-lg px-4 py-3 text-lg tracking-wider transition-colors ${errors.cardNumber ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">Expiry Date *</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '');
                      if (value.length >= 2) {
                        value = value.substring(0, 2) + '/' + value.substring(2, 4);
                      }
                      handleInputChange('expiryDate', value);
                    }}
                    maxLength="5"
                    className={`w-full border-2 rounded-lg px-4 py-3 transition-colors ${errors.expiryDate ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.expiryDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">CVV *</label>
                  <input
                    type="password"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                    maxLength="4"
                    className={`w-full border-2 rounded-lg px-4 py-3 transition-colors ${errors.cvv ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.cvv}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">Cardholder Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.cardholderName}
                  onChange={(e) => handleInputChange('cardholderName', e.target.value.toUpperCase())}
                  className={`w-full border-2 rounded-lg px-4 py-3 transition-colors ${errors.cardholderName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
                />
                {errors.cardholderName && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.cardholderName}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 'netbanking':
        return (
          <div className="border-2 border-blue-200 rounded-lg p-6 mb-4 bg-blue-50">
            <div className="flex items-center mb-6">
              <input 
                type="radio" 
                name="payment" 
                checked={formData.paymentMethod === 'netbanking'}
                onChange={() => handleInputChange('paymentMethod', 'netbanking')}
                className="mr-3 w-4 h-4" 
              />
              <span className="font-medium">Net Banking</span>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Select Bank *</label>
              <select
                value={formData.netBankingBank}
                onChange={(e) => handleInputChange('netBankingBank', e.target.value)}
                className={`w-full border-2 rounded-lg px-4 py-3 transition-colors ${errors.netBankingBank ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
              >
                <option value="">Choose your bank</option>
                {banks.map(bank => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
              {errors.netBankingBank && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.netBankingBank}
                </p>
              )}
            </div>
          </div>
        );

      case 'wallets':
        return (
          <div className="border-2 border-blue-200 rounded-lg p-6 mb-4 bg-blue-50">
            <div className="flex items-center mb-6">
              <input 
                type="radio" 
                name="payment" 
                checked={formData.paymentMethod === 'wallets'}
                onChange={() => handleInputChange('paymentMethod', 'wallets')}
                className="mr-3 w-4 h-4" 
              />
              <span className="font-medium">Mobile Wallets</span>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Select Wallet *</label>
              <select
                value={formData.wallet}
                onChange={(e) => handleInputChange('wallet', e.target.value)}
                className={`w-full border-2 rounded-lg px-4 py-3 transition-colors ${errors.wallet ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'}`}
              >
                <option value="">Choose your wallet</option>
                {wallets.map(wallet => (
                  <option key={wallet} value={wallet}>{wallet}</option>
                ))}
              </select>
              {errors.wallet && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <img src="https://img.icons8.com/ios-filled/14/FF0000/error--v1.png" alt="error" /> {errors.wallet}
                </p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <img src="https://img.icons8.com/ios-filled/20/000000/long-arrow-left.png" alt="back" />
            <span>Back to Course</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl grid lg:grid-cols-3 gap-8">
        
        {/* Left: Billing + Payment */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing Address */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Billing Address</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Country *</label>
                <select 
                  value={formData.country}
                  onChange={(e) => {
                    handleInputChange('country', e.target.value);
                    handleInputChange('state', states[e.target.value]?.[0] || '');
                  }}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-blue-50 transition-colors"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-medium">State / Union Territory *</label>
                <select 
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-blue-50 transition-colors"
                >
                  {(states[formData.country] || []).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <strong>Note:</strong> We are required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
            </p>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
              Payment Method 
              <img src="https://img.icons8.com/ios-filled/20/4CAF50/lock--v1.png" alt="secure" />
            </h2>

            {renderPaymentForm()}

            {/* Other payment method options */}
            <div className="space-y-3">
              {formData.paymentMethod !== 'cards' && (
                <label className="flex items-center cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-gray-200">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={formData.paymentMethod === 'cards'}
                    onChange={() => handleInputChange('paymentMethod', 'cards')}
                    className="mr-3 w-4 h-4" 
                  />
                  <span className="font-medium">Credit/Debit Cards</span>
                  <span className="ml-auto flex gap-2">
                    <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" className="w-8 h-8" />
                    <img src="https://img.icons8.com/color/32/mastercard.png" alt="MasterCard" className="w-8 h-8" />
                    <img src="https://img.icons8.com/color/32/amex.png" alt="Amex" className="w-8 h-8" />
                    <img src="https://img.icons8.com/color/32/rupay.png" alt="RuPay" className="w-8 h-8" />
                  </span>
                </label>
              )}

              {formData.paymentMethod !== 'netbanking' && (
                <label className="flex items-center cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-gray-200">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={formData.paymentMethod === 'netbanking'}
                    onChange={() => handleInputChange('paymentMethod', 'netbanking')}
                    className="mr-3 w-4 h-4" 
                  />
                  <span className="font-medium">Net Banking</span>
                </label>
              )}

              {formData.paymentMethod !== 'wallets' && (
                <label className="flex items-center cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-gray-200">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={formData.paymentMethod === 'wallets'}
                    onChange={() => handleInputChange('paymentMethod', 'wallets')}
                    className="mr-3 w-4 h-4" 
                  />
                  <span className="font-medium">Mobile Wallets</span>
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Original Price:</span>
                <span className="line-through">₹{course.originalPrice}</span>
              </div>
              <div className="flex justify-between text-green-600 font-medium">
                <span>Discount ({course.discountPercentage}% Off):</span>
                <span>-₹{course.originalPrice - course.discountedPrice}</span>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-between text-2xl font-bold text-gray-800">
                <span>Total:</span>
                <span className="text-green-600">₹{course.discountedPrice}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6 p-3 bg-gray-50 rounded-lg">
              By completing your purchase, you agree to our <a href="#" className="text-blue-600 underline hover:text-blue-800">Terms of Use</a>.
            </p>

            <button 
              onClick={handleProceed}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
            >
              <img src="https://img.icons8.com/ios-filled/20/FFFFFF/lock--v1.png" alt="secure" /> 
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                'Complete Purchase'
              )}
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 text-center border border-green-200">
            <h3 className="font-bold mb-2 text-green-800 flex items-center justify-center gap-2 text-lg">
              <img src="https://img.icons8.com/ios-filled/24/4CAF50/checkmark--v1.png" alt="guarantee" />
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-sm text-gray-700">
              Not satisfied? Get a full refund within 30 days. Simple and straightforward!
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-lg p-6 text-center border border-orange-200">
            <p className="text-sm text-gray-700">
              <img src="https://img.icons8.com/ios-filled/16/FF6B00/fire-element--v1.png" alt="hot" /> <span className="font-bold text-orange-600">8 people</span> in your country have enrolled in this course in the last 24 hours!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;