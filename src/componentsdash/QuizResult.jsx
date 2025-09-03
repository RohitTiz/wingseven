// componentsdash/QuizResult.jsx
import React from 'react';

const QuizResult = ({ score, total, quizTitle, onBack, onRetry }) => {
  const percentage = (score / total) * 100;
  const isPassing = percentage >= 70;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
        isPassing ? 'bg-green-100' : 'bg-red-100'
      }`}>
        <span className={`text-3xl font-bold ${
          isPassing ? 'text-green-600' : 'text-red-600'
        }`}>
          {score}/{total}
        </span>
      </div>
      
      <h2 className="text-2xl font-bold mb-2">Quiz Completed: {quizTitle}</h2>
      <div className="text-lg mb-1">Your Score: {score}/{total}</div>
      <div className="text-lg mb-4">Percentage: {percentage.toFixed(2)}%</div>
      
      <div className={`px-4 py-2 rounded-lg mb-6 ${
        isPassing ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {isPassing ? '🎉 Congratulations! You passed!' : 'Keep practicing! You can do better!'}
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
        >
          Back to Quizzes
        </button>
        <button
          onClick={onRetry}
          className="px-6 py-2 rounded-lg bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;