import React, { useState, useEffect } from 'react'
import VideoContent from '../componentsdash/videoContent'
import MoreInfo from '../componentsdash/moreInfo'
import CourseContent from '../componentsdash/courseContent'
import Header from '../componentsdash/DashHeader'
import { coursesData } from '../data/coursesData'

export const CoursePage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Use the first course as an example for this page
  const course = coursesData[0];
  
  // Set the first video as default when component loads
  useEffect(() => {
    if (course?.courseContent?.length > 0) {
      const firstSection = course.courseContent[0];
      if (firstSection.lectures?.length > 0) {
        setSelectedVideo(firstSection.lectures[0]);
      }
    }
  }, [course]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsMobileMenuOpen(false); // Close mobile menu when video is selected
  };

  return (
    <>
      <Header showActions={true} />
      
      {/* Mobile Menu Toggle Button */}
      <button 
        className="md:hidden fixed top-20 right-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? 'Close Content' : 'Show Content'}
      </button>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 bg-[#F6F8FA] min-h-screen pt-20 md:pt-6">
        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl mx-auto w-full">
          <VideoContent course={course} selectedVideo={selectedVideo} />
          <MoreInfo course={course} />
        </div>
        
        {/* Sidebar/Course Content - Responsive */}
        <div className={`
          w-full md:w-[340px] flex-shrink-0 mx-auto
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'fixed inset-0 z-40 bg-white p-4 overflow-y-auto' 
            : 'hidden md:block'
          }
        `}>
          <CourseContent 
            courseContent={course.courseContent} 
            onVideoSelect={handleVideoSelect}
            selectedVideo={selectedVideo}
          />
          
          {/* Close button for mobile */}
          {isMobileMenuOpen && (
            <button 
              className="md:hidden fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          )}
        </div>
        
        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}