// pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogdata';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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
    <div className={`group relative overflow-hidden rounded-xl ${size === 'large' ? 'h-24 md:h-32' : 'h-64 md:h-80'} bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 border border-blue-100 shadow-sm`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-blue-400/20 to-blue-600/20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-blue-500 text-xs font-light tracking-wider uppercase">Sponsored Content</div>
          <div className="text-blue-300 text-xs mt-1 font-light">Premium Ad Space</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </div>
  );

  const TrendingCard = ({ rank, title, category, views }) => (
    <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-xs font-medium text-white font-sans">
        {rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-normal text-gray-800 truncate group-hover:text-blue-600 transition-colors font-sans">
          {title}
        </p>
        <p className="text-xs text-blue-600 font-light">{category} • {views} views</p>
      </div>
      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60"></div>
    </div>
  );

  // Mobile category selector
  const MobileCategorySelector = () => (
    <div className="lg:hidden mb-6 px-4">
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-3 bg-white border border-blue-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 font-light"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.icon} {category.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 overflow-hidden">
        
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0">
          {/* Background elements */}
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100 to-transparent opacity-50"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          <div className="text-center max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            
            {/* Logo/Brand */}
            <div className="mb-8 md:mb-12">
              <div className="inline-block">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight mb-2">
                  <span className="text-blue-900">Code</span>
                  <span className="text-blue-600">Brain</span>
                </h1>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-3/4 mx-auto"></div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-blue-700 mb-8 md:mb-12 font-light tracking-normal max-w-2xl mx-auto leading-relaxed font-sans">
              Where developers come to 
              <span className="text-blue-900 font-medium"> think different</span>
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative mb-12 md:mb-16 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 md:h-14 bg-white border border-blue-200 rounded-lg pl-5 md:pl-6 pr-12 md:pr-14 text-base placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-light shadow-sm"
                />
                <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center cursor-pointer shadow-sm">
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
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md'
                      : 'bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-900 border border-blue-200 shadow-sm'
                  }`}
                >
                  <span className="text-xs mr-2">{category.icon}</span>
                  <span className="tracking-wide">{category.name}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center">
              <span className="text-xs text-blue-500 mb-1 font-light">Explore</span>
              <svg className="w-5 h-5 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
                  <div className="flex items-center mb-5">
                    <h3 className="font-serif text-lg text-blue-900">Trending Now</h3>
                    <div className="ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
                <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-5 border border-blue-100 shadow-sm">
                  <div className="text-center">
                    <h3 className="font-serif text-lg text-blue-900 mb-3">Stay Informed</h3>
                    <p className="text-sm text-blue-600 mb-5 font-light">Get the latest tech insights delivered weekly</p>
                    
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 bg-white border border-blue-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 mb-3 font-light shadow-sm"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-2.5 rounded text-sm font-medium text-white hover:from-blue-700 hover:to-blue-900 transition-all shadow-sm">
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
                      <h2 className="font-serif text-2xl text-blue-900 border-b border-blue-200 pb-2">Featured Stories</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {featuredArticles.map((article) => (
                        <Link key={article.id} to={`/specializations/${article.id}`} className="cursor-pointer">
                          <BlogCard article={article} categories={categories} isFeatured={true} />
                        </Link>
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
                    <h2 className="font-serif text-2xl text-blue-900 border-b border-blue-200 pb-2">
                      {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="text-4xl mb-4 text-blue-300">🔍</div>
                      <div className="text-lg text-blue-600 font-light">No articles match your search</div>
                      <div className="text-sm text-blue-400 mt-2 font-light">Try different keywords or categories</div>
                    </div>
                  ) : (
                    <div className="grid gap-8">
                      {filteredArticles.map((article) => (
                        <Link key={article.id} to={`/specializations/${article.id}`} className="cursor-pointer">
                          <BlogCard article={article} categories={categories} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Load More */}
                <div className="text-center mt-16">
                  <button className="px-8 py-3 bg-white border border-blue-200 rounded-lg font-medium text-blue-700 hover:bg-blue-50 transition-colors text-sm shadow-sm">
                    Load More Stories
                  </button>
                </div>
              </div>

              {/* Right Sidebar - Hidden on mobile, shown on large screens */}
              <div className="hidden lg:block lg:col-span-3 space-y-8">
                
                <AdSpace size="small" />
                
                {/* Social Links */}
                <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
                  <h3 className="font-serif text-lg text-blue-900 mb-4">Connect With Us</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Twitter', handle: '@codebrain' },
                      { name: 'GitHub', handle: '/codebrain' },
                      { name: 'LinkedIn', handle: '/company/codebrain' },
                      { name: 'Instagram', handle: '@codebrain' }
                    ].map((social, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-blue-50 cursor-pointer transition-colors">
                        <span className="text-sm text-blue-700 font-light">{social.name}</span>
                        <span className="text-xs text-blue-400">{social.handle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
                  <h3 className="font-serif text-lg text-blue-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'AI', 'JavaScript', 'Blockchain', 'Startups', 'Design', 'Python', 'CSS'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-light hover:bg-blue-200 cursor-pointer">
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
        <div className="border-t border-blue-200 mt-20 py-10 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="font-serif text-blue-900 text-lg">CodeBrain</span>
                <p className="text-xs text-blue-600 font-light mt-1">© {new Date().getFullYear()} All rights reserved</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-light">Privacy</a>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-light">Terms</a>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-light">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default BlogPage;