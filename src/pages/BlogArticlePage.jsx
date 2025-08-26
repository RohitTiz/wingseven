// pages/BlogArticlePage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import BlogArticle from '../components/BlogArticle';
import BlogCard from '../components/BlogCard';
import blogArticleData from '../data/blogarticledata';
import blogData from '../data/blogdata';

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
        <div className="min-h-screen bg-white py-8 pt-[100px]">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </button>
            <div className="text-center py-16">
              <div className="text-4xl mb-4">❌</div>
              <div className="text-lg text-gray-500 font-light">Article not found</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gray-50 py-8 pt-[80px] md:pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Main Article Content */}
          <div className="flex-1">
            <button 
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </button>
            <BlogArticle article={article} />
          </div>
          
          {/* Popular Articles Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-lg font-medium text-gray-900 mb-6 font-serif">Popular Articles</h3>
              <div className="space-y-5">
                {popularArticles.map(popularArticle => (
                  <div 
                    key={popularArticle.id} 
                    className="cursor-pointer"
                    onClick={() => navigate(`/blog/${popularArticle.id}`)}
                  >
                    <BlogCard 
                      article={popularArticle} 
                      categories={blogData.categories}
                    />
                  </div>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3 font-serif">Stay in the loop</h4>
                <p className="text-sm text-gray-600 mb-4 font-light">
                  Subscribe to get the latest articles on development and AI.
                </p>
                <div className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArticlePage;