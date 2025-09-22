import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const ExploreCourse = () => {
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dotsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (isVisible && typeof window !== 'undefined') {
      // Simulating GSAP timeline with CSS animations and setTimeout
      const animateElements = () => {
        // Title animation
        if (titleRef.current) {
          titleRef.current.style.animation = 'titleSlideIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }

        // Dots animation with stagger
        dotsRef.current.forEach((dot, index) => {
          if (dot) {
            setTimeout(() => {
              dot.style.animation = 'dotsPulse 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
            }, index * 150);
          }
        });

        // Continuous animations
        setTimeout(() => {
          if (titleRef.current) {
            const gradientText = titleRef.current.querySelector('.gradient-text');
            if (gradientText) {
              gradientText.style.animation = 'gradientShift 4s linear infinite';
            }
          }

          // Floating dots animation
          dotsRef.current.forEach((dot, index) => {
            if (dot) {
              setTimeout(() => {
                dot.style.animation += ', floatingDots 2s ease-in-out infinite';
                dot.style.animationDelay = `${index * 0.3}s`;
              }, 1000);
            }
          });
        }, 1500);
      };

      animateElements();
    }
  }, [isVisible]);

  return (
    <div className={`py-4 min-h-0 relative overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-5 left-10 w-32 h-32 rounded-full blur-3xl animate-float ${
          darkMode 
            ? 'bg-gradient-to-r from-blue-900 to-purple-900' 
            : 'bg-gradient-to-r from-blue-200 to-purple-200'
        }`}></div>
        <div className={`absolute top-10 right-20 w-24 h-24 rounded-full blur-2xl animate-float-delayed ${
          darkMode 
            ? 'bg-gradient-to-r from-cyan-900 to-blue-900' 
            : 'bg-gradient-to-r from-cyan-200 to-blue-200'
        }`}></div>
        <div className={`absolute bottom-10 left-1/3 w-40 h-40 rounded-full blur-3xl animate-float-slow ${
          darkMode 
            ? 'bg-gradient-to-r from-purple-900 to-pink-900' 
            : 'bg-gradient-to-r from-purple-200 to-pink-200'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full" ref={containerRef}>
        <div ref={sectionRef} className="text-center flex flex-col justify-center min-h-[70vh]">
          <h2 
            ref={titleRef}
            className={`font-space-grotesk font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 transition-colors duration-300 ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            } opacity-0 transform translate-y-12`}
            style={{ textShadow: darkMode ? '0 4px 20px rgba(255,255,255,0.05)' : '0 4px 20px rgba(0,0,0,0.1)' }}
          >
            Explore Our{' '}
            <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative">
              Courses
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 ${
                darkMode ? 'opacity-30' : 'opacity-20'
              } blur-sm`}></div>
            </span>
          </h2>
          
          {/* Futuristic decorative elements */}
          <div className="mt-4 flex justify-center space-x-6">
            {[1, 2, 3].map((item, index) => (
              <div 
                key={item}
                ref={el => dotsRef.current[index] = el}
                className={`w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transform scale-0 shadow-lg relative transition-colors duration-300 ${
                  darkMode ? 'shadow-purple-900/30' : 'shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm ${
                  darkMode ? 'opacity-70' : 'opacity-50'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        .font-space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
        }
        
        .gradient-text {
          background-size: 200% 100%;
          background-position: 0% 50%;
        }

        @keyframes titleSlideIn {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(30deg);
            filter: blur(5px);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-10px) rotateX(0deg);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0px);
          }
        }

        @keyframes dotsPulse {
          0% {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3) rotate(90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes floatingDots {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(15px) rotate(-3deg);
          }
          66% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ExploreCourse;