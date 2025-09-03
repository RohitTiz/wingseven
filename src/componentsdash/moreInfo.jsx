// componentsdash/moreInfo.jsx
import React, { useState } from 'react';

const MoreInfo = ({ course, selectedVideo, selectedSection }) => {
  const [activeTab, setActiveTab] = useState('notes');
  
  // Default content when no specific video is selected
  const defaultContent = {
    notes: "Welcome to the course! Here you'll find all the resources and materials needed to succeed.",
    resources: [],
    quiz: null
  };

  // Get content based on selected video or use default
  const getContent = () => {
    if (!selectedVideo) return defaultContent;
    
    // In a real app, you would fetch this data based on the selectedVideo
    // For now, using mock data
    return {
      notes: selectedVideo.pdf ? `Notes for ${selectedVideo.title}` : "No notes available for this lecture.",
      resources: selectedVideo.pdf ? [selectedVideo.pdf] : [],
      quiz: {
        title: `Quiz: ${selectedVideo.title}`,
        questions: [
          {
            question: "What did you learn in this lecture?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: 0
          }
        ]
      }
    };
  };

  const content = getContent();

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mt-4 md:rounded-2xl md:shadow-xl md:p-6 md:mt-6">
      {/* Scrollable tab navigation for mobile */}
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar mb-4">
        <div className="inline-flex border-b border-gray-200 min-w-full">
          <button
            className={`py-3 px-4 font-medium text-sm min-w-max ${activeTab === 'notes' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('notes')}
          >
            Notes
          </button>
          <button
            className={`py-3 px-4 font-medium text-sm min-w-max ${activeTab === 'resources' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button
            className={`py-3 px-4 font-medium text-sm min-w-max ${activeTab === 'quiz' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('quiz')}
          >
            Quiz
          </button>
          <button
            className={`py-3 px-4 font-medium text-sm min-w-max ${activeTab === 'schedule' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
        </div>
      </div>

      <div className="mt-2 md:mt-4">
        {activeTab === 'notes' && (
          <div>
            <h3 className="font-bold text-base mb-2 md:text-lg">Lecture Notes</h3>
            <p className="text-gray-700 text-sm md:text-base">{content.notes}</p>
          </div>
        )}

        {activeTab === 'resources' && (
          <div>
            <h3 className="font-bold text-base mb-2 md:text-lg">Resources</h3>
            {content.resources.length > 0 ? (
              <ul className="space-y-2">
                {content.resources.map((resource, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href={resource} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline text-sm md:text-base truncate"
                    >
                      {resource.split('/').pop()}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm md:text-base">No resources available for this lecture.</p>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <h3 className="font-bold text-base mb-2 md:text-lg">Quiz</h3>
            {content.quiz ? (
              <div>
                <h4 className="font-medium mb-3 text-sm md:text-base">{content.quiz.title}</h4>
                <button className="bg-purple-600 text-white px-4 py-3 rounded-lg w-full md:w-auto">
                  Start Quiz
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm md:text-base">No quiz available for this lecture.</p>
            )}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div>
            <h3 className="font-bold text-base mb-2 md:text-lg">Course Schedule</h3>
            {course.liveSchedule ? (
              <div className="space-y-2">
                <p className="text-gray-700 text-sm md:text-base"><strong>Regular Schedule:</strong> {course.liveSchedule}</p>
                <p className="text-gray-700 text-sm md:text-base"><strong>Next Session:</strong> {course.upcomingSession}</p>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-sm md:text-base">Self-Paced Learning</h4>
                <p className="text-gray-600 text-sm md:text-base">This is a self-paced course. You can complete it on your own schedule.</p>
                <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500 md:text-sm">Total Duration</p>
                    <p className="font-medium text-sm md:text-base">{course.duration}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500 md:text-sm">Lessons</p>
                    <p className="font-medium text-sm md:text-base">{course.lessons}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default MoreInfo;