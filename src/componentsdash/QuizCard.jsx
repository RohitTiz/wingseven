// componentsdash/QuizCard.jsx
import React from 'react';

const QuizCard = ({ quiz, onClick, isCompleted, score, total }) => {
  return (
    <div 
      className={`rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 relative
        ${isCompleted ? 'bg-green-50 border-2 border-green-500' : 'bg-white'}
      `}
      onClick={onClick}
    >
      {isCompleted && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Completed ✓
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {quiz.questionsCount} questions
          </span>
          <span className="text-sm text-gray-500">
            {quiz.duration} min
          </span>
        </div>
        
        <div className="mt-4 flex items-center">
          <span className="text-sm font-medium text-gray-700">Difficulty:</span>
          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
            quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
            quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {quiz.difficulty}
          </span>
        </div>
        
        {isCompleted && score !== null && total !== null && (
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Your Score:</span>
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
              {score}/{total} ({(score/total*100).toFixed(0)}%)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;