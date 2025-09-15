// componentsdash/Quiz.jsx
import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import QuizResult from './QuizResult';

const optionLetter = ['A', 'B', 'C', 'D'];

const Quiz = ({ quiz, onBack, onComplete }) => {
  const { darkMode } = useDarkMode();
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
        <div className={`flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'dark-bg' : 'light-bg'}`}>
          <button
            onClick={onBack}
            className={`self-start mb-4 px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-opacity-80 text-sm sm:text-base transition-colors duration-300 ${
              darkMode ? 'dark-card text-light-text hover:bg-gray-700' : 'bg-gray-200 text-dark-text hover:bg-gray-300'
            }`}
          >
            ← Back to Quizzes
          </button>
          
          {/* Progress Bar */}
          <div className={`w-full max-w-xl mb-4 sm:mb-6 rounded-full h-2 sm:h-2.5 transition-colors duration-300 ${
            darkMode ? 'dark-border bg-gray-700' : 'light-border bg-gray-200'
          }`}>
            <div 
              className="bg-[#7C3AED] h-2 sm:h-2.5 rounded-full transition-colors duration-300" 
              style={{ width: `${((current + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
          
          <div className={`text-xl sm:text-2xl font-bold mb-2 text-center transition-colors duration-300 ${darkMode ? 'text-light-text' : 'text-dark-text'}`}>
            Question {current + 1}/{quiz.questions.length}
          </div>
          <div className={`text-base sm:text-lg text-center mb-4 sm:mb-6 max-w-2xl font-medium px-2 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {quiz.questions[current].question}
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xl">
            {quiz.questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={`flex items-center gap-3 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow transition-all duration-300 text-left font-medium text-sm sm:text-base border-2
                  ${selected === idx 
                    ? 'bg-[#653DDE] text-white border-[#653DDE]' 
                    : `${darkMode ? 'dark-card hover:bg-gray-700 text-light-text border-dark-border' : 'bg-white hover:bg-gray-50 text-dark-text border-transparent'}`
                  }
                `}
              >
                <span className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-sm sm:text-lg font-bold transition-colors duration-300
                  ${selected === idx ? 'bg-white text-[#653DDE]' : 'bg-[#653DDE] text-white'}
                `}>
                  {optionLetter[idx]}
                </span>
                <span className="text-left flex-1">{opt}</span>
              </button>
            ))}
          </div>
          
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap justify-center">
            {!isFirst && (
              <button
                onClick={handlePrev}
                className={`px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold shadow hover:bg-opacity-80 text-sm sm:text-base transition-colors duration-300 ${
                  darkMode ? 'dark-card text-light-text hover:bg-gray-700' : 'bg-gray-100 text-dark-text hover:bg-gray-200'
                }`}
              >
                Previous
              </button>
            )}
            {!isLast && (
              <button
                onClick={handleNext}
                className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-[#7C3AED] text-white font-semibold shadow hover:bg-[#6D28D9] text-sm sm:text-base transition-colors duration-300"
                disabled={selected === null}
              >
                Next
              </button>
            )}
            {isLast && (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-[#7C3AED] text-white font-semibold shadow hover:bg-[#6D28D9] text-sm sm:text-base transition-colors duration-300"
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