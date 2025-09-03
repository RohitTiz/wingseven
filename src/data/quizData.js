// data/quizData.js
export const quizData = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Test your knowledge of fundamental JavaScript concepts",
    questionsCount: 10,
    duration: 15,
    difficulty: "Easy",
    questions: [
      {
        id: 1,
        question: "Which of the following is a JavaScript data type?",
        options: ["Boolean", "Class", "Element", "Loop"],
        answer: 0
      },
      {
        id: 2,
        question: "What does DOM stand for?",
        options: [
          "Document Object Model",
          "Digital Orientation Map",
          "Data Object Management",
          "Display Object Manipulation"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: 3
      },
      {
        id: 4,
        question: "What will 'console.log(typeof null)' output?",
        options: ["null", "undefined", "object", "string"],
        answer: 2
      },
      {
        id: 5,
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
      }
    ]
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Quiz on React.js core concepts and components",
    questionsCount: 12,
    duration: 20,
    difficulty: "Medium",
    questions: [
      {
        id: 1,
        question: "What is JSX?",
        options: [
          "A JavaScript extension",
          "A template language",
          "A state management library",
          "A testing framework"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: 1
      },
      {
        id: 3,
        question: "What is the purpose of the useEffect hook?",
        options: [
          "To manage component state",
          "To handle side effects",
          "To create context",
          "To optimize performance"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 3,
    title: "HTML & CSS Mastery",
    description: "Test your knowledge of web fundamentals",
    questionsCount: 15,
    duration: 25,
    difficulty: "Easy",
    questions: [
      {
        id: 1,
        question: "Which HTML tag is used for creating a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: 1
      },
      {
        id: 2,
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        answer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Node.js Backend",
    description: "Quiz on server-side JavaScript with Node.js",
    questionsCount: 10,
    duration: 20,
    difficulty: "Medium",
    questions: [
      {
        id: 1,
        question: "What is the default package manager for Node.js?",
        options: ["npm", "yarn", "pnpm", "bower"],
        answer: 0
      },
      {
        id: 2,
        question: "Which module is used to create a web server in Node.js?",
        options: ["http", "web", "server", "express"],
        answer: 0
      }
    ]
  },
  {
    id: 5,
    title: "Python Programming",
    description: "Test your Python knowledge",
    questionsCount: 15,
    duration: 30,
    difficulty: "Medium",
    questions: [
      {
        id: 1,
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "def", "function", "define"],
        answer: 1
      },
      {
        id: 2,
        question: "What will 'print(3 // 2)' output in Python?",
        options: ["1.5", "1", "2", "Error"],
        answer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Database Concepts",
    description: "Quiz on SQL and database management",
    questionsCount: 12,
    duration: 25,
    difficulty: "Hard",
    questions: [
      {
        id: 1,
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["GET", "SELECT", "RETRIEVE", "FIND"],
        answer: 1
      },
      {
        id: 2,
        question: "What does ACID stand for in database transactions?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Accuracy, Consistency, Integrity, Durability",
          "Atomicity, Correctness, Isolation, Durability",
          "Automation, Consistency, Integrity, Design"
        ],
        answer: 0
      }
    ]
  },
  {
    id: 7,
    title: "Data Structures",
    description: "Test your knowledge of common data structures",
    questionsCount: 15,
    duration: 30,
    difficulty: "Hard",
    questions: [
      {
        id: 1,
        question: "Which data structure uses LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        answer: 1
      },
      {
        id: 2,
        question: "What is the time complexity of accessing an element in an array by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: 0
      }
    ]
  },
  {
    id: 8,
    title: "Git Version Control",
    description: "Quiz on Git commands and workflows",
    questionsCount: 10,
    duration: 15,
    difficulty: "Easy",
    questions: [
      {
        id: 1,
        question: "Which command is used to stage files in Git?",
        options: ["git stage", "git add", "git commit", "git push"],
        answer: 1
      },
      {
        id: 2,
        question: "What does 'git clone' do?",
        options: [
          "Creates a new branch",
          "Copies a repository to your local machine",
          "Merges two branches",
          "Deletes a repository"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Web Security",
    description: "Test your knowledge of web security principles",
    questionsCount: 12,
    duration: 20,
    difficulty: "Hard",
    questions: [
      {
        id: 1,
        question: "What does CORS stand for?",
        options: [
          "Cross-Origin Resource Sharing",
          "Cross-Origin Request Security",
          "Centralized Origin Resource System",
          "Cross-Origin Response Security"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "Which HTTP header helps prevent XSS attacks?",
        options: [
          "X-XSS-Protection",
          "Content-Security-Policy",
          "X-Frame-Options",
          "All of the above"
        ],
        answer: 3
      }
    ]
  },
  {
    id: 10,
    title: "Algorithms",
    description: "Quiz on common algorithms and their complexities",
    questionsCount: 15,
    duration: 30,
    difficulty: "Hard",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of Bubble Sort in worst case?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 2
      },
      {
        id: 2,
        question: "Which searching algorithm requires the array to be sorted?",
        options: [
          "Linear Search",
          "Binary Search",
          "Depth-First Search",
          "Breadth-First Search"
        ],
        answer: 1
      }
    ]
  }
];