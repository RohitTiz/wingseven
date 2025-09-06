// components/BlogCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogCard({ article, categories = [], isFeatured = false }) {
  const navigate = useNavigate();
  
  // Safely find category with fallback
  const category = categories?.find(cat => cat.id === article.category) || 
                   { name: article.category || 'Uncategorized' };
  
  // Handle click navigation
  const handleBlogClick = () => {
    navigate(`/specializations/${article.id}`);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    navigate(`/specializations/${article.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-gray-200 flex flex-col h-full w-full max-w-[31.68rem] mx-auto"
      onClick={handleBlogClick}
      style={{ width: '120%' }}
    >
      {/* Image Section - now clickable */}
      <div 
        className="relative p-3 cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        
        {/* Category Badge - Enhanced */}
        <div className="absolute top-6 right-6">
          <div className="relative">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg bg-blue-500 text-white">
              {category.name}
            </span>
          </div>
        </div>

        {/* Featured Badge - if applicable */}
        {isFeatured && (
          <div className="absolute top-6 left-6">
            <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <span>⭐</span>
              <span>FEATURED</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow text-gray-800">
        {/* Blog Title - Enhanced */}
        <h3 className="font-bold text-lg mb-2 text-gray-900 leading-tight line-clamp-2">
          {article.title}
        </h3>
        
        {/* Blog Subtitle/Description */}
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-relaxed">
          {article.subtitle}
        </p>
        
        {/* Spacer to push bottom content down */}
        <div className="flex-grow"></div>
        
        {/* Blog Stats */}
        <div className="flex justify-between items-center mb-2 text-sm">
          <div className="flex items-center">
            <div className="flex items-center space-x-1 text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              <span>{article.date || article.publishDate}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>{article.readTime || '5 min read'}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-full mb-2"></div>

        {/* Author Section - Enhanced */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold mr-3">
              {article.authorInitials}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{article.author}</p>
            </div>
          </div>
          
          {/* Enhanced Read More Button */}
          <div>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              onClick={handleBlogClick}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;