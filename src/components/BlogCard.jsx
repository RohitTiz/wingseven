// components/BlogCard.jsx
import React from 'react';

function BlogCard({ article, categories, isFeatured = false }) {
  const category = categories.find(cat => cat.id === article.category);
  
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col ${
      isFeatured ? 'group-hover:shadow-3xl' : ''
    }`}>
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative overflow-hidden pt-[56.25%]"> {/* 16:9 aspect ratio */}
        <img 
          src={article.image} 
          alt={article.title}
          className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-cyan-600/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
            {category?.name}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Content Area with Flexible Growth */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {article.subtitle}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold mr-3">
              {article.authorInitials}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{article.author}</p>
              <p className="text-xs text-gray-500">{article.date}</p>
            </div>
          </div>
          <div className="text-blue-500 group-hover:text-purple-600 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;