// componentsdash/FreeCourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const FreeCourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleClick = () => {
    navigate(`/dashboard/courses/${course.id}`);
  };

  return (
    <div 
      className={`rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 transition-colors duration-300 ${
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
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
          FREE
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
        
        <div className="flex justify-between items-center mt-4">
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
          <div className="text-purple-600 font-bold">Free</div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;