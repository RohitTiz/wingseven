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
      
      {/* Hero Section */}
      <section className={`relative py-20 md:py-32 overflow-hidden bg-fixed bg-center bg-cover transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`} 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
          minHeight: '50vh'
        }}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/80' : 'bg-blue-900/70'}`}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${darkMode ? 'text-white' : 'text-white'}`}>
            Upcoming Workshops
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-light ${darkMode ? 'text-blue-200' : 'text-blue-100'}`}>
            Join our expert-led workshops and enhance your skills with hands-on learning experiences
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full ${darkMode ? 'bg-indigo-900/20' : 'bg-blue-200/50'}`}></div>
        <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full ${darkMode ? 'bg-purple-900/20' : 'bg-indigo-200/50'}`}></div>
        
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
                className={`p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode 
                  ? 'bg-gray-800 border border-gray-700 shadow-lg shadow-blue-900/10 text-white' 
                  : 'bg-white border border-gray-200 shadow-lg shadow-blue-900/5 text-gray-800'
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {stat.value}
                </div>
                <p className="font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-10 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button 
                key={level}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === level 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : `${darkMode 
                      ? 'bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 shadow-md shadow-black/10' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 shadow-md shadow-gray-400/10'
                    }`
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
      <section className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
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
              <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No workshops found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 text-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'
      }`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className={`absolute top-0 left-0 w-64 h-64 rounded-full -translate-x-32 -translate-y-32 ${
            darkMode ? 'bg-blue-400' : 'bg-white'
          }`}></div>
          <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full translate-x-32 translate-y-32 ${
            darkMode ? 'bg-purple-400' : 'bg-white'
          }`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-white'}`}>
            Interested in Hosting a Workshop?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-blue-200' : 'text-blue-100'}`}>
            Share your expertise with our community of learners and professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
              darkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-700/30' 
                : 'bg-white text-blue-600 hover:bg-gray-100 shadow-blue-900/20'
            }`}>
              Become an Instructor
            </button>
            <button className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 border-2 ${
              darkMode 
                ? 'border-blue-400 text-blue-300 hover:bg-blue-900/30 shadow-blue-700/10' 
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