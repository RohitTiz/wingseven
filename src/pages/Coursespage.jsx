import React, { useState, useEffect, useRef } from 'react';
import CourseSection from '../components/CourseSection';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import AuthSection from '../components/AuthSection';
import FreeCourseSection from '../components/FreeCourseSection';
import BestWorkshopSection from '../components/BestWorkshopSection';
import InternshipSection from '../components/InternshipSection';

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    // Get the header height to adjust content padding
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section with padding to account for fixed header */}
        <div
          className="relative bg-fixed bg-cover bg-center flex items-center justify-center pt-0" // Added pt-16 for top padding
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&auto=format&fit=crop&q=60')`,
            height: `calc(54vh - ${headerHeight}px)`, // Adjust height based on header
            marginTop: `${headerHeight}px`, // Push down by header height
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transform your career with industry-leading courses designed by experts.
            </p>
            <div className="max-w-md mx-auto relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Use the CourseSection component */}
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