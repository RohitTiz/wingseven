import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import CourseSection from '../components/CourseSection';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import AuthSection from '../components/AuthSection';
import FreeCourseSection from '../components/FreeCourseSection';
import BestWorkshopSection from '../components/BestWorkshopSection';
import InternshipSection from '../components/InternshipSection';

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <AuthSection />
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
      } overflow-hidden`}>
        {/* Hero Section with the same styling as blog page */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-fixed bg-center bg-cover" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&auto=format&fit=crop&q=60')`,
            minHeight: '35vh'
          }}>
          {/* Purple tint overlay matching blog page */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center h-full">
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Explore Our Courses
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } font-light mb-6`}>
              Transform your career with industry-leading courses designed by experts.
            </p>
            <div className={`max-w-md mx-auto relative transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                  darkMode
                    ? 'bg-white/20 text-gray-100 placeholder-gray-300'
                    : 'bg-white/90 text-gray-900'
                }`}
              />
            </div>
          </div>
        </section>

        <CourseSection />
      </div>
      <FreeCourseSection/>
      <BestWorkshopSection/>
      <InternshipSection/>
      
      <Footer />
      <ChatWidget />
    </>
  );
};

export default CoursePage;