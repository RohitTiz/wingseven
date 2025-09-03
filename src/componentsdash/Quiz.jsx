// componentsdash/Quiz.jsx
import React, { useState } from 'react';
import QuizResult from './QuizResult';

const optionLetter = ['A', 'B', 'C', 'D'];

const Quiz = ({ quiz, onBack, onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const isFirst = current === 0;
  const isLast = current === quiz.questions.length - 1;

  const handleOptionClick = (idx) => setSelected(idx);
  
  const handleNext = () => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = selected;
      return updated;
    });
    setCurrent((c) => c + 1);
    setSelected(answers[current + 1] ?? null);
  };
  
  const handlePrev = () => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = selected;
      return updated;
    });
    setCurrent((c) => c - 1);
    setSelected(answers[current - 1] ?? null);
  };
  
  const handleSubmit = () => {
    const finalAnswers = [...answers];
    finalAnswers[current] = selected;
    setAnswers(finalAnswers);
    
    // Calculate score
    const score = finalAnswers.filter((ans, idx) => ans === quiz.questions[idx].answer).length;
    
    // Notify parent component about completion
    onComplete(quiz.id, score, quiz.questions.length);
    setShowResult(true);
  };

  const score = answers.filter((ans, idx) => ans === quiz.questions[idx].answer).length;

  return (
    <>
      {showResult ? (
        <QuizResult
          score={score}
          total={quiz.questions.length}
          quizTitle={quiz.title}
          onBack={onBack}
          onRetry={() => {
            setCurrent(0);
            setSelected(null);
            setAnswers([]);
            setShowResult(false);
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
          <button
            onClick={onBack}
            className="self-start mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            ← Back to Quizzes
          </button>
          
          {/* Progress Bar */}
          <div className="w-full max-w-xl mb-6 bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-[#7C3AED] h-2.5 rounded-full" 
              style={{ width: `${((current + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="text-2xl font-bold mb-2 text-center">Question {current + 1}/{quiz.questions.length}</div>
          <div className="text-lg text-center mb-6 max-w-2xl font-medium text-gray-700">
            {quiz.questions[current].question}
          </div>
          
          <div className="flex flex-col gap-4 w-full max-w-xl">
            {quiz.questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={`flex items-center gap-4 px-6 py-3 rounded-xl shadow transition-all text-left
                  ${selected === idx ? 'bg-[#653DDE] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}
                  font-medium text-base border-2
                  ${selected === idx ? 'border-[#653DDE]' : 'border-transparent'}
                `}
              >
                <span className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold
                  ${selected === idx ? 'bg-white text-[#653DDE]' : 'bg-[#653DDE] text-[#ffffff]'}
                `}>
                  {optionLetter[idx]}
                </span>
                {opt}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4 mt-8">
            {!isFirst && (
              <button
                onClick={handlePrev}
                className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold shadow hover:bg-gray-200"
              >
                Previous
              </button>
            )}
            {!isLast && (
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-[#7C3AED] text-white font-semibold shadow hover:bg-[#6D28D9]"
                disabled={selected === null}
              >
                Next
              </button>
            )}
            {isLast && (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 rounded-lg bg-[#7C3AED] text-white font-semibold shadow hover:bg-[#6D28D9]"
                disabled={selected === null}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;