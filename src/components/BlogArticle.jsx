import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const BlogFeaturedSection = ({ featuredArticles, categories }) => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left side - Heading and decorative content */}
          <div className="lg:w-2/5 relative">
            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100">
              {/* Curvy line elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-tr-full bg-green-500 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-tl-full bg-blue-500 opacity-20"></div>
              
              <svg className="absolute top-8 right-8 w-16 h-16 text-green-400 opacity-30" viewBox="0 0 100 100">
                <path d="M20,20 Q40,5 50,30 T90,30" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,50 Q30,35 40,60 T80,60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30,80 Q50,65 60,90 T100,90" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              
              <div className="relative z-10">
                {/* Animated Heading */}
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
                  Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Articles</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Discover our most popular and insightful articles. These handpicked stories represent the best of what CodeBrain has to offer.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Expert insights and analysis</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">In-depth technical tutorials</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Community favorites</p>
                  </div>
                </div>
                
                <Link to="/specializations" className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Explore All Articles
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - Featured articles */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {featuredArticles && featuredArticles.slice(0, 2).map((article) => (
                <div key={article.id} className="flex justify-center">
                  <Link to={`/specializations/${article.id}`} className="cursor-pointer transform hover:scale-105 transition-all duration-500 w-full">
                    <BlogCard article={article} categories={categories} isFeatured={true} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default BlogFeaturedSection;