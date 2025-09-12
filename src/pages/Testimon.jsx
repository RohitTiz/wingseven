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
      
      {/* Hero Section - Text floating naturally over background */}
      <section className={`relative py-20 md:py-32 overflow-hidden bg-fixed bg-center bg-cover transition-all duration-500`} 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
          minHeight: '50vh'
        }}>
        
        {/* Completely transparent overlay - no dark background */}
        <div className="absolute inset-0 bg-transparent"></div>
        
        {/* Floating gradient orbs for ambiance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
            darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-white/30 to-blue-200/40'
          }`}></div>
          <div className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 ${
            darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-indigo-200/40 to-white/30'
          }`}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${
            darkMode 
              ? 'text-white drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]' 
              : 'text-white drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]'
          }`}>
            Upcoming Workshops
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } font-light ${
            darkMode 
              ? 'text-gray-100 drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]' 
              : 'text-blue-50 drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]'
          }`}>
            Join our expert-led workshops and enhance your skills with hands-on learning experiences
          </p>
        </div>
      </section>

      {/* Stats Section - Elegant dark mode */}
      <section className={`py-16 relative overflow-hidden transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 ${
          darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-200 to-indigo-300'
        }`}></div>
        <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-30 ${
          darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-indigo-200 to-purple-300'
        }`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: `${workshops.length}+`, label: 'Upcoming Workshops' },
              { value: '15+', label: 'Expert Instructors' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '500+', label: 'Participants' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl shadow-blue-900/20 text-white hover:shadow-blue-500/20' 
                    : 'bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl shadow-blue-900/10 text-gray-800 hover:shadow-blue-500/20'
                }`}
              >
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
        </div>
      </section>

      {/* Filter Section - Modern dark mode */}
      <section className={`py-10 transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button 
                key={level}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium ${
                  filter === level 
                    ? darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 border border-blue-500/50' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : darkMode
                      ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50 shadow-md backdrop-blur-sm' 
                      : 'bg-white/80 text-gray-700 border border-gray-200/50 hover:bg-gray-50/80 shadow-md backdrop-blur-sm'
                }`}
                onClick={() => setFilter(level)}
              >
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