// componentsdash/moreInfo.jsx
import React from 'react';

const MoreInfo = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">About this course</h2>
      <p className="text-gray-700 mb-6">
        {course?.description || "This is a comprehensive course that will take you from beginner to advanced level."}
      </p>
      
      <h3 className="font-bold text-lg mb-3">What you'll learn</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {(course?.whatYouLearn || [
          "Master essential tools and features",
          "Create professional projects",
          "Apply best practices",
          "Build a portfolio of work"
        ]).map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <h3 className="font-bold text-lg mb-3">Requirements</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {(course?.requirements || [
          "Basic computer skills",
          "No prior experience needed",
          "Willingness to learn"
        ]).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3 className="font-bold text-lg mb-3">Course for</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Beginners who want to learn from scratch</li>
        <li>Intermediate users looking to improve their skills</li>
        <li>Anyone interested in expanding their knowledge</li>
      </ul>
    </div>
  );
};

export default MoreInfo;