// data/blogdata.js
const blogData = {
  articles: [
    {
      id: 1,
      title: "What Are the Steps to Create a Virtual Environment in Python? A Comprehensive Guide",
      subtitle: "Learn how to isolate Python project dependencies and manage packages effectively",
      author: "Sudhanshu Mishra",
      authorInitials: "SM",
      authorHandle: "@sudhanshu_codes",
      publishDate: "Oct 25, 2024",
      readTime: "3 min",
      category: "python",
      gradient: "from-cyan-100 via-blue-100 to-purple-100",
      views: "5.2k",
      likes: "324",
      featured: true,
      tags: ["Python", "Virtual Environment", "Development", "Dependencies", "Programming"]
    },
    {
      id: 2,
      title: "Building Neural Networks That Actually Think",
      subtitle: "Why current AI is just pattern matching and how we're changing that",
      author: "Alex Chen",
      authorInitials: "AC",
      authorHandle: "@alexbuilds",
      publishDate: "2h ago",
      readTime: "8 min",
      category: "ai",
      gradient: "from-blue-100 via-purple-100 to-pink-100",
      views: "12.8k",
      likes: "892",
      featured: false,
      tags: ["Neural Networks", "Deep Learning", "AGI"]
    },
    {
      id: 3,
      title: "Mastering React Hooks in 2024",
      subtitle: "Advanced patterns and best practices for modern React development",
      author: "Sarah Johnson",
      authorInitials: "SJ",
      authorHandle: "@sarah_dev",
      publishDate: "1 day ago",
      readTime: "6 min",
      category: "webdev",
      gradient: "from-amber-100 via-orange-100 to-red-100",
      views: "8.7k",
      likes: "456",
      featured: false,
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 4,
      title: "The Future of Quantum Computing",
      subtitle: "How quantum algorithms are solving previously impossible problems",
      author: "Dr. Michael Zhang",
      authorInitials: "MZ",
      authorHandle: "@quantum_dr",
      publishDate: "3 days ago",
      readTime: "11 min",
      category: "tech",
      gradient: "from-violet-100 via-purple-100 to-fuchsia-100",
      views: "15.3k",
      likes: "1.2k",
      featured: false,
      tags: ["Quantum Computing", "Technology", "Innovation"]
    }
  ],
  categories: [
    { id: "python", name: "Python Development", icon: "🐍" },
    { id: "ai", name: "AI/ML", icon: "🤖" },
    { id: "webdev", name: "Web Development", icon: "💻" },
    { id: "tech", name: "Technology", icon: "🚀" }
  ]
};

export default blogData;