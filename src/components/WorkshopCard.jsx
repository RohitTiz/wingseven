import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const WorkshopCard = ({ workshop }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { darkMode } = useDarkMode();

  function calculateTimeLeft() {
    const difference = new Date(workshop.date) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).length ? (
    <div className="flex justify-center space-x-4 mb-6">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white rounded-lg py-2 px-3 font-bold text-xl transition-colors duration-300`}>
            {value}
          </div>
          <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1 transition-colors duration-300`}>
            {interval}
          </span>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-xl font-semibold text-red-500 mb-6 transition-colors duration-300">
      Workshop has started!
    </div>
  );

  const progressPercentage = (workshop.enrolled / workshop.capacity) * 100;

  return (
    <div className={`${darkMode ? 'dark-card dark:bg-gray-800 dark:border-gray-700' : 'light-card bg-white'} rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border transition-colors duration-300`}>
      {/* Header Section */}
      <div className="relative">
        <img 
          src={workshop.image} 
          alt={workshop.title} 
          className="w-full h-48 object-cover"
        />
        <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white py-1 px-3 rounded-full text-sm font-semibold absolute top-4 right-4 transition-colors duration-300`}>
          {workshop.level}
        </div>
        <div className={`${darkMode ? 'bg-black/70 backdrop-blur-sm text-blue-300' : 'bg-white/90 backdrop-blur-sm text-blue-700'} py-1 px-3 rounded-lg absolute bottom-4 left-4 transition-colors duration-300`}>
          <span className="text-2xl font-bold">{workshop.price}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className={`text-2xl font-bold ${darkMode ? 'light-text text-white' : 'dark-text text-gray-800'} mb-2 transition-colors duration-300`}>
          {workshop.title}
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>
          {workshop.description}
        </p>
        
        {/* Instructor Info */}
        <div className="flex items-center mb-4">
          <div className={`${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-3 w-10 h-10 transition-colors duration-300`}>
            <span className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} font-semibold transition-colors duration-300`}>
              {workshop.instructor.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-700'} transition-colors duration-300`}>
              Instructor
            </p>
            <p className={`${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              {workshop.instructor}
            </p>
          </div>
        </div>

        {/* Timer */}
        {timerComponents}

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <svg className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2 transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
              {workshop.enrolled}/{workshop.capacity} enrolled
            </span>
          </div>
          <div className="flex items-center">
            <svg className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2 transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
              {workshop.duration}
            </span>
          </div>
          <div className="flex items-center col-span-2">
            <svg className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2 transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
              {workshop.location}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
              Filling fast
            </span>
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 transition-colors duration-300`}>
            <div 
              className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-2 rounded-full transition-colors duration-300`} 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {workshop.tags.map((tag, index) => (
            <span key={index} className={`${darkMode ? 'bg-blue-900/40 text-blue-200' : 'bg-blue-100 text-blue-800'} text-xs font-semibold px-2.5 py-0.5 rounded transition-colors duration-300`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button className={`w-full ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 px-4 rounded-lg transition duration-300`}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;