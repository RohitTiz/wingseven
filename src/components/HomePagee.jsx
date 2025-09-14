// HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import FacultySection from '../components/FacultySection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import CourseSection from '../components/CourseSection.jsx';
import FreeCourseSection from './FreeCourseSection.jsx';
import MetricsSection from '../components/MetricsSection.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import CourseHighlights from './NineSec.jsx';
import CertificatePreview from './CertificatePreview.jsx';
import WhyJoinSection from '../components/WhyJoinSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ContactUs from '../components/ContactUs.jsx';
import ChatWidget from '../components/ChatWidget.jsx';
import Header from './Header.jsx';
import AuthSection from './AuthSection';
import Footer from './Footer.jsx';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for the heading animation
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

  // Check for dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <AuthSection />
      <div style={{ paddingTop: '0px' }}>
        <HeroSection />
        <MetricsSection />
        
        {/* Section Header with the exact style from CourseSection */}
        <div ref={sectionRef} className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${darkMode ? 'text-light-text' : 'text-dark-text'}`} 
          style={{ transitionDelay: '200ms' }}
          >
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>
        </div>

        <CourseSection />
        <FreeCourseSection/>
        <FacultySection />
        <TestimonialSection />
        <PartnerLogos />
        <CourseHighlights/>
        <WhyJoinSection />
        <CertificatePreview/>
        <FAQSection />
        <ContactUs />
        <ChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;