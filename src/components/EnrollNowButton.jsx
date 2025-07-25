import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollNowButton = ({courseId}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <button 
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
    >
      Enroll Now
    </button>
  );
};

export default EnrollNowButton;