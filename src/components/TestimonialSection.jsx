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
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    category: 'business'
  },
  {
    quote: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    name: 'Alvin Lim',
    title: 'CTO at Dimensional',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    category: 'technology'
  },
  {
    quote: 'The courses are comprehensive and well-structured. I was able to transition careers thanks to what I learned here.',
    name: 'Maria Garcia',
    title: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
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
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    category: 'design'
  },
];

const TestimonialMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const bgImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80';

  // Get unique categories
  const categories = ['all', ...new Set(testimonials.map(t => t.category))];

  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  // Duplicate filtered testimonials for seamless looping
  const duplicatedTestimonials = [...filteredTestimonials, ...filteredTestimonials];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .paused {
            animation-play-state: paused !important;
          }
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
      <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-10">
          What Our Learners Say
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
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

        <div 
          className="relative overflow-hidden w-full"
          onClick={togglePause}
          style={{ cursor: 'pointer' }}
        >
          {filteredTestimonials.length > 0 ? (
            <div
              className={`flex gap-4 md:gap-6 w-max animate-marquee ${isPaused ? 'paused' : ''}`}
              style={{ 
                animation: 'marquee 40s linear infinite',
                animationDuration: isMobile ? '60s' : '40s'
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-[320px] bg-white/90 text-gray-800 rounded-xl p-5 md:p-6 shadow-lg backdrop-blur-sm"
                >
                  <p className="text-gray-700 font-medium mb-4 text-sm md:text-base">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-indigo-300"
                      />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm md:text-base">
                        {testimonial.initials}
                      </div>
                    )}
                    <div className="ml-3 md:ml-4 text-left">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-white">
              No testimonials found for this category.
            </div>
          )}
        </div>

        {/* Pause indicator */}
        {isPaused && filteredTestimonials.length > 0 && (
          <div className="mt-4 text-sm text-white/80">
            Click anywhere to resume scrolling
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialMarquee;