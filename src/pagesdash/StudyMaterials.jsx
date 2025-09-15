import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { dummyBooks } from '../dummydata/dummyBooks';

export const StudyMaterials = () => {
  const { darkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredContent, setFilteredContent] = useState([]);

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(dummyBooks.map(book => book.category))];

  // Filter and sort content based on category, search query, and sort option
  useEffect(() => {
    let content = [...dummyBooks];
    
    // Filter by category
    if (activeCategory !== 'all') {
      content = content.filter(item => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    switch(sortBy) {
      case 'newest':
        content.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        content.sort((a, b) => b.rating - a.rating);
        break;
      case 'az':
        content.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredContent(content);
  }, [activeCategory, searchQuery, sortBy]);

  // Render content cards
  const renderContentCards = () => {
    if (filteredContent.length === 0) {
      return (
        <div className="col-span-full text-center py-12">
          <div className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} mb-4`}>
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-lg`}>
            No books found matching your criteria.
          </p>
          <button 
            className={`mt-4 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium transition-colors duration-300`}
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
          >
            Clear filters
          </button>
        </div>
      );
    }

    return filteredContent.map((item, index) => (
      <div
        key={index}
        className={`border ${darkMode ? 'border-gray-700 dark-card' : 'border-gray-200 light-card'} rounded-xl overflow-hidden ${darkMode ? 'dark-bg' : 'bg-white'} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col transition-colors duration-300`}
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-52 object-cover"
          />
          <div className={`absolute top-3 left-3 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-xs font-semibold px-2.5 py-0.5 rounded transition-colors duration-300`}>
            {item.category || 'Uncategorized'}
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3
            className={`font-semibold text-lg mb-2 line-clamp-2 ${darkMode ? 'light-text' : 'dark-text'} transition-colors duration-300`}
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {item.title}
          </h3>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
            {item.author || 'Unknown Author'}
          </p>
          
          {item.description && (
            <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
              {item.description}
            </p>
          )}
          
          <div className="mt-auto">
            <div className={`flex justify-between items-center text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
              <span>{item.date}</span>
              {item.pages && <span>{item.pages} pages</span>}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className={`ml-1 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                  {item.rating || 'N/A'}
                </span>
              </div>
              
              <button className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center duration-300`}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-300 ${darkMode ? 'dark-bg' : 'light-bg'}`}>
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
          Study Materials
        </h1>
        <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Access our comprehensive collection of books to enhance your learning experience.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className={`rounded-xl shadow-md p-6 mb-8 transition-colors duration-300 ${darkMode ? 'dark-card' : 'bg-white light-card'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by title, author, or topic..."
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`font-medium transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Filter by:
            </span>
            <select 
              className={`border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category 
                ? (darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700')
                : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count and Sort */}
      <div className="mb-6 flex justify-between items-center">
        <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Showing <span className="font-semibold">{filteredContent.length}</span> books
        </p>
        <div className="flex items-center space-x-2">
          <span className={`font-medium transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Sort by:
          </span>
          <select 
            className={`border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="az">A-Z</option>
          </select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {renderContentCards()}
      </div>

      {/* Latest Titles Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
              Latest Additions
            </h2>
            <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore the newest books in our collection
            </p>
          </div>
          <button className={`font-medium transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
            View all &rarr;
          </button>
        </div>

        <div className={`rounded-xl p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.slice(0, 3).map((item, index) => (
              <div key={index} className={`rounded-lg shadow-sm p-4 flex items-start hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className={`font-semibold line-clamp-1 transition-colors duration-300 ${darkMode ? 'light-text' : 'dark-text'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.author || 'Unknown'}
                  </p>
                  <div className={`flex items-center text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span>{item.date}</span>
                    {item.pages && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{item.pages} pages</span>
                      </>
                    )}
                  </div>
                  <button className={`mt-3 text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    Download now &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">Never Miss New Resources</h2>
        <p className="mb-6 max-w-2xl mx-auto">Join our newsletter and get notified about the latest books and learning materials.</p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};