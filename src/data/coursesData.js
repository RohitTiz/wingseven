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
    thumbnail: "https://images.unsplash.com/photo-1648854006531-361649aa182c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

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
          { 
            title: "Introduction to the Course", 
            duration: "2 min", 
            pdf: "/pdfs/figma-intro.pdf", 
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            notes: "Welcome to the Figma UI Design Essentials course! In this lecture, we'll cover what you can expect to learn throughout this comprehensive program. Figma is a powerful cloud-based design tool used by professionals worldwide for UI/UX design, prototyping, and collaboration.",
            resources: [
              { name: "Course Syllabus", type: "pdf", url: "/pdfs/figma-syllabus.pdf" },
              { name: "Figma Cheat Sheet", type: "pdf", url: "/pdfs/figma-cheatsheet.pdf" }
            ],
            quiz: {
              title: "Course Introduction Quiz",
              questions: [
                {
                  question: "What is the primary focus of this course?",
                  options: ["Learning Figma basics", "Advanced UI design techniques", "Both basics and advanced techniques", "Graphic design fundamentals"],
                  correctAnswer: 2
                },
                {
                  question: "Figma is primarily a:",
                  options: ["Desktop application", "Cloud-based tool", "Mobile app", "Programming language"],
                  correctAnswer: 1
                }
              ]
            }
          },
          { 
            title: "What is Figma?", 
            duration: "5 min", 
            pdf: "/pdfs/what-is-figma.pdf", 
            videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
            notes: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications. It focuses on real-time collaboration and is primarily web-based.",
            resources: [
              { name: "Figma Overview", type: "pdf", url: "/pdfs/figma-overview.pdf" },
              { name: "Comparison Table", type: "pdf", url: "/pdfs/design-tools-comparison.pdf" }
            ],
            quiz: null
          },
          { 
            title: "Understanding the Interface", 
            duration: "12 min", 
            pdf: "/pdfs/figma-interface.pdf", 
            videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M",
            notes: "The Figma interface consists of several key areas: the toolbar, layers panel, design panel, and properties panel. Understanding these components is crucial for efficient design workflow.",
            resources: [
              { name: "Interface Guide", type: "pdf", url: "/pdfs/interface-guide.pdf" },
              { name: "Keyboard Shortcuts", type: "pdf", url: "/pdfs/shortcuts.pdf" }
            ],
            quiz: {
              title: "Interface Basics Quiz",
              questions: [
                {
                  question: "Which panel shows all your design elements?",
                  options: ["Properties panel", "Layers panel", "Toolbar", "Assets panel"],
                  correctAnswer: 1
                }
              ]
            }
          },
          { 
            title: "UI Tour", 
            duration: "3 min", 
            pdf: "/pdfs/figma-ui-tour.pdf", 
            videoUrl: "https://www.youtube.com/embed/3tmd-ClpJxA",
            notes: "A comprehensive tour of Figma's user interface, highlighting key features and workspace organization tips for optimal design efficiency.",
            resources: [
              { name: "Workspace Setup", type: "pdf", url: "/pdfs/workspace-setup.pdf" }
            ],
            quiz: null
          }
        ]
      },
      {
        title: "02: Design Fundamentals",
        duration: "45 min",
        lectures: [
          { 
            title: "Shapes and Tools", 
            duration: "10 min", 
            pdf: "/pdfs/figma-shapes.pdf", 
            videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
            notes: "Learn how to create and manipulate basic shapes in Figma. Understanding shape tools is fundamental to creating complex designs.",
            resources: [
              { name: "Shape Tools Reference", type: "pdf", url: "/pdfs/shape-tools.pdf" },
              { name: "Practice Exercise", type: "figma", url: "/templates/shapes-practice.fig" }
            ],
            quiz: {
              title: "Shapes and Tools Quiz",
              questions: [
                {
                  question: "Which tool is used to create rectangles?",
                  options: ["Pen tool", "Rectangle tool", "Shape tool", "Frame tool"],
                  correctAnswer: 1
                }
              ]
            }
          },
          { 
            title: "Working with Text", 
            duration: "12 min", 
            pdf: "/pdfs/figma-text.pdf", 
            videoUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
            notes: "Text is a crucial element in UI design. Learn how to work with typography, text styles, and formatting options in Figma.",
            resources: [
              { name: "Typography Guide", type: "pdf", url: "/pdfs/typography-guide.pdf" },
              { name: "Font Pairing Examples", type: "pdf", url: "/pdfs/font-pairing.pdf" }
            ],
            quiz: null
          },
          { 
            title: "Color and Gradients", 
            duration: "15 min", 
            pdf: "/pdfs/figma-colors.pdf", 
            videoUrl: "https://www.youtube.com/embed/d1YE-rHtT0o",
            notes: "Master color theory and gradient application in Figma. Learn about color styles, palettes, and how to create visually appealing designs.",
            resources: [
              { name: "Color Theory", type: "pdf", url: "/pdfs/color-theory.pdf" },
              { name: "Gradient Examples", type: "figma", url: "/templates/gradients.fig" }
            ],
            quiz: {
              title: "Color and Gradients Quiz",
              questions: [
                {
                  question: "What does RGB stand for?",
                  options: ["Red, Green, Blue", "Right, Good, Best", "Rich Gradient Background", "Real Graphic Balance"],
                  correctAnswer: 0
                }
              ]
            }
          },
          { 
            title: "Practice Exercise", 
            duration: "8 min", 
            pdf: "/pdfs/figma-exercise1.pdf", 
            videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
            notes: "Apply what you've learned in a hands-on exercise creating basic UI elements using shapes, text, and colors.",
            resources: [
              { name: "Exercise Instructions", type: "pdf", url: "/pdfs/exercise-1-instructions.pdf" },
              { name: "Solution File", type: "figma", url: "/templates/exercise-1-solution.fig" }
            ],
            quiz: null
          }
        ]
      },
      {
        title: "03: Prototyping",
        duration: "38 min",
        lectures: [
          { 
            title: "Prototyping Basics", 
            duration: "10 min", 
            pdf: "/pdfs/figma-prototyping.pdf", 
            videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
            notes: "Introduction to prototyping in Figma. Learn how to create interactive prototypes to demonstrate user flows and interactions.",
            resources: [
              { name: "Prototyping Guide", type: "pdf", url: "/pdfs/prototyping-guide.pdf" }
            ],
            quiz: null
          },
          { 
            title: "Interactive Components", 
            duration: "15 min", 
            pdf: "/pdfs/figma-interactive.pdf", 
            videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
            notes: "Advanced prototyping techniques using interactive components. Create complex interactions and animations within your designs.",
            resources: [
              { name: "Interactive Examples", type: "figma", url: "/templates/interactive-components.fig" }
            ],
            quiz: {
              title: "Interactive Components Quiz",
              questions: [
                {
                  question: "What can interactive components simulate?",
                  options: ["User interactions", "Animations", "Both interactions and animations", "Only color changes"],
                  correctAnswer: 2
                }
              ]
            }
          },
          { 
            title: "Transitions and Animations", 
            duration: "13 min", 
            pdf: "/pdfs/figma-animations.pdf", 
            videoUrl: "https://www.youtube.com/embed/9N5kU6_3w_I",
            notes: "Learn how to add smooth transitions and animations to your prototypes to create more engaging user experiences.",
            resources: [
              { name: "Animation Principles", type: "pdf", url: "/pdfs/animation-principles.pdf" },
              { name: "Animation Examples", type: "figma", url: "/templates/animations.fig" }
            ],
            quiz: null
          }
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
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          { 
            title: "React Hooks Deep Dive", 
            duration: "15 min", 
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            notes: "Comprehensive exploration of React Hooks including useState, useEffect, useContext, and custom hooks.",
            resources: [
              { name: "Hooks Reference", type: "pdf", url: "/pdfs/react-hooks.pdf" },
              { name: "Code Examples", type: "zip", url: "/code/hooks-examples.zip" }
            ],
            quiz: {
              title: "React Hooks Quiz",
              questions: [
                {
                  question: "Which hook is used for side effects?",
                  options: ["useState", "useEffect", "useContext", "useReducer"],
                  correctAnswer: 1
                }
              ]
            }
          },
          { 
            title: "Context API", 
            duration: "12 min", 
            videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
            notes: "Understanding React Context API for state management without external libraries.",
            resources: [
              { name: "Context Guide", type: "pdf", url: "/pdfs/context-api.pdf" }
            ],
            quiz: null
          },
          { 
            title: "Higher Order Components", 
            duration: "18 min", 
            videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M",
            notes: "Learn about Higher Order Components (HOCs) and how to use them for code reuse and logic abstraction.",
            resources: [
              { name: "HOC Patterns", type: "pdf", url: "/pdfs/hoc-patterns.pdf" },
              { name: "HOC Examples", type: "zip", url: "/code/hoc-examples.zip" }
            ],
            quiz: {
              title: "HOC Quiz",
              questions: [
                {
                  question: "What is the main purpose of HOCs?",
                  options: ["State management", "Code reuse", "Styling", "Routing"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      }
    ]
  }
];