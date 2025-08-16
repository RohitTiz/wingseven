import React from "react";

const StatsCard = ({ title, value, change, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      <div className={`mt-2 flex items-center ${
        trend === "up" ? "text-green-600" : "text-red-600"
      }`}>
        {trend === "up" ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 13a1 1 0 100-2H9v-1h2a1 1 0 100-2H9V7a1 1 0 00-2 0v1H5a1 1 0 100 2h2v1H5a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 001-1z" clipRule="evenodd" />
          </svg>
        )}
        <span className="ml-1 text-sm font-medium">{change}</span>
      </div>
    </div>
  );
};

export default StatsCard;