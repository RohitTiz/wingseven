// pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import AuthSection from '../components/AuthSection';
import BlogCard from '../components/BlogCard';
import BlogArticle from '../components/BlogArticle';
import blogData from '../data/blogdata';
import blogArticleData from '../data/blogarticledata';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: '◆' },
    { id: 'ai', name: 'AI/ML', icon: '∞' },
    { id: 'web', name: 'Web Dev', icon: '⟨/⟩' },
    { id: 'blockchain', name: 'Web3', icon: '◊' },
    { id: 'mobile', name: 'Mobile', icon: '◈' }
  ];

  const featuredArticles = blogData.articles.filter(article => article.featured);
  const articles = blogData.articles.filter(article => !article.featured);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const AdSpace = ({ size = "large", style = "minimal" }) => (
    <div className={`group relative overflow-hidden rounded-3xl ${size === 'large' ? 'h-24 md:h-32' : 'h-64 md:h-80'} bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-sm font-medium tracking-wider">SPONSORED</div>
          <div className="text-gray-400 text-xs mt-1">Premium Ad Space</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </div>
  );

  const TrendingCard = ({ rank, title, category, views }) => (
    <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">
        {rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-600 transition-colors">
          {title}
        </p>
        <p className="text-xs text-gray-500">{category} • {views} views</p>
      </div>
      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
    </div>
  );

  // Mobile category selector
  const MobileCategorySelector = () => (
    <div className="lg:hidden mb-6 px-4">
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-3 bg-white border border-gray-300 rounded-2xl text-gray-700 focus:outline-none focus:border-purple-500"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.icon} {category.name}
          </option>
        ))}
      </select>
    </div>
  );

  // If an article is selected, show the article view
  if (selectedArticle) {
    const article = blogArticleData.articles.find(a => a.id === selectedArticle);
    return (
      <>
        <AuthSection />
        <div className="min-h-screen bg-gray-50 py-4 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mb-4 md:mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </button>
            {article && <BlogArticle article={article} />}
          </div>
        </div>
      </>
    );
  }

  // Otherwise, show the blog listing
  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
        
        {/* Subtle background elements - reduced intensity on mobile */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 md:-top-40 md:-right-40 md:w-80 md:h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 md:opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 md:-bottom-40 md:-left-40 md:w-80 md:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 md:opacity-40 animate-pulse delay-75"></div>
          <div className="absolute top-20 left-1/2 w-60 h-60 md:top-40 md:w-80 md:h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 md:opacity-40 animate-pulse delay-150"></div>
        </div>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0">
          <div className="text-center max-w-6xl mx-auto px-4 md:px-6">
            
            {/* Logo/Brand */}
            <div className="mb-6 md:mb-8">
              <div className="inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    code
                  </span>
                  <span className="text-gray-800">brain</span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-1"></div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 md:mb-12 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              Where developers come to 
              <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-semibold"> think different</span>
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative mb-12 md:mb-16 px-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search the future..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-14 md:h-16 bg-white backdrop-blur-sm border border-gray-300 rounded-2xl pl-5 md:pl-6 pr-14 md:pr-16 text-base md:text-lg placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-sm"
                />
                <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-white text-xs md:text-sm">⚡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories - Hidden on mobile, replaced with dropdown */}
            <div className="hidden lg:flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 md:px-8 md:py-4 rounded-2xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-300 scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 shadow-sm'
                  }`}
                >
                  <span className="text-lg md:text-xl mr-2 md:mr-3 font-light">{category.icon}</span>
                  <span className="font-semibold tracking-wide text-sm md:text-base">{category.name}</span>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 md:h-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mt-1 md:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Mobile Category Selector */}
        <MobileCategorySelector />

        {/* Main Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              
              {/* Left Sidebar - Hidden on mobile, shown on large screens */}
              <div className="hidden lg:block lg:col-span-2 space-y-6 md:space-y-8">
                
                {/* Trending */}
                <div className="bg-white rounded-3xl p-4 md:p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-gray-800">Trending</h3>
                  </div>
                  <div className="space-y-2">
                    <TrendingCard rank="1" title="GPT-5 Rumors Intensify" category="AI" views="45.2k" />
                    <TrendingCard rank="2" title="React vs Next Drama" category="Web" views="28.1k" />
                    <TrendingCard rank="3" title="Apple's AR Headset Flop" category="Tech" views="19.8k" />
                    <TrendingCard rank="4" title="Crypto Winter Ending?" category="Web3" views="15.3k" />
                  </div>
                </div>

                <AdSpace size="small" />
              </div>

              {/* Main Content */}
              <div className="col-span-1 lg:col-span-8">
                
                {/* Featured Section */}
                {selectedCategory === 'all' && (
                  <div className="mb-12 md:mb-20">
                    <div className="flex items-center mb-6 md:mb-10">
                      <div className="h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex-1"></div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mx-4 md:mx-8 tracking-tight text-gray-800">FEATURED</h2>
                      <div className="h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex-1"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {featuredArticles.map((article) => (
                        <div key={article.id} onClick={() => setSelectedArticle(article.id)} className="cursor-pointer">
                          <BlogCard article={article} categories={categories} isFeatured={true} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ad Space */}
                <div className="mb-12 md:mb-16">
                  <AdSpace size="large" />
                </div>

                {/* Regular Articles */}
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center mb-8 md:mb-12">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-1"></div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-black mx-4 md:mx-8 tracking-tight text-gray-800">
                      {selectedCategory === 'all' ? 'LATEST' : categories.find(c => c.id === selectedCategory)?.name.toUpperCase()}
                    </h2>
                    <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex-1"></div>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-12 md:py-20">
                      <div className="text-4xl md:text-6xl mb-4">🤖</div>
                      <div className="text-lg md:text-xl text-gray-500">No articles match your search</div>
                      <div className="text-sm text-gray-400 mt-2">Try different keywords or categories</div>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:gap-6">
                      {filteredArticles.map((article) => (
                        <div key={article.id} onClick={() => setSelectedArticle(article.id)} className="cursor-pointer">
                          <BlogCard article={article} categories={categories} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Load More */}
                <div className="text-center mt-12 md:mt-16">
                  <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-base md:text-lg text-white hover:shadow-lg hover:shadow-purple-300 transform hover:scale-105 transition-all duration-300">
                    <span className="relative z-10">Load More Stories</span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Right Sidebar - Hidden on mobile, shown on large screens */}
              <div className="hidden lg:block lg:col-span-2 space-y-6 md:space-y-8">
                
                {/* Newsletter */}
                <div className="bg-white rounded-3xl p-4 md:p-6 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-base md:text-lg mb-2 text-gray-800">Stay Ahead</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Get the latest tech insights delivered weekly</p>
                    
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-200 mb-3 md:mb-4"
                    />
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 md:py-3 rounded-xl font-semibold text-white hover:shadow-md transition-all text-sm md:text-base">
                      Subscribe
                    </button>
                  </div>
                </div>
                
                <AdSpace size="small" />
                
                {/* Social Links */}
                <div className="bg-white rounded-3xl p-4 md:p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold mb-3 md:mb-4 text-gray-800 text-base md:text-lg">Follow Us</h3>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { name: 'Twitter', symbol: '𝕏', handle: '@codebrain' },
                      { name: 'GitHub', symbol: '⟨/⟩', handle: '/codebrain' },
                      { name: 'Discord', symbol: '◈', handle: '/join' },
                      { name: 'YouTube', symbol: '▶', handle: '/codebrain' }
                    ].map((social, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                            <span className="text-white text-xs font-bold">{social.symbol}</span>
                          </div>
                          <span className="text-xs md:text-sm text-gray-700">{social.name}</span>
                        </div>
                        <span className="text-xs text-gray-500 hidden md:block">{social.handle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;