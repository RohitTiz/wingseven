import React from 'react';

const QuizResult = ({ score, total, userName = 'User', onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="rounded-full bg-blue-400 flex items-center justify-center" style={{ width: 180, height: 180 }}>
          <div className="rounded-full bg-blue-800 flex flex-col items-center justify-center" style={{ width: 160, height: 160 }}>
            <div className="text-white text-xl font-medium mb-1">Your Score</div>
            <div className="text-4xl font-bold text-white">{score}/{total}</div>
          </div>
        </div>
      </div>
      <div className="text-xl font-semibold text-center mb-2 text-blue-900">Congratulation</div>
      <div className="text-base text-center text-blue-800 mb-6">Great job, {userName} You Did It</div>
      <button
        onClick={onBack}
        className="w-full max-w-xs px-6 py-3 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default QuizResult; 