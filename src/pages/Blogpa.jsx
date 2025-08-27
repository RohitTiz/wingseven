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
    <div className={`group relative overflow-hidden rounded-2xl ${size === 'large' ? 'h-32 md:h-40' : 'h-64 md:h-80'} bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 border border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-2 animate-pulse">Premium Space</div>
          <div className="text-blue-400 text-xs font-light">Your Brand Here</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-in-out"></div>
      <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
    </div>
  );

  const TrendingCard = ({ rank, title, category, views }) => (
    <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-200/50">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center text-sm font-bold text-white font-sans shadow-lg group-hover:rotate-12 transition-transform duration-300">
        {rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-700 transition-colors font-sans">
          {title}
        </p>
        <p className="text-xs text-purple-600 font-medium flex items-center gap-1">
          <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
          {category} • {views} views
        </p>
      </div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
    </div>
  );

  // Mobile category selector
  const MobileCategorySelector = () => (
    <div className="lg:hidden mb-8 px-4">
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-400 font-medium shadow-lg transition-all duration-300 hover:bg-white"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 text-gray-900 overflow-hidden pt-30 relative">
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/60 to-transparent"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-r from-purple-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
        
        {/* Hero Section */}
        <div className="relative flex items-center justify-center pt-20 md:pt-8 pb-12">
          <div className="text-center max-w-5xl mx-auto px-4 md:px-6 relative z-10">
            
            {/* Enhanced Logo/Brand */}
            <div className="mb-12 md:mb-16">
              <div className="inline-block group">
                <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-normal tracking-tight mb-4 relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-800 to-cyan-900 hover:from-purple-900 hover:via-blue-800 hover:to-cyan-900 transition-all duration-500 cursor-default">Code</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-cyan-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-500 cursor-default">Brain</span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </h1>
                <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 via-purple-400 via-cyan-400 to-transparent w-4/5 mx-auto rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Enhanced Tagline */}
            <p className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 mb-10 md:mb-14 font-light tracking-wide max-w-3xl mx-auto leading-relaxed font-sans">
              Where developers come to 
              <span className="font-bold bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent animate-pulse"> think different</span>
            </p>

            {/* Enhanced Search */}
            <div className="max-w-2xl mx-auto relative mb-14 md:mb-18 px-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <input
                  type="text"
                  placeholder="Search for inspiration..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="relative w-full h-16 md:h-18 bg-white/90 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl pl-6 md:pl-8 pr-16 md:pr-18 text-lg placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-400 transition-all duration-300 font-medium shadow-2xl hover:bg-white/95"
                />
                <div className="absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-12">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Categories */}
            <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-8 py-4 rounded-2xl transition-all duration-500 font-medium text-base transform hover:scale-105 hover:-translate-y-1 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-2xl'
                      : 'bg-white/80 backdrop-blur-sm text-blue-700 hover:bg-white hover:text-purple-900 border-2 border-blue-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="text-lg mr-3 group-hover:animate-bounce">{category.icon}</span>
                  <span className="tracking-wide font-semibold">{category.name}</span>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl blur animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile Category Selector */}
        <MobileCategorySelector />

        {/* Main Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
              
              {/* Enhanced Left Sidebar */}
              <div className="hidden lg:block lg:col-span-3 space-y-10">
                
                {/* Enhanced Trending */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <h3 className="font-serif text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900">Trending Now</h3>
                    <div className="ml-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="space-y-5">
                    <TrendingCard rank="1" title="GPT-5 Rumors Intensify" category="AI" views="45.2k" />
                    <TrendingCard rank="2" title="React vs Next Drama" category="Web" views="28.1k" />
                    <TrendingCard rank="3" title="Apple's AR Headset Flop" category="Tech" views="19.8k" />
                    <TrendingCard rank="4" title="Crypto Winter Ending?" category="Web3" views="15.3k" />
                  </div>
                </div>

                <AdSpace size="small" />
                
                {/* Enhanced Newsletter */}
                <div className="bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-cyan-50/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="text-center">
                    <h3 className="font-serif text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 mb-4">Stay Informed</h3>
                    <p className="text-base text-purple-600 mb-6 font-medium">Get the latest tech insights delivered weekly</p>
                    
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-5 py-3 bg-white/90 backdrop-blur-sm border-2 border-blue-200/50 rounded-xl text-base focus:outline-none focus:ring-4 focus:ring-purple-300/50 focus:border-purple-400 mb-4 font-medium shadow-lg transition-all duration-300 hover:bg-white"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 py-3 rounded-xl text-base font-bold text-white hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Main Content */}
              <div className="col-span-1 lg:col-span-6">
                
                {/* Enhanced Featured Section */}
                {selectedCategory === 'all' && featuredArticles.length > 0 && (
                  <div className="mb-20">
                    <div className="mb-10">
                      <h2 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 pb-4">Featured Stories</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {featuredArticles.map((article, index) => (
                        <Link key={article.id} to={`/specializations/${article.id}`} className="cursor-pointer transform hover:scale-105 transition-all duration-500" style={{ animationDelay: `${index * 0.2}s` }}>
                          <div className="group">
                            <BlogCard article={article} categories={categories} isFeatured={true} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enhanced Ad Space */}
                <div className="mb-16">
                  <AdSpace size="large" />
                </div>

                {/* Enhanced Regular Articles */}
                <div className="space-y-12">
                  <div className="mb-10">
                    <h2 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 pb-4">
                      {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-20">
                      <div className="text-6xl mb-6 animate-bounce">🔍</div>
                      <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium mb-2">No articles match your search</div>
                      <div className="text-lg text-blue-500 font-light">Try different keywords or categories</div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredArticles.map((article, index) => (
                        <Link key={article.id} to={`/specializations/${article.id}`} className="cursor-pointer group transform hover:scale-105 transition-all duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="h-full">
                            <BlogCard article={article} categories={categories} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Load More */}
                <div className="text-center mt-20">
                  <button className="px-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl font-bold text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 hover:text-white transition-all duration-500 text-base shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                    Load More Stories
                  </button>
                </div>
              </div>

              {/* Enhanced Right Sidebar */}
              <div className="hidden lg:block lg:col-span-3 space-y-10">
                
                <AdSpace size="small" />
                
                {/* Enhanced Social Links */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <h3 className="font-serif text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 mb-5">Connect With Us</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Twitter', handle: '@codebrain' },
                      { name: 'GitHub', handle: '/codebrain' },
                      { name: 'LinkedIn', handle: '/company/codebrain' },
                      { name: 'Instagram', handle: '@codebrain' }
                    ].map((social, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-blue-200/50">
                        <span className="text-base text-blue-700 font-medium">{social.name}</span>
                        <span className="text-sm text-purple-500 font-light">{social.handle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Tags */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <h3 className="font-serif text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 mb-5">Popular Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'AI', 'JavaScript', 'Blockchain', 'Startups', 'Design', 'Python', 'CSS'].map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-blue-200/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Footer */}
        <div className="border-t-2 border-blue-200/50 mt-20 py-12 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-cyan-100/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 text-2xl">CodeBrain</span>
                <p className="text-sm text-blue-600 font-medium mt-2">© {new Date().getFullYear()} All rights reserved</p>
              </div>
              <div className="flex space-x-8">
                <a href="#" className="text-sm text-blue-600 hover:text-purple-800 font-medium transition-colors duration-300">Privacy</a>
                <a href="#" className="text-sm text-blue-600 hover:text-purple-800 font-medium transition-colors duration-300">Terms</a>
                <a href="#" className="text-sm text-blue-600 hover:text-purple-800 font-medium transition-colors duration-300">Contact</a>
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