import React from 'react';
import { useNavigate } from 'react-router-dom';
import EnrollNowButton from './EnrollNowButton';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  // Handle double click navigation
  const handleCourseClick = () => {
    navigate(`/courses/${course.id}`);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    navigate(`/courses/${course.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-gray-200 flex flex-col h-full w-full max-w-[26.4rem] mx-auto"
      onDoubleClick={handleCourseClick}
    >
      {/* Image Section - now clickable */}
      <div 
        className="relative p-3 cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={course.image || "/api/placeholder/400/250"}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        
        {/* Course Type Badge - Enhanced */}
        <div className="absolute top-6 right-6">
          <div className="relative">
            <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg ${
              course.type === 'live' ? 'bg-red-500 text-white' :
              course.type === 'recorded' ? 'bg-blue-500 text-white' :
              'bg-green-500 text-white'
            }`}>
              {course.type === 'live' ? 'LIVE' : course.type === 'recorded' ? 'RECORDED' : 'FREE'}
            </span>
          </div>
        </div>

        {/* Popular Course Badge - if applicable */}
        {course.isPopular && (
          <div className="absolute top-6 left-6">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <span>⭐</span>
              <span>POPULAR</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow text-gray-800">
        {/* Course Title - Enhanced */}
        <h3 className="font-bold text-lg mb-2 text-gray-900 leading-tight">
          {course.title}
        </h3>
        
        {/* Course Description */}
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-relaxed">
          {course.description}
        </p>
        
        {/* Spacer to push bottom content down */}
        <div className="flex-grow"></div>
        
        {/* Course Stats */}
        <div className="flex justify-between items-center mb-2 text-sm">
          <div className="flex items-center">
            <div className="flex items-center text-gray-500">
              {/* Optional difficulty level */}
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span>{course.duration || '100+ hrs'}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-sm font-medium text-gray-800">{course.rating || '4.8'}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-full mb-2"></div>

        {/* Price Section - Enhanced */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-600">
                {course.price === 0 ? 'Free' : `₹${course.price}`}
              </span>
              {course.originalPrice && course.originalPrice > course.price && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{course.originalPrice}
                </span>
              )}
            </div>
            {course.originalPrice && course.originalPrice > course.price && (
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </span>
              </div>
            )}
          </div>
          
          {/* Enhanced Enroll Button */}
          <div className="sm:ml-2">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm w-full sm:w-auto"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;