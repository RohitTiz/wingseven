import React, { useState } from 'react';
import { questions } from '../dummydata/dummydata';
import Header from '../componentsdash/DashHeader';
import QuizResult from '../componentsdash/QuizResult';
import { useNavigate } from 'react-router-dom';

const optionLetter = ['A', 'B', 'C', 'D'];

export const Questions = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const isFirst = current === 0;
  const isLast = current === questions.length - 1;

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
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = selected;
      return updated;
    });
    setShowResult(true);
  };

  const score = answers.filter((ans, idx) => ans === questions[idx].answer).length;

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        {showResult ? (
          <QuizResult
            score={score}
            total={questions.length}
            userName="Rakshit Jain"
            onBack={() => {
              setCurrent(0);
              setSelected(null);
              setAnswers([]);
              setShowResult(false);
            }}
          />
        ) : (
          <>
            <div className="text-2xl font-bold mb-2 text-center">Question {current + 1}/{questions.length}</div>
            <div className="text-lg text-center mb-6 max-w-2xl font-medium text-gray-700">
              {questions[current].question}
            </div>
            <div className="flex flex-col gap-4 w-full max-w-xl">
              {questions[current].options.map((opt, idx) => (
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
          </>
        )}
      </div>
    </>
  );
};
