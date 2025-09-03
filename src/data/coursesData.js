// data/coursesData.js
export const coursesData = [
  {
    id: 1,
    title: "Figma UI Design Essentials",
    instructor: "John Doe",
    rating: 4.8,
    reviews: 1250,
    price: 49.99,
    originalPrice: 89.99,
    thumbnail: "https://via.placeholder.com/300x200/4C51BF/FFFFFF?text=Figma+Course",
    category: "Design",
    level: "Beginner",
    duration: "12 hours",
    lessons: 45,
    students: 12500,
    type: "free",
    description: "Learn how to use Figma like a pro. This course will take you from basics to advanced techniques.",
    whatYouLearn: [
      "Master Figma tools and features",
      "Create responsive designs",
      "Prototype interactions",
      "Collaborate with team members",
      "Design systems and components",
      "Export assets for development"
    ],
    requirements: [
      "Basic computer skills",
      "Figma account (free)"
    ],
    courseContent: [
      {
        title: "01: Introduction to Figma",
        duration: "22 min",
        lectures: [
          { title: "Introduction to the Course", duration: "2 min", pdf: "/pdfs/figma-intro.pdf", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "What is Figma?", duration: "5 min", pdf: "/pdfs/what-is-figma.pdf", videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" },
          { title: "Understanding the Interface", duration: "12 min", pdf: "/pdfs/figma-interface.pdf", videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M" },
          { title: "UI Tour", duration: "3 min", pdf: "/pdfs/figma-ui-tour.pdf", videoUrl: "https://www.youtube.com/embed/3tmd-ClpJxA" }
        ]
      },
      {
        title: "02: Design Fundamentals",
        duration: "45 min",
        lectures: [
          { title: "Shapes and Tools", duration: "10 min", pdf: "/pdfs/figma-shapes.pdf", videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ" },
          { title: "Working with Text", duration: "12 min", pdf: "/pdfs/figma-text.pdf", videoUrl: "https://www.youtube.com/embed/OPf0YbXqDm0" },
          { title: "Color and Gradients", duration: "15 min", pdf: "/pdfs/figma-colors.pdf", videoUrl: "https://www.youtube.com/embed/d1YE-rHtT0o" },
          { title: "Practice Exercise", duration: "8 min", pdf: "/pdfs/figma-exercise1.pdf", videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A" }
        ]
      },
      {
        title: "03: Prototyping",
        duration: "38 min",
        lectures: [
          { title: "Prototyping Basics", duration: "10 min", pdf: "/pdfs/figma-prototyping.pdf", videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E" },
          { title: "Interactive Components", duration: "15 min", pdf: "/pdfs/figma-interactive.pdf", videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0" },
          { title: "Transitions and Animations", duration: "13 min", pdf: "/pdfs/figma-animations.pdf", videoUrl: "https://www.youtube.com/embed/9N5kU6_3w_I" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced React Development",
    instructor: "Jane Smith",
    rating: 4.9,
    reviews: 980,
    price: 79.99,
    originalPrice: 129.99,
    thumbnail: "https://via.placeholder.com/300x200/4C51BF/FFFFFF?text=React+Course",
    category: "Development",
    level: "Advanced",
    duration: "24 hours",
    lessons: 85,
    students: 8900,
    type: "live",
    description: "Master React with advanced patterns, state management, and performance optimization.",
    liveSchedule: "Every Tuesday & Thursday, 7 PM EST",
    upcomingSession: "October 15, 2023",
    whatYouLearn: [
      "Advanced React patterns",
      "State management with Redux",
      "Performance optimization",
      "Testing React applications"
    ],
    requirements: [
      "JavaScript ES6+ knowledge",
      "Basic React experience"
    ],
    courseContent: [
      {
        title: "01: Advanced React Concepts",
        duration: "45 min",
        lectures: [
          { title: "React Hooks Deep Dive", duration: "15 min", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Context API", duration: "12 min", videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" },
          { title: "Higher Order Components", duration: "18 min", videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M" }
        ]
      }
    ]
  }
];