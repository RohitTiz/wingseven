import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const { darkMode } = useDarkMode();

  const courses = [
    "Java", 
    "Spring Boot", 
    "Data Science", 
    "Machine Learning", 
    "React.js", 
    "Python", 
    "DevOps", 
    "Node.js",
    "Angular",
    "MongoDB"
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typingPhase, setTypingPhase] = useState('typing');

  // Button hover effects
  const handleMouseEnter = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(-4px)';
      buttonRef.current.style.boxShadow = darkMode 
        ? '0 8px 20px rgba(255, 255, 255, 0.1)'
        : '0 8px 20px rgba(0, 0, 0, 0.15)';
    }
  };

  const handleMouseLeave = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(0)';
      buttonRef.current.style.boxShadow = darkMode 
        ? '0 4px 12px rgba(255, 255, 255, 0.05)'
        : '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleMouseDown = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(2px)';
      buttonRef.current.style.boxShadow = darkMode 
        ? '0 2px 6px rgba(255, 255, 255, 0.05)'
        : '0 2px 6px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleMouseUp = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(-4px)';
      buttonRef.current.style.boxShadow = darkMode 
        ? '0 8px 20px rgba(255, 255, 255, 0.1)'
        : '0 8px 20px rgba(0, 0, 0, 0.15)';
    }
  };

  // Improved typing effect with smoother transitions
  useEffect(() => {
    const currentCourse = courses[currentCourseIndex];
    let timeout;

    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseDuration = 1000;

    switch (typingPhase) {
      case 'typing':
        if (displayText.length < currentCourse.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentCourse.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => setTypingPhase('pausing'), pauseDuration);
        }
        break;

      case 'pausing':
        timeout = setTimeout(() => setTypingPhase('erasing'), pauseDuration);
        break;

      case 'erasing':
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, erasingSpeed);
        } else {
          timeout = setTimeout(() => {
            setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
            setTypingPhase('typing');
          }, 300);
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [currentCourseIndex, displayText, typingPhase, courses]);

  const handleBrowseCourses = () => {
    navigate('/Course');
  };

  const handleAboutUs = () => {
    navigate('/about');
  };

  // Dynamic classes based on dark mode
  const sectionClasses = `w-full min-h-screen border-b flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4 box-border gap-2 sm:gap-3 md:gap-4 overflow-hidden ${
    darkMode 
      ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700' 
      : 'bg-gradient-to-br from-white to-blue-50 border-gray-100'
  } transition-colors duration-300`;

  const headingClasses = `font-inter font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[3rem] m-0 leading-tight ${
    darkMode ? 'text-white' : 'text-gray-900'
  } transition-colors duration-300`;

  const textClasses = `font-inter text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-4 max-w-[450px] md:max-w-[500px] lg:max-w-[550px] ${
    darkMode ? 'text-gray-300' : 'text-gray-600'
  } transition-colors duration-300`;

  const statCardClasses = `flex flex-col p-2 sm:p-3 rounded-lg shadow-sm border ${
    darkMode 
      ? 'bg-gray-800 border-gray-700 text-white' 
      : 'bg-white border-gray-100 text-gray-900'
  } transition-colors duration-300`;

  const statSubtextClasses = `text-xs sm:text-sm ${
    darkMode ? 'text-gray-400' : 'text-gray-600'
  } transition-colors duration-300`;

  const decorativeElementClasses = `rounded-xl shadow-lg border flex flex-col items-center ${
    darkMode 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-white border-gray-100'
  } transition-colors duration-300`;

  return (
    <section className={sectionClasses}>
      {/* Main container to center everything */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center h-full">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-1 items-center lg:items-start text-center lg:text-left lg:mr-[20px] xl:mr-[30px]">
          {/* Text container with proper line spacing */}
          <div className="mb-1 sm:mb-2 md:mb-3">
            {/* First line - Static text */}
            <div className={headingClasses}>
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Ideal</span>
            </div>
            
            {/* Second line - Only the changing text with smooth transition */}
            <div className="font-inter font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[3rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 m-0 leading-tight min-h-[1.2em] flex items-center justify-center lg:justify-start">
              {displayText}
            </div>
            
            {/* Third line - Static text */}
            <div className={headingClasses}>
              Course, Build Skills
            </div>
          </div>

          <p className={textClasses}>
            Welcome to EduAll, where learning begins for every professional and lifelong learner. 
            Master in-demand technologies with our comprehensive curriculum.
          </p>

          <div className="flex gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5 justify-center lg:justify-start">
            <button
              ref={button1Ref}
              onClick={handleBrowseCourses}
              onMouseEnter={() => handleMouseEnter(button1Ref)}
              onMouseLeave={() => handleMouseLeave(button1Ref)}
              onMouseDown={() => handleMouseDown(button1Ref)}
              onMouseUp={() => handleMouseUp(button1Ref)}
              className="relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-300 transform overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md hover:shadow-xl"
            >
              <span className="relative z-20 flex items-center justify-center">
                Browse Courses
                <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
            </button>
            
            <button
              ref={button2Ref}
              onClick={handleAboutUs}
              onMouseEnter={() => handleMouseEnter(button2Ref)}
              onMouseLeave={() => handleMouseLeave(button2Ref)}
              onMouseDown={() => handleMouseDown(button2Ref)}
              onMouseUp={() => handleMouseUp(button2Ref)}
              className={`relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-300 transform overflow-hidden group border shadow-md hover:shadow-xl ${
                darkMode 
                  ? 'bg-gray-800 text-white border-gray-700 hover:border-gray-600' 
                  : 'bg-white text-blue-600 border-blue-200 hover:border-blue-300'
              }`}
            >
              <span className="relative z-20 flex items-center justify-center">
                About Us
                <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}></span>
            </button>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-[450px]">
            <div className={statCardClasses}>
              <span className="font-bold text-lg sm:text-xl md:text-2xl">1500+</span>
              <span className={statSubtextClasses}>Free Coding Videos</span>
            </div>
            
            <div className={statCardClasses}>
              <span className="font-bold text-lg sm:text-xl md:text-2xl">Real Projects</span>
              <span className={statSubtextClasses}>Java, DevOps & More</span>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative order-2 lg:order-2 mb-2 sm:mb-3 md:mb-4 lg:mb-0">
          <div className="relative">
            <div className={`absolute -inset-2 sm:-inset-3 rounded-2xl blur-lg opacity-70 z-0 ${
              darkMode 
                ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
                : 'bg-gradient-to-r from-blue-100 to-indigo-100'
            }`}></div>
            <img 
              src="/image/main.png" 
              alt="Hero" 
              className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] h-auto z-10 relative rounded-lg" 
              loading="lazy"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none z-20">
            <div className="absolute top-[-5%] left-[45%] w-[50px] sm:w-[70px] md:w-[90px] lg:w-[100px] xl:w-[120px] animate-float" style={{ animationDuration: '3.5s' }}>
              <div className={decorativeElementClasses}>
                <span className={`text-xs font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>12K+</span>
                <span className={`text-[10px] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Students</span>
              </div>
            </div>
            
            <div className="absolute top-[15%] sm:top-[20%] left-[5%] w-[25px] sm:w-[35px] md:w-[45px] lg:w-[50px] xl:w-[60px] animate-float" style={{ animationDuration: '6s' }}>
              <div className={`p-1 sm:p-1.5 rounded-full shadow-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-blue-400' 
                  : 'bg-white border-gray-100 text-blue-500'
              }`}>
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-[5%] left-[80%] w-[12px] sm:w-[18px] md:w-[22px] lg:w-[25px] xl:w-[35px] animate-float" style={{ animationDuration: '3s' }}>
              <div className={`p-0.5 sm:p-1 rounded-lg shadow-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-blue-400' 
                  : 'bg-white border-gray-100 text-blue-500'
              }`}>
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;