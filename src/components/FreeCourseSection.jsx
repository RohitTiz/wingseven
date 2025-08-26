import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import courses from '../data/courses.json';

const FreeCourseSection = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter free courses from your existing data
  const freeCourses = courses.filter(course => course.isFree === true);
  
  // Manually add two specific free courses with Unsplash images
  const additionalFreeCourses = [
    {
      id: 'free-course-1',
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website from scratch.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development',
      isFree: true,
      type: 'free',
      rating: 4.7,
      duration: '12 hours',
      price: 0,
      originalPrice: 2999,
      isPopular: true
    },
    {
      id: 'free-course-2',
      title: 'Python for Beginners',
      description: 'Start your programming journey with Python fundamentals and build real-world applications.',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Programming',
      isFree: true,
      type: 'free',
      rating: 4.8,
      duration: '15 hours',
      price: 0,
      originalPrice: 3499,
      isPopular: true
    }
  ];
  
  // Combine the free courses from JSON with the additional free courses
  const allFreeCourses = [...freeCourses, ...additionalFreeCourses];
  
  const displayedCourses = showAllCourses ? allFreeCourses : allFreeCourses.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left side - Heading and decorative content */}
          <div className="lg:w-2/5 relative">
            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100">
              {/* Curvy line elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-tr-full bg-green-500 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-tl-full bg-blue-500 opacity-20"></div>
              
              <svg className="absolute top-8 right-8 w-16 h-16 text-green-400 opacity-30" viewBox="0 0 100 100">
                <path d="M20,20 Q40,5 50,30 T90,30" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,50 Q30,35 40,60 T80,60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30,80 Q50,65 60,90 T100,90" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              
              <div className="relative z-10">
                {/* Animated Heading */}
                <h2 className={`font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-6 leading-tight transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                  Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Potential</span> with Free Learning
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Access premium-quality courses at no cost. Start your journey today with our most popular free courses and gain valuable skills that matter.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">No credit card required</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Lifetime access to free courses</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Certificate of completion</p>
                  </div>
                </div>
                
                <button className="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Explore All Free Courses
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Course cards */}
          <div className="lg:w-3/5 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {additionalFreeCourses.map((course) => (
                <div key={course.id} className="flex justify-center">
                  <CourseCard 
                    course={course}
                    isFree={true}
                  />
                </div>
              ))}
            </div>
            
            {/* Additional free courses grid - without the "More Free Courses" heading */}
            {allFreeCourses.filter(course => !additionalFreeCourses.some(ac => ac.id === course.id)).length > 0 && (
              <div className="mt-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedCourses.filter(course => !additionalFreeCourses.some(ac => ac.id === course.id)).map((course) => (
                    <div key={course.id} className="flex justify-center">
                      <CourseCard 
                        course={course}
                        isFree={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Show More/Less Button */}
        {allFreeCourses.length > 6 && (
          <div className="w-full px-4 sm:px-6 mt-12">
            <div className="max-w-6xl mx-auto flex justify-center">
              <button 
                onClick={() => setShowAllCourses(!showAllCourses)}
                className={`px-8 py-3 font-extrabold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl h-12 ${
                  showAllCourses 
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {showAllCourses ? 'SHOW LESS' : 'VIEW ALL FREE COURSES (' + allFreeCourses.length + ')'}
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Add custom animation styles */}
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
    </section>
  );
};

export default FreeCourseSection;