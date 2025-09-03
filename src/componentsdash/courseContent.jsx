// componentsdash/courseContent.jsx
import React, { useState } from 'react';

const CourseContent = ({ courseContent, onVideoSelect }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [completedLectures, setCompletedLectures] = useState({});

  // Default content if no courseContent is provided
  const defaultContent = [
    {
      title: "01: Introduction to the Course",
      duration: "22 min",
      lectures: [
        { title: "Welcome and Course Overview", duration: "2 min", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { title: "What You Will Learn", duration: "5 min", videoUrl: "https://www.youtube.com/embed/d1YE-rHtT0o" },
        { title: "Understanding the Fundamentals", duration: "12 min", videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" },
        { title: "Course Resources & Interface Tour", duration: "3 min", videoUrl: "https://www.youtube.com/embed/W8hHlS25l2M" }
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
    <div className="bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-xl p-4 md:p-8 w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">Course Content</h2>
        <div className="flex items-center">
          <span className="text-xs md:text-sm font-medium text-gray-600 mr-2">Progress: {progressPercentage}%</span>
          <div className="w-24 md:w-32 bg-gray-200 rounded-full h-2 md:h-2.5">
            <div 
              className="bg-purple-600 h-2 md:h-2.5 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-purple-50 rounded-lg border border-purple-100">
        <div className="flex items-start md:items-center">
          <div className="flex-shrink-0 p-1.5 md:p-2 bg-purple-100 rounded-lg mr-3 mt-0.5 md:mt-0">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p className="text-xs md:text-sm font-medium text-gray-900">{contentToUse.length} sections • {totalLectures} lectures • Total length: 4h 26m</p>
            <p className="text-xs text-gray-600 mt-0.5">Expand each section to access lectures and mark them as complete</p>
          </div>
        </div>
      </div>

      {contentToUse.map((section, idx) => {
        const sectionLecturesCount = section.lectures.length;
        const completedSectionLectures = section.lectures.filter((_, lidx) => 
          completedLectures[`${idx}-${lidx}`]
        ).length;
        const sectionProgress = sectionLecturesCount > 0 ? 
          Math.round((completedSectionLectures / sectionLecturesCount) * 100) : 0;
        
        return (
          <div key={idx} className="mb-3 md:mb-4 border border-gray-200 rounded-lg md:rounded-xl overflow-hidden last:mb-0">
            <button
              className={`w-full grid grid-cols-[1fr,auto] md:grid-cols-[1fr,auto,auto] items-center py-3 md:py-4 px-3 md:px-5 text-left transition-colors group hover:bg-gray-50 ${openIndex === idx ? 'bg-gray-50' : ''}`}
              onClick={() => handleToggle(idx)}
            >
              <div className="flex items-center">
                <span className={`font-bold text-base md:text-lg ${openIndex === idx ? 'text-purple-700' : 'text-gray-900'}`}>
                  {section.title}
                </span>
                {sectionLecturesCount > 0 && (
                  <span className="ml-2 md:ml-3 text-xs px-1.5 py-0.5 md:px-2 bg-gray-100 text-gray-600 rounded-full">
                    {sectionLecturesCount}
                  </span>
                )}
              </div>
              
              <div className="flex items-center ml-2 md:mx-4">
                {sectionLecturesCount > 0 && (
                  <div className="hidden md:flex items-center mr-4">
                    <span className="text-xs font-medium text-gray-600 mr-2">{sectionProgress}%</span>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full" 
                        style={{ width: `${sectionProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                <span className="text-xs md:text-sm font-medium text-gray-600 whitespace-nowrap">
                  {section.duration}
                </span>
              </div>
              
              <span className="flex justify-end md:ml-2">
                <svg
                  className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${openIndex === idx ? 'rotate-180 text-purple-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {openIndex === idx && section.lectures && section.lectures.length > 0 && (
              <div className="px-3 md:px-5 pt-1 pb-3 md:pb-4 bg-gray-50">
                <div className="py-2 md:py-3 grid grid-cols-[auto,1fr,auto] md:grid-cols-[auto,1fr,auto,auto] items-center text-xs font-medium text-gray-500 border-b border-gray-200">
                  <span className="w-6 md:w-8 text-center">Status</span>
                  <span>Lecture title</span>
                  <span className="text-center ml-2 md:mx-4">Duration</span>
                  <span className="hidden md:block w-20 text-center">Action</span>
                </div>
                
                <div className="flex flex-col gap-1.5 md:gap-2 mt-1.5 md:mt-2">
                  {section.lectures.map((lec, lidx) => {
                    const lectureKey = `${idx}-${lidx}`;
                    const isCompleted = completedLectures[lectureKey];
                    
                    return (
                      <div
                        key={lidx}
                        className="grid grid-cols-[auto,1fr,auto] md:grid-cols-[auto,1fr,auto,auto] items-center bg-white rounded-lg px-2 md:px-4 py-2 md:py-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleVideoClick(lec, section)}
                      >
                        <div className="w-6 md:w-8 flex justify-center">
                          {isCompleted ? (
                            <div className="p-0.5 md:p-1 bg-green-100 rounded-full">
                              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          ) : (
                            <div className="p-0.5 md:p-1 bg-gray-100 rounded-full">
                              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center ml-1 md:ml-2 truncate">
                          <span className="mr-2 md:mr-3 flex items-center justify-center text-purple-600">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="6 4 20 12 6 20 6 4" />
                            </svg>
                          </span>
                          <span className={`text-sm font-medium truncate ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                            {lec.title}
                          </span>
                        </div>
                        
                        <span className="text-xs font-semibold text-gray-500 ml-1 md:mx-4">{lec.duration}</span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the parent click event
                            toggleLectureCompletion(idx, lidx);
                          }}
                          className={`hidden md:block text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                            isCompleted 
                              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {isCompleted ? 'Completed' : 'Mark as done'}
                        </button>
                        
                        {/* Mobile completion button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLectureCompletion(idx, lidx);
                          }}
                          className="md:hidden ml-1 p-1 rounded-full transition-colors"
                        >
                          {isCompleted ? (
                            <div className="p-0.5 bg-green-100 rounded-full">
                              <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          ) : (
                            <div className="p-0.5 bg-gray-100 rounded-full">
                              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                              </svg>
                            </div>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseContent;