// pagesdash/Questions.jsx
import React, { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';
import QuizCard from '../componentsdash/QuizCard';
import Quiz from '../componentsdash/Quiz';

export const Questions = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Load completed quizzes from localStorage on component mount
  useEffect(() => {
    const savedCompletedQuizzes = localStorage.getItem('completedQuizzes');
    if (savedCompletedQuizzes) {
      setCompletedQuizzes(JSON.parse(savedCompletedQuizzes));
    }
  }, []);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setShowQuiz(true);
  };

  const handleBackToQuizzes = () => {
    setShowQuiz(false);
    setSelectedQuiz(null);
  };

  const handleQuizComplete = (quizId, score, total) => {
    const newCompletedQuiz = {
      id: quizId,
      score,
      total,
      completedAt: new Date().toISOString()
    };
    
    const updatedCompletedQuizzes = [...completedQuizzes.filter(q => q.id !== quizId), newCompletedQuiz];
    setCompletedQuizzes(updatedCompletedQuizzes);
    localStorage.setItem('completedQuizzes', JSON.stringify(updatedCompletedQuizzes));
  };

  // Filter quizzes based on selected filter and search term
  const filteredQuizzes = quizData.filter(quiz => {
    const isCompleted = completedQuizzes.some(q => q.id === quiz.id);
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'completed' && isCompleted) ||
                         (filter === 'not-completed' && !isCompleted) ||
                         quiz.difficulty.toLowerCase() === filter;
    
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  if (showQuiz && selectedQuiz) {
    return (
      <Quiz 
        quiz={selectedQuiz} 
        onBack={handleBackToQuizzes}
        onComplete={handleQuizComplete}
      />
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Available Quizzes</h1>
      
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="md:hidden mb-4 w-full px-4 py-2 bg-[#7C3AED] text-white rounded-lg font-medium flex items-center justify-center"
      >
        {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        <span className="ml-2">{showMobileFilters ? '▲' : '▼'}</span>
      </button>
      
      {/* Filter and Search Controls */}
      <div className={`mb-6 flex-col md:flex-row gap-4 items-start md:items-center ${showMobileFilters ? 'flex' : 'hidden md:flex'}`}>
        <div className="flex flex-wrap gap-2 mb-4 md:mb-0 justify-center md:justify-start">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-lg ${
              filter === 'all' ? 'bg-[#7C3AED] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-lg ${
              filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('not-completed')}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-lg ${
              filter === 'not-completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Not Done
          </button>
          <button
            onClick={() => setFilter('easy')}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-lg ${
              filter === 'easy' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setFilter('medium')}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-lg ${
              filter === 'medium' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setFilter('hard')}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-lg ${
              filter === 'hard' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Hard
          </button>
        </div>
        
        <div className="w-full md:flex-1 md:max-w-xs">
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm sm:text-base"
          />
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4 text-xs sm:text-sm text-gray-600">
        Showing {filteredQuizzes.length} of {quizData.length} quizzes
        {completedQuizzes.length > 0 && ` • ${completedQuizzes.length} completed`}
      </div>
      
      {/* Quizzes Grid */}
      {filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredQuizzes.map(quiz => {
            const isCompleted = completedQuizzes.some(q => q.id === quiz.id);
            const quizResult = completedQuizzes.find(q => q.id === quiz.id);
            
            return (
              <QuizCard 
                key={quiz.id} 
                quiz={quiz} 
                onClick={() => handleQuizSelect(quiz)}
                isCompleted={isCompleted}
                score={quizResult ? quizResult.score : null}
                total={quizResult ? quizResult.total : null}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12 text-gray-500">
          <p className="text-base sm:text-lg mb-4">No quizzes found matching your criteria.</p>
          <button
            onClick={() => {
              setFilter('all');
              setSearchTerm('');
            }}
            className="px-4 py-2 sm:px-6 sm:py-2 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] text-sm sm:text-base"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};