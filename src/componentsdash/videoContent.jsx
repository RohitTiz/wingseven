import React from 'react';

const VideoContent = ({ selectedVideo }) => {
  // Default video if none is selected
  const defaultVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
     
  // Get the video URL from the selected video or use default
  const videoUrl = selectedVideo?.videoUrl || defaultVideoUrl;
     
  return (
    <div className="w-full bg-transparent p-4 mb-12">
      <div className="w-full bg-black rounded-lg overflow-hidden relative">
        {/* Aspect ratio container to maintain 16:9 ratio */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={videoUrl}
            title={selectedVideo?.title || "Course video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;