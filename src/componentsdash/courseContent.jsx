import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const CourseContent = ({ courseContent, onVideoSelect }) => {
  const { darkMode } = useDarkMode();
  const [openSections, setOpenSections] = useState(new Set([0])); // Start with first section open
  const [completedLectures, setCompletedLectures] = useState({});
  const [activeSection, setActiveSection] = useState(0); // Track active section

  // Default content matching your design
  const defaultContent = [
    {
      title: "01: Intro",
      duration: "22min",
      lectures: [
        { title: "Introduction", duration: "2 min", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { title: "What is Figma?", duration: "5 min", videoUrl: "https://www.youtube.com/embed/d1YE-rHlT0o" },
        { title: "Understanding Figma", duration: "12 min", videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" },
        { title: "UI tour", duration: "3 min", videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M" }
      ]
    },
    // ... (rest of the default content remains the same)
  ];

  const contentToUse = courseContent || defaultContent;

  // Toggle section open/closed
  const handleToggle = (idx, e) => {
    e.stopPropagation();
    setActiveSection(idx);
    
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(idx)) {
      newOpenSections.delete(idx);
    } else {
      newOpenSections.add(idx);
    }
    setOpenSections(newOpenSections);
  };

  // Toggle all sections open/closed
  const toggleAllSections = () => {
    if (openSections.size === contentToUse.length) {
      setOpenSections(new Set());
    } else {
      setOpenSections(new Set(contentToUse.map((_, idx) => idx)));
    }
  };

  const toggleLectureCompletion = (sectionIndex, lectureIndex) => {
    const key = `${sectionIndex}-${lectureIndex}`;
    setCompletedLectures(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate overall progress
  const totalLectures = contentToUse.reduce((total, section) => 
    total + section.lectures.length, 0);
  
  const completedCount = Object.values(completedLectures).filter(Boolean).length;
  const progressPercentage = totalLectures > 0 ? 
    Math.round((completedCount / totalLectures) * 100) : 0;

  // Handle video selection with section information
  const handleVideoClick = (lecture, section) => {
    if (onVideoSelect) {
      onVideoSelect(lecture, section);
    }
  };

  return (
    <div className={`rounded-lg shadow-sm border w-full max-w-md mx-auto transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      {/* Header */}
      <div className={`p-4 border-b transition-colors duration-300 ${
        darkMode 
          ? 'border-gray-700' 
          : 'border-gray-100'
      }`}>
        <div className="flex justify-between items-center mb-3">
          <h2 className={`text-lg font-semibold transition-colors duration-300 ${
            darkMode 
              ? 'text-white' 
              : 'text-gray-900'
          }`}>Course content</h2>
          <button 
            onClick={toggleAllSections}
            className={`text-sm font-medium transition-colors duration-300 ${
              darkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            {openSections.size === contentToUse.length ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        
        {/* Progress section */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className={`transition-colors duration-300 ${
              darkMode 
                ? 'text-gray-400' 
                : 'text-gray-600'
            }`}>{progressPercentage}% complete</span>
            <span className={`transition-colors duration-300 ${
              darkMode 
                ? 'text-gray-400' 
                : 'text-gray-600'
            }`}>{completedCount}/{totalLectures}</span>
          </div>
          <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-700' 
              : 'bg-gray-200'
          }`}>
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Course stats */}
        <div className={`text-sm transition-colors duration-300 ${
          darkMode 
            ? 'text-gray-400' 
            : 'text-gray-500'
        }`}>
          <span>{contentToUse.length} sections</span>
          <span className="mx-2">•</span>
          <span>{totalLectures} lectures</span>
          <span className="mx-2">•</span>
          <span>4h 26m total length</span>
        </div>
      </div>

      {/* Course sections */}
      <div className={`divide-y transition-colors duration-300 ${
        darkMode 
          ? 'divide-gray-700' 
          : 'divide-gray-100'
      }`}>
        {contentToUse.map((section, idx) => {
          const sectionLecturesCount = section.lectures.length;
          const completedSectionLectures = section.lectures.filter((_, lidx) => 
            completedLectures[`${idx}-${lidx}`]
          ).length;
          const sectionProgress = sectionLecturesCount > 0 ? 
            Math.round((completedSectionLectures / sectionLecturesCount) * 100) : 0;
          
          return (
            <div 
              key={idx} 
              className={`transition-colors duration-300 ${
                activeSection === idx 
                  ? (darkMode ? 'bg-blue-900/30' : 'bg-blue-50') 
                  : ''
              } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              onClick={() => setActiveSection(idx)}
            >
              {/* Section header */}
              <button
                className={`w-full px-4 py-3 text-left transition-colors duration-300 focus:outline-none ${
                  activeSection === idx 
                    ? (darkMode ? 'bg-blue-900/30' : 'bg-blue-50') 
                    : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50')
                }`}
                onClick={(e) => handleToggle(idx, e)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <h3 className={`font-medium text-sm transition-colors duration-300 ${
                      darkMode 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h3>
                    <span className={`ml-auto text-xs mr-3 transition-colors duration-300 ${
                      darkMode 
                        ? 'text-gray-400' 
                        : 'text-gray-500'
                    }`}>
                      {section.duration}
                    </span>
                  </div>
                  
                  <svg
                    className={`w-4 h-4 transition-all duration-200 ${
                      darkMode ? 'text-gray-400' : 'text-gray-400'
                    } ${openSections.has(idx) ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {/* Section progress */}
                <div className={`mt-2 w-full rounded-full h-1.5 transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700' 
                    : 'bg-gray-200'
                }`}>
                  <div 
                    className="bg-green-500 h-1.5 rounded-full" 
                    style={{ width: `${sectionProgress}%` }}
                  ></div>
                </div>
              </button>
              
              {/* Section content */}
              {openSections.has(idx) && section.lectures && section.lectures.length > 0 && (
                <div className={`transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700' 
                    : 'bg-gray-50'
                }`}>
                  {section.lectures.map((lecture, lidx) => {
                    const lectureKey = `${idx}-${lidx}`;
                    const isCompleted = completedLectures[lectureKey];
                    
                    return (
                      <div
                        key={lidx}
                        className={`px-4 py-3 border-t cursor-pointer transition-colors duration-300 ${
                          darkMode 
                            ? 'border-gray-600 hover:bg-gray-600' 
                            : 'border-gray-100 hover:bg-gray-100'
                        }`}
                        onClick={() => handleVideoClick(lecture, section)}
                      >
                        <div className="flex items-center">
                          {/* Play icon */}
                          <div className="flex-shrink-0 mr-3">
                            <svg 
                              className={`w-4 h-4 transition-colors duration-300 ${
                                darkMode 
                                  ? 'text-gray-400' 
                                  : 'text-gray-600'
                              }`}
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          
                          {/* Lecture title */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate transition-colors duration-300 ${
                              isCompleted 
                                ? 'text-gray-500 line-through' 
                                : (darkMode ? 'text-white' : 'text-gray-900')
                            }`}>
                              {lecture.title}
                            </p>
                          </div>
                          
                          {/* Duration */}
                          <div className="flex-shrink-0 ml-3">
                            <span className={`text-xs transition-colors duration-300 ${
                              darkMode 
                                ? 'text-gray-400' 
                                : 'text-gray-500'
                            }`}>
                              {lecture.duration}
                            </span>
                          </div>
                          
                          {/* Completion status */}
                          <div className="flex-shrink-0 ml-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleLectureCompletion(idx, lidx);
                              }}
                              className="focus:outline-none"
                            >
                              {isCompleted ? (
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              ) : (
                                <div className={`w-5 h-5 border-2 rounded-full transition-colors duration-300 ${
                                  darkMode 
                                    ? 'border-gray-500 hover:border-gray-400' 
                                    : 'border-gray-300 hover:border-gray-400'
                                }`}></div>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;