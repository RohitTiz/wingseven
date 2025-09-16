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

  // PDF icon component
  const PdfIcon = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

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
            No materials found matching your criteria.
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
        className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 hover:shadow-md flex flex-col`}
      >
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start mb-4">
            <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
              <PdfIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3
                className={`font-medium text-base mb-1 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {item.title}
              </h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                {item.author || 'Unknown Author'}
              </p>
            </div>
          </div>
          
          {item.description && (
            <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {item.description}
            </p>
          )}
          
          <div className="mt-auto">
            <div className={`flex justify-between items-center text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <span>{item.date}</span>
              {item.pages && <span>{item.pages} pages</span>}
            </div>
            
            <div className="flex items-center justify-between">
              <div className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                {item.category || 'Uncategorized'}
              </div>
              
              <button className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center`}>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen`}>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Study Materials
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Access our comprehensive collection of study materials to enhance your learning experience.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className={`rounded-lg p-4 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search materials..."
              className={`block w-full pl-10 pr-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <select 
              className={`border rounded-md px-2 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="az">A-Z</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeCategory === category 
                ? (darkMode ? 'bg-blue-800 text-blue-100' : 'bg-blue-100 text-blue-700')
                : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Showing <span className="font-medium">{filteredContent.length}</span> materials
        </p>
      </div>
{/* Content Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 -mx-4 sm:-mx-0">
  {renderContentCards()}
</div>

      {/* Latest Additions Section */}
      {filteredContent.length > 0 && (
        <div className="mb-8">
          <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recently Added
          </h2>
          <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <div className="space-y-3">
              {filteredContent.slice(0, 3).map((item, index) => (
                <div key={index} className={`rounded-md p-3 flex items-start hover:shadow-sm transition-all ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className={`p-2 rounded-md mr-3 ${darkMode ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <PdfIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Added on {item.date}
                    </p>
                  </div>
                  <button className={`text-xs font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};