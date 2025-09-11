// pages/BlogArticlePage.jsx
import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import AuthSection from '../components/AuthSection';
import BlogArticle from '../components/BlogArticle';
import ReviewSection from '../components/ReviewSection';
import blogArticleData from '../data/blogarticledata';
import blogData from '../data/blogdata';
import Footer from '../components/Footer';

function BlogArticlePage() {
  const { darkMode } = useDarkMode();
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const articleId = parseInt(id);
  const article = blogArticleData.articles.find(a => a.id === articleId);
  
  // Categories for BlogCard
  const categories = [
    { id: "python", name: "Python" },
    { id: "ai", name: "AI/ML" },
    { id: "web", name: "Web Dev" },
    { id: "blockchain", name: "Web3" },
    { id: "mobile", name: "Mobile" }
  ];
  
  // Merge data from both sources to get complete article information
  const getCompleteArticle = (article) => {
    const blogInfo = blogData.articles.find(a => a.id === article.id);
    return {
      ...article,
      views: blogInfo?.views || "0",
      likes: blogInfo?.likes || "0",
      image: blogInfo?.image || "/default-article-image.jpg",
      subtitle: blogInfo?.subtitle || article.subtitle || "",
      date: blogInfo?.date || "Jan 1, 2023",
      readTime: blogInfo?.readTime || "5 min read",
      authorInitials: blogInfo?.authorInitials || "AU",
      author: blogInfo?.author || "Anonymous Author"
    };
  };

  // Get popular articles (excluding the current article)
  const popularArticles = blogArticleData.articles
    .filter(a => a.id !== articleId)
    .map(getCompleteArticle)
    .slice(0, 5); // Increased to 5 for better scrolling experience

  // Scroll functions for horizontal scrolling
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (!article) {
    return (
      <>
        <AuthSection />
        <div className={`min-h-screen ${darkMode ? 'dark-bg' : 'light-bg'} py-4 pt-20 transition-colors duration-300`}>
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => navigate('/specializations')}
              className={`mb-6 flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors text-sm font-medium px-4 py-2.5 rounded-lg ${darkMode ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-blue-50 active:bg-blue-100'}`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Specializations
            </button>
            <div className="text-center py-12">
              <div className="text-4xl mb-4">❌</div>
              <div className={`text-lg ${darkMode ? 'light-text' : 'dark-text'} font-light transition-colors duration-300`}>Article not found</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const completeArticle = getCompleteArticle(article);

  return (
    <>
      <AuthSection />
      <div className={`min-h-screen ${darkMode ? 'dark-bg' : 'light-bg'} py-4 pt-20 md:pt-24 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Back Button */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button 
              onClick={() => navigate('/specializations')}
              className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors text-sm font-medium px-4 py-2.5 rounded-lg ${darkMode ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-blue-50 active:bg-blue-100'}`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Specializations
            </button>
            
            {/* Article Navigation */}
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Share this article:
              </span>
              <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full">
              <BlogArticle article={completeArticle} />
              
              {/* Enhanced Popular Articles Section */}
              <div className="mt-12 md:mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} transition-colors duration-300`}>
                    Popular Articles
                  </h2>
                  <div className="flex space-x-2">
                    <button 
                      onClick={scrollLeft}
                      className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-300`}
                      aria-label="Scroll left"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={scrollRight}
                      className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-300`}
                      aria-label="Scroll right"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div 
                  ref={scrollContainerRef}
                  className="relative overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex space-x-6 w-max">
                    {popularArticles.map(popularArticle => (
                      <div 
                        key={popularArticle.id} 
                        className="cursor-pointer group flex-shrink-0 w-80 transform transition-all duration-300 hover:scale-105"
                        onClick={() => navigate(`/specializations/${popularArticle.id}`)}
                      >
                        <div className={`h-full rounded-xl overflow-hidden ${darkMode ? 'dark-card dark-border' : 'light-card light-border'} shadow-sm hover:shadow-lg transition-all duration-300`}>
                          {/* Image Section */}
                          <div className="relative">
                            <img 
                              src={popularArticle.image} 
                              alt={popularArticle.title}
                              className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                            />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                {categories.find(cat => cat.id === popularArticle.category)?.name || popularArticle.category}
                              </span>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-5">
                            {/* Blog Title */}
                            <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'light-text' : 'dark-text'} line-clamp-2 transition-colors duration-300 group-hover:text-blue-500`}>
                              {popularArticle.title}
                            </h4>
                            
                            {/* Blog Subtitle/Description */}
                            <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                              {popularArticle.subtitle}
                            </p>
                            
                            {/* Blog Stats */}
                            <div className={`flex justify-between items-center mb-4 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                </svg>
                                <span>{popularArticle.date}</span>
                              </div>
                              
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                <span>{popularArticle.readTime}</span>
                              </div>
                            </div>

                            {/* Author Section */}
                            <div className={`flex items-center justify-between pt-3 ${darkMode ? 'border-gray-700' : 'border-gray-100'} border-t transition-colors duration-300`}>
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold mr-2 shadow-md">
                                  {popularArticle.authorInitials}
                                </div>
                                <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>{popularArticle.author}</span>
                              </div>
                              
                              <button 
                                className={`text-xs font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300 flex items-center`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/specializations/${popularArticle.id}`);
                                }}
                              >
                                Read More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 md:mt-12">
                <ReviewSection articleId={articleId} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogArticlePage;