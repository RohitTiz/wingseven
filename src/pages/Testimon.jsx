// pages/Testimon.jsx
import React from 'react';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';
const Testimon = () => {
  return (
    <>
      <AuthSection />
    <div className="min-h-screen pt-20 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Testimonials
      </h1>
      <p className="text-center text-gray-600">
        Testimonials page content will be added here.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Testimon;