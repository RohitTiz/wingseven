// components/BlogCard.js
import React from 'react';

const BlogCard = ({ article, categories, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <article className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
          
          <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
          
          <div className="relative p-8">
            <div className="inline-flex items-center mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 opacity-80"></div>
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {categories.find(c => c.id === article.category)?.name}
              </span>
            </div>

            <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
              {article.title}
            </h3>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                  {article.authorInitials}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-800">{article.author}</div>
                  <div className="text-sm text-gray-500">{article.authorHandle}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{article.publishDate}</div>
                <div className="text-xs text-gray-400">{article.readTime}</div>
              </div>
            </div>

            <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-500 mr-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 opacity-60"></div>
                {article.views}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 opacity-60"></div>
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
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 p-6">
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3 opacity-80"></div>
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {categories.find(c => c.id === article.category)?.name}
              </span>
              <div className="ml-auto text-xs text-gray-400">{article.publishDate}</div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all">
              {article.title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  {article.authorInitials}
                </div>
                <div className="ml-2">
                  <div className="text-sm font-semibold text-gray-800">{article.author}</div>
                  <div className="text-xs text-gray-500">{article.authorHandle}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-1 opacity-60"></div>
                  {article.views}
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-1 opacity-60"></div>
                  {article.likes}
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1 opacity-60"></div>
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-24 h-24 flex-shrink-0">
            <div className={`w-full h-full rounded-xl bg-gradient-to-br ${article.gradient} opacity-60 group-hover:opacity-80 transition-opacity flex items-center justify-center`}>
              <div className="text-2xl font-bold text-gray-700">{categories.find(c => c.id === article.category)?.icon}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;