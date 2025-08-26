import React, { useEffect, useState, useRef } from 'react';

const FacultySection = () => {
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
      role: 'Web Development Specialist',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % facultyData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [facultyData.length]);

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

  return (
    <div ref={sectionRef} style={{ 
      padding: isMobile ? '40px 20px' : '70px 20px', 
      textAlign: 'center', 
      background: 'linear-gradient(to bottom, #f0f9ff, #e6f3ff, #f0f9ff)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100 to-transparent opacity-50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Enhanced Heading with Animation */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 relative z-10">
        <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 mb-4 sm:mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          OUR <span className="text-blue-600">FACULTY</span>
        </h2>
        <p className="text-blue-600 text-lg md:text-xl max-w-2xl mx-auto">
          Meet our team of industry experts dedicated to your success
        </p>
      </div>

      <div style={{ 
        position: 'relative', 
        height: isMobile ? '300px' : '350px', 
        width: '100%', 
        maxWidth: '880px', 
        margin: '0 auto',
        zIndex: 10
      }}>
        {facultyData.map((faculty, index) => {
          const position = getPositionClass(index);

          let containerStyle = {
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all 0.8s ease-in-out',
            opacity: 0,
            zIndex: 0,
          };

          if (position === 'left') {
            containerStyle = {
              ...containerStyle,
              transform: 'translateX(-190%) scale(0.88)',
              opacity: 1,
              zIndex: 1,
            };
          } else if (position === 'center') {
            containerStyle = {
              ...containerStyle,
              transform: 'translateX(-50%) scale(1.4)',
              opacity: 1,
              zIndex: 2,
            };
          } else if (position === 'right') {
            containerStyle = {
              ...containerStyle,
              transform: 'translateX(90%) scale(0.88)',
              opacity: 1,
              zIndex: 1,
            };
          }

          const imageSize = position === 'center' 
            ? (isMobile ? '160px' : '208px') 
            : (isMobile ? '120px' : '176px');

          return (
            <div key={index} style={containerStyle}>
              <div
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid white',
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                  margin: '0 auto',
                  transition: 'all 0.8s ease-in-out',
                }}
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

              {position === 'center' && (
                <div style={{ 
                  marginTop: '20px',
                  padding: isMobile ? '0 20px' : '0',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  padding: '15px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{ 
                    fontWeight: 'bold', 
                    color: '#1e40af', 
                    fontSize: isMobile ? '1.1rem' : '1.32rem', 
                    margin: 0 
                  }}>
                    {faculty.name}
                  </h3>
                  <p style={{ 
                    fontStyle: 'italic', 
                    color: '#3b82f6', 
                    fontSize: isMobile ? '0.9rem' : '1.1rem', 
                    margin: '5px 0 0' 
                  }}>
                    {faculty.role}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isMobile && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '10px',
          zIndex: 10,
          position: 'relative'
        }}>
          {facultyData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === activeIndex ? '#1e40af' : '#93c5fd',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

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
      `}</style>
    </div>
  );
};

export default FacultySection;