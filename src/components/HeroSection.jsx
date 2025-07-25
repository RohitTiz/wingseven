import React, { useEffect, useRef, useState } from 'react';

// Custom Cursor Component - Only shows on non-touch devices
const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Check if the device supports touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const circle = circleRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let animationFrameId;

    const followMouse = () => {
      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      if (circle) {
        circle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;
      }

      animationFrameId = requestAnimationFrame(followMouse);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(followMouse);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-blue-500 bg-opacity-15 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-[10000] transition-transform duration-50 ease-linear"
      />
    </>
  );
};

// Main Hero Section
const HeroSection = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200 flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-10 md:py-16 box-border gap-10 overflow-hidden hero-container">
      <CustomCursor />

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s forwards;
          }

          .animate-float {
            animation: float 3s infinite ease-in-out;
          }

          @media (max-width: 768px) {
            .hero-left {
              min-width: 100% !important;
              align-items: center;
              text-align: center;
            }

            .hero-buttons {
              justify-content: center;
            }

            .hero-image-wrapper {
              min-width: 100% !important;
              max-width: 100%;
              margin-top: 40px;
            }

            .decor-group img {
              max-width: 30% !important;
            }
          }

          @media (max-width: 480px) {
            .hero-container {
              padding: 30px 15px;
            }

            .decor-group {
              display: none;
            }
          }
        `}
      </style>

      {/* Left Section */}
      <div className="w-full md:flex-1 md:min-w-[500px] flex flex-col justify-center hero-left">
        <h1 className="font-inter font-bold text-4xl md:text-5xl text-gray-900 m-0 animate-fadeInUp" style={{ animationDuration: '0.6s' }}>
          Find Your <span className="text-red-500">Ideal</span>
        </h1>
        <h1 className="font-inter font-bold text-4xl md:text-5xl text-gray-900 m-0 animate-fadeInUp" style={{ animationDuration: '0.7s' }}>Course, Build</h1>
        <h1 className="font-inter font-bold text-4xl md:text-5xl text-blue-600 mb-6 animate-fadeInUp" style={{ animationDuration: '0.8s' }}>Skills</h1>

        <p className="font-inter text-base text-gray-600 leading-relaxed mb-8 max-w-[500px] animate-fadeInUp" style={{ animationDuration: '0.9s' }}>
          Welcome to EduAll, where learning begins for every professional and lifelong learner.
        </p>

        <div className="flex gap-4 flex-wrap hero-buttons">
          <button
            className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 border-none rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            Browse Courses ↗
          </button>
          <button
            className="bg-white text-blue-600 border border-blue-600 px-5 py-2 md:px-6 md:py-3 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-50 active:bg-blue-100"
          >
            About Us ↗
          </button>
        </div>
      </div>

      {/* Right Section - Images with Decorations */}
      <div className="w-full md:flex-1 md:min-w-[500px] flex flex-col items-center relative hero-image-wrapper">
        <img 
          src="/image/main.png" 
          alt="Hero" 
          className="w-full max-w-[300px] md:max-w-[400px] h-auto z-10" 
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 decor-group">
          <img 
            src="/heroimage/triangle.png" 
            alt="Triangle" 
            className="absolute top-[10%] right-[10%] w-[40px] md:w-[60px] animate-float" 
            style={{ animationDuration: '4s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/Button.png" 
            alt="Button" 
            className="absolute top-[45%] right-[3%] w-[80px] md:w-[120px] animate-float" 
            style={{ animationDuration: '5s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/enrolledstudents.png" 
            alt="Enrolled" 
            className="absolute top-[-5%] left-[45%] w-[120px] md:w-[160px] animate-float" 
            style={{ animationDuration: '3.5s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/curlyarrow.png" 
            alt="Curly Arrow" 
            className="absolute top-[20%] left-[5%] w-[60px] md:w-[90px] animate-float" 
            style={{ animationDuration: '6s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/off.png" 
            alt="20% Off" 
            className="absolute top-[55%] left-[50%] w-[140px] md:w-[180px] animate-float" 
            style={{ animationDuration: '4.5s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/books.png" 
            alt="Books" 
            className="absolute bottom-[5%] left-[80%] w-[30px] md:w-[50px] animate-float" 
            style={{ animationDuration: '3s' }}
            loading="lazy"
          />
          <img 
            src="/heroimage/gird.png" 
            alt="Grid" 
            className="absolute bottom-[0%] left-[0%] w-[40px] md:w-[60px] animate-float" 
            style={{ animationDuration: '4s' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;