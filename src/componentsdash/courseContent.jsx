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
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 mr-2">Progress: {progressPercentage}%</span>
          <div className="w-32 bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-purple-600 h-2.5 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
        <div className="flex items-center">
          <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg mr-3">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{contentToUse.length} sections • {totalLectures} lectures • Total length: 4h 26m</p>
            <p className="text-xs text-gray-600">Expand each section to access lectures and mark them as complete</p>
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
          <div key={idx} className="mb-4 border border-gray-200 rounded-xl overflow-hidden last:mb-0">
            <button
              className={`w-full grid grid-cols-[1fr,auto,auto] items-center py-4 px-5 text-left transition-colors group hover:bg-gray-50 ${openIndex === idx ? 'bg-gray-50' : ''}`}
              onClick={() => handleToggle(idx)}
            >
              <div className="flex items-center">
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-purple-700' : 'text-gray-900'}`}>
                  {section.title}
                </span>
                {sectionLecturesCount > 0 && (
                  <span className="ml-3 text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                    {sectionLecturesCount} lectures
                  </span>
                )}
              </div>
              
              <div className="flex items-center mx-4">
                {sectionLecturesCount > 0 && (
                  <div className="flex items-center mr-4">
                    <span className="text-xs font-medium text-gray-600 mr-2">{sectionProgress}%</span>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full" 
                        style={{ width: `${sectionProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                  {section.duration}
                </span>
              </div>
              
              <span className="flex justify-end">
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180 text-purple-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {openIndex === idx && section.lectures && section.lectures.length > 0 && (
              <div className="px-5 pt-1 pb-4 bg-gray-50">
                <div className="py-3 grid grid-cols-[auto,1fr,auto,auto] items-center text-xs font-medium text-gray-500 border-b border-gray-200">
                  <span className="w-8 text-center">Status</span>
                  <span>Lecture title</span>
                  <span className="text-center mx-4">Duration</span>
                  <span className="w-20 text-center">Action</span>
                </div>
                
                <div className="flex flex-col gap-2 mt-2">
                  {section.lectures.map((lec, lidx) => {
                    const lectureKey = `${idx}-${lidx}`;
                    const isCompleted = completedLectures[lectureKey];
                    
                    return (
                      <div
                        key={lidx}
                        className="grid grid-cols-[auto,1fr,auto,auto] items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleVideoClick(lec, section)}
                      >
                        <div className="w-8 flex justify-center">
                          {isCompleted ? (
                            <div className="p-1 bg-green-100 rounded-full">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          ) : (
                            <div className="p-1 bg-gray-100 rounded-full">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center ml-2">
                          <span className="mr-3 flex items-center justify-center text-purple-600">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="6 4 20 12 6 20 6 4" />
                            </svg>
                          </span>
                          <span className={`font-medium ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                            {lec.title}
                          </span>
                        </div>
                        
                        <span className="text-xs font-semibold text-gray-500 mx-4">{lec.duration}</span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the parent click event
                            toggleLectureCompletion(idx, lidx);
                          }}
                          className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                            isCompleted 
                              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {isCompleted ? 'Completed' : 'Mark as done'}
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