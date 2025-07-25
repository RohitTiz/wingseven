import React, { useEffect, useRef } from 'react';

// Custom Cursor Component
const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const followMouse = () => {
      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      if (circle) {
        circle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;
      }

      requestAnimationFrame(followMouse);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(followMouse);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-blue-500 bg-opacity-15 pointer-events-none z-[9999]"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-[10000]"
      />
    </>
  );
};

// Main Hero Section
const HeroSection = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200 flex flex-wrap justify-between items-center px-20 py-16 box-border gap-10 overflow-hidden hero-container">
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

          @media (max-width: 768px) {
            .hero-container {
              flex-direction: column;
              padding: 40px 20px;
            }

            .hero-left {
              align-items: center;
              text-align: center;
            }

            .hero-buttons {
              justify-content: center;
            }

            .hero-image-wrapper {
              width: 100%;
              max-width: 350px;
              margin-top: 40px;
              scale: 0.95;
            }

            .decor-group {
              transform: scale(0.85);
              top: 0;
              left: 0;
            }
          }
        `}
      </style>

      {/* Left Section */}
      <div className="flex-1 min-w-[500px] flex flex-col justify-center hero-left">
        <h1 className="font-inter font-bold text-5xl text-gray-900 m-0 animate-fadeInUp" style={{ animationDuration: '0.6s' }}>
          Find Your <span className="text-red-500">Ideal</span>
        </h1>
        <h1 className="font-inter font-bold text-5xl text-gray-900 m-0 animate-fadeInUp" style={{ animationDuration: '0.7s' }}>Course, Build</h1>
        <h1 className="font-inter font-bold text-5xl text-blue-600 mb-6 animate-fadeInUp" style={{ animationDuration: '0.8s' }}>Skills</h1>

        <p className="font-inter text-base text-gray-600 leading-relaxed mb-8 max-w-[500px] animate-fadeInUp" style={{ animationDuration: '0.9s' }}>
          Welcome to EduAll, where learning begins for every professional and lifelong learner.
        </p>

        <div className="flex gap-4 flex-wrap hero-buttons">
          <button
            className="bg-blue-600 text-white px-6 py-3 border-none rounded-md font-semibold text-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Browse Courses ↗
          </button>
          <button
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-semibold text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-50"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5faff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            About Us ↗
          </button>
        </div>
      </div>

      {/* Right Section - Images with Decorations */}
      <div className="flex-1 min-w-[500px] flex flex-col items-center relative hero-image-wrapper">
        <img src="/image/main.png" alt="Hero" className="w-full max-w-[400px] h-auto z-10" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 decor-group">
          <img 
            src="/heroimage/triangle.png" 
            alt="Triangle" 
            className="absolute top-[10%] right-[10%] w-[60px] animate-float" 
            style={{ animationDuration: '4s' }}
          />
          <img 
            src="/heroimage/Button.png" 
            alt="Button" 
            className="absolute top-[45%] right-[3%] w-[120px] animate-float" 
            style={{ animationDuration: '5s' }}
          />
          <img 
            src="/heroimage/enrolledstudents.png" 
            alt="Enrolled" 
            className="absolute top-[-5%] left-[45%] w-[160px] animate-float" 
            style={{ animationDuration: '3.5s' }}
          />
          <img 
            src="/heroimage/curlyarrow.png" 
            alt="Curly Arrow" 
            className="absolute top-[20%] left-[5%] w-[90px] animate-float" 
            style={{ animationDuration: '6s' }}
          />
          <img 
            src="/heroimage/off.png" 
            alt="20% Off" 
            className="absolute top-[55%] left-[50%] w-[180px] animate-float" 
            style={{ animationDuration: '4.5s' }}
          />
          <img 
            src="/heroimage/books.png" 
            alt="Books" 
            className="absolute bottom-[5%] left-[80%] w-[50px] animate-float" 
            style={{ animationDuration: '3s' }}
          />
          <img 
            src="/heroimage/gird.png" 
            alt="Grid" 
            className="absolute bottom-[0%] left-[0%] w-[60px] animate-float" 
            style={{ animationDuration: '4s' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;