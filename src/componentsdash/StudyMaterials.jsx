// In your pagesdash/StudyMaterials.jsx file
import React, { useState } from 'react';
import { dummyBooks } from '../dummydata/dummydata';

export const StudyMaterials = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('books');

  // Filter books based on category and search query
  const filteredBooks = dummyBooks.filter(book => {
    const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(dummyBooks.map(book => book.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ... (keep the rest of your JSX the same) ... */}
      
      {/* Books Grid - Add conditional rendering */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {book.category || 'Uncategorized'}
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <h3
                  className="font-semibold text-lg mb-2 line-clamp-2"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{book.author || 'Unknown Author'}</p>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{book.date}</span>
                    <span>{book.pages} pages</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-700 font-medium">{book.rating || 'N/A'}</span>
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      DOWNLOAD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* ... (keep the rest of your JSX the same) ... */}
    </div>
  );
};