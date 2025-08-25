// components/BlogCard.jsx
import React from 'react';

const BlogCard = ({ article, categories, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <article className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
          
          <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}></div>
          
          <div className="relative p-6">
            <div className="flex items-center mb-4">
              <span className="text-xs mr-2 text-gray-500">
                {categories.find(c => c.id === article.category)?.icon}
              </span>
              <span className="text-xs uppercase tracking-wider font-light text-gray-500">
                {categories.find(c => c.id === article.category)?.name}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="text-gray-600 mb-6 text-base leading-relaxed font-light font-sans">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-light border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-sm font-medium text-white font-sans">
                  {article.authorInitials}
                </div>
                <div className="ml-3">
                  <div className="font-normal text-gray-800 font-sans">{article.author}</div>
                  <div className="text-sm text-gray-500 font-light">{article.authorHandle}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 font-light">{article.publishDate}</div>
                <div className="text-xs text-gray-400 font-light">{article.readTime}</div>
              </div>
            </div>

            <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-500 mr-6 font-light">
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2 opacity-60"></div>
                {article.views}
              </div>
              <div className="flex items-center text-sm text-gray-500 font-light">
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2 opacity-60"></div>
                {article.likes}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300 p-5">
        
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <span className="text-xs mr-2 text-gray-500">
                {categories.find(c => c.id === article.category)?.icon}
              </span>
              <span className="text-xs uppercase tracking-wider font-light text-gray-500">
                {categories.find(c => c.id === article.category)?.name}
              </span>
              <div className="ml-auto text-xs text-gray-400 font-light">{article.publishDate}</div>
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed font-light font-sans">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500 font-light">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-xs font-medium text-white font-sans">
                  {article.authorInitials}
                </div>
                <div className="ml-2">
                  <div className="text-sm font-normal text-gray-800 font-sans">{article.author}</div>
                  <div className="text-xs text-gray-500 font-light">{article.authorHandle}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500 font-light">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-1 opacity-60"></div>
                  {article.views}
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-1 opacity-60"></div>
                  {article.likes}
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-1 opacity-60"></div>
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-20 h-20 flex-shrink-0">
            <div className={`w-full h-full rounded-lg bg-gradient-to-br ${article.gradient} opacity-60 group-hover:opacity-70 transition-opacity flex items-center justify-center`}>
              <div className="text-xl font-medium text-gray-700">{categories.find(c => c.id === article.category)?.icon}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;