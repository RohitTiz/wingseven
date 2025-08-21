import React, { useState } from 'react';
import AuthSection from '../components/AuthSection';

function SpecializationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: '◆' },
    { id: 'ai', name: 'AI/ML', icon: '∞' },
    { id: 'web', name: 'Web Dev', icon: '⟨/⟩' },
    { id: 'blockchain', name: 'Web3', icon: '◊' },
    { id: 'mobile', name: 'Mobile', icon: '◈' }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Building Neural Networks That Actually Think",
      subtitle: "Why current AI is just pattern matching and how we're changing that",
      author: "Alex Chen",
      authorHandle: "@alexbuilds",
      publishDate: "2h ago",
      readTime: "8 min",
      category: "ai",
      gradient: "from-blue-100 via-purple-100 to-pink-100",
      views: "12.8k",
      likes: "892",
      featured: true,
      tags: ["Neural Networks", "Deep Learning", "AGI"]
    },
    {
      id: 2,
      title: "Web3 is Dead. Long Live Web3.",
      subtitle: "Past the hype cycle, real utility is emerging",
      author: "Maya Patel",
      authorHandle: "@maya_codes",
      publishDate: "5h ago",
      readTime: "12 min",
      category: "blockchain",
      gradient: "from-green-100 via-blue-100 to-purple-100",
      views: "8.2k",
      likes: "1.2k",
      tags: ["Blockchain", "DeFi", "Smart Contracts"]
    }
  ];

  const articles = [
    {
      id: 3,
      title: "React 19: The Framework Renaissance",
      subtitle: "Server components are changing everything we know about React",
      author: "Jordan Kim",
      authorHandle: "@jordancodes",
      publishDate: "1d ago",
      readTime: "6 min",
      category: "web",
      gradient: "from-cyan-100 to-blue-100",
      views: "15.3k",
      likes: "2.1k",
      tags: ["React", "Server Components", "SSR"]
    },
    {
      id: 4,
      title: "iOS 18: SwiftUI Gets Serious",
      subtitle: "Apple's finally listening to developers",
      author: "Sam Rodriguez",
      authorHandle: "@sambuilds",
      publishDate: "2d ago",
      readTime: "10 min",
      category: "mobile",
      gradient: "from-orange-100 to-pink-100",
      views: "9.7k",
      likes: "756",
      tags: ["iOS", "SwiftUI", "Mobile Dev"]
    },
    {
      id: 5,
      title: "The Death of Junior Developers",
      subtitle: "AI coding assistants are reshaping the industry",
      author: "Riley Chen",
      authorHandle: "@riley_dev",
      publishDate: "3d ago",
      readTime: "14 min",
      category: "ai",
      gradient: "from-red-100 to-yellow-100",
      views: "32.1k",
      likes: "4.3k",
      tags: ["Career", "AI Tools", "Industry"]
    },
    {
      id: 6,
      title: "Building Viral Apps in 2025",
      subtitle: "Distribution beats features every time",
      author: "Casey Wu",
      authorHandle: "@casey_ships",
      publishDate: "4d ago",
      readTime: "7 min",
      category: "mobile",
      gradient: "from-indigo-100 to-purple-100",
      views: "18.9k",
      likes: "2.8k",
      tags: ["Product", "Growth", "Distribution"]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const AdSpace = ({ size = "large", style = "minimal" }) => (
    <div className={`group relative overflow-hidden rounded-3xl ${size === 'large' ? 'h-32' : 'h-80'} bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200`}>
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

  return (
    <>
    <AuthSection />
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-75"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-150"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-6">
          
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="text-8xl md:text-9xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  code
                </span>
                <span className="text-gray-800">brain</span>
              </h1>
              <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            Where developers come to 
            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-semibold"> think different</span>
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative mb-16">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search the future..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-16 bg-white backdrop-blur-sm border border-gray-300 rounded-2xl pl-6 pr-16 text-lg placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-white text-sm">⚡</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-300 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                <span className="text-xl mr-3 font-light">{category.icon}</span>
                <span className="font-semibold tracking-wide">{category.name}</span>
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Sidebar */}
            <div className="col-span-12 lg:col-span-2 space-y-8">
              
              {/* Trending */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Trending</h3>
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
            <div className="col-span-12 lg:col-span-8">
              
              {/* Featured Section */}
              {selectedCategory === 'all' && (
                <div className="mb-20">
                  <div className="flex items-center mb-10">
                    <div className="h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex-1"></div>
                    <h2 className="text-4xl font-black mx-8 tracking-tight text-gray-800">FEATURED</h2>
                    <div className="h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex-1"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredArticles.map((article) => (
                      <article key={article.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                          
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
                          
                          <div className="relative p-8">
                            {/* Category badge */}
                            <div className="inline-flex items-center mb-4">
                              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 opacity-80"></div>
                              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                                {categories.find(c => c.id === article.category)?.name}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                              {article.title}
                            </h3>
                            
                            {/* Subtitle */}
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                              {article.subtitle}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {article.tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 border border-gray-200">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Author info */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                                  {article.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="ml-3">
                                  <div className="font-semibold text-gray-800">{article.author}</div>
                                  <div className="text-sm text-gray-500">{article.authorHandle}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">{article.publishDate}</div>
                                <div className="text-xs text-gray-400">{article.readTime}</div>
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                              <div className="flex items-center text-sm text-gray-500 mr-6">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 opacity-60"></div>
                                {article.views}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 opacity-60"></div>
                                {article.likes}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Ad Space */}
              <div className="mb-16">
                <AdSpace size="large" />
              </div>

              {/* Regular Articles */}
              <div className="space-y-8">
                <div className="flex items-center mb-12">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-1"></div>
                  <h2 className="text-3xl font-black mx-8 tracking-tight text-gray-800">
                    {selectedCategory === 'all' ? 'LATEST' : categories.find(c => c.id === selectedCategory)?.name.toUpperCase()}
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex-1"></div>
                </div>

                {filteredArticles.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-xl text-gray-500">No articles match your search</div>
                    <div className="text-sm text-gray-400 mt-2">Try different keywords or categories</div>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {filteredArticles.map((article) => (
                      <article key={article.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 p-6">
                          
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center mb-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3 opacity-80"></div>
                                <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                                  {categories.find(c => c.id === article.category)?.name}
                                </span>
                                <div className="ml-auto text-xs text-gray-400">{article.publishDate}</div>
                              </div>

                              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all">
                                {article.title}
                              </h3>
                              
                              <p className="text-gray-600 mb-4 leading-relaxed">
                                {article.subtitle}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                                    {article.author.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div className="ml-2">
                                    <div className="text-sm font-semibold text-gray-800">{article.author}</div>
                                    <div className="text-xs text-gray-500">{article.authorHandle}</div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-1 opacity-60"></div>
                                    {article.views}
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 bg-red-400 rounded-full mr-1 opacity-60"></div>
                                    {article.likes}
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 opacity-60"></div>
                                    {article.readTime}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Visual indicator */}
                            <div className="md:w-24 h-24 flex-shrink-0">
                              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${article.gradient} opacity-60 group-hover:opacity-80 transition-opacity flex items-center justify-center`}>
                                <div className="text-2xl font-bold text-gray-700">{categories.find(c => c.id === article.category)?.icon}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              {/* Load More */}
              <div className="text-center mt-16">
                <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-lg text-white hover:shadow-lg hover:shadow-purple-300 transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">Load More Stories</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-12 lg:col-span-2 space-y-8">
              
              {/* Newsletter */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 border-2 border-white rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Stay Ahead</h3>
                  <p className="text-sm text-gray-500 mb-6">Get the latest tech insights delivered weekly</p>
                  
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-200 mb-4"
                  />
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold text-white hover:shadow-md transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <AdSpace size="small" />
              
              {/* Social Links */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold mb-4 text-gray-800">Follow Us</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Twitter', symbol: '𝕏', handle: '@codebrain' },
                    { name: 'GitHub', symbol: '⟨/⟩', handle: '/codebrain' },
                    { name: 'Discord', symbol: '◈', handle: '/join' },
                    { name: 'YouTube', symbol: '▶', handle: '/codebrain' }
                  ].map((social, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-bold">{social.symbol}</span>
                        </div>
                        <span className="text-sm text-gray-700">{social.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{social.handle}</span>
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

export default SpecializationsPage;