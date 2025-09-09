import React, { useState, useRef, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import CourseCard from './CourseCard';
import courses from '../data/courses.json';

// Custom SVG Icons as Components
const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookOpenIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M2 4h6a4 4 0 0 1 4 4v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 4h-6a4 4 0 0 0-4 4v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VideoIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="2" y="4" width="15" height="16" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="17 8 22 12 17 16 17 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RadioIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.76 16.24a6 6 0 0 1 0-8.48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.93 19.07a10 10 0 0 1 0-14.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CourseSection = () => {
  const { darkMode } = useDarkMode();
  const [activeFilter, setActiveFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const categoryContainerRef = useRef(null);
  const sectionRef = useRef(null);
  
  const categories = ['All', 'AI/ML', 'Python', 'Java', 'Web Development'];
  
  const typeFilters = [
    { value: 'all', label: 'All Courses', icon: BookOpenIcon },
    { value: 'recorded', label: 'Recorded Courses', icon: VideoIcon },
    { value: 'live', label: 'Live Courses', icon: RadioIcon },
  ];

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

  const filteredCourses = courses.filter(course => {
    const categoryMatch = activeFilter === 'All' || course.category === activeFilter;
    const typeMatch = typeFilter === 'all' || course.type === typeFilter;
    return categoryMatch && typeMatch;
  });

  const displayedCourses = showAllCourses ? filteredCourses : filteredCourses.slice(0, 6);
  const selectedTypeFilter = typeFilters.find(filter => filter.value === typeFilter);

  const handleMouseMove = (e) => {
    if (categoryContainerRef.current) {
      const rect = categoryContainerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleCategoryClick = (category) => {
    setActiveFilter(category);
    setShowAllCourses(false);
  };

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 px-4 sm:px-6 min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Updated with your style */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${darkMode ? 'text-light-text' : 'text-dark-text'}`} 
          style={{ transitionDelay: '200ms' }}
          >
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="mb-16">
          <div className="flex flex-col w-full max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row w-full items-center gap-6">
              {/* Category Filters with Hover Animation */}
              <div className="flex-1 w-full">
                <div 
                  ref={categoryContainerRef}
                  className="relative flex justify-center lg:justify-start"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseMove={handleMouseMove}
                >
                  {/* Magnetic Background Effect */}
                  <div 
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      isHovered ? 'opacity-20 scale-105' : 'opacity-0 scale-100'
                    } ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-900 to-purple-900' 
                        : 'bg-gradient-to-r from-blue-100 to-purple-100'
                    }`}
                    style={{
                      transform: isHovered ? `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` : 'translate(0, 0)'
                    }}
                  ></div>
                  
                  <div className="relative flex flex-wrap justify-center lg:justify-start items-center gap-3 p-4">
                    {categories.map((category, index) => {
                      const isActive = activeFilter === category;
                      const isAll = category === 'All';
                      const shouldShow = isAll || isHovered;
                      
                      return (
                        <button
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className={`relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-500 transform overflow-hidden group ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/30 scale-110'
                              : `${darkMode ? 'bg-gray-800/80 text-light-text border-2 border-gray-700 hover:border-blue-500' : 'bg-white/80 text-dark-text border-2 border-gray-200 hover:border-blue-300'} backdrop-blur-sm hover:shadow-lg`
                          } ${
                            shouldShow 
                              ? 'opacity-100 translate-y-0 scale-100' 
                              : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                          }`}
                          style={{
                            transitionDelay: `${index * 100}ms`,
                            zIndex: isActive ? 10 : 1
                          }}
                        >
                          {/* Ripple Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                          
                          {/* Shimmer Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 ${
                            isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                          }`}></div>
                          
                          <span className="relative z-10 tracking-wider">
                            {category.toUpperCase()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Type Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                  className={`flex items-center space-x-3 px-6 py-4 backdrop-blur-sm border-2 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group ${
                    darkMode 
                      ? 'bg-gray-800/90 border-gray-700 hover:border-blue-500' 
                      : 'bg-white/90 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <selectedTypeFilter.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className={`text-sm font-bold tracking-wider ${
                    darkMode ? 'text-light-text' : 'text-dark-text'
                  }`}>
                    {selectedTypeFilter.label.toUpperCase()}
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 text-blue-600 transition-all duration-300 ${
                    showTypeDropdown ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                  }`} />
                </button>

                {showTypeDropdown && (
                  <div className={`absolute top-full mt-3 w-64 backdrop-blur-lg border-2 rounded-2xl shadow-2xl z-20 overflow-hidden animate-in slide-in-from-top-2 duration-300 ${
                    darkMode 
                      ? 'bg-gray-800/95 border-gray-700' 
                      : 'bg-white/95 border-gray-100'
                  }`}>
                    {typeFilters.map((filter, index) => (
                      <button
                        key={filter.value}
                        onClick={() => {
                          setTypeFilter(filter.value);
                          setShowTypeDropdown(false);
                          setShowAllCourses(false);
                        }}
                        className={`w-full flex items-center space-x-4 px-6 py-4 text-left transition-all duration-300 transform hover:scale-[1.02] ${
                          typeFilter === filter.value 
                            ? `${darkMode 
                                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border-l-4 border-blue-500' 
                                : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-500'}`
                            : `${darkMode 
                                ? 'text-light-text hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-blue-900/30' 
                                : 'text-dark-text hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50'}`
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <filter.icon className={`w-5 h-5 transition-all duration-300 ${
                          typeFilter === filter.value ? 'text-blue-600 scale-110' : (
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          )
                        }`} />
                        <span className="text-sm font-bold tracking-wider">{filter.label.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="w-full px-4 sm:px-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex justify-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-full max-w-[340px]">
                  <CourseCard course={course} darkMode={darkMode} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 w-full animate-in fade-in duration-500">
            <div className={`mb-6 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
              <BookOpenIcon className="w-20 h-20 mx-auto" />
            </div>
            <h3 className={`text-2xl font-bold mb-3 ${
              darkMode ? 'text-light-text' : 'text-dark-text'
            }`}>
              No courses found
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Try adjusting your filters to discover our offerings
            </p>
          </div>
        )}

        {/* Show More/Less Button */}
        {filteredCourses.length > 6 && (
          <div className="w-full px-4 sm:px-6 mt-12">
            <div className="max-w-6xl mx-auto flex justify-center">
              <button 
                onClick={() => setShowAllCourses(!showAllCourses)}
                className={`relative px-10 py-4 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl overflow-hidden group ${
                  showAllCourses 
                    ? `${darkMode 
                        ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 hover:from-gray-600 hover:to-gray-700 shadow-gray-800/50' 
                        : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400 shadow-gray-300/50'}`
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 shadow-blue-500/50'
                }`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ${
                  showAllCourses
                    ? `${darkMode 
                        ? 'from-gray-600 to-gray-700 translate-x-0' 
                        : 'from-gray-300 to-gray-400 translate-x-0'}`
                    : 'from-blue-700 to-purple-700 -translate-x-full group-hover:translate-x-0'
                }`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 tracking-widest text-sm">
                  {showAllCourses ? 'SHOW LESS' : 'VIEW ALL COURSES'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;