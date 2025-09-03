import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoContent from '../componentsdash/videoContent';
import MoreInfo from '../componentsdash/moreInfo';
import CourseContent from '../componentsdash/courseContent';
import Header from '../componentsdash/DashHeader';
import { coursesData } from '../data/coursesData';

const InsideCourse = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showContentPanel, setShowContentPanel] = useState(false);
  const course = coursesData.find(c => c.id === parseInt(id));

  // Check screen size and set mobile view state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
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
    return <div className="p-4 text-center">Course not found</div>;
  }

  return (
    <>
      <Header showActions={true} courseTitle={course.title} />
      
      {/* Mobile content toggle button */}
      {isMobileView && (
        <button 
          onClick={toggleContentPanel}
          className="fixed bottom-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg md:hidden"
          aria-label="Toggle course content"
        >
          {showContentPanel ? 'Hide Content' : 'Show Content'}
        </button>
      )}
      
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#F6F8FA] min-h-screen">
        {/* Main content area */}
        <div className="flex-1 w-full md:max-w-2xl mx-auto md:mx-0">
          <VideoContent course={course} selectedVideo={selectedVideo} />
          <MoreInfo 
            course={course} 
            selectedVideo={selectedVideo} 
            selectedSection={selectedSection} 
          />
        </div>
        
        {/* Course content panel */}
        <div className={`
          ${isMobileView ? 
            `fixed inset-0 z-30 bg-white transform transition-transform duration-300 ease-in-out ${showContentPanel ? 'translate-x-0' : 'translate-x-full'}` 
            : 'w-full md:w-[400px] lg:w-[500px] xl:w-[600px] static'} 
          flex-shrink-0 mx-auto md:mx-0 md:overflow-y-auto
        `}>
          {/* Close button for mobile */}
          {isMobileView && (
            <button 
              onClick={() => setShowContentPanel(false)}
              className="absolute top-4 right-4 z-40 text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white shadow-md"
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