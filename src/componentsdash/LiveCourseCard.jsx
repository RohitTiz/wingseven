// componentsdash/LiveCourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const LiveCourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleClick = () => {
    navigate(`/dashboard/courses/${course.id}`);
  };

  return (
    <div 
      className={`rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 border-2 border-purple-500 transition-colors duration-300 ${
        darkMode ? 'dark-card' : 'light-card'
      }`}
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
          LIVE
        </div>
      </div>
      <div className="p-4">
        <h3 className={`font-bold text-lg mb-2 line-clamp-2 ${
          darkMode ? 'light-text' : 'dark-text'
        }`}>
          {course.title}
        </h3>
        <p className={`text-sm mb-2 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          By {course.instructor}
        </p>
        
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className={`text-sm font-semibold ${
            darkMode ? 'light-text' : 'dark-text'
          }`}>
            {course.rating}
          </span>
          <span className={`text-sm ml-1 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            ({course.reviews} reviews)
          </span>
        </div>
        
        <div className={`p-2 rounded-lg mb-3 ${
          darkMode ? 'bg-purple-900' : 'bg-purple-50'
        }`}>
          <p className={`text-sm font-semibold ${
            darkMode ? 'text-purple-300' : 'text-purple-700'
          }`}>
            Next session:
          </p>
          <p className={`text-sm ${
            darkMode ? 'text-purple-200' : 'text-purple-600'
          }`}>
            {course.upcomingSession}
          </p>
          <p className={`text-xs ${
            darkMode ? 'text-purple-300' : 'text-purple-500'
          }`}>
            {course.liveSchedule}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-sm mr-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {course.lessons} lessons
            </span>
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {course.duration}
            </span>
          </div>
          <div className={`font-bold ${
            darkMode ? 'text-purple-400' : 'text-purple-600'
          }`}>
            ${course.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourseCard;