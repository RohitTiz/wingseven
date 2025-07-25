import React from 'react';

const logos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg',
    alt: 'Google'
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
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-slate-100 to-slate-200 font-[Roboto,sans-serif] overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Learn From The<br />World’s Leading Experts
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
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
              className="h-14 sm:h-16 object-contain grayscale hover:grayscale-0 transition duration-300 drop-shadow-md"
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
