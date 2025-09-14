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

  return (
    <>
      <AuthSection />
      
      {/* Hero Section - Updated to match blog page styling with 15% increased height */}
      <section className="relative py-16 md:py-28 overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
          minHeight: '40vh' // Increased by 15% (from 35vh to 40vh)
        }}>
        
        {/* Purple tint overlay matching blog page */}
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
              { value: `${workshops.length}+`, label: 'Upcoming Workshops', icon: '📅' },
              { value: '15+', label: 'Expert Instructors', icon: '👨‍🏫' },
              { value: '98%', label: 'Satisfaction Rate', icon: '⭐' },
              { value: '500+', label: 'Participants', icon: '👥' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-gray-800/60 border border-slate-700/50 text-white hover:shadow-blue-500/20' 
                    : 'bg-white/90 border border-white/50 text-gray-800 hover:shadow-blue-500/20'
                } shadow-lg flex flex-col items-center text-center`}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
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
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button 
                key={level}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center ${
                  filter === level 
                    ? darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 border border-blue-500/50' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : darkMode
                      ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 shadow-md backdrop-blur-sm' 
                      : 'bg-white/90 text-gray-700 border border-gray-200/50 hover:bg-gray-100/80 shadow-md backdrop-blur-sm'
                }`}
                onClick={() => setFilter(level)}
              >
                <span className="mr-2">
                  {level === 'all' ? '🎯' : 
                   level === 'beginner' ? '🌱' : 
                   level === 'intermediate' ? '🚀' : '🏆'}
                </span>
                {level === 'all' ? 'All Workshops' : level.charAt(0).toUpperCase() + level.slice(1)}
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

      {/* CTA Section - Stunning dark mode */}
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