import { useNavigate } from "react-router-dom";

const DashHeader = ({ showActions = false }) => {
  const navigate = useNavigate();
  
  // Configuration object for better maintainability
  const config = {
    title: "Figma from A to Z",
    category: "UI / UX Design",
    meta: {
      lessons: 38,
      duration: "4h 30min",
      rating: 4.5,
      reviews: 126
    }
  };

  const handleGoBack = () => navigate(-1);

  return (
    <dashheader className="w-full px-2 sm:px-4 py-2 flex flex-col gap-1 rounded-2xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
        <div className="flex flex-row flex-wrap items-center gap-2">
          <button
            onClick={handleGoBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeftIcon />
          </button>
          
          <h1 className="font-semibold text-base sm:text-lg md:text-xl mr-2 truncate max-w-[140px] sm:max-w-none">
            {config.title}
          </h1>
          
          <span className="px-2 py-0.5 bg-gray-100 text-xs rounded font-medium text-gray-700 whitespace-nowrap">
            {config.category}
          </span>
        </div>
        
        {showActions && (
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <button 
              className="text-purple-700 font-medium hover:underline text-sm transition-colors duration-200"
              aria-label="Share course"
            >
              Share
            </button>
            <button 
              className="bg-purple-600 text-white font-semibold px-4 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-purple-700 transition-colors duration-200"
              aria-label="Enroll now"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-1 sm:ml-10 text-xs text-gray-600">
        <MetaItem 
          icon={<BookOpenIcon />}
          text={`${config.meta.lessons} lessons`}
        />
        <MetaItem 
          icon={<ClockIcon />}
          text={config.meta.duration}
        />
        <MetaItem 
          icon={<StarIcon />}
          text={`${config.meta.rating} (${config.meta.reviews} reviews)`}
          secondary
        />
      </div>
    </dashheader>
  );
};

// Extracted MetaItem component for better reusability and readability
const MetaItem = ({ icon, text, secondary = false }) => (
  <span className="flex items-center gap-1">
    {icon}
    {secondary ? (
      <>
        <span>{text.split(' ')[0]}</span>
        <span className="text-gray-400"> {text.split(' ').slice(1).join(' ')}</span>
      </>
    ) : (
      <span>{text}</span>
    )}
  </span>
);

// SVG Icon Components
const ArrowLeftIcon = () => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
  </svg>
);

const BookOpenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#7C3AED">
    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#7C3AED">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#7C3AED">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
);

export default DashHeader;