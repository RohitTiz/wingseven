// components/BlogArticle.js
import React from 'react';

const BlogArticle = ({ article }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <article className="bg-white rounded-3xl p-8 shadow-lg">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 opacity-80"></div>
            <span className="text-sm uppercase tracking-wider font-bold text-gray-500">
              {article.category}
            </span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-500">{article.publishDate}</span>
          </div>
          
          <h1 className="text-4xl font-black mb-4 text-gray-800">{article.title}</h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white mr-4">
                {article.authorInitials}
              </div>
              <div>
                <div className="font-semibold text-gray-800">{article.author}</div>
                <div className="text-sm text-gray-500">{article.authorBio}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{article.readTime} read</div>
              <div className="text-sm text-gray-500">{article.followers} followers</div>
            </div>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          {/* Article content */}
          {article.content.map((section, index) => {
            if (section.type === 'paragraph') {
              return <p key={index} className="text-gray-600 leading-relaxed mb-6">{section.text}</p>;
            } else if (section.type === 'heading') {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">{section.text}</h2>;
            } else if (section.type === 'subheading') {
              return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">{section.text}</h3>;
            } else if (section.type === 'code') {
              return (
                <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                  <code className="text-sm text-gray-800">{section.text}</code>
                </pre>
              );
            } else if (section.type === 'image') {
              return (
                <div key={index} className="my-6">
                  <img src={section.src} alt={section.alt} className="rounded-lg shadow-md w-full" />
                  {section.caption && <p className="text-center text-sm text-gray-500 mt-2">{section.caption}</p>}
                </div>
              );
            } else if (section.type === 'list') {
              return (
                <ul key={index} className="list-disc list-inside text-gray-600 mb-6 pl-5">
                  {section.items.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
          
          {/* Key Takeaways */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 pl-5">
            {article.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="mb-2">{takeaway}</li>
            ))}
          </ul>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gray-100 p-6 rounded-xl my-8">
          <h3 className="text-lg font-semibold mb-2">Get {article.author.split(' ')[0]}'s stories in your inbox</h3>
          <p className="text-gray-600 mb-4">Join Medium for free to get updates from this writer.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags && article.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                <span>Like</span>
              </button>
              
              <button className="flex items-center hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span>Comment</span>
              </button>
              
              <button className="flex items-center hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
            
            <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              Save for later
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogArticle;