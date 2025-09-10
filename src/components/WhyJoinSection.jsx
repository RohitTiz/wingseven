import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const WhyJoinSection = () => {
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const features = [
    {
      icon: '🚀',
      title: 'Cutting-Edge Curriculum',
      description: 'Learn the latest technologies used by top tech companies today'
    },
    {
      icon: '👨‍💻',
      title: 'Industry Experts',
      description: 'Taught by professionals from FAANG companies with real-world experience'
    },
    {
      icon: '🎯',
      title: 'Project-Based Learning',
      description: 'Build portfolio-worthy projects that demonstrate your skills'
    },
    {
      icon: '🤝',
      title: 'Career Support',
      description: 'Resume reviews, mock interviews, and job placement assistance'
    },
    {
      icon: '🌐',
      title: 'Global Community',
      description: 'Join 50,000+ students in our exclusive learning network'
    },
    {
      icon: '💎',
      title: 'Lifetime Access',
      description: 'All course materials and updates available forever'
    }
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      id="why-join"
      className={`min-h-screen w-full flex items-center justify-center px-4 py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 ${
          darkMode ? 'bg-blue-800' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-1/3 -right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 ${
          darkMode ? 'bg-purple-800' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full mix-blend-multiply filter blur-[80px] opacity-5 transform -translate-x-1/2 -translate-y-1/2 ${
          darkMode ? 'bg-teal-800' : 'bg-teal-300'
        }`}></div>
      </div>

      {/* Grid lines background */}
      <div className={`absolute inset-0 bg-[size:24px_24px] ${
        darkMode 
          ? 'bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]' 
          : 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]'
      }`}></div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Header Section - Updated with animation */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${darkMode ? 'text-light-text' : 'text-dark-text'}`} style={{ transitionDelay: '200ms' }}>
            Why Join Our <span className="text-blue-600">CS Courses</span>?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${darkMode ? 'text-light-text' : 'text-dark-text'}`} style={{ transitionDelay: '400ms' }}>
            Transform your career with the most comprehensive and industry-relevant computer science education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Section */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-[500px]">
              <img
                src="/whychoose/mainnn.png"
                alt="Why Choose Us"
                className="absolute z-10 w-full h-full object-contain transition-all duration-700 hover:scale-105"
              />
              
              {/* Floating tech elements */}
              <div className={`absolute top-20 left-10 w-16 h-16 rounded-full backdrop-blur-sm border animate-float ${
                darkMode 
                  ? 'bg-blue-700/30 border-blue-400/30' 
                  : 'bg-blue-500/10 border-blue-300/30'
              }`}></div>
              <div className={`absolute bottom-20 right-10 w-24 h-24 rounded-lg backdrop-blur-sm border animate-float-delay ${
                darkMode 
                  ? 'bg-purple-700/30 border-purple-400/30' 
                  : 'bg-purple-500/10 border-purple-300/30'
              }`}></div>
              <div className={`absolute top-1/3 right-1/4 w-12 h-12 rounded-full backdrop-blur-sm border animate-float-delay-2 ${
                darkMode 
                  ? 'bg-teal-700/30 border-teal-400/30' 
                  : 'bg-teal-500/10 border-teal-300/30'
              }`}></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'
                } ${
                  darkMode 
                    ? 'bg-dark-card border-dark-border hover:border-blue-400/50' 
                    : 'bg-light-card border-light-border hover:border-blue-300/50'
                } border hover:shadow-lg`}
                style={{ transitionDelay: `${600 + (index * 100)}ms` }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-light-text' : 'text-dark-text'
                }`}>{feature.title}</h3>
                <p className={darkMode ? 'text-light-text' : 'text-dark-text'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className={`relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 group ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'
          }`} style={{ transitionDelay: '1300ms' }}>
            <span className="relative z-10 flex items-center justify-center">
              Enroll Now & Transform Your Career
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
          </button>
          
          <div className="mt-6 text-sm flex flex-wrap justify-center gap-4">
            
          </div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out infinite 1s; }
        .animate-float-delay-2 { animation: float 6s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

export default WhyJoinSection;