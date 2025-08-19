import React, { useState } from 'react';
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
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            EXPLORE OUR COURSES
          </h2>
        </div>

        {/* Filter Controls - Perfectly Aligned */}
        <div className="mb-12">
          <div className="flex flex-col w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row w-full items-baseline gap-4">
              {/* Category Filters - Now perfectly aligned */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 h-12">
                  <button
                    onClick={() => handleCategoryClick('All')}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 h-full flex items-center ${
                      activeFilter === 'All'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                    } ${!showAllCategories ? 'animate-pulse' : ''}`}
                  >
                    ALL
                  </button>
                  
                  {showAllCategories && otherCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 h-full flex items-center ${
                        activeFilter === category
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {category.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter - Now perfectly aligned */}
              <div className="relative h-12 flex-shrink-0">
                <button
                  onClick={() => {
                    setShowTypeDropdown(!showTypeDropdown);
                    setShowAllCourses(false);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 h-full"
                >
                  <selectedTypeFilter.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-bold text-gray-700">
                    {selectedTypeFilter.label.toUpperCase()}
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                    showTypeDropdown ? 'rotate-180' : ''
                  }`} />
                </button>

                {showTypeDropdown && (
                  <div className="absolute top-full mt-2 w-56 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-10 transition-all duration-200">
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedCourses.map((course) => (
              <div key={course.id} className="flex justify-start">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 w-full">
            <div className="text-gray-400 mb-4">
              <BookOpenIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more courses
            </p>
          </div>
        )}

        {/* Show More/Less Button */}
        {filteredCourses.length > 6 && (
          <div className="w-full px-4 sm:px-6 mt-8">
            <div className="max-w-6xl mx-auto flex justify-center">
              <button 
                onClick={() => setShowAllCourses(!showAllCourses)}
                className={`px-8 py-3 font-extrabold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl h-12 ${
                  showAllCourses 
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {showAllCourses ? 'SHOW LESS' : 'EXPLORE ALL COURSES'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;