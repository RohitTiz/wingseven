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

  // Button hover effects using CSS classes instead of GSAP
  const handleMouseEnter = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(-4px)';
      buttonRef.current.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    }
  };

  const handleMouseLeave = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(0)';
      buttonRef.current.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleMouseDown = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(2px)';
    }
  };

  const handleMouseUp = (buttonRef) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(-4px)';
    }
  };

  // Typing effect (same as before but without GSAP)
  useEffect(() => {
    const currentCourse = courses[currentCourseIndex];
    let timeout;

    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseDuration = 800;

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
          setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
          setTypingPhase('typing');
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [currentCourseIndex, displayText, typingPhase, courses]);

  const handleBrowseCourses = () => {
    if (button1Ref.current) {
      button1Ref.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button1Ref.current.style.transform = 'scale(1)';
        setTimeout(() => {
          button1Ref.current.style.transform = 'scale(0.95)';
          setTimeout(() => {
            button1Ref.current.style.transform = 'scale(1)';
            navigate('/Course');
          }, 100);
        }, 100);
      }, 100);
    }
  };

  const handleAboutUs = () => {
    if (button2Ref.current) {
      button2Ref.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button2Ref.current.style.transform = 'scale(1)';
        setTimeout(() => {
          button2Ref.current.style.transform = 'scale(0.95)';
          setTimeout(() => {
            button2Ref.current.style.transform = 'scale(1)';
            navigate('/about');
          }, 100);
        }, 100);
      }, 100);
    }
  };

  const buttonClasses = `
    relative px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
    rounded-lg font-semibold text-xs sm:text-sm md:text-base 
    cursor-pointer transition-all duration-300 
    transform hover:scale-105 active:scale-95 
    overflow-hidden shadow-md hover:shadow-lg
    border-none outline-none
  `;

  return (
    <section className="w-full bg-white border-b border-gray-200 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 box-border gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 overflow-hidden">
      {/* Left Section - Text Content */}
      <div className="w-full lg:flex-1 flex flex-col justify-center order-2 lg:order-1">
        {/* First line - Static text */}
        <div className="font-inter font-bold text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-gray-900 m-0 leading-tight">
          Find Your <span className="text-red-500">Ideal</span>
        </div>
        
        {/* Second line - Only the changing text moves */}
        <div className="font-inter font-bold text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-blue-600 m-0 h-[1.2em] leading-tight">
          {displayText}
        </div>
        
        {/* Third line - Static text */}
        <div className="font-inter font-bold text-3xl xs:text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
          Course, Build Skills
        </div>

        <p className="font-inter text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-[500px] md:max-w-[550px] lg:max-w-[600px]">
          Welcome to EduAll, where learning begins for every professional and lifelong learner.
        </p>

        <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
          <button
            ref={button1Ref}
            onClick={handleBrowseCourses}
            onMouseEnter={() => handleMouseEnter(button1Ref)}
            onMouseLeave={() => handleMouseLeave(button1Ref)}
            onMouseDown={() => handleMouseDown(button1Ref)}
            onMouseUp={() => handleMouseUp(button1Ref)}
            className={`${buttonClasses} bg-blue-600 text-white`}
            style={{ transition: 'all 0.3s ease-out' }}
          >
            <span className="relative z-20">Browse Courses ↗</span>
            <span className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-700 opacity-80 rounded-lg z-10"></span>
          </button>
          <button
            ref={button2Ref}
            onClick={handleAboutUs}
            onMouseEnter={() => handleMouseEnter(button2Ref)}
            onMouseLeave={() => handleMouseLeave(button2Ref)}
            onMouseDown={() => handleMouseDown(button2Ref)}
            onMouseUp={() => handleMouseUp(button2Ref)}
            className={`${buttonClasses} bg-white text-blue-600 border border-blue-600`}
            style={{ transition: 'all 0.3s ease-out' }}
          >
            <span className="relative z-20">About Us ↗</span>
            <span className="absolute inset-0 bg-gradient-to-b from-white to-blue-100 opacity-80 rounded-lg z-10"></span>
          </button>
        </div>

        {/* Statistics Section */}
        {/* Statistics Section */}
<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-w-[500px]">
  <div className="flex flex-col">
    <span className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">1500+</span>
    <span className="text-gray-600 text-xs sm:text-sm md:text-base">Free Coding Videos</span>
  </div>
  
  <div className="flex flex-col">
    <span className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">Real Projects</span>
    <span className="text-gray-600 text-xs sm:text-sm md:text-base">Java, DevOps & More</span>
  </div>
</div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:flex-1 flex flex-col items-center relative order-1 lg:order-2 mb-6 sm:mb-8 md:mb-10 lg:mb-0">
        <img 
          src="/image/main.png" 
          alt="Hero" 
          className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[700px] h-auto z-10" 
          loading="lazy"
        />
        
        {/* Decorative elements - Responsive sizes and positioning */}
        <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none z-20">
          <img 
            src="/heroimage/enrolledstudents.png" 
            alt="Enrolled" 
            className="absolute top-[-5%] left-[45%] w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] animate-float" 
            style={{ animationDuration: '3.5s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/curlyarrow.png" 
            alt="Curly Arrow" 
            className="absolute top-[15%] sm:top-[20%] left-[5%] w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] xl:w-[90px] animate-float" 
            style={{ animationDuration: '6s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/off.png" 
            alt="20% Off" 
            className="absolute top-[50%] sm:top-[55%] left-[50%] w-[80px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] animate-float" 
            style={{ animationDuration: '4.5s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/books.png" 
            alt="Books" 
            className="absolute bottom-[5%] left-[80%] w-[20px] sm:w-[25px] md:w-[30px] lg:w-[40px] xl:w-[50px] animate-float" 
            style={{ animationDuration: '3s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/gird.png" 
            alt="Grid" 
            className="absolute bottom-[0%] left-[0%] w-[25px] sm:w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px] animate-float" 
            style={{ animationDuration: '4s' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;