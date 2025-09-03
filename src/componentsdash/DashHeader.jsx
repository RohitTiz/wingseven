// componentsdash/DashHeader.jsx
import React from 'react';

const DashHeader = ({ showActions, courseTitle }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {courseTitle || "My Dashboard"}
          </h1>
          <p className="text-sm text-gray-500">Welcome back! Here's your progressss.</p>
        </div>
        
        {showActions && (
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
              Download Resources
            </button>
            <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors">
              Ask Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashHeader;