// componentsdash/QuizResult.jsx
import React from 'react';

const QuizResult = ({ score, total, quizTitle, onBack, onRetry }) => {
  const percentage = (score / total) * 100;
  const isPassing = percentage >= 70;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6">
      <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 ${
        isPassing ? 'bg-green-100' : 'bg-red-100'
      }`}>
        <span className={`text-xl sm:text-3xl font-bold ${
          isPassing ? 'text-green-600' : 'text-red-600'
        }`}>
          {score}/{total}
        </span>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Quiz Completed: {quizTitle}</h2>
      <div className="text-base sm:text-lg mb-1 text-center">Your Score: {score}/{total}</div>
      <div className="text-base sm:text-lg mb-4 text-center">Percentage: {percentage.toFixed(2)}%</div>
      
      <div className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base text-center ${
        isPassing ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {isPassing ? '🎉 Congratulations! You passed!' : 'Keep practicing! You can do better!'}
      </div>
      
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        <button
          onClick={onBack}
          className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 text-sm sm:text-base"
        >
          Back to Quizzes
        </button>
        <button
          onClick={onRetry}
          className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] text-sm sm:text-base"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;