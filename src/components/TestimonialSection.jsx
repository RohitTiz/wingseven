import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "The content is highly structured, with practical examples and resources. Whether you're new or sharpening your skills, this provides everything you need.",
    name: 'Sandeep H.',
    title: 'Digital Marketing Strategist',
    initials: 'SH',
    category: 'marketing'
  },
  {
    quote: 'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me land a new role.',
    name: 'William Wachlin',
    title: 'Partner Account Manager at AWS',
    initials: 'WW',
    category: 'business'
  },
  {
    quote: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    name: 'Alvin Lim',
    title: 'CTO at Dimensional',
    initials: 'AL',
    category: 'technology'
  },
  {
    quote: 'The courses are comprehensive and well-structured. I was able to transition careers thanks to what I learned here.',
    name: 'Maria Garcia',
    title: 'Frontend Developer',
    initials: 'MG',
    category: 'technology'
  },
  {
    quote: 'Best investment in my career. The practical knowledge helped me get promoted within 6 months.',
    name: 'James Wilson',
    title: 'Senior Product Manager',
    initials: 'JW',
    category: 'business'
  },
  {
    quote: 'The instructors are top-notch and the content is always up-to-date with industry standards.',
    name: 'Lisa Chen',
    title: 'UX Designer',
    initials: 'LC',
    category: 'design'
  },
];

const TestimonialCarousel = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80';

  // Get unique categories
  const categories = ['all', ...new Set(testimonials.map(t => t.category))];

  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  // Always show up to 3 cards at a time
  const cardsToShow = 3;
  const totalGroups = Math.ceil(filteredTestimonials.length / cardsToShow);

  const scrollToGroup = (groupIndex) => {
    const clampedIndex = Math.max(0, Math.min(groupIndex, totalGroups - 1));
    setCurrentIndex(clampedIndex);
  };

  const handleNext = () => {
    if (currentIndex < totalGroups - 1) {
      scrollToGroup(currentIndex + 1);
    } else {
      scrollToGroup(0); // Loop back to start
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToGroup(currentIndex - 1);
    } else {
      scrollToGroup(totalGroups - 1); // Loop to end
    }
  };

  // Get current group of testimonials
  const currentTestimonials = filteredTestimonials.slice(
    currentIndex * cardsToShow,
    (currentIndex + 1) * cardsToShow
  );

  return (
    <section className="relative w-full py-16 overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        `}
      </style>

      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.6)',
          transform: 'scale(1.05)',
        }}
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-10">
          What Our Learners Say
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category 
                  ? 'bg-white text-indigo-600' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative w-full">
          {/* Navigation Arrows */}
          {filteredTestimonials.length > cardsToShow && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 bg-white/80 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white transition-all"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 bg-white/80 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white transition-all"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Cards Container - Always Centered */}
          <div className="flex justify-center w-full">
            <div className="flex justify-center gap-4 md:gap-6 max-w-full overflow-x-hidden">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-[320px] bg-white/90 text-gray-800 rounded-xl p-5 md:p-6 shadow-lg backdrop-blur-sm flex flex-col"
                >
                  <p className="text-gray-700 font-medium mb-4 text-sm md:text-base line-clamp-4 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm md:text-base">
                      {testimonial.initials}
                    </div>
                    <div className="ml-3 md:ml-4 text-left">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 truncate">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        {totalGroups > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToGroup(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialCarousel;