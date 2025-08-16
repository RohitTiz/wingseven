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
    // Increased width by changing max-w-md to max-w-xl (from ~448px to ~512px)
    // Decreased height by reducing padding and adjusting content spacing
    <div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-gray-700 flex flex-col h-full w-[120%] mx-auto"
      onDoubleClick={handleCourseClick}
    >
      {/* Image Section - now clickable */}
      {/* Reduced padding from p-4 to p-3 to decrease height */}
      <div 
        className="relative p-3 cursor-pointer"
        onClick={handleImageClick}
      >
        {/* Reduced image height from h-56 to h-48 (from 224px to 192px) */}
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
              <span>MOST POPULAR</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      {/* Reduced padding from p-6 to p-4 to decrease height */}
      <div className="p-4 flex flex-col flex-grow text-white">
        {/* Course Title - Enhanced */}
        <h3 className="font-bold text-xl mb-2 text-white leading-tight">
          {course.title}
        </h3>
        
        {/* Course Features/Highlights */}
        {/* Reduced margin-bottom from mb-4 to mb-2 */}
        {/* <div className="mb-2">
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span></span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span>Downloadable Resources</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span>Real-time Projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span>Expert Guidance</span>
            </li>
          </ul>
        </div> */}
        
        {/* Course Description */}
        {/* Reduced margin-bottom from mb-4 to mb-2 and changed line-clamp-3 to line-clamp-2 */}
        <p className="text-gray-300 text-sm mb-2 line-clamp-2 leading-relaxed">
          {course.description}
        </p>
        
        {/* Spacer to push bottom content down */}
        <div className="flex-grow"></div>
        
        {/* Course Stats */}
        {/* Reduced margin-bottom from mb-4 to mb-2 */}
        <div className="flex justify-between items-center mb-2 text-sm">
          <div className="flex items-center ">
            <div className="flex items-center  text-gray-400">
              {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg> */}
              {/* <span>Beginner</span> */}
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span>{course.duration || '100+ hrs'}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-sm font-medium text-white">{course.rating || '4.8'}</span>
          </div>
        </div>

        {/* Divider */}
        {/* Reduced margin-bottom from mb-4 to mb-2 */}
        <div className="border-t border-gray-600 w-full mb-2"></div>

        {/* Price Section - Enhanced */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              {/* Reduced text size from text-3xl to text-2xl */}
              <span className="text-2xl font-bold text-green-400">
                {course.price === 0 ? 'Free' : `₹${course.price}`}
              </span>
              {course.originalPrice && course.originalPrice > course.price && (
                <span className="text-base text-gray-400 line-through">
                  ₹{course.originalPrice}
                </span>
              )}
            </div>
            {course.originalPrice && course.originalPrice > course.price && (
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </span>
              </div>
            )}
          </div>
          
          {/* Enhanced Enroll Button */}
          {/* Reduced button size by changing py-3 to py-2 */}
          <div className="ml-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;