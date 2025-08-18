import React, { useState } from 'react';
import CourseCard from './CourseCard';
import courses from '../data/courses.json';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [activeFilter, setActiveFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const categories = ['All', 'AI/ML', 'Python', 'Java', 'Web Development'];
  const otherCategories = categories.filter(cat => cat !== 'All');
  
  const typeFilters = [
    { value: 'all', label: 'All Courses', icon: BookOpenIcon },
    { value: 'recorded', label: 'Recorded Courses', icon: VideoIcon },
    { value: 'live', label: 'Live Courses', icon: RadioIcon },
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = activeFilter === 'All' || course.category === activeFilter;
    const typeMatch = typeFilter === 'all' || course.type === typeFilter;
    return categoryMatch && typeMatch;
  });

  const displayedCourses = showAllCourses ? filteredCourses : filteredCourses.slice(0, 6);
  const selectedTypeFilter = typeFilters.find(filter => filter.value === typeFilter);

  const handleCategoryClick = (category) => {
    if (category === 'All' && !showAllCategories) {
      setShowAllCategories(true);
      return;
    }
    setActiveFilter(category);
    setShowAllCourses(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EXPLORE OUR COURSES
          </motion.h2>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 px-4 sm:px-6">
          <div className="flex flex-col w-full max-w-6xl mx-auto relative">
            {/* Category Filter Buttons - Aligned with course cards */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {/* Empty grid cells for alignment */}
                <div className="hidden md:block"></div>
                <div className="hidden lg:block"></div>
                
                {/* Actual buttons container */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <div className="flex flex-wrap gap-3">
                    {/* All Button - Positioned at start of first card */}
                    <motion.button
                      onClick={() => handleCategoryClick('All')}
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeFilter === 'All'
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={!showAllCategories ? { scale: [1, 1.05, 1] } : {}}
                      transition={!showAllCategories ? { repeat: Infinity, duration: 2 } : {}}
                    >
                      ALL
                    </motion.button>
                    
                    {/* Other buttons that emerge */}
                    <AnimatePresence>
                      {showAllCategories && (
                        <>
                          {otherCategories.map((category) => (
                            <motion.button
                              key={category}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                              onClick={() => handleCategoryClick(category)}
                              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                                activeFilter === category
                                  ? 'bg-blue-600 text-white shadow-lg'
                                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                              }`}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {category.toUpperCase()}
                            </motion.button>
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Type Filter Dropdown - Positioned properly */}
            <div className="relative mt-4 md:mt-0 md:absolute md:right-0 w-full md:w-auto flex justify-center md:justify-end">
              <motion.button
                onClick={() => {
                  setShowTypeDropdown(!showTypeDropdown);
                  setShowAllCourses(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <selectedTypeFilter.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-bold text-gray-700">
                  {selectedTypeFilter.label.toUpperCase()}
                </span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  showTypeDropdown ? 'rotate-180' : ''
                }`} />
              </motion.button>

              {showTypeDropdown && (
                <motion.div 
                  className="absolute top-full mt-2 w-56 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {typeFilters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => {
                        setTypeFilter(filter.value);
                        setShowTypeDropdown(false);
                        setShowAllCourses(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                        typeFilter === filter.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <filter.icon className="w-5 h-5" />
                      <span className="text-sm font-bold">{filter.label.toUpperCase()}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Course Grid - Perfectly aligned with filters */}
        <div className="w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedCourses.map((course) => (
              <motion.div 
                key={course.id} 
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div 
            className="text-center py-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 mb-4">
              <BookOpenIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more courses
            </p>
          </motion.div>
        )}

        {/* Show More/Less Button - Now Centered */}
        {filteredCourses.length > 6 && (
          <div className="w-full px-4 sm:px-6 mt-8">
            <div className="max-w-6xl mx-auto flex justify-center">
              <motion.button 
                onClick={() => setShowAllCourses(!showAllCourses)}
                className={`px-8 py-4 font-extrabold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl ${
                  showAllCourses 
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAllCourses ? 'SHOW LESS' : 'EXPLORE ALL COURSES'}
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;