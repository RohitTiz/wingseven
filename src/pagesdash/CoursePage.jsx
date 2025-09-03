import React, { useState, useEffect } from 'react';
import VideoContent from '../componentsdash/videoContent';
import MoreInfo from '../componentsdash/moreInfo';
import CourseContent from '../componentsdash/courseContent';
import Header from '../componentsdash/DashHeader';
import { coursesData } from '../data/coursesData';

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
        className="sm:hidden fixed top-16 right-3 z-50 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? 'Close' : 'Content'}
      </button>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-3 sm:p-4 md:p-6 bg-[#F6F8FA] min-h-screen pt-16 sm:pt-20 md:pt-6">
        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl mx-auto w-full">
          <VideoContent course={course} selectedVideo={selectedVideo} />
          <MoreInfo course={course} />
        </div>

        {/* Sidebar/Course Content - Responsive */}
        <div
          className={`
            w-full sm:w-[300px] md:w-[340px] flex-shrink-0 mx-auto
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen
              ? 'fixed top-0 left-0 right-0 bottom-0 z-40 bg-white p-4 overflow-y-auto sm:static sm:block'
              : 'hidden sm:block'
            }
          `}
        >
          <CourseContent
            courseContent={course.courseContent}
            onVideoSelect={handleVideoSelect}
            selectedVideo={selectedVideo}
          />

          {/* Close button for mobile */}
          {isMobileMenuOpen && (
            <button
              className="sm:hidden fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          )}
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};