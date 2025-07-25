import React from 'react';

const testimonials = [
  {
    quote:
      "The content is highly structured, with practical examples and resources. Whether you're new or sharpening your skills, this provides everything you need.",
    name: 'Sandeep H.',
    title: 'Digital Marketing Strategist',
    initials: 'SH',
  },
  {
    quote:
      'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me land a new role.',
    name: 'William Wachlin',
    title: 'Partner Account Manager at AWS',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    quote:
      'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    name: 'Alvin Lim',
    title: 'CTO at Dimensional',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    quote:
      'The courses are comprehensive and well-structured. I was able to transition careers thanks to what I learned here.',
    name: 'Maria Garcia',
    title: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    quote:
      'Best investment in my career. The practical knowledge helped me get promoted within 6 months.',
    name: 'James Wilson',
    title: 'Senior Product Manager',
    initials: 'JW',
  },
  {
    quote:
      'The instructors are top-notch and the content is always up-to-date with industry standards.',
    name: 'Lisa Chen',
    title: 'UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const TestimonialMarquee = () => {
  const duplicated = [...testimonials, ...testimonials]; // for seamless looping
  const bgImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80';

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          What Our Learners Say
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-marquee w-max"
            style={{ animation: 'marquee 60s linear infinite' }}
          >
            {duplicated.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-white/90 text-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-sm"
              >
                <p className="text-gray-700 font-medium mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-300"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                      {testimonial.initials}
                    </div>
                  )}
                  <div className="ml-4 text-left">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
