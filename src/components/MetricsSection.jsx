import React, { useEffect, useRef, useState } from 'react';

const LearningProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

  // SVG Icons (unchanged)
  const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );

  const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );

  const WrenchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );

  const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );

  const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );

  const steps = [
    {
      icon: PlayIcon,
      title: "Watch Video",
      description: "The first step to learn programming is to watch video carefully and take notes.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      delay: 0
    },
    {
      icon: CodeIcon,
      title: "Write Code",
      description: "Now write every single line of code and execute it. Don't expect your code to run the first time.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      delay: 200
    },
    {
      icon: WrenchIcon,
      title: "Build Something",
      description: "Just learning the syntax is not enough. Take some time and build real-world projects.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      delay: 400
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through cards
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-green-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className={`inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          
        </div>
        
        <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          How <span className="text-blue-600">Learning</span> Works
        </h2>
        
        <p className={`font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          Follow our proven three-step approach to master programming and build amazing projects
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between relative">
            {/* Enhanced Curvy/Wavy Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
              <svg 
                viewBox="0 0 1000 200" 
                className="w-full h-24"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="33%" stopColor="#10b981" />
                    <stop offset="66%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="glow" />
                    <feComposite in="SourceGraphic" in2="glow" operator="over" />
                  </filter>
                </defs>
                <path 
                  d="M0,100 
                     C100,20 150,180 250,100 
                     C350,20 400,180 500,100 
                     C600,20 650,180 750,100 
                     C850,20 900,180 1000,100" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="transition-all duration-1500 ease-out"
                  strokeDasharray={isVisible ? "1000 1000" : "0 1000"}
                  strokeDashoffset={isVisible ? "0" : "1000"}
                />
              </svg>
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeCard === index;
              
              return (
                <div key={index} className="relative z-10">
                  <div 
                    className={`group cursor-pointer transition-all duration-700 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    } ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}`}
                    style={{ transitionDelay: `${600 + step.delay}ms` }}
                    onMouseEnter={() => setActiveCard(index)}
                  >
                    {/* Card */}
                    <div className={`w-80 ${step.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                      isActive ? 'ring-4 ring-blue-200 ring-opacity-50' : ''
                    }`}>
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 transform transition-all duration-500 ${
                        isActive ? 'rotate-6 scale-110' : 'group-hover:rotate-3 group-hover:scale-105'
                      }`}>
                        <Icon className="text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className={`font-bold text-2xl ${step.textColor} mb-4 transition-colors duration-300`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {step.description}
                      </p>
                      
                      {/* Step Number */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                        <span className={`text-sm font-bold ${step.textColor}`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeCard === index;
            
            return (
              <div key={index} className="relative">
                {/* Connecting Line for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-200 to-transparent"></div>
                )}
                
                <div 
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  } ${isActive ? 'scale-105' : 'scale-100'}`}
                  style={{ transitionDelay: `${step.delay}ms` }}
                >
                  <div className={`${step.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100 ${
                    isActive ? 'ring-4 ring-blue-200 ring-opacity-50' : ''
                  }`}>
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 transform transition-all duration-500 ${
                        isActive ? 'rotate-6 scale-110' : ''
                      }`}>
                        <Icon className="text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className={`font-bold text-xl ${step.textColor}`}>
                            {step.title}
                          </h3>
                          <span className={`text-sm font-bold ${step.textColor} opacity-60`}>
                            Step {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <ZapIcon className="text-yellow-400" />
      </div>
      <div className="absolute bottom-20 right-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
        <TargetIcon className="text-green-400" />
      </div>
    </section>
  );
};

export default LearningProcessSection;