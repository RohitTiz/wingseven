import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogdata'; // Import your external data

// BlogPage Component
function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('recent');
  const [showFilters, setShowFilters] = useState(true);
  const navigate = useNavigate();

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use categories from imported blogData
  const categories = blogData.categories;

  // Use articles from imported blogData
  const featuredArticles = blogData.articles.filter(article => article.featured);
  const articles = blogData.articles.filter(article => !article.featured);

  // Sort articles based on active filter
  const getSortedArticles = (articlesList) => {
    switch(activeFilter) {
      case 'trending':
        return [...articlesList].sort((a, b) => b.views - a.views);
      case 'best':
        return [...articlesList].sort((a, b) => b.likes - a.likes);
      case 'read':
        return [...articlesList].sort((a, b) => b.readTime - a.readTime);
      case 'recent':
      default:
        return [...articlesList].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  };

  const filteredArticles = getSortedArticles(articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }));

  const sortedFeaturedArticles = getSortedArticles(featuredArticles);

  const handleCardClick = (articleId) => {
    navigate(`/specializations/${articleId}`);
  };

  const filterOptions = [
    { id: 'recent', label: 'Most Recent', icon: '🕒' },
    { id: 'trending', label: 'Trending', icon: '🔥' },
    { id: 'best', label: 'Best All Time', icon: '⭐' },
    { id: 'read', label: 'Most Read', icon: '👁️' }
  ];

  const MobileCategorySelector = () => (
    <div className="lg:hidden mb-6 px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50 shadow-lg mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="p-1 rounded-md text-gray-500 hover:text-gray-700"
          >
            {showFilters ? '▲' : '▼'}
          </button>
        </div>
        
        {showFilters && (
          <>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Sort by:</h4>
              <div className="grid grid-cols-2 gap-2">
                {filterOptions.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeFilter === filter.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.icon} {filter.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Category:</h4>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-fixed bg-center bg-cover" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            minHeight: '35vh'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center h-full">
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our Blog
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-light mb-6`}>
              Discover insights, tutorials, and updates from the world of tech.
            </p>
            <div className={`max-w-md mx-auto relative transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
            <MobileCategorySelector />
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Categories & Filters */}
              <div className="w-full lg:w-3/12 order-2 lg:order-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg sticky top-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                        selectedCategory === 'all'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                          : 'bg-white/80 text-gray-800 hover:bg-white hover:text-gray-900 border border-blue-200/50 hover:border-blue-300'
                      } transform hover:scale-105 hover:-translate-y-0.5`}
                    >
                      🌟 All Categories
                    </button>
                    {categories.map((category, index) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                            : 'bg-white/80 text-gray-800 hover:bg-white hover:text-gray-900 border border-blue-200/50 hover:border-blue-300'
                        } transform hover:scale-105 hover:-translate-y-0.5`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">Filter by</h3>
                      <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="p-1 rounded-md text-gray-500 hover:text-gray-700 lg:hidden"
                      >
                        {showFilters ? '▲' : '▼'}
                      </button>
                    </div>
                    
                    {(showFilters || !isMobile) && (
                      <div className="space-y-2">
                        {filterOptions.map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                              activeFilter === filter.id
                                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span className="mr-2">{filter.icon}</span>
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Content - Centered Cards */}
              <div className="w-full lg:w-9/12 order-1 lg:order-2">
                {selectedCategory === 'all' && sortedFeaturedArticles.length > 0 && (
                  <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl font-semibold text-gray-900">Featured Posts</h2>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {activeFilter === 'recent' ? 'Latest' : 
                         activeFilter === 'trending' ? 'Trending' :
                         activeFilter === 'best' ? 'Top Rated' : 'Most Read'}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sortedFeaturedArticles.map((article, index) => (
                        <div
                          key={article.id}
                          className="flex justify-center"
                        >
                          <div className="block w-full transform hover:scale-[1.02] transition-all duration-500"
                            style={{ animationDelay: `${index * 0.2}s` }}>
                            <BlogCard 
                              article={article} 
                              categories={categories} 
                              isFeatured={true} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-gray-900">
                      {selectedCategory === 'all' ? 'All Posts' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Sorted by: {filterOptions.find(f => f.id === activeFilter)?.label}
                    </span>
                  </div>
                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-20">
                      <div className="text-6xl mb-6 animate-bounce">🔍</div>
                      <p className="text-2xl text-gray-800 font-medium mb-2">No articles match your search</p>
                      <p className="text-lg text-gray-600">Try different keywords or categories</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredArticles.map((article, index) => (
                        <div
                          key={article.id}
                          className="flex justify-center"
                        >
                          <div className="block w-full transform hover:scale-[1.02] transition-all duration-500"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <BlogCard 
                              article={article} 
                              categories={categories} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    Load More Posts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            .blog-card {
              max-width: 100%;
              margin: 0 auto;
            }
            
            @media (min-width: 1024px) {
              .blog-card {
                max-width: 21rem;
              }
            }
            
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
        </style>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;