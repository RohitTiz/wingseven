import React, { useState } from 'react';

const CourseContent = ({ courseContent, onVideoSelect }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [completedLectures, setCompletedLectures] = useState({});

  // Default content matching your design
  const defaultContent = [
    {
      title: "01: Intro",
      duration: "22min",
      lectures: [
        { title: "Introduction", duration: "2 min", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { title: "What is Figma?", duration: "5 min", videoUrl: "https://www.youtube.com/embed/d1YE-rHtT0o" },
        { title: "Understanding Figma", duration: "12 min", videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" },
        { title: "UI tour", duration: "3 min", videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M" }
      ]
    },
    {
      title: "02: Intermediate Level Stuff",
      duration: "1h 20min",
      lectures: [
        { title: "Getting Started with Components", duration: "15 min", videoUrl: "https://www.youtube.com/embed/example1" },
        { title: "Working with Frames", duration: "18 min", videoUrl: "https://www.youtube.com/embed/example2" },
        { title: "Auto Layout Deep Dive", duration: "22 min", videoUrl: "https://www.youtube.com/embed/example3" },
        { title: "Design Systems Basics", duration: "25 min", videoUrl: "https://www.youtube.com/embed/example4" }
      ]
    },
    {
      title: "03: Advanced Stuff",
      duration: "36min",
      lectures: [
        { title: "Advanced Prototyping", duration: "20 min", videoUrl: "https://www.youtube.com/embed/example5" },
        { title: "Interactive Components", duration: "16 min", videoUrl: "https://www.youtube.com/embed/example6" }
      ]
    },
    {
      title: "04: Imports & Graphics",
      duration: "40min",
      lectures: [
        { title: "Importing Assets", duration: "12 min", videoUrl: "https://www.youtube.com/embed/example7" },
        { title: "Working with Images", duration: "15 min", videoUrl: "https://www.youtube.com/embed/example8" },
        { title: "Vector Graphics", duration: "13 min", videoUrl: "https://www.youtube.com/embed/example9" }
      ]
    },
    {
      title: "05: Component in Figma",
      duration: "1h 12min",
      lectures: [
        { title: "Creating Components", duration: "18 min", videoUrl: "https://www.youtube.com/embed/example10" },
        { title: "Component Variants", duration: "22 min", videoUrl: "https://www.youtube.com/embed/example11" },
        { title: "Component Properties", duration: "16 min", videoUrl: "https://www.youtube.com/embed/example12" },
        { title: "Component Libraries", duration: "16 min", videoUrl: "https://www.youtube.com/embed/example13" }
      ]
    },
    {
      title: "06: Styles in Figma",
      duration: "41min",
      lectures: [
        { title: "Text Styles", duration: "15 min", videoUrl: "https://www.youtube.com/embed/example14" },
        { title: "Color Styles", duration: "12 min", videoUrl: "https://www.youtube.com/embed/example15" },
        { title: "Effect Styles", duration: "14 min", videoUrl: "https://www.youtube.com/embed/example16" }
      ]
    },
    {
      title: "07: Summary",
      duration: "8min",
      lectures: [
        { title: "Course Recap", duration: "5 min", videoUrl: "https://www.youtube.com/embed/example17" },
        { title: "Next Steps", duration: "3 min", videoUrl: "https://www.youtube.com/embed/example18" }
      ]
    }
  ];

  const contentToUse = courseContent || defaultContent;

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Course content</h2>
        
        {/* Progress section */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>{progressPercentage}% complete</span>
            <span>{completedCount}/{totalLectures}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Course stats */}
        <div className="text-sm text-gray-500">
          <span>{contentToUse.length} sections</span>
          <span className="mx-2">•</span>
          <span>{totalLectures} lectures</span>
          <span className="mx-2">•</span>
          <span>4h 26m total length</span>
        </div>
      </div>

      {/* Course sections */}
      <div className="divide-y divide-gray-100">
        {contentToUse.map((section, idx) => {
          const sectionLecturesCount = section.lectures.length;
          const completedSectionLectures = section.lectures.filter((_, lidx) => 
            completedLectures[`${idx}-${lidx}`]
          ).length;
          const sectionProgress = sectionLecturesCount > 0 ? 
            Math.round((completedSectionLectures / sectionLecturesCount) * 100) : 0;
          
          return (
            <div key={idx} className="bg-white">
              {/* Section header */}
              <button
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:bg-gray-50"
                onClick={() => handleToggle(idx)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {section.title}
                    </h3>
                    <span className="ml-auto text-xs text-gray-500 mr-3">
                      {section.duration}
                    </span>
                  </div>
                  
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      openIndex === idx ? 'transform rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Section content */}
              {openIndex === idx && section.lectures && section.lectures.length > 0 && (
                <div className="bg-gray-50">
                  {section.lectures.map((lecture, lidx) => {
                    const lectureKey = `${idx}-${lidx}`;
                    const isCompleted = completedLectures[lectureKey];
                    
                    return (
                      <div
                        key={lidx}
                        className="px-4 py-3 border-t border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                        onClick={() => handleVideoClick(lecture, section)}
                      >
                        <div className="flex items-center">
                          {/* Play icon */}
                          <div className="flex-shrink-0 mr-3">
                            <svg 
                              className="w-4 h-4 text-gray-600" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          
                          {/* Lecture title */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${
                              isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'
                            }`}>
                              {lecture.title}
                            </p>
                          </div>
                          
                          {/* Duration */}
                          <div className="flex-shrink-0 ml-3">
                            <span className="text-xs text-gray-500">
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
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors duration-150"></div>
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