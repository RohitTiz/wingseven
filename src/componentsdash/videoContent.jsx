import React, { useRef, useState } from 'react';

const DUMMY_VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

const VideoContent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg mb-6 relative aspect-video bg-gray-200">
      <video
        ref={videoRef}
        src={DUMMY_VIDEO}
        className="w-full h-full object-cover"
        onPause={handlePause}
        onPlay={() => setIsPlaying(true)}
        controls={isPlaying}
        poster="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
      />
      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center focus:outline-none"
          aria-label="Play Video"
          onClick={handlePlay}
        >
          <span className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#7C3AED" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoContent;
