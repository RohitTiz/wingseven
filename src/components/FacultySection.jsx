import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % facultyData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [facultyData.length]);

  const getPositionClass = (index) => {
    const diff = (index - activeIndex + facultyData.length) % facultyData.length;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === 2) return 'left';

    return 'hidden';
  };

  return (
    <div style={{ padding: '70px 20px', textAlign: 'center', background: '#fff' }}>
      <h2 style={{
        fontSize: '2.2rem',
        fontWeight: 'bold',
        color: '#1b3a57',
        marginBottom: '90px' // Increased from 50px to 90px to add 40px more spacing
      }}>
        OUR FACULTY
      </h2>

      <div style={{ position: 'relative', height: '350px', width: '100%', maxWidth: '880px', margin: '0 auto' }}>
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
              transform: 'translateX(-50%) scale(1.4)', // Bigger for center
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

          const imageSize = position === 'center' ? '208px' : '176px'; // 30% larger for center

          return (
            <div key={index} style={containerStyle}>
              <div
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid white',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
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
                <div style={{ marginTop: '20px' }}>
                  <h3 style={{ fontWeight: 'bold', color: '#1b3a57', fontSize: '1.32rem', margin: 0 }}>
                    {faculty.name}
                  </h3>
                  <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1.1rem', margin: 0 }}>
                    {faculty.role}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacultySection;
