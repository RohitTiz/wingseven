import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';
import WorkshopCard from '../components/WorkshopCard';
import { workshops } from '../data/workshops';

const Workshops = () => {
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredWorkshops = filter === 'all' 
    ? workshops 
    : workshops.filter(workshop => workshop.level.toLowerCase() === filter);

  // SVG Icons for stats section
  const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const InstructorIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  // Filter Icons
  const AllIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );

  const BeginnerIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const IntermediateIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  const AdvancedIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );

  return (
    <>
      <AuthSection />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
          minHeight: '40vh'
        }}>
        
        {/* Purple tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center h-full">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Upcoming Workshops
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } font-light mb-8`}>
            Join our expert-led workshops and enhance your skills with hands-on learning experiences
          </p>
        </div>
      </section>

      {/* Unified Stats and Filter Section */}
      <section className={`py-16 relative overflow-hidden transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      }`}>
        {/* Background elements */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-200 to-indigo-300'
        }`}></div>
        <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-indigo-200 to-purple-300'
        }`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: `${workshops.length}+`, label: 'Upcoming Workshops', icon: <CalendarIcon /> },
              { value: '15+', label: 'Expert Instructors', icon: <InstructorIcon /> },
              { value: '98%', label: 'Satisfaction Rate', icon: <StarIcon /> },
              { value: '500+', label: 'Participants', icon: <UsersIcon /> }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-gray-800/60 border border-slate-700/50 text-white hover:shadow-blue-500/20' 
                    : 'bg-white/90 border border-white/50 text-gray-800 hover:shadow-blue-500/20'
                } shadow-lg flex flex-col items-center text-center`}
              >
                <div className={`p-3 rounded-full mb-3 ${darkMode ? 'bg-slate-700/50' : 'bg-blue-100'}`}>
                  <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {stat.icon}
                  </span>
                </div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                    : 'text-blue-600'
                }`}>
                  {stat.value}
                </div>
                <p className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
            
          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'All Workshops', icon: <AllIcon /> },
              { key: 'beginner', label: 'Beginner', icon: <BeginnerIcon /> },
              { key: 'intermediate', label: 'Intermediate', icon: <IntermediateIcon /> },
              { key: 'advanced', label: 'Advanced', icon: <AdvancedIcon /> }
            ].map((item) => (
              <button 
                key={item.key}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center ${
                  filter === item.key 
                    ? darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 border border-blue-500/50' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : darkMode
                      ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 shadow-md backdrop-blur-sm' 
                      : 'bg-white/90 text-gray-700 border border-gray-200/50 hover:bg-gray-100/80 shadow-md backdrop-blur-sm'
                }`}
                onClick={() => setFilter(item.key)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className={`py-16 transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-500 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300' 
              : 'text-gray-800'
          }`}>
            {filter === 'all' ? 'All Workshops' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Workshops`}
          </h2>
          
          {filteredWorkshops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {filteredWorkshops.map(workshop => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className={`inline-block p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm' 
                  : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
              }`}>
                <p className={`text-xl transition-colors duration-300 ${
                  darkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  No workshops found for this category.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 text-center relative overflow-hidden transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700'
      }`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 -translate-x-32 -translate-y-32 animate-pulse ${
            darkMode ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-white'
          }`}></div>
          <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 translate-x-32 translate-y-32 animate-pulse delay-1000 ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-white'
          }`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200' 
              : 'text-white'
          }`}>
            Interested in Hosting a Workshop?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-blue-100'
          }`}>
            Share your expertise with our community of learners and professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-blue-700/30 border border-blue-500/30' 
                : 'bg-white text-blue-600 hover:bg-gray-100 shadow-blue-900/20'
            }`}>
              Become an Instructor
            </button>
            <button className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 backdrop-blur-sm ${
              darkMode 
                ? 'border-slate-400/50 text-slate-300 hover:bg-slate-800/30 hover:border-slate-300/70 shadow-slate-700/10' 
                : 'border-white text-white hover:bg-white/20 shadow-blue-900/10'
            }`}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Workshops;