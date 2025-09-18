import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoContent from '../componentsdash/videoContent';
import MoreInfo from '../componentsdash/moreInfo';
import CourseContent from '../componentsdash/courseContent';
import Header from '../componentsdash/DashHeader';
import CertificationCompo from '../componentsdash/CertificationCompo';
import { coursesData } from '../data/coursesData';
import { useDarkMode } from '../context/DarkModeContext';

const InsideCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showContentPanel, setShowContentPanel] = useState(false);
  const [containerHeight, setContainerHeight] = useState('100vh');
  const [completedLectures, setCompletedLectures] = useState({});
  const [swipeStart, setSwipeStart] = useState(null);
  const contentPanelRef = useRef(null);
  const { darkMode } = useDarkMode();
  const course = coursesData.find(c => c.id === parseInt(id));

  // Check screen size and set mobile view state
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      
      // Calculate available height (subtract header height)
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const availableHeight = window.innerHeight - headerHeight - 16; // Reduced padding for mobile
      setContainerHeight(`${availableHeight}px`);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle swipe gestures for mobile
  useEffect(() => {
    if (!isMobileView) return;

    const handleTouchStart = (e) => {
      setSwipeStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (!swipeStart) return;
      
      const currentX = e.touches[0].clientX;
      const diff = swipeStart - currentX;
      
      // Swipe left to open content panel
      if (diff > 50 && !showContentPanel) {
        setShowContentPanel(true);
        setSwipeStart(null);
      }
      
      // Swipe right to close content panel
      if (diff < -50 && showContentPanel) {
        setShowContentPanel(false);
        setSwipeStart(null);
      }
    };

    const handleTouchEnd = () => {
      setSwipeStart(null);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobileView, showContentPanel, swipeStart]);

  // Close content panel when clicking outside on mobile
  useEffect(() => {
    if (!isMobileView || !showContentPanel) return;

    const handleClickOutside = (e) => {
      if (contentPanelRef.current && !contentPanelRef.current.contains(e.target)) {
        setShowContentPanel(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileView, showContentPanel]);

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
      // Scroll to top of video content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleContentPanel = () => {
    setShowContentPanel(!showContentPanel);
  };

  // Function to handle assignment button click
  const handleAssignmentClick = () => {
    navigate(`/dashboard/courses/${id}/assignments`);
  };

  // Function to update completed lectures (passed to CourseContent)
  const updateCompletedLectures = (newCompletedLectures) => {
    setCompletedLectures(newCompletedLectures);
  };

  if (!course) {
    return <div className={`p-4 text-center transition-colors duration-300 ${darkMode ? 'dark-bg dark-text' : 'light-bg dark-text'}`}>Course not found</div>;
  }

  return (
    <>
      <Header 
        showActions={true} 
        courseTitle={course.title} 
        // Pass the assignment button as a custom action
        customAction={
          <button
            onClick={handleAssignmentClick}
            className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Assignments
          </button>
        }
      />
      
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
          style={{ zIndex: 1000 }}
        >
          {showContentPanel ? '✕' : '📚'}
        </button>
      )}
      
      <div 
        className={`flex flex-col md:flex-row gap-4 p-4 min-h-screen transition-colors duration-300 ${
          darkMode ? 'dark-bg' : 'light-bg'
        }`}
        style={{ minHeight: containerHeight }}
      >
        {/* Main content area - increased width for video */}
        <div className="flex-1 flex flex-col overflow-hidden md:w-[70%]">
          {/* Video container with responsive height */}
          <div className={`h-auto md:h-[65vh] rounded-xl shadow-sm overflow-hidden transition-colors duration-300 ${
            darkMode ? 'dark-card' : 'light-card'
          }`}>
            <VideoContent course={course} selectedVideo={selectedVideo} isMobile={isMobileView} />
          </div>
          
          {/* MoreInfo section with proper margin */}
          <div className="mt-4 flex-1">
            <MoreInfo 
              course={course} 
              selectedVideo={selectedVideo} 
              selectedSection={selectedSection} 
              isMobile={isMobileView}
            />
          </div>

          {/* Add the Certification Component here */}
          <CertificationCompo 
            course={course} 
            courseContent={course.courseContent}
            completedLectures={completedLectures}
            isMobile={isMobileView}
          />
        </div>
        
        {/* Course content panel - moved to right side */}
        <div 
          ref={contentPanelRef}
          className={`
          ${isMobileView ? 
            `fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 transform transition-transform duration-300 ease-in-out ${
              showContentPanel ? 'translate-x-0' : 'translate-x-full'
            } ${darkMode ? 'dark-card' : 'light-card'} shadow-xl` 
            : `w-full md:w-[30%] static ${darkMode ? 'dark-bg' : 'light-bg'}`
          } 
          flex-shrink-0 mx-auto md:mx-0 overflow-y-auto transition-colors duration-300
        `}
          style={isMobileView ? { height: '100%' } : {}}
        >
          {/* Close button for mobile */}
          {isMobileView && (
            <div className={`sticky top-0 z-10 p-3 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="font-semibold">Course Content</h3>
              <button 
                onClick={() => setShowContentPanel(false)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                    : 'bg-gray-100 text-gray-500 hover:text-gray-700'
                }`}
                aria-label="Close content panel"
              >
                ✕
              </button>
            </div>
          )}
          
          <CourseContent 
            courseContent={course.courseContent} 
            onVideoSelect={handleVideoSelect}
            selectedVideo={selectedVideo}
            completedLectures={completedLectures}
            onUpdateCompletedLectures={updateCompletedLectures}
            isMobile={isMobileView}
          />
        </div>

        {/* Overlay for mobile when content panel is open */}
        {isMobileView && showContentPanel && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setShowContentPanel(false)}
          />
        )}
      </div>
    </>
  );
};

export default InsideCourse;