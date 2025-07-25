import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

import courses from '../data/courses.json';

import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import AuthSection from '../components/AuthSection';

// Icons
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

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const categories = ['All', 'AI/ML', 'Python', 'Java', 'Web Development'];

  const typeFilters = [
    { value: 'all', label: 'All Courses', icon: BookOpenIcon },
    { value: 'recorded', label: 'Recorded Courses', icon: VideoIcon },
    { value: 'live', label: 'Live Courses', icon: RadioIcon },
  ];

  const selectedTypeFilter = typeFilters.find(filter => filter.value === typeFilter);

  const filteredCourses = courses.filter(course => {
    const categoryMatch = activeFilter === 'All' || course.category === activeFilter;
    const typeMatch = typeFilter === 'all' || course.type === typeFilter;
    const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && typeMatch && searchMatch;
  });

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

        {/* Hero Section */}
        <div
          className="relative bg-fixed bg-cover bg-center h-[54vh] flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&auto=format&fit=crop&q=60')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transform your career with industry-leading courses designed by experts.
            </p>
            <div className="max-w-md mx-auto relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Course Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Explore Our Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover a wide range of courses to help you master new skills
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-2 lg:ml-[50px]">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Type Dropdown */}
              <div className="relative lg:mr-[50px]">
                <button
                  onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <selectedTypeFilter.icon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {selectedTypeFilter.label}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                      showTypeDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showTypeDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {typeFilters.map(filter => (
                      <button
                        key={filter.value}
                        onClick={() => {
                          setTypeFilter(filter.value);
                          setShowTypeDropdown(false);
                        }}
                        className={`w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-50 ${
                          typeFilter === filter.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <filter.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{filter.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* No Courses */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpenIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results.</p>
              </div>
            )}

            {/* CTA Button */}
            <div className="text-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md">
                Explore All Courses
              </button>
            </div>
          </div>
        </section>

      </div>

      <Footer />
      <ChatWidget />
    </>
  );
};

export default CoursePage;
