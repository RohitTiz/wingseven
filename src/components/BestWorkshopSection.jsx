import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import { useDarkMode } from '../context/DarkModeContext';

const BestWorkshopSection = () => {
  const [showAllWorkshops, setShowAllWorkshops] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  
  // Create workshop data directly in the component (only 3 workshops)
  const allWorkshops = [
    {
      id: 'workshop-1',
      title: 'UI/UX Design Masterclass',
      description: 'Hands-on workshop to master design thinking, prototyping, and user testing methodologies.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      instructor: 'Sarah Johnson',
      duration: '2 days',
      date: '2023-11-15',
      seats: 20,
      price: 4999,
      originalPrice: 6999,
      isPopular: true,
      location: 'Online',
      type: 'live',
      rating: 4.9
    },
    {
      id: 'workshop-2',
      title: 'Data Science Bootcamp',
      description: 'Intensive workshop covering Python, statistical analysis, and machine learning fundamentals.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Data Science',
      instructor: 'Michael Chen',
      duration: '3 days',
      date: '2023-11-22',
      seats: 15,
      price: 5999,
      originalPrice: 7999,
      isPopular: true,
      location: 'New York',
      type: 'live',
      rating: 4.8
    },
    {
      id: 'workshop-3',
      title: 'Web Development Workshop',
      description: 'Build responsive websites with HTML, CSS, JavaScript and modern frameworks.',
      image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      instructor: 'Alex Rodriguez',
      duration: '2 days',
      date: '2023-12-05',
      seats: 25,
      price: 4499,
      originalPrice: 5999,
      isPopular: false,
      location: 'Online',
      type: 'live',
      rating: 4.7
    }
  ];
  
  const displayedWorkshops = showAllWorkshops ? allWorkshops : allWorkshops.slice(0, 3);

  return (
    <section className={`py-16 px-4 sm:px-6 border-t transition-colors duration-300 ${
      darkMode ? 'bg-dark-bg border-dark-border' : 'bg-gray-50 border-gray-200'
    } relative overflow-hidden`}>
      {/* Decorative elements - Different style */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-extrabold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-light-text' : 'text-gray-900'
          }`}>
            Hands-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">Workshops</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-light-text' : 'text-gray-600'
          }`}>
            Learn from industry experts through immersive, practical workshops designed to boost your skills
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left side - Featured workshops */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {displayedWorkshops.map((workshop) => (
                <div key={workshop.id} className="flex justify-center">
                  <CourseCard 
                    course={workshop}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Benefits section */}
          <div className="lg:w-2/5 relative">
            <div className={`relative p-8 rounded-3xl shadow-xl border transition-colors duration-300 ${
              darkMode ? 'bg-dark-card border-dark-border' : 'bg-white border-gray-100'
            }`}>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-tr-full bg-yellow-500 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-tl-full bg-red-500 opacity-20"></div>
              
              <svg className="absolute top-8 right-8 w-16 h-16 text-yellow-400 opacity-30" viewBox="0 0 100 100">
                <path d="M30,30 Q50,10 70,30 T90,50" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20,60 Q40,40 60,60 T80,80" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              
              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                  darkMode ? 'text-light-text' : 'text-gray-800'
                }`}>
                  Why Join Our <span className="text-yellow-600">Workshops</span>?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className={`font-medium transition-colors duration-300 ${
                        darkMode ? 'text-light-text' : 'text-gray-700'
                      }`}>Live Interaction with Experts</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-light-text opacity-80' : 'text-gray-600'
                      }`}>Get your questions answered in real-time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <p className={`font-medium transition-colors duration-300 ${
                        darkMode ? 'text-light-text' : 'text-gray-700'
                      }`}>Hands-On Projects</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-light-text opacity-80' : 'text-gray-600'
                      }`}>Apply concepts through practical exercises</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className={`font-medium transition-colors duration-300 ${
                        darkMode ? 'text-light-text' : 'text-gray-700'
                      }`}>Networking Opportunities</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-light-text opacity-80' : 'text-gray-600'
                      }`}>Connect with like-minded professionals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className={`font-medium transition-colors duration-300 ${
                        darkMode ? 'text-light-text' : 'text-gray-700'
                      }`}>Take-Home Resources</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-light-text opacity-80' : 'text-gray-600'
                      }`}>Comprehensive materials for future reference</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate('/workshops')}
                >
                  Explore All Workshops
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestWorkshopSection;