import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

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
      buttonRef.current.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    }
  };

  const handleMouseLeave = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(0)';
      buttonRef.current.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleMouseDown = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(2px)';
      buttonRef.current.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleMouseUp = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(-4px)';
      buttonRef.current.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    }
  };

  // Improved typing effect with smoother transitions
  useEffect(() => {
    const currentCourse = courses[currentCourseIndex];
    let timeout;

    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseDuration = 1000; // Increased pause for better readability

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
          }, 300); // Brief pause before starting next word
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

  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50 border-b border-gray-100 flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 box-border gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 overflow-hidden -mt-[20px]">
      {/* Main container to center everything */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-1 items-center lg:items-start text-center lg:text-left">
          {/* Text container with proper line spacing */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            {/* First line - Static text */}
            <div className="font-inter font-bold text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-gray-900 m-0 leading-tight">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Ideal</span>
            </div>
            
            {/* Second line - Only the changing text with smooth transition */}
            <div className="font-inter font-bold text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 m-0 leading-tight min-h-[1.2em] flex items-center justify-center lg:justify-start">
              {displayText}
            </div>
            
            {/* Third line - Static text */}
            <div className="font-inter font-bold text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-gray-900 m-0 leading-tight">
              Course, Build Skills
            </div>
          </div>

          <p className="font-inter text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-[500px] md:max-w-[550px] lg:max-w-[600px]">
            Welcome to EduAll, where learning begins for every professional and lifelong learner. 
            Master in-demand technologies with our comprehensive curriculum.
          </p>

          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 justify-center lg:justify-start">
            <button
              ref={button1Ref}
              onClick={handleBrowseCourses}
              onMouseEnter={() => handleMouseEnter(button1Ref)}
              onMouseLeave={() => handleMouseLeave(button1Ref)}
              onMouseDown={() => handleMouseDown(button1Ref)}
              onMouseUp={() => handleMouseUp(button1Ref)}
              className="relative px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base cursor-pointer transition-all duration-300 transform overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md hover:shadow-xl"
            >
              <span className="relative z-20 flex items-center justify-center">
                Browse Courses
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              className="relative px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base cursor-pointer transition-all duration-300 transform overflow-hidden group bg-white text-blue-600 border border-blue-200 shadow-md hover:shadow-xl hover:border-blue-300"
            >
              <span className="relative z-20 flex items-center justify-center">
                About Us
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
            </button>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-[500px]">
            <div className="flex flex-col p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">1500+</span>
              <span className="text-gray-600 text-xs sm:text-sm md:text-base">Free Coding Videos</span>
            </div>
            
            <div className="flex flex-col p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">Real Projects</span>
              <span className="text-gray-600 text-xs sm:text-sm md:text-base">Java, DevOps & More</span>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative order-2 lg:order-2 mb-6 sm:mb-8 md:mb-10 lg:mb-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-lg opacity-70 z-0"></div>
            <img 
              src="/image/main.png" 
              alt="Hero" 
              className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[700px] h-auto z-10 relative rounded-lg" 
              loading="lazy"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none z-20">
            <div className="absolute top-[-5%] left-[45%] w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] animate-float" style={{ animationDuration: '3.5s' }}>
              <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                <span className="text-xs font-bold text-blue-600">12K+</span>
                <span className="text-[10px] text-gray-600">Students</span>
              </div>
            </div>
            
            <div className="absolute top-[15%] sm:top-[20%] left-[5%] w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] xl:w-[90px] animate-float" style={{ animationDuration: '6s' }}>
              <div className="bg-white p-1.5 rounded-full shadow-lg border border-gray-100">
                <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-[5%] left-[80%] w-[20px] sm:w-[25px] md:w-[30px] lg:w-[40px] xl:w-[50px] animate-float" style={{ animationDuration: '3s' }}>
              <div className="bg-white p-1 rounded-lg shadow-lg border border-gray-100">
                <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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