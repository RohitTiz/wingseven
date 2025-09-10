import React, { useEffect, useState, useRef } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const FacultySection = () => {
  const { darkMode } = useDarkMode();
  const facultyData = [
    {
      name: 'ANJALI MAM',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
      role: 'Lead Instructor',
    },
    {
      name: 'JOHN SIR',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300',
      role: 'Data Science Expert',
    },
    {
      name: 'PRIYA MAM',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300',
      role: 'Web Specialist',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set new interval
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % facultyData.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [facultyData.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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

  const getPositionClass = (index) => {
    if (isMobile) {
      return index === activeIndex ? 'center' : 'hidden';
    }
    
    const diff = (index - activeIndex + facultyData.length) % facultyData.length;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === 2) return 'left';

    return 'hidden';
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Reset the auto-rotation timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % facultyData.length);
    }, 3000);
  };

  return (
    <div 
      ref={sectionRef} 
      className={`faculty-section transition-colors duration-300 ${darkMode ? 'dark-bg' : 'light-bg'}`}
      style={{ 
        padding: isMobile ? '3rem 1.25rem' : '5rem 1.25rem', 
        textAlign: 'center', 
        background: darkMode 
          ? 'linear-gradient(to bottom, #1a202c, #2d3748, #1a202c)' 
          : 'linear-gradient(to bottom, #f0f9ff, #e6f3ff, #f0f9ff)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background elements */}
      <div className={`absolute top-0 left-0 right-0 h-96 bg-gradient-to-b ${darkMode ? 'from-gray-800 to-transparent' : 'from-blue-100 to-transparent'} opacity-50`}></div>
      <div className={`absolute top-20 right-10 w-72 h-72 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
      <div className={`absolute top-40 left-10 w-72 h-72 ${darkMode ? 'bg-blue-800' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
      <div className={`absolute bottom-20 left-20 w-72 h-72 ${darkMode ? 'bg-blue-700' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>

      {/* Enhanced Heading with Animation */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
        <h2 className={`font-bold text-3xl sm:text-4xl md:text-5xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${darkMode ? 'text-blue-200' : 'text-blue-900'}`} style={{ transitionDelay: '200ms' }}>
          OUR <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>FACULTY</span>
        </h2>
        {/* Removed the paragraph with the text "Meet our team of industry experts dedicated to your success" */}
      </div>

      <div className="faculty-container" style={{ 
        position: 'relative', 
        height: isMobile ? '380px' : '420px', 
        width: '100%', 
        maxWidth: '880px', 
        margin: '0 auto',
        zIndex: 10
      }}>
        {facultyData.map((faculty, index) => {
          const position = getPositionClass(index);

          let containerStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: 0,
            zIndex: 0,
            width: '100%'
          };

          if (position === 'left') {
            containerStyle = {
              ...containerStyle,
              transform: isMobile ? 'translate(-180%, -50%) scale(0.85)' : 'translate(-150%, -50%) scale(0.8)',
              opacity: 0.8,
              zIndex: 1,
            };
          } else if (position === 'center') {
            containerStyle = {
              ...containerStyle,
              transform: 'translate(-50%, -50%) scale(1)',
              opacity: 1,
              zIndex: 2,
            };
          } else if (position === 'right') {
            containerStyle = {
              ...containerStyle,
              transform: isMobile ? 'translate(80%, -50%) scale(0.85)' : 'translate(50%, -50%) scale(0.8)',
              opacity: 0.8,
              zIndex: 1,
            };
          } else if (position === 'hidden') {
            containerStyle = {
              ...containerStyle,
              opacity: 0,
              zIndex: 0,
              pointerEvents: 'none'
            };
          }

          // Increased the center image size in desktop view
          const imageSize = position === 'center' 
            ? (isMobile ? '180px' : '240px')  // Increased from 200px to 240px
            : (isMobile ? '120px' : '140px'); // Slightly reduced side images for better contrast

          return (
            <div key={index} style={containerStyle} className="faculty-card">
              <div
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid white',
                  boxShadow: darkMode 
                    ? '0 10px 30px rgba(96, 165, 250, 0.3)' 
                    : '0 10px 30px rgba(59, 130, 246, 0.3)',
                  margin: '0 auto',
                  transition: 'all 0.6s ease-in-out',
                }}
                className="faculty-image-container"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div style={{ 
                marginTop: '1.5rem',
                padding: isMobile ? '0 1rem' : '0',
                background: darkMode ? 'rgba(45, 55, 72, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: darkMode 
                  ? '0 8px 20px rgba(0, 0, 0, 0.3)' 
                  : '0 8px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.6s ease-in-out',
                maxWidth: '280px',
                marginLeft: 'auto',
                marginRight: 'auto',
                opacity: position === 'center' ? 1 : 0,
                transform: position === 'center' ? 'translateY(0)' : 'translateY(20px)'
              }}>
                <h3 style={{ 
                  fontWeight: '700', 
                  color: darkMode ? '#93c5fd' : '#1e40af', 
                  fontSize: isMobile ? '1.1rem' : '1.35rem', 
                  margin: '0 0 0.5rem',
                  lineHeight: '1.3'
                }}>
                  {faculty.name}
                </h3>
                <p style={{ 
                  fontStyle: 'italic', 
                  color: darkMode ? '#60a5fa' : '#3b82f6', 
                  fontSize: isMobile ? '0.9rem' : '1.05rem', 
                  margin: '0',
                  lineHeight: '1.4'
                }}>
                  {faculty.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots indicator - always visible but styled differently for mobile/desktop */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: isMobile ? '2rem' : '2.5rem',
        gap: '0.75rem',
        zIndex: 10,
        position: 'relative'
      }}>
        {facultyData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: isMobile ? '12px' : '14px',
              height: isMobile ? '12px' : '14px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === activeIndex 
                ? (darkMode ? '#60a5fa' : '#1e40af') 
                : (darkMode ? '#4b5563' : '#bfdbfe'),
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
              transform: index === activeIndex ? 'scale(1.2)' : 'scale(1)'
            }}
            aria-label={`View ${facultyData[index].name}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @media (max-width: 768px) {
          .faculty-container {
            height: 380px !important;
          }
        }
        
        @media (min-width: 769px) {
          .faculty-card {
            width: 33.333% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FacultySection;