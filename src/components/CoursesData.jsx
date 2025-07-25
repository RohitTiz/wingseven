const CoursesData = [
  {
    id: 1,
    title: "Complete Python Programming",
    description: "Learn Python from basics to advanced with hands-on projects and real-world applications",
    longDescription: "This comprehensive Python course covers everything from basic syntax to advanced concepts like decorators, generators, and OOP. You'll work on real-world projects including web scraping, data analysis, and automation scripts.",
    category: "Python",
    type: "recorded",
    duration: "60 hours",
    rating: 4.8,
    price: 2999,
    image: "https://media.istockphoto.com/id/1992829718/photo/professor-teaching-about-it-and-pointing-at-a-user-experience-diagram-on-the-board.webp",
    videoUrl: "https://www.youtube.com/watch?v=oO2i35tRQp4",
    instructor: "Dr. Sarah Johnson",
    learningOutcomes: [
      "Master Python syntax and core concepts",
      "Build practical applications and scripts",
      "Understand OOP principles in Python",
      "Work with files and databases",
      "Create web scrapers and automation tools"
    ],
    syllabus: [
      { week: 1, title: "Python Fundamentals", topics: ["Variables & Data Types", "Operators", "Control Flow"] },
      { week: 2, title: "Functions & Modules", topics: ["Function Definition", "Parameters & Arguments", "Importing Modules"] },
      { week: 3, title: "Object-Oriented Programming", topics: ["Classes & Objects", "Inheritance", "Polymorphism"] }
    ]
  },
  {
    id: 2,
    title: "AI & Machine Learning Masterclass",
    description: "Master AI and ML concepts with real-world applications and industry projects",
    longDescription: "This intensive masterclass takes you through the complete machine learning pipeline from data preprocessing to model deployment. You'll work with TensorFlow and PyTorch on real-world datasets.",
    category: "AI/ML",
    type: "live",
    duration: "6 months",
    rating: 4.9,
    price: 4999,
    image: "https://media.istockphoto.com/id/2025258370/photo/it-student-works-with-artificial-intelligence-brain-system-on-laptop.webp",
    videoUrl: "https://player.vimeo.com/video/829035736?h=1a2b3c4d5f",
    instructor: "Prof. Michael Chen",
    learningOutcomes: [
      "Understand ML algorithms and their applications",
      "Preprocess and analyze datasets",
      "Build and train neural networks",
      "Evaluate model performance",
      "Deploy ML models to production"
    ],
    syllabus: [
      { week: 1, title: "ML Fundamentals", topics: ["Supervised vs Unsupervised", "Regression", "Classification"] },
      { week: 2, title: "Neural Networks", topics: ["Perceptrons", "Backpropagation", "Activation Functions"] }
    ]
  },
  {
    id: 3,
    title: "Java Full Stack Development",
    description: "Complete Java development from backend to frontend with Spring Boot and React",
    longDescription: "Learn to build enterprise-grade applications using Java with Spring Boot for the backend and React for the frontend. Includes database integration, REST APIs, and deployment strategies.",
    category: "Java",
    type: "recorded",
    duration: "50 hours",
    rating: 4.7,
    price: 3999,
    image: "https://plus.unsplash.com/premium_photo-1661671913094-9dad189bba6a?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035737?h=1a2b3c4d5g",
    instructor: "James Wilson",
    learningOutcomes: [
      "Build RESTful APIs with Spring Boot",
      "Create interactive UIs with React",
      "Connect frontend to backend",
      "Implement authentication",
      "Deploy full stack applications"
    ],
    syllabus: [
      { week: 1, title: "Spring Boot Basics", topics: ["Dependency Injection", "Spring MVC", "REST Controllers"] },
      { week: 2, title: "React Fundamentals", topics: ["Components", "Props", "State"] }
    ]
  },
  {
    id: 4,
    title: "Modern Web Development",
    description: "Build responsive websites with HTML, CSS, JavaScript & React from scratch",
    longDescription: "Master the fundamentals of web development including HTML5, CSS3, modern JavaScript (ES6+), and React. Learn responsive design principles and build portfolio-ready projects.",
    category: "Web Development",
    type: "all",
    duration: "45 hours",
    rating: 4.6,
    price: 0,
    image: "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.webp",
    videoUrl: "https://player.vimeo.com/video/829035738?h=1a2b3c4d5h",
    instructor: "Lisa Thompson",
    learningOutcomes: [
      "Create responsive web layouts",
      "Write clean, modern JavaScript",
      "Build interactive UIs with React",
      "Implement web accessibility standards",
      "Deploy websites to production"
    ],
    syllabus: [
      { week: 1, title: "HTML & CSS Fundamentals", topics: ["Semantic HTML", "CSS Grid", "Flexbox"] },
      { week: 2, title: "JavaScript Basics", topics: ["Variables", "Functions", "DOM Manipulation"] }
    ]
  },
  {
    id: 5,
    title: "Advanced Python for Data Science",
    description: "Use Python for data analysis, visualization, and machine learning with pandas and numpy",
    longDescription: "Take your Python skills to the next level with data science applications. Learn to clean, analyze, and visualize data using pandas, NumPy, Matplotlib, and Seaborn.",
    category: "Python",
    type: "live",
    duration: "35 hours",
    rating: 4.8,
    price: 3499,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035739?h=1a2b3c4d5i",
    instructor: "Dr. Raj Patel",
    learningOutcomes: [
      "Manipulate data with pandas",
      "Perform statistical analysis",
      "Create insightful visualizations",
      "Work with Jupyter Notebooks",
      "Apply basic machine learning concepts"
    ],
    syllabus: [
      { week: 1, title: "Pandas Fundamentals", topics: ["DataFrames", "Series", "Data Cleaning"] },
      { week: 2, title: "Data Visualization", topics: ["Matplotlib", "Seaborn", "Plotly"] }
    ]
  },
  {
    id: 6,
    title: "React.js Complete Guide",
    description: "Master React.js with hooks, context, and modern patterns for building scalable apps",
    longDescription: "Deep dive into React.js with comprehensive coverage of hooks, context API, state management, and performance optimization techniques for building production-ready applications.",
    category: "Web Development",
    type: "recorded",
    duration: "30 hours",
    rating: 4.9,
    price: 2499,
    image: "https://images.unsplash.com/photo-1455894127589-22f75500213a?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035740?h=1a2b3c4d5j",
    instructor: "David Kim",
    learningOutcomes: [
      "Build reusable React components",
      "Manage state with hooks",
      "Use Context API effectively",
      "Optimize React performance",
      "Implement testing strategies"
    ],
    syllabus: [
      { week: 1, title: "React Core Concepts", topics: ["Components", "Props", "State"] },
      { week: 2, title: "Advanced React", topics: ["Hooks", "Context", "Redux"] }
    ]
  },
  {
    id: 7,
    title: "Deep Learning with TensorFlow",
    description: "Build neural networks and deep learning models for computer vision and NLP",
    longDescription: "Master deep learning concepts and implement neural networks using TensorFlow. Covers CNNs for computer vision, RNNs for sequence data, and transformers for NLP applications.",
    category: "AI/ML",
    type: "recorded",
    duration: "55 hours",
    rating: 4.7,
    price: 4499,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035741?h=1a2b3c4d5k",
    instructor: "Dr. Emily Zhang",
    learningOutcomes: [
      "Implement neural networks with TensorFlow",
      "Build CNN architectures",
      "Work with RNNs and LSTMs",
      "Apply transfer learning",
      "Deploy deep learning models"
    ],
    syllabus: [
      { week: 1, title: "Neural Network Basics", topics: ["Perceptrons", "Activation Functions", "Backpropagation"] },
      { week: 2, title: "Computer Vision", topics: ["CNNs", "Image Classification", "Object Detection"] }
    ]
  },
  {
    id: 8,
    title: "Spring Boot Microservices",
    description: "Build scalable microservices with Spring Boot, Docker, and cloud deployment",
    longDescription: "Learn to design, build, and deploy microservices architectures using Spring Boot, Spring Cloud, Docker, and Kubernetes. Includes service discovery, API gateways, and distributed tracing.",
    category: "Java",
    type: "all",
    duration: "40 hours",
    rating: 4.6,
    price: 0,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035742?h=1a2b3c4d5l",
    instructor: "Robert Johnson",
    learningOutcomes: [
      "Design microservice architectures",
      "Implement Spring Boot services",
      "Containerize applications with Docker",
      "Manage services with Kubernetes",
      "Monitor distributed systems"
    ],
    syllabus: [
      { week: 1, title: "Microservice Fundamentals", topics: ["Design Patterns", "Service Boundaries", "API Contracts"] },
      { week: 2, title: "Spring Cloud", topics: ["Eureka", "Zuul", "Config Server"] }
    ]
  },
  {
    id: 9,
    title: "Python Web Development with Django",
    description: "Create powerful web applications using Django framework with database integration",
    longDescription: "Build full-featured web applications with Django, covering models, views, templates, forms, authentication, and deployment. Includes REST API development with Django REST Framework.",
    category: "Python",
    type: "recorded",
    duration: "38 hours",
    rating: 4.5,
    price: 2799,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035743?h=1a2b3c4d5m",
    instructor: "Sophia Martinez",
    learningOutcomes: [
      "Build Django applications",
      "Work with Django ORM",
      "Implement user authentication",
      "Create REST APIs",
      "Deploy Django applications"
    ],
    syllabus: [
      { week: 1, title: "Django Basics", topics: ["MTV Architecture", "URL Routing", "Templates"] },
      { week: 2, title: "Database Models", topics: ["Models", "Migrations", "Admin Interface"] }
    ]
  },
  {
    id: 10,
    title: "Machine Learning Algorithms",
    description: "Understand and implement various ML algorithms from scratch with practical examples",
    longDescription: "Deep dive into machine learning algorithms, covering both theory and practical implementation. Learn regression, classification, clustering, and dimensionality reduction techniques.",
    category: "AI/ML",
    type: "live",
    duration: "48 hours",
    rating: 4.8,
    price: 3999,
    image: "https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.webp",
    videoUrl: "https://player.vimeo.com/video/829035744?h=1a2b3c4d5n",
    instructor: "Dr. Alan Turing",
    learningOutcomes: [
      "Implement ML algorithms from scratch",
      "Understand bias-variance tradeoff",
      "Evaluate model performance",
      "Tune hyperparameters",
      "Apply feature engineering"
    ],
    syllabus: [
      { week: 1, title: "Supervised Learning", topics: ["Linear Regression", "Logistic Regression", "Decision Trees"] },
      { week: 2, title: "Unsupervised Learning", topics: ["K-Means", "PCA", "Hierarchical Clustering"] }
    ]
  },
  {
    id: 11,
    title: "Advanced Java Programming",
    description: "Master advanced Java concepts including multithreading, collections, and design patterns",
    longDescription: "Take your Java skills to expert level with deep dives into concurrency, performance optimization, design patterns, and JVM internals. Includes hands-on coding exercises.",
    category: "Java",
    type: "recorded",
    duration: "42 hours",
    rating: 4.7,
    price: 3299,
    image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035745?h=1a2b3c4d5o",
    instructor: "Mark Anderson",
    learningOutcomes: [
      "Implement multithreaded applications",
      "Use Java Collections effectively",
      "Apply design patterns",
      "Optimize JVM performance",
      "Work with streams and lambdas"
    ],
    syllabus: [
      { week: 1, title: "Concurrency", topics: ["Threads", "Executors", "Synchronization"] },
      { week: 2, title: "Design Patterns", topics: ["Singleton", "Factory", "Observer"] }
    ]
  },
  {
    id: 12,
    title: "Full Stack JavaScript Development",
    description: "Build complete web applications using Node.js, Express, MongoDB, and React",
    longDescription: "Master the MERN stack (MongoDB, Express, React, Node.js) to build modern web applications. Learn to create APIs, work with databases, and build responsive UIs.",
    category: "Web Development",
    type: "live",
    duration: "55 hours",
    rating: 4.8,
    price: 4299,
    image: "https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?w=600&auto=format&fit=crop&q=60",
    videoUrl: "https://player.vimeo.com/video/829035746?h=1a2b3c4d5p",
    instructor: "Emily Rodriguez",
    learningOutcomes: [
      "Build REST APIs with Node/Express",
      "Work with MongoDB databases",
      "Create React applications",
      "Implement user authentication",
      "Deploy MERN stack apps"
    ],
    syllabus: [
      { week: 1, title: "Node.js Fundamentals", topics: ["Modules", "NPM", "File System"] },
      { week: 2, title: "Express Framework", topics: ["Routing", "Middleware", "Error Handling"] }
    ]
  }
];

export default CoursesData;