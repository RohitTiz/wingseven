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
import ExploreCourse from '../components/ExploreCourse'; // Import the new component

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
      {/* <div style={{ paddingTop: '0px' }}> */}
        <HeroSection />
        <MetricsSection />     
        <ExploreCourse />
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
      {/* </div> */}
    </>
  );
};

export default HomePage;