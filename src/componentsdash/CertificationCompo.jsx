import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const CertificationCompo = ({ course, courseContent, completedLectures }) => {
  const { darkMode } = useDarkMode();
  const [showCertificate, setShowCertificate] = useState(false);
  const [isCourseComplete, setIsCourseComplete] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // Calculate completion status and percentage
  useEffect(() => {
    if (!courseContent || !completedLectures) return;
    
    // Calculate total number of lectures
    const totalLectures = courseContent.reduce((total, section) => 
      total + section.lectures.length, 0);
    
    // Calculate completed lectures count
    const completedCount = Object.values(completedLectures).filter(Boolean).length;
    
    // Calculate completion percentage
    const percentage = totalLectures > 0 ? 
      Math.round((completedCount / totalLectures) * 100) : 0;
    
    setCompletionPercentage(percentage);
    setIsCourseComplete(percentage === 100);
  }, [courseContent, completedLectures]);

  const handleViewCertificate = () => {
    if (isCourseComplete) {
      setShowCertificate(true);
    }
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  // Certificate data
  const certificateData = {
    courseTitle: course.title,
    studentName: "John Doe", // This would typically come from user data
    completionDate: new Date().toLocaleDateString(),
    instructor: course.instructor,
    certificateId: `CERT-${course.id}-${Date.now()}`,
  };

  return (
    <>
      <div className={`mt-8 p-6 rounded-xl shadow-sm transition-colors duration-300 ${
        darkMode ? 'dark-card' : 'light-card'
      }`}>
        <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Course Certificate
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Certificate of Completion
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {isCourseComplete 
                  ? 'Congratulations! You have completed the course.' 
                  : 'Complete all course content to receive your certificate'}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleViewCertificate}
            disabled={!isCourseComplete}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
              isCourseComplete
                ? darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isCourseComplete ? 'View Certificate' : 'Complete Course First'}
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Progress</span>
            <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {completionPercentage}% Complete
            </span>
          </div>
          <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className="h-2 rounded-full bg-blue-500" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Certificate Modal - Only shown if course is complete */}
      {showCertificate && isCourseComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div className={`relative w-full max-w-4xl rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <button
              onClick={handleCloseCertificate}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Certificate Design */}
            <div className={`border-2 ${darkMode ? 'border-yellow-500' : 'border-blue-500'} p-8 rounded-lg text-center`}>
              <div className="mb-2">
                <svg className="w-16 h-16 mx-auto text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Certificate of Completion
              </h1>
              
              <p className="text-gray-500 mb-6">This certifies that</p>
              
              <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {certificateData.studentName}
              </h2>
              
              <p className="text-gray-500 mb-4">has successfully completed the course</p>
              
              <h3 className={`text-xl font-medium mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {certificateData.courseTitle}
              </h3>
              
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-300">
                <div className="text-left">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {certificateData.completionDate}
                  </p>
                  <p className="text-gray-500 text-sm">Date</p>
                </div>
                
                <div className="text-right">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {certificateData.instructor}
                  </p>
                  <p className="text-gray-500 text-sm">Instructor</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-300">
                <p className="text-gray-500 text-sm">
                  Certificate ID: {certificateData.certificateId}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                onClick={() => window.print()}
                className={`px-6 py-2 rounded-lg font-medium mr-4 transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Print Certificate
              </button>
              
              <button
                onClick={handleCloseCertificate}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationCompo;