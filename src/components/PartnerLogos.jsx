import React, { useEffect, useState } from 'react';

const logos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg',
    alt: 'Flutter'
  },
  {
    src: 'https://www.cam.ac.uk/sites/default/files/university-cambridge-full-colour-preferred-logo-transparency-2362x491.png',
    alt: 'Cambridge'
  },
  {
    src: 'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/06/wordmark-nospace-red.png',
    alt: 'Stanford'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
    alt: 'MIT'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    alt: 'Microsoft'
  },
];

const PartnerLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-slate-100 to-slate-200 font-[Roboto,sans-serif] overflow-hidden">
      {/* Heading with the requested style */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          Learn From The<br />
          World's <span className="text-blue-600">Leading Experts</span>
        </h2>
        <p className={`text-lg sm:text-xl text-gray-600 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          Our platform features knowledge from the world's top universities and companies.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center gap-16 animate-[marquee_40s_linear_infinite] w-max"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-14 sm:h-16 object-contain drop-shadow-md"  // Removed grayscale classes
            />
          ))}
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default PartnerLogos;