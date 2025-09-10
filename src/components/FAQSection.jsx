import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const FAQSection = () => {
  const { darkMode } = useDarkMode();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: 'What is a Payment Gateway?',
      answer: 'A payment gateway is a technology used to accept debit or credit card purchases from customers. It acts as an intermediary between your website or app and the financial institutions that process the payment.',
      color: 'from-blue-500 to-blue-600',
      bgColor: darkMode ? 'bg-blue-900/20' : 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      question: 'Do I need to pay to Instapay when there are no transactions?',
      answer: 'No, you do not need to pay Instapay when there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid! There are no monthly fees or hidden charges.',
      color: 'from-green-500 to-green-600',
      bgColor: darkMode ? 'bg-green-900/20' : 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      question: 'What platforms does ACME payment gateway support?',
      answer: 'ACME supports all major e-commerce platforms like Shopify, WooCommerce, and Magento, along with custom API integrations for bespoke solutions. We also provide plugins for popular CMS platforms.',
      color: 'from-purple-500 to-purple-600',
      bgColor: darkMode ? 'bg-purple-900/20' : 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      question: 'Does ACME provide international payments support?',
      answer: 'Yes, ACME allows businesses to accept payments from international customers in multiple currencies with competitive exchange rates. We support over 135 currencies and provide localized payment methods.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      question: 'Is there any setup fee or annual maintenance fee?',
      answer: 'There are no setup or annual maintenance fees. You only pay per transaction with our transparent pricing model. We believe in simple, straightforward pricing without any surprises.',
      color: 'from-pink-500 to-pink-600',
      bgColor: darkMode ? 'bg-pink-900/20' : 'bg-pink-50',
      textColor: 'text-pink-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simple SVG icons as components
  const QuestionIcon = ({ color = 'currentColor' }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  );

  const ChevronDown = ({ color = 'currentColor', className = '' }) => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  const ArrowRight = ({ color = 'currentColor', className = '' }) => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const SparkleIcon = ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );

  const ZapIcon = ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className={`w-full transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-gradient-to-br from-gray-50 to-white'} py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-12 overflow-hidden relative`}
    >
      {/* Background decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-20 h-20 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} rounded-full opacity-50 animate-pulse`}></div>
        <div className={`absolute top-1/4 right-20 w-16 h-16 ${darkMode ? 'bg-green-900/20' : 'bg-green-100'} rounded-full opacity-50 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-20 left-1/4 w-12 h-12 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-100'} rounded-full opacity-50 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 ${darkMode ? 'light-text' : 'text-gray-900'} mb-3 sm:mb-4 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          Frequently <span className="text-blue-600">Asked</span> Questions
        </h2>
        
        <p className={`text-base sm:text-lg transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          Find quick answers to common questions about our payment solutions
        </p>
      </div>

      <div className={`max-w-7xl mx-auto transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        {/* FAQ Items */}
        <div className={`w-full transition-colors duration-300 ${darkMode ? 'dark-card' : 'bg-white'} rounded-xl sm:rounded-2xl ${darkMode ? 'dark-border' : 'border border-gray-200'} shadow-sm overflow-hidden`}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${darkMode ? 'border-gray-700' : 'border-gray-100'} border-b last:border-b-0`}>
              {/* Question */}
              <div
                onClick={() => toggleQuestion(index)}
                className={`flex items-center px-4 py-4 sm:px-6 sm:py-5 cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? `${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 border-l-blue-500`
                    : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${faq.bgColor} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
                  {index % 2 === 0 ? (
                    <ZapIcon color={faq.textColor} />
                  ) : (
                    <SparkleIcon color={faq.textColor} />
                  )}
                </div>
                <span
                  className={`flex-1 text-sm sm:text-base font-medium transition-colors duration-300 ${
                    activeIndex === index
                      ? `${darkMode ? 'light-text' : 'text-gray-900'}`
                      : `${darkMode ? 'text-gray-200' : 'text-gray-700'}`
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  color={activeIndex === index ? 'currentColor' : darkMode ? '#9CA3AF' : '#9CA3AF'}
                  className={`transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              
              {/* Answer - appears directly below the question */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 pb-4 sm:px-6 sm:pb-5 md:px-8 md:pb-6">
                  <div className={`pt-2 ${darkMode ? 'border-gray-700' : 'border-gray-100'} border-t`}>
                    <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 sm:mb-5 md:mb-6`}>{faq.answer}</p>
                    
                    {/* Additional content example */}
                    <div className={`mt-4 sm:mt-5 transition-colors duration-300 ${darkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-gradient-to-r from-blue-50 to-white border-blue-100'} p-4 sm:p-5 md:p-6 rounded-lg border`}>
                      <h5 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${darkMode ? 'light-text' : 'text-gray-800'} mb-2 sm:mb-3`}>Related Information</h5>
                      <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 sm:mb-4 text-sm sm:text-base`}>Learn more about our payment solutions in our documentation center.</p>
                      <button className="group inline-flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                        View Documentation
                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <ZapIcon color="#FBBF24" />
      </div>
      <div className="hidden sm:block absolute bottom-20 right-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
        <SparkleIcon color="#A78BFA" />
      </div>
    </section>
  );
};

export default FAQSection;