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
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'notes' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('notes')}
        >
          Notes
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'resources' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'quiz' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm ${activeTab === 'schedule' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('schedule')}
        >
          Schedule
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'notes' && (
          <div>
            <h3 className="font-bold text-lg mb-2">Lecture Notes</h3>
            <p className="text-gray-700">{content.notes}</p>
          </div>
        )}

        {activeTab === 'resources' && (
          <div>
            <h3 className="font-bold text-lg mb-2">Resources</h3>
            {content.resources.length > 0 ? (
              <ul className="list-disc list-inside">
                {content.resources.map((resource, index) => (
                  <li key={index} className="text-purple-600 hover:underline">
                    <a href={resource} target="_blank" rel="noopener noreferrer">
                      {resource.split('/').pop()}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No resources available for this lecture.</p>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <h3 className="font-bold text-lg mb-2">Quiz</h3>
            {content.quiz ? (
              <div>
                <h4 className="font-medium mb-2">{content.quiz.title}</h4>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  Start Quiz
                </button>
              </div>
            ) : (
              <p className="text-gray-500">No quiz available for this lecture.</p>
            )}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div>
            <h3 className="font-bold text-lg mb-2">Course Schedule</h3>
            {course.liveSchedule ? (
              <div>
                <p className="text-gray-700"><strong>Regular Schedule:</strong> {course.liveSchedule}</p>
                <p className="text-gray-700"><strong>Next Session:</strong> {course.upcomingSession}</p>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Self-Paced Learning</h4>
                <p className="text-gray-600">This is a self-paced course. You can complete it on your own schedule.</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Total Duration</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Lessons</p>
                    <p className="font-medium">{course.lessons}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;