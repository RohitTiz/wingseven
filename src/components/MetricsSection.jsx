import React, { useEffect, useRef, useState } from 'react';
import { Play, Code, Wrench, ArrowRight, BookOpen, Zap, Target } from 'lucide-react';

const LearningProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: Play,
      title: "Watch Video",
      description: "The first step to learn programming is to watch video carefully and take notes.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      delay: 0
    },
    {
      icon: Code,
      title: "Write Code",
      description: "Now write every single line of code and execute it. Don't expect your code to run the first time.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      delay: 200
    },
    {
      icon: Wrench,
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
          <BookOpen size={16} />
          Learning Process
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
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2 z-0">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-2000 ease-out rounded-full"
                style={{ 
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: '800ms'
                }}
              ></div>
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
                        <Icon className="text-white" size={24} />
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
                        <Icon className="text-white" size={20} />
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
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <Zap className="text-yellow-400" size={24} />
      </div>
      <div className="absolute bottom-20 right-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
        <Target className="text-green-400" size={20} />
      </div>
    </section>
  );
};

export default LearningProcessSection;