import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const MoreInfo = ({ course, selectedVideo, selectedSection }) => {
  const { darkMode } = useDarkMode();
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
    <div className={`${darkMode ? 'dark-bg' : 'light-bg'} rounded-xl shadow-sm p-4 md:rounded-2xl md:shadow-xl md:p-6 transition-colors duration-300`}>
      {/* Tab Navigation */}
      <div className={`border-b ${darkMode ? 'dark-border' : 'light-border'} mb-6`}>
        <div className="flex space-x-8 overflow-x-auto">
          <button
            className={`py-3 px-1 font-medium text-sm whitespace-nowrap border-b-2 ${
              activeTab === 'about' 
                ? 'text-purple-600 border-purple-600' 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} border-transparent`
            } transition-colors duration-300`}
            onClick={() => setActiveTab('about')}
          >
            Overview
          </button>
          <button
            className={`py-3 px-1 font-medium text-sm whitespace-nowrap border-b-2 ${
              activeTab === 'author' 
                ? 'text-purple-600 border-purple-600' 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} border-transparent`
            } transition-colors duration-300`}
            onClick={() => setActiveTab('author')}
          >
            Author
          </button>
          <button
            className={`py-3 px-1 font-medium text-sm whitespace-nowrap border-b-2 ${
              activeTab === 'faq' 
                ? 'text-purple-600 border-purple-600' 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} border-transparent`
            } transition-colors duration-300`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
          <button
            className={`py-3 px-1 font-medium text-sm whitespace-nowrap border-b-2 ${
              activeTab === 'announcements' 
                ? 'text-purple-600 border-purple-600' 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} border-transparent`
            } transition-colors duration-300`}
            onClick={() => setActiveTab('announcements')}
          >
            Announcements
          </button>
          <button
            className={`py-3 px-1 font-medium text-sm whitespace-nowrap border-b-2 ${
              activeTab === 'reviews' 
                ? 'text-purple-600 border-purple-600' 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} border-transparent`
            } transition-colors duration-300`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'about' && (
          <div className="space-y-8">
            {/* About Course Section */}
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-4`}>About Course</h3>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed space-y-4`}>
                <p>
                  {course?.description || "Unlock the power of Figma, the leading collaborative design tool, with our comprehensive online course. Whether you're a novice or looking to enhance your skills this course willguide you through Figma's robust features and workflows."}
                </p>
                <p>
                  {course?.additionalDescription || "Perfect for Ui/UX designers, product managers, and anyone interested in modern design tools. Join us to elevate your design skills and boost your productivity with Figma!"}
                </p>
              </div>
            </div>

            {/* What You'll Learn Section */}
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-6`}>What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Setting up the environment</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Understand HTML Programming</span>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Advanced HTML Practices</span>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Code HTML</span>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Build a portfolio website</span>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Start building beautiful websites</span>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Responsive Designs</span>
                </div>

                {course?.whatYouLearn && course.whatYouLearn.slice(7).map((item, index) => (
                  <div key={index + 7} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Section */}
            {course?.requirements && course.requirements.length > 0 && (
              <div>
                <h4 className={`text-xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-4`}>Requirements</h4>
                <div className="grid gap-3">
                  {course.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Course Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t ${darkMode ? 'dark-border' : 'light-border'}`}>
              <div className={`${darkMode ? 'dark-card' : 'light-card'} p-4 rounded-lg text-center`}>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide font-medium`}>Duration</p>
                <p className={`font-bold text-lg ${darkMode ? 'light-text' : 'dark-text'} mt-1`}>{course?.duration || "8 weeks"}</p>
              </div>
              <div className={`${darkMode ? 'dark-card' : 'light-card'} p-4 rounded-lg text-center`}>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide font-medium`}>Lessons</p>
                <p className={`font-bold text-lg ${darkMode ? 'light-text' : 'dark-text'} mt-1`}>{course?.lessons || "32"}</p>
              </div>
              <div className={`${darkMode ? 'dark-card' : 'light-card'} p-4 rounded-lg text-center`}>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide font-medium`}>Students</p>
                <p className={`font-bold text-lg ${darkMode ? 'light-text' : 'dark-text'} mt-1`}>{course?.students?.toLocaleString() || "1,234"}</p>
              </div>
              <div className={`${darkMode ? 'dark-card' : 'light-card'} p-4 rounded-lg text-center`}>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide font-medium`}>Level</p>
                <p className={`font-bold text-lg ${darkMode ? 'light-text' : 'dark-text'} mt-1`}>{course?.level || "Beginner"}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'author' && (
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-4`}>About the Author</h3>
            <div className={`${darkMode ? 'dark-card' : 'light-card'} p-6 rounded-lg`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${darkMode ? 'light-text' : 'dark-text'}`}>{course?.instructor || "John Smith"}</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Senior UI/UX Designer</p>
                </div>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                With over 8 years of experience in design and development, our instructor has worked with leading tech companies and has trained thousands of students worldwide.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-6`}>Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className={`border ${darkMode ? 'dark-border' : 'light-border'} rounded-lg p-4`}>
                <h4 className={`font-medium ${darkMode ? 'light-text' : 'dark-text'} mb-2`}>How long do I have access to the course?</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>You have lifetime access to the course materials once enrolled.</p>
              </div>
              <div className={`border ${darkMode ? 'dark-border' : 'light-border'} rounded-lg p-4`}>
                <h4 className={`font-medium ${darkMode ? 'light-text' : 'dark-text'} mb-2`}>Is this course suitable for beginners?</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Yes, this course is designed for all skill levels, including complete beginners.</p>
              </div>
              <div className={`border ${darkMode ? 'dark-border' : 'light-border'} rounded-lg p-4`}>
                <h4 className={`font-medium ${darkMode ? 'light-text' : 'dark-text'} mb-2`}>Do I get a certificate upon completion?</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Yes, you will receive a certificate of completion that you can add to your portfolio.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-6`}>Course Announcements</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div>
                    <h4 className="font-medium text-blue-900">Course Update</h4>
                    <p className="text-blue-700 text-sm mt-1">New lessons have been added to Section 3. Check them out!</p>
                    <p className="text-blue-600 text-xs mt-2">Posted 2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <div className="flex">
                  <div>
                    <h4 className="font-medium text-green-900">Welcome!</h4>
                    <p className="text-green-700 text-sm mt-1">Welcome to the course! We're excited to have you join us.</p>
                    <p className="text-green-600 text-xs mt-2">Posted 1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'light-text' : 'dark-text'} mb-6`}>Student Reviews</h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-medium">A</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className={`font-medium ${darkMode ? 'light-text' : 'dark-text'}`}>Alex Johnson</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Great course! Very comprehensive and well-structured. The instructor explains concepts clearly.</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} text-sm mt-2`}>2 weeks ago</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-medium">S</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className={`font-medium ${darkMode ? 'light-text' : 'dark-text'}`}>Sarah Wilson</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Good content overall. Could use more practical examples, but definitely worth taking.</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} text-sm mt-2`}>1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;