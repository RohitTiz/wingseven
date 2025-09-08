import React from 'react';

const VideoContent = ({ course, selectedVideo, onVideoSelect }) => {
  // Default video if none is selected
  const defaultVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  
  // Get the video URL from the selected video or use default
  const videoUrl = selectedVideo?.videoUrl || defaultVideoUrl;
  
  return (
    <div className="bg-white rounded-lg">
      {/* Video Container - Full width with no padding */}
      <div className="w-full bg-black">
        <iframe
          src={videoUrl}
          title={selectedVideo?.title || "Course video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96"
        ></iframe>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <h1 className="text-xl md:text-2xl font-bold mb-2">{course?.title || "Course Title"}</h1>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          {selectedVideo?.description || course?.description || "Course description will appear here."}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-700 text-sm md:text-base">{course?.rating || "4.8"}</span>
            <span className="text-gray-500 ml-1 text-sm md:text-base">({course?.reviews || "1250"} reviews)</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="ml-1 text-gray-700 text-sm md:text-base">{course?.students || "12500"} students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;