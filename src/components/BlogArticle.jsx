// components/BlogArticle.js
import React, { useState } from 'react';

const BlogArticle = ({ article }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <article className="bg-white rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg">
        <header className="mb-6 sm:mb-8">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-2 sm:mr-3 opacity-80"></div>
            <span className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gray-500">
              {article.category}
            </span>
            <span className="mx-1 sm:mx-2 text-gray-400">•</span>
            <span className="text-xs sm:text-sm text-gray-500">{article.publishDate}</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 text-gray-800 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-base sm:text-lg font-bold text-white mr-3 sm:mr-4">
                {article.authorInitials}
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-sm sm:text-base">{article.author}</div>
                <div className="text-xs sm:text-sm text-gray-500">{article.authorBio}</div>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-xs sm:text-sm text-gray-500">{article.readTime} read</div>
              <div className="text-xs sm:text-sm text-gray-500">{article.followers} followers</div>
            </div>
          </div>
        </header>
        
        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
          {/* Article content */}
          {article.content.map((section, index) => {
            if (section.type === 'paragraph') {
              return <p key={index} className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{section.text}</p>;
            } else if (section.type === 'heading') {
              return <h2 key={index} className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-gray-800">{section.text}</h2>;
            } else if (section.type === 'subheading') {
              return <h3 key={index} className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 text-gray-800">{section.text}</h3>;
            } else if (section.type === 'code') {
              return (
                <pre key={index} className="bg-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto my-3 sm:my-4 text-xs sm:text-sm">
                  <code className="text-gray-800">{section.text}</code>
                </pre>
              );
            } else if (section.type === 'image') {
              return (
                <div key={index} className="my-4 sm:my-6">
                  <img src={section.src} alt={section.alt} className="rounded-lg shadow-md w-full" />
                  {section.caption && <p className="text-center text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{section.caption}</p>}
                </div>
              );
            } else if (section.type === 'list') {
              return (
                <ul key={index} className="list-disc list-inside text-gray-600 mb-4 sm:mb-6 pl-4 sm:pl-5 text-sm sm:text-base">
                  {section.items.map((item, i) => (
                    <li key={i} className="mb-1 sm:mb-2">{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
          
          {/* Key Takeaways */}
          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="list-disc list-inside text-gray-600 mb-4 sm:mb-6 pl-4 sm:pl-5 text-sm sm:text-base">
            {article.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="mb-1 sm:mb-2">{takeaway}</li>
            ))}
          </ul>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl my-6 sm:my-8">
          <h3 className="text-base sm:text-lg font-semibold mb-2">Get {article.author.split(' ')[0]}'s stories in your inbox</h3>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Join Medium for free to get updates from this writer.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-medium transition-colors text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
        
        <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {article.tags && article.tags.map((tag, index) => (
              <span key={index} className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <div className="flex items-center justify-between sm:justify-start sm:space-x-4 text-sm text-gray-500">
              <button className="flex items-center hover:text-blue-600 transition-colors text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                <span>Like</span>
              </button>
              
              <button className="flex items-center hover:text-blue-600 transition-colors text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span>Comment</span>
              </button>
              
              <button className="flex items-center hover:text-blue-600 transition-colors text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
            
            <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors text-right sm:text-left">
              Save for later
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogArticle;