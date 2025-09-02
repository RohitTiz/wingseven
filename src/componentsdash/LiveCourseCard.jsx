// componentsdash/LiveCourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LiveCourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/courses/${course.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 border-2 border-purple-500"
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
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-2">By {course.instructor}</p>
        
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-sm font-semibold">{course.rating}</span>
          <span className="text-gray-500 text-sm ml-1">({course.reviews} reviews)</span>
        </div>
        
        <div className="bg-purple-50 p-2 rounded-lg mb-3">
          <p className="text-purple-700 text-sm font-semibold">Next session:</p>
          <p className="text-purple-600 text-sm">{course.upcomingSession}</p>
          <p className="text-purple-500 text-xs">{course.liveSchedule}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">{course.lessons} lessons</span>
            <span className="text-gray-500 text-sm">{course.duration}</span>
          </div>
          <div className="text-purple-600 font-bold">${course.price}</div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourseCard;