import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';
import blogArticleData from '../data/blogarticledata';

function BlogArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the article by ID
    const foundArticle = blogArticleData.articles.find(
      article => article.id === parseInt(id)
    );
    
    setArticle(foundArticle);
    
    // Find related articles (excluding the current one)
    if (foundArticle) {
      const related = blogArticleData.articles
        .filter(a => a.id !== parseInt(id))
        .slice(0, 3);
      setRelatedArticles(related);
    }
    
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <AuthSection />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading article...</p>
          </div>
        </div>
      </>
    );
  }

  if (!article) {
    return (
      <>
        <AuthSection />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">
        {/* Article Header */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
                <span>{article.publishDate}</span>
                <span>•</span>
                <span>{article.readTime} read</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">{article.authorInitials}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{article.author}</p>
                  <p className="text-sm text-gray-600">{article.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {article.content.map((item, index) => {
                switch (item.type) {
                  case 'paragraph':
                    return <p key={index} className="mb-6 text-gray-700 leading-relaxed">{item.text}</p>;
                  case 'heading':
                    return <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">{item.text}</h2>;
                  case 'subheading':
                    return <h3 key={index} className="text-xl md:text-2xl font-semibold text-gray-800 mt-10 mb-4">{item.text}</h3>;
                  case 'image':
                    return (
                      <div key={index} className="my-8">
                        <img 
                          src={item.src} 
                          alt="" 
                          className="w-full h-auto rounded-xl shadow-md"
                        />
                      </div>
                    );
                  case 'code':
                    return (
                      <pre key={index} className="bg-gray-800 text-gray-100 p-6 rounded-xl my-8 overflow-x-auto">
                        <code>{item.text}</code>
                      </pre>
                    );
                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 text-gray-700">
                        {item.items.map((listItem, listIndex) => (
                          <li key={listIndex} className="mb-2">{listItem}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Key Takeaways */}
            <div className="bg-blue-50 rounded-2xl p-8 my-16 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Key Takeaways
              </h3>
              <ul className="space-y-4">
                {article.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-blue-700 font-bold text-xl">{article.authorInitials}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">{article.author}</p>
                  <p className="text-gray-600 mb-4">{article.authorBio}</p>
                  <p className="text-sm text-gray-500">{article.followers}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        
      </div>
    </>
  );
}

export default BlogArticle;