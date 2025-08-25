// pages/BlogArticlePage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import BlogArticle from '../components/BlogArticle';
import blogArticleData from '../data/blogarticledata';

function BlogArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleId = parseInt(id);
  const article = blogArticleData.articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <>
        <AuthSection />
        <div className="min-h-screen bg-white py-8 pt-[100px]"> {/* Changed to pt-[100px] */}
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
      <div className="min-h-screen bg-gray-50 py-8 pt-[80px] md:pt-[100px]"> {/* Changed to pt-[100px] */}
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
          <BlogArticle article={article} />
        </div>
      </div>
    </>
  );
}

export default BlogArticlePage;