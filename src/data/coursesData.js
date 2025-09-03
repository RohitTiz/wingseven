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
    thumbnail: "https://via.placeholder.com/300x200",
    category: "Design",
    level: "Beginner",
    duration: "12 hours",
    lessons: 45,
    students: 12500,
    type: "free", // free or live
    description: "Learn how to use Figma like a pro. This course will take you from basics to advanced techniques.",
    whatYouLearn: [
      "Master Figma tools and features",
      "Create responsive designs",
      "Prototype interactions",
      "Collaborate with team members"
    ],
    requirements: [
      "Basic computer skills",
      "Figma account (free)"
    ],
    courseContent: [
      {
        title: "01: Intro",
        duration: "22 min",
        lectures: [
          { title: "Introduction", duration: "2 min" },
          { title: "What is Figma?", duration: "5 min" },
          { title: "Understanding Figma", duration: "12 min" },
          { title: "UI tour", duration: "3 min" }
        ]
      },
      // More sections...
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
    thumbnail: "https://via.placeholder.com/300x200",
    category: "Development",
    level: "Advanced",
    duration: "24 hours",
    lessons: 85,
    students: 8900,
    type: "live", // free or live
    description: "Master React with advanced patterns, state management, and performance optimization.",
    liveSchedule: "Every Tuesday & Thursday, 7 PM EST",
    upcomingSession: "October 15, 2023",
    // ... other properties
  },
  // More courses...
];