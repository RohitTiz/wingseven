import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { quizData } from '../data/quizData';
import QuizCard from '../componentsdash/QuizCard';
import Quiz from '../componentsdash/Quiz';

export const Questions = () => {
  const { darkMode } = useDarkMode();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [courseFilter, setCourseFilter] = useState('all');
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique course names from quiz data
  const availableCourses = useMemo(() => 
    ['all', ...new Set(quizData.map(quiz => quiz.course || 'General'))], 
    []
  );

  // Load completed quizzes from localStorage on component mount
  useEffect(() => {
    const loadCompletedQuizzes = () => {
      try {
        const savedCompletedQuizzes = localStorage.getItem('completedQuizzes');
        if (savedCompletedQuizzes) {
          setCompletedQuizzes(JSON.parse(savedCompletedQuizzes));
        }
      } catch (error) {
        console.error('Failed to load completed quizzes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCompletedQuizzes();
  }, []);

  const handleQuizSelect = useCallback((quiz) => {
    setSelectedQuiz(quiz);
    setShowQuiz(true);
    // Scroll to top when a quiz is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToQuizzes = useCallback(() => {
    setShowQuiz(false);
    setSelectedQuiz(null);
  }, []);

  const handleQuizComplete = useCallback((quizId, score, total) => {
    const newCompletedQuiz = {
      id: quizId,
      score,
      total,
      completedAt: new Date().toISOString()
    };
    
    const updatedCompletedQuizzes = [...completedQuizzes.filter(q => q.id !== quizId), newCompletedQuiz];
    setCompletedQuizzes(updatedCompletedQuizzes);
    localStorage.setItem('completedQuizzes', JSON.stringify(updatedCompletedQuizzes));
  }, [completedQuizzes]);

  const clearAllFilters = useCallback(() => {
    setFilter('all');
    setSearchTerm('');
    setCourseFilter('all');
  }, []);

  // Filter quizzes based on selected filters and search term
  const filteredQuizzes = useMemo(() => {
    return quizData.filter(quiz => {
      const isCompleted = completedQuizzes.some(q => q.id === quiz.id);
      
      const matchesFilter = filter === 'all' || 
                           (filter === 'completed' && isCompleted) ||
                           (filter === 'not-completed' && !isCompleted);
      
      const matchesSearch = searchTerm === '' || 
                           quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCourse = courseFilter === 'all' || 
                           (quiz.course || 'General').toLowerCase() === courseFilter.toLowerCase();
      
      return matchesFilter && matchesSearch && matchesCourse;
    });
  }, [quizData, completedQuizzes, filter, searchTerm, courseFilter]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalQuizzes = quizData.length;
    const completedCount = completedQuizzes.length;
    const averageScore = completedCount > 0 
      ? Math.round(completedQuizzes.reduce((sum, quiz) => sum + (quiz.score / quiz.total) * 100, 0) / completedCount)
      : 0;
    
    return { totalQuizzes, completedCount, averageScore };
  }, [completedQuizzes, quizData.length]);

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
    <div className={`min-h-screen p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className={`text-2xl sm:text-3xl font-bold mb-2 md:mb-0 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz Dashboard
          </h1>
          
          {/* Stats */}
          <div className={`flex flex-wrap gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center">
              <span className="mr-1 text-green-500">✓</span>
              <span>{stats.completedCount} Completed</span>
            </div>
            <div>
              <span>Avg Score: {stats.averageScore}%</span>
            </div>
          </div>
        </div>
        
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="md:hidden mb-4 w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
        >
          <span className="mr-2">☰</span>
          {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        {/* Filter and Search Controls */}
        <div className={`mb-6 p-4 rounded-lg transition-all duration-300 ${showMobileFilters ? 'block' : 'hidden md:block'} ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Filters</h2>
            <button 
              onClick={clearAllFilters}
              className={`text-sm flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'}`}
            >
              <span className="mr-1">↻</span> Reset
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* Status Filter */}
            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Status
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    filter === 'all' 
                      ? 'bg-indigo-600 text-white' 
                      : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('completed')}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    filter === 'completed' 
                      ? 'bg-green-600 text-white' 
                      : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setFilter('not-completed')}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    filter === 'not-completed' 
                      ? 'bg-blue-600 text-white' 
                      : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  New
                </button>
              </div>
            </div>
            
            {/* Course Filter */}
            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Course
              </label>
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-colors duration-300 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-700'
                }`}
              >
                {availableCourses.map(course => (
                  <option key={course} value={course}>
                    {course === 'all' ? 'All Courses' : course}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Search */}
            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-colors duration-300 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400'
                  }`}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <span className={`${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`}>×</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className={`mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="text-sm">
            Showing <span className="font-medium">{filteredQuizzes.length}</span> of <span className="font-medium">{stats.totalQuizzes}</span> quizzes
            {searchTerm && ` for "${searchTerm}"`}
          </div>
          
          {filteredQuizzes.length > 0 && (
            <div className="text-xs mt-1 sm:mt-0">
              {completedQuizzes.length > 0 && `Completed: ${stats.completedCount} • `}
              Average Score: {stats.averageScore}%
            </div>
          )}
        </div>
        
        {/* Quizzes Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredQuizzes.length > 0 ? (
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
          <div className={`text-center py-12 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
            <div className={`text-6xl mb-4 ${darkMode ? 'text-gray-700' : 'text-gray-300'}`}>🔍</div>
            <p className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>No quizzes found</p>
            <p className={`mb-6 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Try adjusting your filters or search term
            </p>
            <button
              onClick={clearAllFilters}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm transition-colors duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};