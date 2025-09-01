import React from 'react';

const BlogFeaturedSection = () => {
  // Sample featured articles data
  const featuredArticles = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components.",
      category: "React",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "CSS Grid Layout Mastery",
      excerpt: "Master CSS Grid to create complex, responsive layouts with ease.",
      category: "CSS",
      readTime: "8 min read"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {article.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.readTime}</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeaturedSection;