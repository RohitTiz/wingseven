import React from 'react';

const CourseDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Course Title Section */}
      <div className="mb-6">
        <span className="text-sm font-medium text-blue-600">Digital Marketing</span>
        <h1 className="text-3xl font-bold text-gray-800 mt-1 mb-3">
          The Complete Digital Marketing Course - 12 Courses in 1
        </h1>
        <p className="text-gray-600 mb-4">
          Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally 
          totally if. Delivered objection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
        </p>
        
        {/* Course Stats */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <span className="text-yellow-500 font-medium mr-1">4.5/5.0</span>
          </div>
          <div className="flex items-center">
            <span>12k Enrolled</span>
          </div>
          <div className="flex items-center">
            <span>All Levels</span>
          </div>
          <div className="flex items-center">
            <span>Last updated 09/2021</span>
          </div>
          <div className="flex items-center">
            <span>English</span>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {['Overview', 'Curriculum', 'Instructor', 'Reviews', 'FAQs', 'Comment'].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-1 font-medium text-sm border-b-2 ${
                  tab === 'Overview' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Course Description Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Course Description</h2>
        <p className="text-gray-600 mb-4">
          Welcome to the Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)
        </p>
        <p className="text-gray-600 mb-4">
          In this practical hands-on training, you're going to learn to become a digital marketing expert with this ultimate course
          bundle that includes 12 digital marketing courses in 1!
        </p>
        <p className="text-gray-600">
          If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;