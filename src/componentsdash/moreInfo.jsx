// componentsdash/moreInfo.jsx
import React, { useState } from 'react';

const MoreInfo = ({ course, selectedVideo, selectedSection }) => {
  const [activeTab, setActiveTab] = useState('about');
  
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
            className={`py-3 px-4 font-medium text-sm min-w-max ${activeTab === 'about' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
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
          <button
            className={`py-3 px-4 font-medium text-sm min-w-max ${activeTab === 'certification' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('certification')}
          >
            Certification
          </button>
        </div>
      </div>

      <div className="mt-2 md:mt-4">
        {activeTab === 'about' && (
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">About Course</h3>
            <div className="space-y-6">
              {/* Course Description */}
              <div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {course.description}
                </p>
                {course.type === 'live' && course.liveSchedule && (
                  <p className="text-gray-700 text-base leading-relaxed">
                    Perfect for developers looking to advance their React skills and learn industry best practices.
                  </p>
                )}
              </div>

              {/* What You'll Learn Section */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">What You'll Learn</h4>
                <div className="grid gap-2">
                  {course.whatYouLearn && course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Section */}
              {course.requirements && course.requirements.length > 0 && (
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Requirements</h4>
                  <div className="grid gap-2">
                    {course.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-base">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                  <p className="font-bold text-lg text-gray-900">{course.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Lessons</p>
                  <p className="font-bold text-lg text-gray-900">{course.lessons}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Students</p>
                  <p className="font-bold text-lg text-gray-900">{course.students?.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Level</p>
                  <p className="font-bold text-lg text-gray-900">{course.level}</p>
                </div>
              </div>
            </div>
          </div>
        )}

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

        {activeTab === 'certification' && (
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Certification</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h4 className="font-bold text-lg text-gray-900">Certificate of Completion</h4>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Earn a certificate upon successful completion of this course. Our certificates are recognized by industry professionals and can be added to your LinkedIn profile or resume.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-gray-900 mb-2">What's Included</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Digital certificate</li>
                      <li>• Verification link</li>
                      <li>• LinkedIn integration</li>
                      <li>• Instructor signature</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-gray-900 mb-2">Requirements</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Complete all lessons</li>
                      <li>• Pass all quizzes (80%+)</li>
                      <li>• Submit final project</li>
                      <li>• Course evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Course Progress</span>
                  <span className="text-sm text-gray-500">0% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Complete the course to unlock your certificate</p>
              </div>

              {/* Certificate preview */}
              <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <h5 className="font-medium text-gray-900 mb-2">Your Certificate Preview</h5>
                <p className="text-gray-500 text-sm">Complete the course to see your personalized certificate here</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Remove any remaining scrollbar styles if needed */
      `}</style>
    </div>
  );
};

export default MoreInfo;