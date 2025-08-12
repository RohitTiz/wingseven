export const questions = [
  {
    question: 'What is the output of the following code?\nconsole.log(typeof null);',
    options: [
      'object',
      'null',
      'undefined',
      'number',
    ],
    answer: 0,
  },
  {
    question: 'Which of the following is NOT a valid way to declare a variable in JavaScript?',
    options: [
      'var',
      'let',
      'const',
      'define',
    ],
    answer: 3,
  },
  {
    question: 'What does the "this" keyword refer to in a regular function (not arrow) in JavaScript (non-strict mode)?',
    options: [
      'The global object',
      'The function itself',
      'The parent object',
      'undefined',
    ],
    answer: 0,
  },
  {
    question: 'Which method is used to add an element to the end of an array in JavaScript?',
    options: [
      'push()',
      'pop()',
      'shift()',
      'unshift()',
    ],
    answer: 0,
  },
  {
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: [
      'O(1)',
      'O(n)',
      'O(log n)',
      'O(n^2)',
    ],
    answer: 0,
  },
  {
    question: 'Which of the following is a feature of React?',
    options: [
      'Virtual DOM',
      'Two-way data binding by default',
      'Built-in HTTP client',
      'Automatic database integration',
    ],
    answer: 0,
  },
  {
    question: 'What is the output of: [1,2,3]+[4,5,6] in JavaScript?',
    options: [
      '1,2,34,5,6',
      'Error',
      '1,2,3,4,5,6',
      '1,2,34,5,6',
    ],
    answer: 0,
  },
  {
    question: 'Which of the following is NOT a primitive data type in JavaScript?',
    options: [
      'Symbol',
      'Object',
      'Boolean',
      'String',
    ],
    answer: 1,
  },
  {
    question: 'What is the correct way to write a function in ES6?',
    options: [
      'function myFunc() {}',
      'let myFunc = function() {}',
      'const myFunc = () => {}',
      'All of the above',
    ],
    answer: 3,
  },
  {
    question: 'Which array method returns the first element that satisfies a provided testing function?',
    options: [
      'find()',
      'filter()',
      'map()',
      'forEach()',
    ],
    answer: 0,
  },
];


export const dummyBooks = [
  {
    title: "LLM Engineer's Handbook",
    date: "Oct 2024",
    pages: 522,
    image: "https://picsum.photos/150/200?random=1",
  },
  {
    title: "Python Machine Learning By Example",
    date: "Jul 2024",
    pages: 518,
    image: "https://picsum.photos/150/200?random=2",
  },
  {
    title: "C# 13 and .NET 9 - Modern Cross-Platform...",
    date: "Nov 2024",
    pages: 828,
    image: "https://picsum.photos/150/200?random=3",
  },
  {
    title: "Solutions Architect's Handbook",
    date: "Mar 2024",
    pages: 582,
    image: "https://picsum.photos/150/200?random=4",
  },
];


export const dummyCourse = [
  {
    title: '01:Intro',
    duration: '22min',
    lectures: [
      { title: 'Introduction', duration: '2 min' },
      { title: 'What is Figma?', duration: '5 min' },
      { title: 'Understanding Figma', duration: '12 min' },
      { title: 'UI tour', duration: '3 min' },
    ],
  },
  {
    title: '02: Intermediate Level Stuff',
    duration: '1h 20min',
    lectures: [
      { title: 'Lecture 1', duration: '20 min' },
      { title: 'Lecture 2', duration: '30 min' },
      { title: 'Lecture 3', duration: '30 min' },
    ],
  },
  {
    title: '03:Advanced Stuff',
    duration: '36min',
    lectures: [
      { title: 'Lecture 1', duration: '18 min' },
      { title: 'Lecture 2', duration: '18 min' },
    ],
  },
  {
    title: '04: Imports & Graphics',
    duration: '40min',
    lectures: [
      { title: 'Lecture 1', duration: '20 min' },
      { title: 'Lecture 2', duration: '20 min' },
    ],
  },
  {
    title: '05: Component in Figma',
    duration: '1h 12min',
    lectures: [
      { title: 'Lecture 1', duration: '36 min' },
      { title: 'Lecture 2', duration: '36 min' },
    ],
  },
  {
    title: '06: Styles in Figma',
    duration: '4min',
    lectures: [
      { title: 'Lecture 1', duration: '4 min' },
    ],
  },
  {
    title: '07:Summary',
    duration: '8min',
    lectures: [
      { title: 'Summary', duration: '8 min' },
    ],
  },
];

export const modules = [
  {
    name: 'HTML',
    questions: 30,
    score: 26,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'bg-orange-100',
    ring: 'ring-orange-400',
    text: 'text-orange-500',
  },
  {
    name: 'JAVASCRIPT',
    questions: 30,
    score: 20,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'bg-yellow-100',
    ring: 'ring-yellow-400',
    text: 'text-yellow-500',
  },
  {
    name: 'REACT',
    questions: 30,
    score: 25,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'bg-cyan-100',
    ring: 'ring-cyan-400',
    text: 'text-cyan-500',
  },
  {
    name: 'C++',
    questions: 30,
    score: 27,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    color: 'bg-blue-100',
    ring: 'ring-blue-400',
    text: 'text-blue-500',
  },
  {
    name: 'PYTHON',
    questions: 30,
    score: 22,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'bg-yellow-50',
    ring: 'ring-purple-400',
    text: 'text-purple-500',
  },
];