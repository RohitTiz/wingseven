// pages/BlogArticlePage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import BlogArticle from '../components/BlogArticle';
import BlogCard from '../components/BlogCard';
import ReviewSection from '../components/ReviewSection';
import blogArticleData from '../data/blogarticledata';
import blogData from '../data/blogdata';
import Footer from '../components/Footer';

function BlogArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    .slice(0, 3);

  if (!article) {
    return (
      <>
        <AuthSection />
        <div className="min-h-screen bg-white py-4 pt-20">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => navigate('/specializations')}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-50 active:bg-blue-100"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Specializations
            </button>
            <div className="text-center py-12">
              <div className="text-4xl mb-4">❌</div>
              <div className="text-lg text-gray-500 font-light">Article not found</div>
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
      <div className="min-h-screen bg-gray-50 py-4 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/specializations')}
            className="mb-6 md:mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-50 active:bg-blue-100"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Specializations
          </button>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <BlogArticle article={completeArticle} />
              
              <div className="mt-10 md:mt-12">
                <ReviewSection articleId={articleId} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Popular Articles Section */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">Popular Articles</h3>
                  <div className="space-y-6">
                    {popularArticles.map(popularArticle => (
                      <div 
                        key={popularArticle.id} 
                        className="cursor-pointer group"
                        onClick={() => navigate(`/specializations/${popularArticle.id}`)}
                      >
                        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                          {/* Image Section */}
                          <div className="relative">
                            <img 
                              src={popularArticle.image} 
                              alt={popularArticle.title}
                              className="w-full h-40 object-cover"
                            />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md bg-blue-500 text-white">
                                {categories.find(cat => cat.id === popularArticle.category)?.name || popularArticle.category}
                              </span>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-4">
                            {/* Blog Title */}
                            <h4 className="font-bold text-base mb-2 text-gray-900 line-clamp-2">
                              {popularArticle.title}
                            </h4>
                            
                            {/* Blog Subtitle/Description */}
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {popularArticle.subtitle}
                            </p>
                            
                            {/* Blog Stats */}
                            <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                              <div className="flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                </svg>
                                <span>{popularArticle.date}</span>
                              </div>
                              
                              <div className="flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                <span>{popularArticle.readTime}</span>
                              </div>
                            </div>

                            {/* Author Section */}
                            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                              <div className="flex items-center">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold mr-2">
                                  {popularArticle.authorInitials}
                                </div>
                                <span className="text-xs font-medium text-gray-700">{popularArticle.author}</span>
                              </div>
                              
                              <button 
                                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/specializations/${popularArticle.id}`);
                                }}
                              >
                                Read More →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Subscription */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Stay in the loop</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest articles on development and AI delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full px-4 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
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