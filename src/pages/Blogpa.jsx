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
    <div className={`group relative overflow-hidden rounded-xl ${size === 'large' ? 'h-24 md:h-32' : 'h-64 md:h-80'} bg-gradient-to-br from-gray-50 via-white to-gray-50 border border-gray-100 shadow-sm`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-xs font-light tracking-wider uppercase">Sponsored Content</div>
          <div className="text-gray-300 text-xs mt-1 font-light">Premium Ad Space</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </div>
  );

  const TrendingCard = ({ rank, title, category, views }) => (
    <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-xs font-medium text-white font-sans">
        {rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-normal text-gray-800 truncate group-hover:text-blue-600 transition-colors font-sans">
          {title}
        </p>
        <p className="text-xs text-gray-500 font-light">{category} • {views} views</p>
      </div>
      <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-60"></div>
    </div>
  );

  // Mobile category selector
  const MobileCategorySelector = () => (
    <div className="lg:hidden mb-6 px-4">
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-3 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-gray-400 font-light"
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
        <div className="min-h-screen bg-white py-4 md:py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mb-6 md:mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
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
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0">
          <div className="text-center max-w-4xl mx-auto px-4 md:px-6">
            
            {/* Logo/Brand */}
            <div className="mb-8 md:mb-12">
              <div className="inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight mb-2">
                  <span className="text-gray-900">Code</span>
                  <span className="text-gray-600">Brain</span>
                </h1>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-3/4 mx-auto"></div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-12 font-light tracking-normal max-w-2xl mx-auto leading-relaxed font-sans">
              Where developers come to 
              <span className="text-gray-900 font-medium"> think different</span>
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative mb-12 md:mb-16 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 md:h-14 bg-white border border-gray-200 rounded-lg pl-5 md:pl-6 pr-12 md:pr-14 text-base placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-all duration-300 font-light"
                />
                <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-gray-900 rounded flex items-center justify-center cursor-pointer">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories - Hidden on mobile, replaced with dropdown */}
            <div className="hidden lg:flex flex-wrap justify-center gap-2 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 font-light text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  <span className="text-xs mr-2">{category.icon}</span>
                  <span className="tracking-wide">{category.name}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1 font-light">Explore</span>
              <svg className="w-5 h-5 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Category Selector */}
        <MobileCategorySelector />

        {/* Main Content */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
              
              {/* Left Sidebar - Hidden on mobile, shown on large screens */}
              <div className="hidden lg:block lg:col-span-3 space-y-8">
                
                {/* Trending */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center mb-5">
                    <h3 className="font-serif text-lg text-gray-900">Trending Now</h3>
                    <div className="ml-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <TrendingCard rank="1" title="GPT-5 Rumors Intensify" category="AI" views="45.2k" />
                    <TrendingCard rank="2" title="React vs Next Drama" category="Web" views="28.1k" />
                    <TrendingCard rank="3" title="Apple's AR Headset Flop" category="Tech" views="19.8k" />
                    <TrendingCard rank="4" title="Crypto Winter Ending?" category="Web3" views="15.3k" />
                  </div>
                </div>

                <AdSpace size="small" />
                
                {/* Newsletter */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <div className="text-center">
                    <h3 className="font-serif text-lg text-gray-900 mb-3">Stay Informed</h3>
                    <p className="text-sm text-gray-500 mb-5 font-light">Get the latest tech insights delivered weekly</p>
                    
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-gray-400 mb-3 font-light"
                    />
                    <button className="w-full bg-gray-900 py-2.5 rounded text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-1 lg:col-span-6">
                
                {/* Featured Section */}
                {selectedCategory === 'all' && featuredArticles.length > 0 && (
                  <div className="mb-16">
                    <div className="mb-8">
                      <h2 className="font-serif text-2xl text-gray-900 border-b border-gray-200 pb-2">Featured Stories</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {featuredArticles.map((article) => (
                        <div key={article.id} onClick={() => setSelectedArticle(article.id)} className="cursor-pointer">
                          <BlogCard article={article} categories={categories} isFeatured={true} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ad Space */}
                <div className="mb-12">
                  <AdSpace size="large" />
                </div>

                {/* Regular Articles */}
                <div className="space-y-10">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-gray-900 border-b border-gray-200 pb-2">
                      {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="text-4xl mb-4">🔍</div>
                      <div className="text-lg text-gray-500 font-light">No articles match your search</div>
                      <div className="text-sm text-gray-400 mt-2 font-light">Try different keywords or categories</div>
                    </div>
                  ) : (
                    <div className="grid gap-8">
                      {filteredArticles.map((article) => (
                        <div key={article.id} onClick={() => setSelectedArticle(article.id)} className="cursor-pointer">
                          <BlogCard article={article} categories={categories} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Load More */}
                <div className="text-center mt-16">
                  <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                    Load More Stories
                  </button>
                </div>
              </div>

              {/* Right Sidebar - Hidden on mobile, shown on large screens */}
              <div className="hidden lg:block lg:col-span-3 space-y-8">
                
                {/* About */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-serif text-lg text-gray-900 mb-4">About CodeBrain</h3>
                  <p className="text-sm text-gray-600 mb-4 font-light">
                    Exploring the intersection of technology, creativity, and innovation through thoughtful analysis and commentary.
                  </p>
                  <button className="text-xs text-gray-500 hover:text-gray-700 font-medium">Learn more →</button>
                </div>
                
                <AdSpace size="small" />
                
                {/* Social Links */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-serif text-lg text-gray-900 mb-4">Connect With Us</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Twitter', handle: '@codebrain' },
                      { name: 'GitHub', handle: '/codebrain' },
                      { name: 'LinkedIn', handle: '/company/codebrain' },
                      { name: 'Instagram', handle: '@codebrain' }
                    ].map((social, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors">
                        <span className="text-sm text-gray-700 font-light">{social.name}</span>
                        <span className="text-xs text-gray-400">{social.handle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-serif text-lg text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'AI', 'JavaScript', 'Blockchain', 'Startups', 'Design', 'Python', 'CSS'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-light hover:bg-gray-200 cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 mt-20 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="font-serif text-gray-900 text-lg">CodeBrain</span>
                <p className="text-xs text-gray-500 font-light mt-1">© {new Date().getFullYear()} All rights reserved</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 font-light">Privacy</a>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 font-light">Terms</a>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 font-light">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;