// components/Checkout.jsx (Updated to handle multiple courses)
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  
  // Handle both single course and multiple courses from cart
  const courses = location.state?.courses ? location.state.courses : [location.state?.course].filter(Boolean);
  
  // Calculate total
  const subtotal = courses.reduce((sum, course) => sum + course.price, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Clear cart after successful purchase
      clearCart();
      // Redirect to success page
      navigate('/purchase-success');
    }, 2000);
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No courses selected</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600">Complete your purchase to access your courses</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Billing Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="card" className="flex items-center">
                      Credit/Debit Card
                      <div className="ml-2 flex space-x-1">
                        <img src="https://cdn-icons-png.flaticon.com/32/196/196566.png" alt="Visa" className="h-5" />
                        <img src="https://cdn-icons-png.flaticon.com/32/196/196578.png" alt="Mastercard" className="h-5" />
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="upi">UPI Payment</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="netbanking"
                      name="paymentMethod"
                      value="netbanking"
                      checked={formData.paymentMethod === 'netbanking'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="netbanking">Net Banking</label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full mt-8 py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                  isProcessing 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isProcessing ? 'Processing Payment...' : `Complete Purchase - ₹${total}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {courses.map((course, index) => (
                <div key={course.id || index} className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-b-0">
                  <img
                    src={course.image || 'https://via.placeholder.com/80x60?text=Course'}
                    alt={course.title}
                    className="w-20 h-15 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600">By {course.instructor}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {course.price === 0 ? 'Free' : `₹${course.price}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18% GST):</span>
                <span>₹{tax}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">What's included:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Lifetime access to all courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Downloadable resources
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Certificate of completion
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile and TV access
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  7-day money-back guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;