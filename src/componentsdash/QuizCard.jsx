// componentsdash/QuizCard.jsx
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const QuizCard = ({ quiz, onClick, isCompleted, score, total }) => {
  const { darkMode } = useDarkMode();

  return (
    <div 
      className={`rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 relative transition-colors duration-300
        ${isCompleted ? 
          `${darkMode ? 'bg-green-900/20 border-2 border-green-600' : 'bg-green-50 border-2 border-green-500'}` : 
          `${darkMode ? 'dark-card dark-border' : 'light-card light-border'}`
        }
        w-full max-w-md mx-auto md:max-w-full
      `}
      onClick={onClick}
    >
      {isCompleted && (
        <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full z-10 transition-colors duration-300 ${
          darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
        }`}>
          Completed ✓
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <h3 className={`text-lg sm:text-xl font-semibold mb-2 line-clamp-2 transition-colors duration-300 ${
          darkMode ? 'light-text' : 'dark-text'
        }`}>
          {quiz.title}
        </h3>
        <p className={`mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 transition-colors duration-300 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {quiz.description}
        </p>
        
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className={`text-xs sm:text-sm px-2 py-1 rounded transition-colors duration-300 ${
            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'
          }`}>
            {quiz.questionsCount} questions
          </span>
          <span className={`text-xs sm:text-sm px-2 py-1 rounded transition-colors duration-300 ${
            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'
          }`}>
            {quiz.duration} min
          </span>
        </div>
        
        <div className="mt-3 sm:mt-4 flex items-center flex-wrap gap-2">
          <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Difficulty:
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
            quiz.difficulty === 'Easy' ? 
              `${darkMode ? 'bg-green-800/40 text-green-300' : 'bg-green-100 text-green-800'}` :
            quiz.difficulty === 'Medium' ? 
              `${darkMode ? 'bg-yellow-800/40 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}` :
              `${darkMode ? 'bg-red-800/40 text-red-300' : 'bg-red-100 text-red-800'}`
          }`}>
            {quiz.difficulty}
          </span>
        </div>
        
        {isCompleted && score !== null && total !== null && (
          <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
            <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Your Score:
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
              darkMode ? 'bg-green-800/40 text-green-300' : 'bg-green-100 text-green-800'
            }`}>
              {score}/{total} ({(score/total*100).toFixed(0)}%)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;