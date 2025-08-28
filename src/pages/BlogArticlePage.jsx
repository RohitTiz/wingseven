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
  
  // Get popular articles (excluding the current article)
  const popularArticles = blogData.articles
    .filter(a => a.id !== articleId)
    .sort((a, b) => {
      // Sort by views (convert "5.2k" to 5200 for comparison)
      const parseViews = (views) => {
        if (views.includes('k')) return parseFloat(views) * 1000;
        return parseInt(views);
      };
      return parseViews(b.views) - parseViews(a.views);
    })
    .slice(0, 3); // Get top 3 popular articles

  if (!article) {
    return (
      <>
        <AuthSection />
        <div className="min-h-screen bg-white py-4 pt-20">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => navigate('/specializations')}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium px-4 py-3 rounded-lg hover:bg-blue-50 active:bg-blue-100 touch-manipulation"
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

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gray-50 py-4 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4">
          <button 
            onClick={() => navigate('/specializations')}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium px-4 py-3 rounded-lg hover:bg-blue-50 active:bg-blue-100 touch-manipulation"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Specializations
          </button>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Article Content - full width on mobile, 2/3 on large screens */}
            <div className="w-full lg:w-2/3 -mt-10">
              <BlogArticle article={article} />
              
              {/* Review Section */}
              <div className="mt-8 md:mt-12">
                <ReviewSection articleId={articleId} />
              </div>
            </div>
            
            {/* Popular Articles Section - hidden on mobile, 1/3 width on large screens */}
            <div className="hidden lg:block w-full lg:w-1/3">
              <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm sticky top-24">
                <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-5 md:mb-6 pb-3 border-b border-gray-200">Popular Articles</h3>
                <div className="space-y-4 md:space-y-5">
                  {popularArticles.map(popularArticle => (
                    <div 
                      key={popularArticle.id} 
                      className="cursor-pointer group transform transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      onClick={() => navigate(`/specializations/${popularArticle.id}`)}
                    >
                      <BlogCard 
                        article={popularArticle} 
                        categories={blogData.categories}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3 text-sm">Stay in the loop</h4>
                  <p className="text-xs text-gray-600 mb-4">
                    Get the latest articles on development and AI.
                  </p>
                  <div className="flex flex-col gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-3 py-2.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors touch-manipulation">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Articles Section for mobile */}
          <div className="mt-8 lg:hidden">
            <h3 className="text-xl font-serif text-gray-900 mb-5">You might also like</h3>
            <div className="grid gap-5">
              {popularArticles.map(popularArticle => (
                <div 
                  key={popularArticle.id} 
                  className="cursor-pointer group transform transition-transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
                  onClick={() => navigate(`/specializations/${popularArticle.id}`)}
                >
                  <BlogCard 
                    article={popularArticle} 
                    categories={blogData.categories}
                  />
                </div>
              ))}
            </div>
            
            {/* Newsletter Signup for mobile */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3 text-sm">Stay in the loop</h4>
              <p className="text-xs text-gray-600 mb-4">
                Get the latest articles on development and AI.
              </p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors touch-manipulation">
                  Subscribe
                </button>
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