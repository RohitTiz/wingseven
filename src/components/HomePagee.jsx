import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import FacultySection from '../components/FacultySection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import CourseSection from '../components/CourseSection.jsx';
import MetricsSection from '../components/MetricsSection.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import CourseHighlights from './NineSec.jsx';
import WhyJoinSection from '../components/WhyJoinSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ContactUs from '../components/ContactUs.jsx';
import ChatWidget from '../components/ChatWidget.jsx';
import Header from './Header.jsx';
import AuthSection from './AuthSection';
import Footer from './Footer.jsx';

const HomePagee = () => {
  return (
    <>
      <AuthSection />
      <HeroSection />
      <FeatureSection />
      <CourseSection />
      <FacultySection />
      <TestimonialSection />
      <MetricsSection />
      <PartnerLogos />
      <CourseHighlights/>
      <WhyJoinSection />
      <FAQSection />
      <ContactUs />
      <ChatWidget />
      {/* 
        The error is coming from inside Footer.jsx
        You need to modify the <style jsx> tag there
      */}
      <Footer />
    </>
  );
};

export default HomePagee;