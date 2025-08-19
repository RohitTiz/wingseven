import React, { useState } from 'react';
import CourseCard from './CourseCard';
import courses from '../data/courses.json';

const FreeCourseSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  // Filter free courses from your existing data
  const freeCourses = courses.filter(course => course.isFree === true);
  
  const categories = ['All', ...new Set(freeCourses.map(course => course.category))];
  const otherCategories = categories.filter(cat => cat !== 'All');

  const filteredCourses = freeCourses.filter(course => {
    return activeFilter === 'All' || course.category === activeFilter;
  });

  const displayedCourses = showAllCourses ? filteredCourses : filteredCourses.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            BEST FREE COURSES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium-quality courses available at no cost
          </p>
        </div>

        {/* Filter Controls - Perfectly Aligned */}
        <div className="mb-12">
          <div className="flex flex-col w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row w-full items-baseline gap-4">
              {/* Category Filters */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 h-12">
                  <button
                    onClick={() => setActiveFilter('All')}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 h-full flex items-center ${
                      activeFilter === 'All'
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    ALL
                  </button>
                  
                  {otherCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 h-full flex items-center ${
                        activeFilter === category
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {category.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Free Badge - Perfectly aligned replacement for type filter */}
              <div className="relative h-12 flex-shrink-0">
                <div className="flex items-center h-full px-4 py-2 bg-green-100 border-2 border-green-300 rounded-lg">
                  <span className="text-sm font-bold text-green-800">
                    FREE ACCESS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="w-full px-4 sm:px-6">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {displayedCourses.map((course) => (
                <div key={course.id} className="flex justify-start">
                  <CourseCard 
                    course={course}
                    isFree={true} // This will show a free badge
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 w-full">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No free courses available
              </h3>
              <p className="text-gray-500">
                We couldn't find any free courses matching your criteria
              </p>
            </div>
          )}
        </div>

        {/* Show More/Less Button */}
        {filteredCourses.length > 6 && (
          <div className="w-full px-4 sm:px-6 mt-8">
            <div className="max-w-6xl mx-auto flex justify-center">
              <button 
                onClick={() => setShowAllCourses(!showAllCourses)}
                className={`px-8 py-3 font-extrabold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl h-12 ${
                  showAllCourses 
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {showAllCourses ? 'SHOW LESS' : 'VIEW ALL FREE COURSES (' + filteredCourses.length + ')'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FreeCourseSection;