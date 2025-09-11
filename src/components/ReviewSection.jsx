// components/ReviewSection.jsx
import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function ReviewSection({ articleId }) {
  const { darkMode } = useDarkMode();
  const [reviews, setReviews] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      rating: 5, 
      comment: 'This article completely changed my perspective on the topic. The examples were practical and easy to follow. Will definitely be implementing these strategies!', 
      date: '2023-10-15',
      avatar: 'JD'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      rating: 4, 
      comment: 'Helpful content with clear explanations. The section about best practices was particularly valuable. Would have loved to see more code examples though.', 
      date: '2023-10-14',
      avatar: 'JS'
    },
    { 
      id: 3, 
      name: 'Alex Johnson', 
      rating: 5, 
      comment: 'As a senior developer, I found this article to be exceptionally well-researched. The comparisons between different approaches saved me hours of experimentation.', 
      date: '2023-10-12',
      avatar: 'AJ'
    }
  ]);
  
  const [newReview, setNewReview] = useState({ 
    name: '', 
    rating: 0, 
    comment: '',
    hoverRating: 0 
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating === 0) {
      alert('Please select a rating');
      return;
    }
    
    const review = {
      id: reviews.length + 1,
      ...newReview,
      avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 0, comment: '', hoverRating: 0 });
    setIsExpanded(false);
  };

  const handleRatingHover = (rating) => {
    setNewReview({...newReview, hoverRating: rating});
  };

  const handleRatingLeave = () => {
    setNewReview({...newReview, hoverRating: 0});
  };

  return (
    <div className={`rounded-lg p-4 sm:p-6 border shadow-sm mt-8 sm:mt-12 transition-colors duration-300 ${
      darkMode 
        ? 'dark-bg dark-border text-light-text' 
        : 'bg-white border-gray-200 text-dark-text'
    }`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
        <h3 className={`text-xl sm:text-2xl font-serif ${
          darkMode ? 'text-light-text' : 'text-gray-900'
        }`}>Reviews ({reviews.length})</h3>
        <div className="flex items-center">
          <div className="text-amber-500 text-lg sm:text-xl mr-2">
            ★★★★★
          </div>
          <span className={`font-medium text-sm sm:text-base ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>4.8 out of 5</span>
        </div>
      </div>
      
      {/* Review Form Toggle */}
      {!isExpanded ? (
        <div 
          className={`mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg border cursor-pointer transition-colors duration-300 ${
            darkMode 
              ? 'bg-blue-900/20 border-blue-700/30 hover:bg-blue-900/30' 
              : 'bg-blue-50 border-blue-100 hover:bg-blue-100'
          }`} 
          onClick={() => setIsExpanded(true)}
        >
          <div className={`flex items-center ${
            darkMode ? 'text-blue-300' : 'text-blue-700'
          }`}>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
            </svg>
            <span className="font-medium text-sm sm:text-base">Write a review</span>
          </div>
        </div>
      ) : (
        /* Expanded Review Form */
        <form onSubmit={handleSubmit} className={`mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <h4 className={`text-base sm:text-lg font-medium mb-4 sm:mb-6 ${
            darkMode ? 'text-light-text' : 'text-gray-900'
          }`}>Share your experience</h4>
          
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Your Name</label>
              <input 
                type="text" 
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-light-text placeholder-gray-400' 
                    : 'border-gray-300 text-dark-text placeholder-gray-500'
                }`}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Your Rating</label>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex space-x-1 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating: star})}
                      onMouseEnter={() => handleRatingHover(star)}
                      onMouseLeave={handleRatingLeave}
                      className="text-xl sm:text-2xl focus:outline-none transition-transform hover:scale-110"
                    >
                      <span className={`${star <= (newReview.hoverRating || newReview.rating) ? 'text-amber-500' : 'text-gray-300'}`}>
                        ★
                      </span>
                    </button>
                  ))}
                </div>
                <span className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {newReview.rating > 0 ? `${newReview.rating}/5` : 'Rate this'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Your Review</label>
            <textarea 
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              rows="3"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-light-text placeholder-gray-400' 
                  : 'border-gray-300 text-dark-text placeholder-gray-500'
              }`}
              placeholder="Share your thoughts about this article..."
              required
            ></textarea>
          </div>
          
          <div className="flex flex-col-reverse sm:flex-row justify-end sm:space-x-3 gap-3 sm:gap-0">
            <button 
              type="button" 
              onClick={() => setIsExpanded(false)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 border rounded-lg transition-colors text-sm sm:text-base ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Submit Review
            </button>
          </div>
        </form>
      )}
      
      {/* Reviews List */}
      <div className="space-y-6 sm:space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className={`border-b pb-6 sm:pb-8 last:border-0 last:pb-0 ${
            darkMode ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <div className="flex items-start mb-3 sm:mb-4">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 ${
                darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
              }`}>
                <span className={`font-medium text-xs sm:text-sm ${
                  darkMode ? 'text-blue-300' : 'text-blue-800'
                }`}>{review.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                  <h4 className={`font-medium text-sm sm:text-base truncate ${
                    darkMode ? 'text-light-text' : 'text-gray-900'
                  }`}>{review.name}</h4>
                  <span className={`text-xs sm:text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{review.date}</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="text-amber-500 text-sm sm:text-base mr-2">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
            </div>
            <p className={`leading-relaxed text-sm sm:text-base pl-0 sm:pl-11 sm:pl-12 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>{review.comment}</p>
            
            <div className="flex items-center mt-3 sm:mt-4 pl-0 sm:pl-11">
              <button className={`flex items-center text-xs sm:text-sm mr-3 sm:mr-4 hover:text-blue-600 transition-colors ${
                darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
              }`}>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                Helpful (12)
              </button>
              <button className={`flex items-center text-xs sm:text-sm hover:text-blue-600 transition-colors ${
                darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
              }`}>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {reviews.length > 3 && (
        <div className="mt-6 sm:mt-8 text-center">
          <button className={`px-5 py-2 border rounded-lg transition-colors text-sm font-medium ${
            darkMode 
              ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}>
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;