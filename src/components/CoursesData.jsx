const CoursesData = [
  {
    id: 1,
    title: "Complete Python Programming",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Learn Python from basics to advanced with hands-on projects and real-world applications",
    longDescription: "This comprehensive Python course covers everything from basic syntax to advanced concepts like decorators, generators, and OOP. You'll work on real-world projects including web scraping, data analysis, and automation scripts.",
    category: "Python",
    type: "recorded",
    duration: "60 hours",
    rating: 4.8,
    price: 2999,
    level: "Beginner to Advanced",
    requirements: [
      "Basic computer literacy",
      "No prior programming experience needed",
      "Windows, Mac or Linux computer",
      "Internet connection"
    ],
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
    ],
    faqs: [
      {
        question: "How long do I have access to this course?",
        answer: "You get lifetime access to all course materials after purchase."
      },
      {
        question: "Do I need any programming experience?",
        answer: "No, this course starts from absolute basics and is perfect for beginners."
      },
      {
        question: "What projects will I work on?",
        answer: "You'll build a web scraper, data analysis tool, and automation scripts."
      }
    ],
    reviews: [
      {
        name: "John D.",
        rating: 5,
        comment: "Excellent introduction to Python! The projects were especially helpful for my job.",
        date: "2023-05-15"
      },
      {
        name: "Sarah M.",
        rating: 4,
        comment: "Great content but could use more advanced exercises in the later sections.",
        date: "2023-04-22"
      },
      {
        name: "Raj P.",
        rating: 5,
        comment: "The instructor explains complex concepts in a very simple way. Highly recommended!",
        date: "2023-03-10"
      }
    ],
    videoHours: 25,
    articles: 15,
    sections: 12,
    lectures: 85,
    languages: "English, Spanish subtitles",
    reviewsCount: 1243
  },
  {
    id: 2,
    title: "AI & Machine Learning Masterclass",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Master AI and ML concepts with real-world applications and industry projects",
    longDescription: "This intensive masterclass takes you through the complete machine learning pipeline from data preprocessing to model deployment. You'll work with TensorFlow and PyTorch on real-world datasets.",
    category: "AI/ML",
    type: "live",
    duration: "6 months",
    rating: 4.9,
    price: 4999,
    level: "Intermediate to Advanced",
    requirements: [
      "Python programming knowledge",
      "Basic understanding of linear algebra",
      "Familiarity with probability concepts",
      "Jupyter Notebooks installed",
      "GPU recommended but not required"
    ],
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
    ],
    faqs: [
      {
        question: "What math background do I need?",
        answer: "Basic linear algebra and probability concepts are recommended but we cover the essentials."
      },
      {
        question: "Can I take this without Python experience?",
        answer: "No, Python proficiency is required for this advanced course."
      },
      {
        question: "Will I get hands-on project experience?",
        answer: "Yes, you'll complete 5 real-world projects including image recognition and NLP applications."
      }
    ],
    reviews: [
      {
        name: "Alex K.",
        rating: 5,
        comment: "The best ML course I've taken. Projects were directly applicable to my work in computer vision.",
        date: "2023-06-10"
      },
      {
        name: "Priya S.",
        rating: 5,
        comment: "Excellent instructor and well-structured content. The live Q&A sessions were invaluable.",
        date: "2023-05-28"
      },
      {
        name: "Mark T.",
        rating: 4,
        comment: "Very comprehensive but some sections could be more beginner-friendly.",
        date: "2023-04-15"
      }
    ],
    videoHours: 50,
    articles: 20,
    sections: 24,
    lectures: 120,
    languages: "English",
    reviewsCount: 892
  },
  {
    id: 3,
    title: "Java Full Stack Development",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Complete Java development from backend to frontend with Spring Boot and React",
    longDescription: "Learn to build enterprise-grade applications using Java with Spring Boot for the backend and React for the frontend. Includes database integration, REST APIs, and deployment strategies.",
    category: "Java",
    type: "recorded",
    duration: "50 hours",
    rating: 4.7,
    price: 3999,
    level: "Intermediate",
    requirements: [
      "Basic programming knowledge",
      "Understanding of OOP concepts",
      "Node.js installed for frontend development",
      "Java Development Kit (JDK) 11 or later"
    ],
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
    ],
    faqs: [
      {
        question: "Do I need to know JavaScript before taking this course?",
        answer: "Basic JavaScript knowledge is helpful but we cover React from scratch."
      },
      {
        question: "Will this course teach database integration?",
        answer: "Yes, we cover both SQL and NoSQL databases with Spring Data."
      },
      {
        question: "Is there a final project?",
        answer: "Yes, you'll build a complete e-commerce application with user auth and payment processing."
      }
    ],
    reviews: [
      {
        name: "Emily R.",
        rating: 5,
        comment: "Perfect balance between theory and practice. The e-commerce project was fantastic!",
        date: "2023-07-05"
      },
      {
        name: "David L.",
        rating: 4,
        comment: "Great content but the React section could be more detailed.",
        date: "2023-06-18"
      },
      {
        name: "Sophia K.",
        rating: 5,
        comment: "James is an amazing instructor. I got a job as a full-stack developer after completing this course!",
        date: "2023-05-22"
      }
    ],
    videoHours: 35,
    articles: 18,
    sections: 15,
    lectures: 90,
    languages: "English, French subtitles",
    reviewsCount: 756
  },
  {
    id: 4,
    title: "Modern Web Development",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Build responsive websites with HTML, CSS, JavaScript & React from scratch",
    longDescription: "Master the fundamentals of web development including HTML5, CSS3, modern JavaScript (ES6+), and React. Learn responsive design principles and build portfolio-ready projects.",
    category: "Web Development",
    type: "all",
    duration: "45 hours",
    rating: 4.6,
    price: 0,
    level: "Beginner",
    requirements: [
      "Basic computer skills",
      "Text editor (VS Code recommended)",
      "Modern web browser",
      "No prior coding experience required"
    ],
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
    ],
    faqs: [
      {
        question: "Is this course really free?",
        answer: "Yes, all content is completely free as part of our mission to make coding education accessible."
      },
      {
        question: "Will I be able to get a job after this course?",
        answer: "Many students have landed junior developer positions after completing this and building their portfolio."
      },
      {
        question: "How much time should I dedicate per week?",
        answer: "We recommend 5-7 hours per week to finish in about 2 months."
      }
    ],
    reviews: [
      {
        name: "Miguel S.",
        rating: 5,
        comment: "Amazing free resource! I went from zero to building my own website in 6 weeks.",
        date: "2023-08-12"
      },
      {
        name: "Anna B.",
        rating: 4,
        comment: "Great introduction to web dev. The React section was particularly well-explained.",
        date: "2023-07-29"
      },
      {
        name: "Tom H.",
        rating: 5,
        comment: "Can't believe this is free. Better than many paid courses I've taken!",
        date: "2023-06-15"
      }
    ],
    videoHours: 30,
    articles: 25,
    sections: 10,
    lectures: 60,
    languages: "English, Spanish, French",
    reviewsCount: 2350
  },
  {
    id: 5,
    title: "Advanced Python for Data Science",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Use Python for data analysis, visualization, and machine learning with pandas and numpy",
    longDescription: "Take your Python skills to the next level with data science applications. Learn to clean, analyze, and visualize data using pandas, NumPy, Matplotlib, and Seaborn.",
    category: "Python",
    type: "live",
    duration: "35 hours",
    rating: 4.8,
    price: 3499,
    level: "Intermediate",
    requirements: [
      "Python programming basics",
      "Basic understanding of statistics",
      "Anaconda distribution installed",
      "Jupyter Notebooks familiarity"
    ],
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
    ],
    faqs: [
      {
        question: "What statistical knowledge is required?",
        answer: "Basic understanding of mean, median, standard deviation is helpful but we cover the essentials."
      },
      {
        question: "Will we learn machine learning in this course?",
        answer: "We cover the fundamentals but focus primarily on data analysis and visualization."
      },
      {
        question: "Can I use Google Colab instead of local setup?",
        answer: "Yes, all exercises can be completed in Google Colab if you prefer."
      }
    ],
    reviews: [
      {
        name: "Lisa W.",
        rating: 5,
        comment: "Transformed how I work with data at my job. The pandas content was exceptional.",
        date: "2023-08-20"
      },
      {
        name: "Carlos M.",
        rating: 4,
        comment: "Great content but could use more real-world dataset examples.",
        date: "2023-07-15"
      },
      {
        name: "Nina Z.",
        rating: 5,
        comment: "Dr. Patel explains complex concepts with such clarity. Highly recommend!",
        date: "2023-06-30"
      }
    ],
    videoHours: 20,
    articles: 12,
    sections: 8,
    lectures: 45,
    languages: "English",
    reviewsCount: 678
  },
  {
    id: 6,
    title: "React.js Complete Guide",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Master React.js with hooks, context, and modern patterns for building scalable apps",
    longDescription: "Deep dive into React.js with comprehensive coverage of hooks, context API, state management, and performance optimization techniques for building production-ready applications.",
    category: "Web Development",
    type: "recorded",
    duration: "30 hours",
    rating: 4.9,
    price: 2499,
    level: "Intermediate",
    requirements: [
      "JavaScript fundamentals",
      "Basic HTML/CSS knowledge",
      "Node.js and npm installed",
      "VS Code or similar IDE"
    ],
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
    ],
    faqs: [
      {
        question: "Do you cover class components?",
        answer: "We focus on functional components with hooks but include class components for reference."
      },
      {
        question: "Will we learn Redux in this course?",
        answer: "Yes, we cover Redux but emphasize the Context API as a modern alternative."
      },
      {
        question: "Is TypeScript included?",
        answer: "This course focuses on JavaScript but we provide TypeScript resources."
      }
    ],
    reviews: [
      {
        name: "Ryan B.",
        rating: 5,
        comment: "Best React course I've taken. The performance optimization section was gold!",
        date: "2023-09-05"
      },
      {
        name: "Priya K.",
        rating: 5,
        comment: "David explains complex React concepts in such an approachable way.",
        date: "2023-08-22"
      },
      {
        name: "Mike T.",
        rating: 4,
        comment: "Excellent content but could use more advanced project examples.",
        date: "2023-07-18"
      }
    ],
    videoHours: 18,
    articles: 15,
    sections: 12,
    lectures: 65,
    languages: "English, Japanese subtitles",
    reviewsCount: 1124
  },
  {
    id: 7,
    title: "Deep Learning with TensorFlow",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Build neural networks and deep learning models for computer vision and NLP",
    longDescription: "Master deep learning concepts and implement neural networks using TensorFlow. Covers CNNs for computer vision, RNNs for sequence data, and transformers for NLP applications.",
    category: "AI/ML",
    type: "recorded",
    duration: "55 hours",
    rating: 4.7,
    price: 4499,
    level: "Advanced",
    requirements: [
      "Strong Python skills",
      "Understanding of machine learning basics",
      "Linear algebra fundamentals",
      "GPU with CUDA support recommended",
      "TensorFlow 2.x installed"
    ],
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
    ],
    faqs: [
      {
        question: "How much math is required?",
        answer: "Understanding of linear algebra and calculus is helpful but we review key concepts."
      },
      {
        question: "Can I use PyTorch instead?",
        answer: "The course focuses on TensorFlow but concepts transfer to other frameworks."
      },
      {
        question: "Will we deploy models to production?",
        answer: "Yes, we cover deployment to cloud platforms and mobile devices."
      }
    ],
    reviews: [
      {
        name: "Daniel L.",
        rating: 5,
        comment: "Changed my career trajectory. Landed an AI research position after completing!",
        date: "2023-10-15"
      },
      {
        name: "Sophie M.",
        rating: 5,
        comment: "Dr. Zhang is brilliant. The CNN implementations were particularly insightful.",
        date: "2023-09-28"
      },
      {
        name: "Arjun P.",
        rating: 4,
        comment: "Challenging but rewarding. Could use more NLP content.",
        date: "2023-08-10"
      }
    ],
    videoHours: 40,
    articles: 22,
    sections: 18,
    lectures: 95,
    languages: "English",
    reviewsCount: 845
  },
  {
    id: 8,
    title: "Spring Boot Microservices",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Build scalable microservices with Spring Boot, Docker, and cloud deployment",
    longDescription: "Learn to design, build, and deploy microservices architectures using Spring Boot, Spring Cloud, Docker, and Kubernetes. Includes service discovery, API gateways, and distributed tracing.",
    category: "Java",
    type: "all",
    duration: "40 hours",
    rating: 4.6,
    price: 0,
    level: "Advanced",
    requirements: [
      "Java programming experience",
      "Spring Framework basics",
      "Docker basics",
      "Linux command line familiarity",
      "Postman or similar API tool"
    ],
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
    ],
    faqs: [
      {
        question: "Is Kubernetes covered in depth?",
        answer: "We cover Kubernetes fundamentals but focus more on Spring Cloud features."
      },
      {
        question: "Will this work with non-Java services?",
        answer: "The course focuses on Java but concepts apply to polyglot architectures."
      },
      {
        question: "How current is the Spring version used?",
        answer: "We use Spring Boot 3.x and Spring Cloud 2022.x (latest stable releases)."
      }
    ],
    reviews: [
      {
        name: "Thomas R.",
        rating: 5,
        comment: "Exactly what I needed to modernize our legacy monolith at work.",
        date: "2023-11-05"
      },
      {
        name: "Maria G.",
        rating: 4,
        comment: "Great content but the Kubernetes section could be expanded.",
        date: "2023-10-18"
      },
      {
        name: "Samuel K.",
        rating: 5,
        comment: "Robert's industry experience shines through in every lecture. Practical and insightful!",
        date: "2023-09-22"
      }
    ],
    videoHours: 28,
    articles: 16,
    sections: 14,
    lectures: 75,
    languages: "English, German subtitles",
    reviewsCount: 523
  },
  {
    id: 9,
    title: "Python Web Development with Django",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Create powerful web applications using Django framework with database integration",
    longDescription: "Build full-featured web applications with Django, covering models, views, templates, forms, authentication, and deployment. Includes REST API development with Django REST Framework.",
    category: "Python",
    type: "recorded",
    duration: "38 hours",
    rating: 4.5,
    price: 2799,
    level: "Intermediate",
    requirements: [
      "Python programming basics",
      "Basic understanding of web concepts",
      "SQL knowledge helpful but not required",
      "PostgreSQL or MySQL installed"
    ],
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
    ],
    faqs: [
      {
        question: "Do you cover Django REST Framework?",
        answer: "Yes, we dedicate a full section to building REST APIs with DRF."
      },
      {
        question: "Will we deploy to production?",
        answer: "Yes, we cover deployment to platforms like Heroku and AWS."
      },
      {
        question: "Is this good for absolute beginners?",
        answer: "You should know Python basics first, as we don't cover Python syntax."
      }
    ],
    reviews: [
      {
        name: "Ethan W.",
        rating: 5,
        comment: "Sophia explains Django concepts so clearly. Built my first SaaS after this course!",
        date: "2023-12-10"
      },
      {
        name: "Olivia T.",
        rating: 4,
        comment: "Great course but could use more real-world deployment examples.",
        date: "2023-11-25"
      },
      {
        name: "Diego M.",
        rating: 5,
        comment: "The authentication section alone was worth the price. Very thorough!",
        date: "2023-10-15"
      }
    ],
    videoHours: 22,
    articles: 14,
    sections: 10,
    lectures: 58,
    languages: "English, Spanish",
    reviewsCount: 732
  },
  {
    id: 10,
    title: "Machine Learning Algorithms",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Understand and implement various ML algorithms from scratch with practical examples",
    longDescription: "Deep dive into machine learning algorithms, covering both theory and practical implementation. Learn regression, classification, clustering, and dimensionality reduction techniques.",
    category: "AI/ML",
    type: "live",
    duration: "48 hours",
    rating: 4.8,
    price: 3999,
    level: "Intermediate to Advanced",
    requirements: [
      "Python programming skills",
      "Basic calculus and linear algebra",
      "NumPy and pandas familiarity",
      "Jupyter Notebooks environment"
    ],
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
    ],
    faqs: [
      {
        question: "Do we use scikit-learn?",
        answer: "We implement algorithms from scratch first, then compare with scikit-learn."
      },
      {
        question: "How much math is involved?",
        answer: "We derive key equations but focus on practical implementation."
      },
      {
        question: "Will this help with interviews?",
        answer: "Yes, we include common ML interview questions and solutions."
      }
    ],
    reviews: [
      {
        name: "Aisha K.",
        rating: 5,
        comment: "Finally understand the math behind ML algorithms! Worth every penny.",
        date: "2024-01-15"
      },
      {
        name: "Nathan P.",
        rating: 5,
        comment: "Dr. Turing is legendary. The decision tree implementation was eye-opening.",
        date: "2023-12-28"
      },
      {
        name: "Liam S.",
        rating: 4,
        comment: "Challenging but rewarding. The math sections could be more gradual.",
        date: "2023-11-10"
      }
    ],
    videoHours: 32,
    articles: 18,
    sections: 16,
    lectures: 80,
    languages: "English",
    reviewsCount: 945
  },
  {
    id: 11,
    title: "Advanced Java Programming",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Master advanced Java concepts including multithreading, collections, and design patterns",
    longDescription: "Take your Java skills to expert level with deep dives into concurrency, performance optimization, design patterns, and JVM internals. Includes hands-on coding exercises.",
    category: "Java",
    type: "recorded",
    duration: "42 hours",
    rating: 4.7,
    price: 3299,
    level: "Advanced",
    requirements: [
      "2+ years Java experience",
      "Understanding of OOP principles",
      "Java 8 or later installed",
      "IntelliJ IDEA or Eclipse IDE"
    ],
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
    ],
    faqs: [
      {
        question: "Is Java 17 covered?",
        answer: "Yes, we cover features up to Java 17 including new APIs and language features."
      },
      {
        question: "Will this help with system design interviews?",
        answer: "Absolutely, we cover many patterns and practices used in system design."
      },
      {
        question: "How much focus on performance tuning?",
        answer: "We dedicate several modules to JVM performance and optimization techniques."
      }
    ],
    reviews: [
      {
        name: "Julia R.",
        rating: 5,
        comment: "Mark's expertise in Java is unmatched. The concurrency deep dive was incredible.",
        date: "2024-02-05"
      },
      {
        name: "Hiroshi T.",
        rating: 5,
        comment: "Finally understand Java memory model and performance tuning. Career-changing!",
        date: "2024-01-20"
      },
      {
        name: "Emma L.",
        rating: 4,
        comment: "Excellent but very dense. Could benefit from more practical examples.",
        date: "2023-12-15"
      }
    ],
    videoHours: 30,
    articles: 15,
    sections: 12,
    lectures: 70,
    languages: "English, Chinese subtitles",
    reviewsCount: 687
  },
  {
    id: 12,
    title: "Full Stack JavaScript Development",
    brochureUrl: "https://example.com/brochures/python-programming.pdf",
    description: "Build complete web applications using Node.js, Express, MongoDB, and React",
    longDescription: "Master the MERN stack (MongoDB, Express, React, Node.js) to build modern web applications. Learn to create APIs, work with databases, and build responsive UIs.",
    category: "Web Development",
    type: "live",
    duration: "55 hours",
    rating: 4.8,
    price: 4299,
    level: "Intermediate",
    requirements: [
      "JavaScript fundamentals",
      "Basic understanding of web development",
      "Node.js and npm installed",
      "MongoDB Community Edition"
    ],
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
    ],
    faqs: [
      {
        question: "Do you cover GraphQL?",
        answer: "We focus on REST but include GraphQL resources and comparisons."
      },
      {
        question: "Will we implement authentication?",
        answer: "Yes, we cover JWT authentication and session management."
      },
      {
        question: "Is this good for job preparation?",
        answer: "Absolutely, we include portfolio project guidance and interview tips."
      }
    ],
    reviews: [
      {
        name: "Daniel K.",
        rating: 5,
        comment: "Emily is an amazing teacher. Went from beginner to building my own SaaS!",
        date: "2024-03-10"
      },
      {
        name: "Sophie L.",
        rating: 5,
        comment: "The authentication implementation was worth the course price alone. So thorough!",
        date: "2024-02-25"
      },
      {
        name: "Rahul P.",
        rating: 4,
        comment: "Great content but could use more TypeScript integration.",
        date: "2024-01-18"
      }
    ],
    videoHours: 38,
    articles: 20,
    sections: 18,
    lectures: 85,
    languages: "English, Portuguese subtitles",
    reviewsCount: 1023
  }
];

export default CoursesData;