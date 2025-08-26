import React, { useState, useEffect } from 'react';

const MarqueeTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      quote: "The content is highly structured, with practical examples and resources. Whether you're new or sharpening your skills, this provides everything you need.",
      name: 'Sandeep H.',
      title: 'Digital Marketing Strategist',
      initials: 'SH',
      category: 'marketing',
      color: 'bg-blue-500'
    },
    {
      quote: 'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me land a new role.',
      name: 'William Wachlin',
      title: 'Partner Account Manager at AWS',
      initials: 'WW',
      category: 'business',
      color: 'bg-green-500'
    },
    {
      quote: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
      name: 'Alvin Lim',
      title: 'CTO at Dimensional',
      initials: 'AL',
      category: 'technology',
      color: 'bg-purple-500'
    },
    {
      quote: 'The courses are comprehensive and well-structured. I was able to transition careers thanks to what I learned here.',
      name: 'Maria Garcia',
      title: 'Frontend Developer',
      initials: 'MG',
      category: 'technology',
      color: 'bg-pink-500'
    },
    {
      quote: 'Best investment in my career. The practical knowledge helped me get promoted within 6 months.',
      name: 'James Wilson',
      title: 'Senior Product Manager',
      initials: 'JW',
      category: 'business',
      color: 'bg-indigo-500'
    },
    {
      quote: 'The instructors are top-notch and the content is always up-to-date with industry standards.',
      name: 'Lisa Chen',
      title: 'UX Designer',
      initials: 'LC',
      category: 'design',
      color: 'bg-orange-500'
    },
    {
      quote: 'Amazing learning experience! The practical approach helped me understand complex concepts easily.',
      name: 'David Kumar',
      title: 'Software Engineer',
      initials: 'DK',
      category: 'technology',
      color: 'bg-teal-500'
    },
    {
      quote: 'Perfect for busy professionals. I could learn at my own pace and apply knowledge immediately.',
      name: 'Sarah Johnson',
      title: 'Marketing Manager',
      initials: 'SJ',
      category: 'marketing',
      color: 'bg-red-500'
    },
  ];

  // Split testimonials into two rows
  const topRowTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const bottomRowTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));

  // Duplicate arrays for seamless loop
  const duplicatedTopRow = [...topRowTestimonials, ...topRowTestimonials];
  const duplicatedBottomRow = [...bottomRowTestimonials, ...bottomRowTestimonials];

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold text-sm`}>
          {testimonial.initials}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500">
            {testimonial.title}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
        "{testimonial.quote}"
      </p>
      <div className="mt-4 flex items-center text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes marqueeRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marqueeLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-right {
          animation: marqueeRight 40s linear infinite;
          display: flex;
          width: max-content;
        }
        
        .marquee-left {
          animation: marqueeLeft 40s linear infinite;
          display: flex;
          width: max-content;
        }
        
        .marquee-container:hover .marquee-right,
        .marquee-container:hover .marquee-left {
          animation-play-state: paused;
        }
      `}</style>

      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          What Our <span className="text-blue-600">Students</span> Say
        </h2>
        <p className={`text-gray-600 text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          Discover inspiration and insights through recent reviews from our students
        </p>
      </div>

      <div className="space-y-8">
        {/* Top Row - Moving Right */}
        <div className="marquee-container overflow-hidden">
          <div className="flex marquee-right">
            {duplicatedTopRow.map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Left */}
        <div className="marquee-container overflow-hidden">
          <div className="flex marquee-left">
            {duplicatedBottomRow.map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;