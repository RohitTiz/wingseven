import React, { useState, useEffect, useRef } from 'react';

const NineSec = () => {
  const [hovered, setHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cards = [
    {
      title: 'Earn a Certificate',
      description: 'Get the right professional certificate program for you.',
      button: 'View Programs',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      hoverColor: 'from-blue-600/15 to-indigo-700/15',
      image: '/secnine/left.png',
      gradient: 'bg-gradient-to-br',
      accentColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Best Rated Courses',
      description: 'Enroll now in the most popular and best rated courses.',
      button: 'View Courses',
      bgColor: 'from-emerald-500/10 to-cyan-600/10',
      hoverColor: 'from-emerald-600/15 to-cyan-700/15',
      image: '/secnine/right.png',
      gradient: 'bg-gradient-to-bl',
      accentColor: 'bg-gradient-to-r from-emerald-500 to-cyan-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    // Set up intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 3 + 1} ${Math.random() * 20 + 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Section header - Updated with the requested style */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Advance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Career</span>
          </h2>
          
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden shadow-2xl ${card.gradient} ${card.bgColor} min-h-[320px] group transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animated background elements */}
              <div className={`absolute inset-0 ${card.gradient} ${hovered === idx ? card.hoverColor : card.bgColor} transition-all duration-500`}></div>
              
              {/* Floating particles/decoration */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {[1, 2, 3, 4, 5].map(i => (
                  <div
                    key={i}
                    className={`absolute rounded-full ${card.accentColor} opacity-20`}
                    style={{
                      width: `${Math.random() * 30 + 10}px`,
                      height: `${Math.random() * 30 + 10}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float${i % 3 + 1} ${Math.random() * 10 + 10}s infinite ease-in-out`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Content */}
              <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                <div className="flex-1">
                  {/* Icon with animation */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl ${card.accentColor} text-white shadow-md transform transition-all duration-300 ${hovered === idx ? 'rotate-12 scale-110' : ''}`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-xs">
                    {card.description}
                  </p>
                  <button className={`relative overflow-hidden ${card.accentColor} text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[50px] flex items-center justify-center group/btn`}>
                    <span className="relative z-10 flex items-center">
                      {card.button}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></span>
                  </button>
                </div>
                
                {/* Illustration with enhanced animation */}
                <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-end justify-end pointer-events-none">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-48 h-48 sm:w-64 sm:h-64 object-contain transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" 
                  />
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-16 bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:left-[130%] transition-all duration-1000 ${hovered === idx ? 'left-[130%]' : '-left-20'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(-15px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(15px) translateX(-10px) rotate(120deg); }
          66% { transform: translateY(-15px) translateX(15px) rotate(240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-25px) translateX(5px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default NineSec;