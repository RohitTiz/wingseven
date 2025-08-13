import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CoursesData from './CoursesData';
import AuthSection from './AuthSection';
import Footer from './Footer';
import CourseCard from './CourseCard';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = CoursesData.find(c => c.id === Number(id));
  const [expandedSections, setExpandedSections] = useState({});
  const [showAllContent, setShowAllContent] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);
  
  // Get recommended courses (same category, excluding current course)
  const recommendedCourses = CoursesData.filter(
    c => c.category === course?.category && c.id !== course?.id
  ).slice(0, 4); // Show max 4 recommended courses

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleAllContent = () => {
    setShowAllContent(!showAllContent);
  };

  const handleBuyNow = () => {
    navigate('/checkout', { state: { course } });
  };

  const handleAddToCart = () => {
    alert(`${course.title} has been added to your cart!`);
  };

  const handleGiftCourse = () => {
    alert('Gift course functionality will be implemented here');
  };

  const handleApplyCoupon = () => {
    if (showCouponInput) {
      alert(`Applying coupon code: ${couponCode}`);
    } else {
      setShowCouponInput(true);
    }
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    alert(`Your query has been submitted: ${userQuery}`);
    setUserQuery('');
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReview = {
      name: "Current User",
      rating: userRating,
      comment: userReview,
      date: new Date().toISOString().split('T')[0]
    };
    alert('Thank you for your review!');
    setUserReview('');
    setUserRating(0);
  };

  const handleDownloadBrochure = () => {
    if (course?.brochureUrl) {
      const link = document.createElement('a');
      link.href = course.brochureUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = `${course.title.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Brochure not available for this course');
    }
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };

  if (!course) {
    return (
      <div className="mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <button 
          onClick={() => navigate('/course')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="relative">
        <AuthSection />
        <div className="absolute top-full mt-2.5 left-4 sm:left-6">
          <button 
            onClick={() => navigate('/course')}
            className="flex items-center bg-white hover:bg-gray-100 text-gray-800 text-sm font-medium py-1.5 px-3 border border-gray-300 rounded-md shadow-sm transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="ml-1">Back</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full mx-auto pt-12 sm:pt-14 pb-16 px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Course Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{course.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 font-bold">{course.rating}</span>
                <span className="ml-1 text-gray-600">({course.reviews.length} ratings)</span>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {course.level || 'All Levels'}
              </span>
            </div>
            <p className="text-base sm:text-lg mb-4">{course.shortDescription}</p>
            <div className="flex flex-wrap items-center text-gray-600 text-xs sm:text-sm gap-y-1">
              <span>Created by {course.instructor}</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>💬 {course.languages}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="flex-1">
              {/* Video Preview */}
              <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6">Course Preview</h2>
                <div className="aspect-w-16 aspect-h-9 mb-4 px-4 sm:px-6">
                  {course.videoUrl ? (
                    <iframe 
                      src={getYouTubeEmbedUrl(course.videoUrl)}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Course Preview Video"
                    ></iframe>
                  ) : (
                    <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Video preview not available</p>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-6 pb-4">
                  This preview gives you an overview of what you'll learn in this course.
                </p>
              </div>

              {/* All Content Sections */}
              <div className="space-y-6">
                {/* About Course */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6 pt-4">About Course</h2>
                  <div className="px-4 sm:px-6 pb-4">
                    <p className="mb-6 text-sm sm:text-base">{course.longDescription}</p>
                    
                    <h3 className="font-bold text-lg sm:text-xl mb-3">What you'll learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.learningOutcomes?.map((outcome, index) => (
                        <div key={index} className="flex items-start text-sm sm:text-base">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start px-4 sm:px-6 pt-4">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Course content</h2>
                    {course.brochureUrl && (
                      <button 
                        onClick={handleDownloadBrochure}
                        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base mb-4 sm:mb-0"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download Brochure
                      </button>
                    )}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base mb-4 px-4 sm:px-6">
                    {course.sections} sections • {course.lectures} lectures • {course.duration} total length
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden mx-4 sm:mx-6 mb-4">
                    {course.syllabus?.map((section, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0">
                        <div 
                          className="p-3 sm:p-4 bg-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
                          onClick={() => toggleSection(index)}
                        >
                          <div className="flex items-center">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 transform transition-transform ${expandedSections[index] ? 'rotate-90' : ''}`} 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <h3 className="font-bold text-sm sm:text-base">{section.week}: {section.title}</h3>
                          </div>
                          <span className="text-gray-500 text-xs sm:text-sm">{section.duration}</span>
                        </div>
                        {(expandedSections[index] || showAllContent) && (
                          <div className="px-3 sm:px-4 py-2 bg-white">
                            <ul className="space-y-2">
                              {section.topics?.map((topic, i) => (
                                <li key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                  <span className="flex items-center text-xs sm:text-sm">
                                    <span className="text-gray-400 mr-2">▶</span>
                                    {topic}
                                  </span>
                                  <span className="text-gray-500 text-xs">02:45</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={toggleAllContent}
                    className="mx-4 sm:mx-6 mb-4 flex items-center justify-center w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    {showAllContent ? 'Show Less' : 'Show All Content'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 sm:h-5 sm:w-5 ml-2 transform transition-transform ${showAllContent ? 'rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6 pt-4">Requirements</h2>
                  <div className="px-4 sm:px-6 pb-4">
                    <div className="mb-4">
                      <p className="text-sm sm:text-base mb-3">To get the most out of this course, you should have:</p>
                      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                        {course.requirements?.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-sm sm:text-base mb-2">Recommended Tools & Resources</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                          <img 
                            src="https://cdn-icons-png.flaticon.com/512/732/732212.png" 
                            alt="Web Browser" 
                            className="h-12 w-12 object-contain mb-1"
                          />
                          <span className="text-xs text-center">Modern Web Browser</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <img 
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" 
                            alt="VS Code" 
                            className="h-12 w-12 object-contain mb-1"
                          />
                          <span className="text-xs text-center">Code Editor</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <img 
                            src="https://cdn-icons-png.flaticon.com/512/888/888859.png" 
                            alt="Computer" 
                            className="h-12 w-12 object-contain mb-1"
                          />
                          <span className="text-xs text-center">Computer with Internet</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6 pt-4">Reviews</h2>
                  <div className="px-4 sm:px-6 pb-4">
                    <div className="space-y-6 mb-6">
                      {course.reviews?.map((review, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6">
                          <div className="flex items-center mb-2">
                            <div className="flex items-center mr-3">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                              ))}
                            </div>
                            <span className="font-medium text-sm sm:text-base">{review.name}</span>
                            <span className="text-gray-500 text-xs sm:text-sm ml-auto">{review.date}</span>
                          </div>
                          <p className="text-gray-600 text-sm sm:text-base">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-sm sm:text-base mb-3">Write a Review</h3>
                      <form onSubmit={handleSubmitReview}>
                        <div className="flex items-center mb-3">
                          <span className="mr-2 text-sm sm:text-base">Rating:</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setUserRating(star)}
                                className="text-2xl focus:outline-none"
                              >
                                {star <= userRating ? '★' : '☆'}
                              </button>
                            ))}
                          </div>
                        </div>
                        <textarea
                          value={userReview}
                          onChange={(e) => setUserReview(e.target.value)}
                          placeholder="Share your experience with this course..."
                          className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-sm sm:text-base"
                          rows="3"
                          required
                        />
                        <button 
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                        >
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Sticky on desktop */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-4 space-y-4">
                {/* Purchase Box */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  {/* Price Display Section */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        {course.price === 0 ? 'Free' : `₹${course.price}`}
                      </span>
                      {course.price !== 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{Math.round(course.price * 1.2)}
                        </span>
                      )}
                    </div>
                    {course.price !== 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Limited time offer
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={handleBuyNow}
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors text-sm sm:text-base"
                      >
                        Buy now
                      </button>
                      <button 
                        onClick={handleAddToCart}
                        className="w-full border-2 border-black hover:bg-gray-100 text-black font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors text-sm sm:text-base"
                      >
                        Add to cart
                      </button>
                    </div>
                    
                    <div className="text-center text-xs sm:text-sm">
                      <span className="text-gray-600">7-Day Money-Back Guarantee</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm sm:text-base">This course includes:</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
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
                    
                    <div className="space-y-2">
                      <button 
                        onClick={handleGiftCourse}
                        className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        Share this course
                      </button>
                      
                      {showCouponInput ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter coupon code"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          />
                          <button 
                            onClick={handleApplyCoupon}
                            className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                      ) : (
                        <button >
                          
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recommended Courses - Full Size with Scroll */}
                {recommendedCourses.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-bold text-lg">Courses you might like</h3>
                    </div>
                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                      <div className="grid grid-cols-1 gap-4 p-4">
                        {recommendedCourses.map((recommendedCourse) => (
                          <CourseCard 
                            key={recommendedCourse.id}
                            course={recommendedCourse}
                            onClick={() => navigate(`/courses/${recommendedCourse.id}`)}
                            compact={true}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetails;