import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseSuccess = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Purchase Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. You can now access your courses from your dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/dashboard/courses"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Go to My Courses
          </Link>
          <Link
            to="/courses"
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;