// components/BlogCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ article, categories, isFeatured = false }) => {
  const navigate = useNavigate();

  const handleArticleClick = () => {
    navigate(`/blog/${article.id}`);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    navigate(`/blog/${article.id}`);
  };

  const categoryInfo = categories.find(c => c.id === article.category);

  if (isFeatured) {
    return (
      <div 
        className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-gray-200 flex flex-col h-full w-full max-w-[28rem] mx-auto cursor-pointer"
        onDoubleClick={handleArticleClick}
      >
        {/* Image Section */}
        <div 
          className="relative p-3 cursor-pointer"
          onClick={handleImageClick}
        >
          <img 
            src={article.image || "/api/placeholder/400/250"}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          
          {/* Featured Badge */}
          <div className="absolute top-6 right-6">
            <div className="relative">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                FEATURED
              </span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <span>{categoryInfo?.icon}</span>
              <span>{categoryInfo?.name}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow text-gray-800">
          {/* Article Title */}
          <h3 className="font-bold text-lg mb-2 text-gray-900 leading-tight line-clamp-2">
            {article.title}
          </h3>
          
          {/* Article Subtitle/Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
            {article.subtitle}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 font-medium">
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 font-medium">
                +{article.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Spacer */}
          <div className="flex-grow"></div>
          
          {/* Article Stats */}
          <div className="flex justify-between items-center mb-2 text-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span>{article.views}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-gray-800">{article.likes}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 w-full mb-3"></div>

          {/* Author and Date Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white mr-3">
                {article.authorInitials}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">{article.author}</div>
                <div className="text-xs text-gray-500">{article.publishDate}</div>
              </div>
            </div>
            
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              onClick={handleArticleClick}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Regular article card (smaller version)
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-200 flex flex-col h-full w-full max-w-[24rem] mx-auto cursor-pointer"
      onDoubleClick={handleArticleClick}
    >
      {/* Image Section */}
      <div 
        className="relative p-2.5 cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={article.image || "/api/placeholder/350/200"}
          alt={article.title}
          className="w-full h-36 object-cover rounded-lg shadow-md"
        />
        
        {/* Category Badge */}
        <div className="absolute top-5 right-5">
          <div className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <span>{categoryInfo?.icon}</span>
            <span>{categoryInfo?.name}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3.5 flex flex-col flex-grow text-gray-800">
        {/* Article Title */}
        <h3 className="font-bold text-base mb-2 text-gray-900 leading-tight line-clamp-2">
          {article.title}
        </h3>
        
        {/* Article Subtitle */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {article.subtitle}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {article.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
              {tag}
            </span>
          ))}
          {article.tags.length > 2 && (
            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
              +{article.tags.length - 2}
            </span>
          )}
        </div>
        
        {/* Spacer */}
        <div className="flex-grow"></div>
        
        {/* Stats */}
        <div className="flex justify-between items-center mb-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-gray-500">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              <span>{article.views}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span className="text-xs font-medium text-gray-800">{article.likes}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-full mb-2"></div>

        {/* Author and Action */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white mr-2">
              {article.authorInitials}
            </div>
            <div>
              <div className="text-xs font-medium text-gray-800">{article.author}</div>
              <div className="text-xs text-gray-500">{article.publishDate}</div>
            </div>
          </div>
          
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md text-xs"
            onClick={handleArticleClick}
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;