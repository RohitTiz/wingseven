import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegClock, FaRegStar } from "react-icons/fa";
import { PiBookOpenTextLight } from "react-icons/pi";

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
            <FaArrowLeft size={22} />
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
          icon={<PiBookOpenTextLight size={16} className="text-purple-600" />}
          text={`${config.meta.lessons} lessons`}
        />
        <MetaItem 
          icon={<FaRegClock size={14} className="text-purple-600" />}
          text={config.meta.duration}
        />
        <MetaItem 
          icon={<FaRegStar size={14} className="text-purple-600" />}
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

export default DashHeader;