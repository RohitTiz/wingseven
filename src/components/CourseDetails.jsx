import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CoursesData from './CoursesData';
import AuthSection from './AuthSection';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = CoursesData.find(c => c.id === Number(id));

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <button 
          onClick={() => navigate('/course')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate('/checkout', { state: { course } });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Add AuthSection at the top */}
      <AuthSection />
      
      <button 
        onClick={() => navigate('/course')}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        ← Back to Courses
      </button>
      
      <div className="max-w-6xl mx-auto">
        {/* Course Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 font-bold">{course.rating}</span>
              <span className="ml-1 text-gray-600">({course.reviews} ratings)</span>
            </div>
            <span className="text-gray-600">{course.students} students</span>
          </div>
          <p className="text-lg mb-4">{course.shortDescription}</p>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Created by {course.instructor}</span>
            <span className="mx-2">•</span>
            <span>📍 Last updated {course.updatedDate}</span>
            <span className="mx-2">•</span>
            <span>💬 {course.languages}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Video Preview Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Course Preview</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  src={course.videoUrl}
                  className="w-full h-96 rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Course Preview Video"
                ></iframe>
              </div>
              <p className="text-gray-600">This preview gives you an overview of what you'll learn in this course.</p>
            </div>

            {/* What You'll Learn Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.learningOutcomes?.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Course content</h2>
              <div className="text-gray-600 mb-4">
                {course.sections} sections • {course.lectures} lectures • {course.duration} total length
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {course.syllabus?.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <div className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer">
                      <h3 className="font-bold">{section.week}: {section.title}</h3>
                      <span className="text-gray-500">{section.duration}</span>
                    </div>
                    <div className="px-4 py-2 bg-white">
                      <ul className="space-y-2">
                        {section.topics?.map((topic, i) => (
                          <li key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="flex items-center">
                              <span className="text-gray-400 mr-2">▶</span>
                              {topic}
                            </span>
                            <span className="text-gray-500 text-sm">02:45</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2">
                {course.requirements?.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Description Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="mb-4">{course.longDescription}</p>
              <button className="text-blue-600 font-medium">Show more</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-4 space-y-4">
              {/* Course Preview */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="p-4 border-b border-gray-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {course.price === 0 ? 'Free' : `₹${course.discountedPrice}`}
                    {course.originalPrice && (
                      <span className="ml-2 text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                    )}
                  </div>
                  {course.discountPercentage && (
                    <div className="text-green-600 font-medium mb-2">
                      {course.discountPercentage}% off
                    </div>
                  )}
                </div>
                
                <div className="p-4 space-y-4">
                  <button 
                    onClick={handleBuyNow}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Buy now
                  </button>
                  
                  <div className="text-center text-sm">
                    <span className="text-gray-600">30-Day Money-Back Guarantee</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">This course includes:</h3>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        {course.videoHours} hours on-demand video
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        {course.articles} articles
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        Access on mobile and TV
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
                      Gift this course
                    </button>
                    <button className="flex-1 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;