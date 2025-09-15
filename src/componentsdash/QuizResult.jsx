// componentsdash/QuizResult.jsx
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const QuizResult = ({ score, total, quizTitle, onBack, onRetry }) => {
  const { darkMode } = useDarkMode();
  const percentage = (score / total) * 100;
  const isPassing = percentage >= 70;
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6 transition-colors duration-300 ${
      darkMode ? 'dark-bg' : 'light-bg'
    }`}>
      <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 ${
        isPassing 
          ? darkMode ? 'bg-green-900' : 'bg-green-100' 
          : darkMode ? 'bg-red-900' : 'bg-red-100'
      }`}>
        <span className={`text-xl sm:text-3xl font-bold transition-colors duration-300 ${
          isPassing 
            ? darkMode ? 'text-green-300' : 'text-green-600'
            : darkMode ? 'text-red-300' : 'text-red-600'
        }`}>
          {score}/{total}
        </span>
      </div>
      
      <h2 className={`text-xl sm:text-2xl font-bold mb-2 text-center transition-colors duration-300 ${
        darkMode ? 'light-text' : 'dark-text'
      }`}>
        Quiz Completed: {quizTitle}
      </h2>
      
      <div className={`text-base sm:text-lg mb-1 text-center transition-colors duration-300 ${
        darkMode ? 'light-text' : 'dark-text'
      }`}>
        Your Score: {score}/{total}
      </div>
      
      <div className={`text-base sm:text-lg mb-4 text-center transition-colors duration-300 ${
        darkMode ? 'light-text' : 'dark-text'
      }`}>
        Percentage: {percentage.toFixed(2)}%
      </div>
      
      <div className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base text-center transition-colors duration-300 ${
        isPassing 
          ? darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
          : darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'
      }`}>
        {isPassing ? '🎉 Congratulations! You passed!' : 'Keep practicing! You can do better!'}
      </div>
      
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        <button
          onClick={onBack}
          className={`px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Back to Quizzes
        </button>
        <button
          onClick={onRetry}
          className={`px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 ${
            darkMode 
              ? 'bg-[#6D28D9] text-white hover:bg-[#5B21B6]' 
              : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
          }`}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;