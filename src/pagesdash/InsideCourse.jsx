import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoContent from '../componentsdash/videoContent';
import MoreInfo from '../componentsdash/moreInfo';
import CourseContent from '../componentsdash/courseContent';
import Header from '../componentsdash/DashHeader';
import { coursesData } from '../data/coursesData';
import { useDarkMode } from '../context/DarkModeContext';

const InsideCourse = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showContentPanel, setShowContentPanel] = useState(false);
  const [containerHeight, setContainerHeight] = useState('100vh');
  const { darkMode } = useDarkMode();
  const course = coursesData.find(c => c.id === parseInt(id));

  // Check screen size and set mobile view state
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      
      // Calculate available height (subtract header height)
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const availableHeight = window.innerHeight - headerHeight - 32; // 32px for padding
      setContainerHeight(`${availableHeight}px`);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Set the first video and section as default when course loads
  useEffect(() => {
    if (course && course.courseContent && course.courseContent.length > 0) {
      const firstSection = course.courseContent[0];
      setSelectedSection(firstSection);
      
      if (firstSection.lectures && firstSection.lectures.length > 0) {
        setSelectedVideo(firstSection.lectures[0]);
      }
    }
  }, [course]);

  const handleVideoSelect = (lecture, section) => {
    setSelectedVideo(lecture);
    setSelectedSection(section);
    // On mobile, close content panel after selection
    if (isMobileView) {
      setShowContentPanel(false);
    }
  };

  const toggleContentPanel = () => {
    setShowContentPanel(!showContentPanel);
  };

  if (!course) {
    return <div className={`p-4 text-center transition-colors duration-300 ${darkMode ? 'dark-bg dark-text' : 'light-bg dark-text'}`}>Course not found</div>;
  }

  return (
    <>
      <Header showActions={true} courseTitle={course.title} />
      
      {/* Mobile content toggle button */}
      {isMobileView && (
        <button 
          onClick={toggleContentPanel}
          className={`fixed bottom-4 right-4 z-40 p-3 rounded-full shadow-lg md:hidden transition-colors duration-300 ${
            darkMode 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          aria-label="Toggle course content"
        >
          {showContentPanel ? 'Hide Content' : 'Show Content'}
        </button>
      )}
      
      <div 
        className={`flex flex-col md:flex-row gap-6 p-6 min-h-screen transition-colors duration-300 ${
          darkMode ? 'dark-bg' : 'light-bg'
        }`}
        style={{ minHeight: containerHeight }}
      >
        {/* Main content area - increased width for video */}
        <div className="flex-1 flex flex-col overflow-hidden md:w-[70%]">
          {/* Video container with increased height */}
          <div className={`h-auto md:h-[65vh] rounded-xl shadow-sm overflow-hidden transition-colors duration-300 ${
            darkMode ? 'dark-card' : 'light-card'
          }`}>
            <VideoContent course={course} selectedVideo={selectedVideo} />
          </div>
          
          {/* MoreInfo section with proper margin (20px equivalent) */}
          <div className="mt-5 flex-1"> {/* mt-5 gives 20px margin top */}
            <MoreInfo 
              course={course} 
              selectedVideo={selectedVideo} 
              selectedSection={selectedSection} 
            />
          </div>
        </div>
        
        {/* Course content panel - moved to right side */}
        <div className={`
          ${isMobileView ? 
            `fixed inset-0 z-30 transform transition-all duration-300 ease-in-out ${
              showContentPanel ? 'translate-x-0' : 'translate-x-full'
            } ${darkMode ? 'dark-card' : 'light-card'}` 
            : `w-full md:w-[30%] static ${darkMode ? 'dark-bg' : 'light-bg'}`
          } 
          flex-shrink-0 mx-auto md:mx-0 overflow-y-auto transition-colors duration-300
        `}>
          {/* Close button for mobile */}
          {isMobileView && (
            <button 
              onClick={() => setShowContentPanel(false)}
              className={`absolute top-4 right-4 z-40 p-2 rounded-full shadow-md transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                  : 'bg-white text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Close content panel"
            >
              ✕
            </button>
          )}
          
          <CourseContent 
            courseContent={course.courseContent} 
            onVideoSelect={handleVideoSelect}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>
    </>
  );
};

export default InsideCourse;