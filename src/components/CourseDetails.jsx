import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activeTab, setActiveTab] = useState('about');
  
  // Get recommended courses
  const recommendedCourses = CoursesData.filter(
    c => c.category === course?.category && c.id !== course?.id
  ).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: -10 }
  };

  const sectionVariants = {
    open: { 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: { 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  if (!course) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto py-8 text-center"
      >
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <motion.button 
          onClick={() => navigate('/course')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Courses
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="w-full min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <div className="relative">
        <AuthSection />
        <div className="absolute top-full mt-2.5 left-4 sm:left-6">
          <motion.button 
            onClick={() => navigate('/course')}
            className="flex items-center bg-white hover:bg-gray-100 text-gray-800 text-sm font-medium py-1.5 px-3 border border-gray-300 rounded-md shadow-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="ml-1">Back</span>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full mx-auto pt-12 sm:pt-14 pb-16 px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Course Header */}
          <motion.div 
            className="mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl font-bold mb-2">{course.title}</motion.h1>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center mb-4">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 font-bold">{course.rating}</span>
                <span className="ml-1 text-gray-600">({course.reviews.length} ratings)</span>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {course.level || 'All Levels'}
              </span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-base sm:text-lg mb-4">{course.shortDescription}</motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center text-gray-600 text-xs sm:text-sm gap-y-1">
              <span>Created by {course.instructor}</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>💬 {course.languages}</span>
            </motion.div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="flex-1">
              {/* Video Preview */}
              <motion.div 
                className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6">Course Preview</h2>
                <div className="aspect-w-16 aspect-h-9 mb-4 px-4 sm:px-6">
                  {course.videoUrl ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <iframe 
                        src={getYouTubeEmbedUrl(course.videoUrl)}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Course Preview Video"
                      ></iframe>
                    </motion.div>
                  ) : (
                    <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Video preview not available</p>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-6 pb-4">
                  This preview gives you an overview of what you'll learn in this course.
                </p>
              </motion.div>

              {/* Navigation Tabs */}
              <motion.div 
                className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex overflow-x-auto scrollbar-hide">
                  <motion.button
                    onClick={() => setActiveTab('about')}
                    className={`px-4 py-3 font-medium text-sm sm:text-base whitespace-nowrap ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About Course
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('requirements')}
                    className={`px-4 py-3 font-medium text-sm sm:text-base whitespace-nowrap ${activeTab === 'requirements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Requirements
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-4 py-3 font-medium text-sm sm:text-base whitespace-nowrap ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reviews
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('faq')}
                    className={`px-4 py-3 font-medium text-sm sm:text-base whitespace-nowrap ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    FAQ
                  </motion.button>
                </div>
              </motion.div>

              {/* Tab Content */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {/* About Course */}
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div 
                        className="bg-white rounded-lg shadow-sm overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="px-4 sm:px-6 py-4">
                          <p className="mb-6 text-sm sm:text-base">{course.longDescription}</p>
                          
                          <h3 className="font-bold text-lg sm:text-xl mb-3">What you'll learn</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {course.learningOutcomes?.map((outcome, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-start text-sm sm:text-base"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                              >
                                <span className="text-green-500 mr-2">✓</span>
                                <span>{outcome}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Course Content */}
                      <motion.div 
                        className="bg-white rounded-lg shadow-sm overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6">Course content</h2>
                        <div className="text-gray-600 text-sm sm:text-base mb-4 px-4 sm:px-6">
                          {course.sections} sections • {course.lectures} lectures • {course.duration} total length
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden mx-4 sm:mx-6 mb-4">
                          {course.syllabus?.map((section, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-b-0">
                              <motion.div 
                                className="p-3 sm:p-4 bg-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
                                onClick={() => toggleSection(index)}
                                whileHover={{ scale: 1.01 }}
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
                              </motion.div>
                              <motion.div
                                initial={false}
                                animate={expandedSections[index] || showAllContent ? "open" : "closed"}
                                variants={sectionVariants}
                              >
                                {(expandedSections[index] || showAllContent) && (
                                  <div className="px-3 sm:px-4 py-2 bg-white">
                                    <ul className="space-y-2">
                                      {section.topics?.map((topic, i) => (
                                        <motion.li 
                                          key={i} 
                                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: i * 0.05 }}
                                        >
                                          <span className="flex items-center text-xs sm:text-sm">
                                            <span className="text-gray-400 mr-2">▶</span>
                                            {topic}
                                          </span>
                                          <span className="text-gray-500 text-xs">02:45</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </motion.div>
                            </div>
                          ))}
                        </div>
                        
                        <motion.button 
                          onClick={toggleAllContent}
                          className="mx-4 sm:mx-6 mb-4 flex items-center justify-center w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
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
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Requirements */}
                  {activeTab === 'requirements' && (
                    <motion.div
                      key="requirements"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div 
                        className="bg-white rounded-lg shadow-sm overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="px-4 sm:px-6 py-4">
                          <div className="mb-4">
                            <p className="text-sm sm:text-base mb-3">To get the most out of this course, you should have:</p>
                            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                              {course.requirements?.map((req, index) => (
                                <motion.li 
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                  {req}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <motion.div 
                            className="bg-gray-50 p-4 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="font-bold text-sm sm:text-base mb-2">Recommended Tools & Resources</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {[
                                { 
                                  icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png", 
                                  text: "Modern Web Browser" 
                                },
                                { 
                                  icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", 
                                  text: "Code Editor" 
                                },
                                { 
                                  icon: "https://cdn-icons-png.flaticon.com/512/888/888859.png", 
                                  text: "Computer with Internet" 
                                }
                              ].map((item, index) => (
                                <motion.div 
                                  key={index}
                                  className="flex flex-col items-center"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                  <img 
                                    src={item.icon} 
                                    alt={item.text} 
                                    className="h-12 w-12 object-contain mb-1"
                                  />
                                  <span className="text-xs text-center">{item.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Reviews */}
                  {activeTab === 'reviews' && (
                    <motion.div
                      key="reviews"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div 
                        className="bg-white rounded-lg shadow-sm overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="px-4 sm:px-6 py-4">
                          <div className="space-y-6 mb-6">
                            {course.reviews?.map((review, index) => (
                              <motion.div 
                                key={index} 
                                className="border-b border-gray-100 pb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                              >
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
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="bg-gray-50 p-4 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="font-bold text-sm sm:text-base mb-3">Write a Review</h3>
                            <form onSubmit={handleSubmitReview}>
                              <div className="flex items-center mb-3">
                                <span className="mr-2 text-sm sm:text-base">Rating:</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.button
                                      key={star}
                                      type="button"
                                      onClick={() => setUserRating(star)}
                                      className="text-2xl focus:outline-none"
                                      whileHover={{ scale: 1.2 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      {star <= userRating ? '★' : '☆'}
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                              <motion.textarea
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)}
                                placeholder="Share your experience with this course..."
                                className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-sm sm:text-base"
                                rows="3"
                                required
                                whileFocus={{ scale: 1.01 }}
                              />
                              <motion.button 
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Submit Review
                              </motion.button>
                            </form>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* FAQ */}
                  {activeTab === 'faq' && (
                    <motion.div
                      key="faq"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div 
                        className="bg-white rounded-lg shadow-sm overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="px-4 sm:px-6 py-4">
                          <div className="space-y-4 mb-6">
                            {course.faqs?.map((faq, index) => (
                              <motion.div 
                                key={index} 
                                className="border-b border-gray-100 pb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                              >
                                <h3 className="font-bold text-sm sm:text-base mb-2">{faq.question}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="bg-gray-50 p-4 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="font-bold text-sm sm:text-base mb-3">Have a question?</h3>
                            <form onSubmit={handleSubmitQuery}>
                              <motion.textarea
                                value={userQuery}
                                onChange={(e) => setUserQuery(e.target.value)}
                                placeholder="Write your question here..."
                                className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-sm sm:text-base"
                                rows="3"
                                required
                                whileFocus={{ scale: 1.01 }}
                              />
                              <motion.button 
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Submit Question
                              </motion.button>
                            </form>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Sidebar - Sticky on desktop */}
            <div className="lg:w-80 flex-shrink-0">
              <motion.div 
                className="sticky top-4 space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
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
                      <motion.button 
                        onClick={handleBuyNow}
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors text-sm sm:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Buy now
                      </motion.button>
                      <motion.button 
                        onClick={handleAddToCart}
                        className="w-full border-2 border-black hover:bg-gray-100 text-black font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors text-sm sm:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Add to cart
                      </motion.button>
                    </div>
                    
                    <div className="text-center text-xs sm:text-sm">
                      <span className="text-gray-600">7-Day Money-Back Guarantee</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm sm:text-base">This course includes:</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        {[
                          `${course.videoHours} hours on-demand video`,
                          `${course.articles} articles`,
                          "Access on mobile and TV",
                          "Certificate of completion"
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <span className="text-gray-500 mr-2">✓</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <motion.button 
                        onClick={handleGiftCourse}
                        className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Gift this course
                      </motion.button>
                      
                      {showCouponInput ? (
                        <motion.div 
                          className="flex gap-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter coupon code"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          />
                          <motion.button 
                            onClick={handleApplyCoupon}
                            className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Apply
                          </motion.button>
                        </motion.div>
                      ) : (
                        <motion.button 
                          onClick={handleApplyCoupon}
                          className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Apply Coupon
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Recommended Courses Section */}
        {recommendedCourses.length > 0 && (
          <motion.div 
            className="mt-16 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold mb-6 text-center">More {course.category} Courses You Might Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedCourses.map((recommendedCourse, index) => (
                  <motion.div
                    key={recommendedCourse.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard 
                      course={recommendedCourse} 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </motion.div>
  );
};

export default CourseDetails;