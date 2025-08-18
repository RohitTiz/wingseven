import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle, Zap, Sparkles, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const answerRef = useRef(null);

  const faqs = [
    {
      question: 'What is a Payment Gateway?',
      answer: 'A payment gateway is a technology used to accept debit or credit card purchases from customers. It acts as an intermediary between your website or app and the financial institutions that process the payment.',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      question: 'Do I need to pay to Instapay when there are no transactions?',
      answer: 'No, you do not need to pay Instapay when there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid! There are no monthly fees or hidden charges.',
      icon: Sparkles,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      question: 'What platforms does ACME payment gateway support?',
      answer: 'ACME supports all major e-commerce platforms like Shopify, WooCommerce, and Magento, along with custom API integrations for bespoke solutions. We also provide plugins for popular CMS platforms.',
      icon: HelpCircle,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      question: 'Does ACME provide international payments support?',
      answer: 'Yes, ACME allows businesses to accept payments from international customers in multiple currencies with competitive exchange rates. We support over 135 currencies and provide localized payment methods.',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      question: 'Is there any setup fee or annual maintenance fee?',
      answer: 'There are no setup or annual maintenance fees. You only pay per transaction with our transparent pricing model. We believe in simple, straightforward pricing without any surprises.',
      icon: Sparkles,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
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

  // Smooth scroll to answer when changing questions
  useEffect(() => {
    if (answerRef.current) {
      answerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

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
          <HelpCircle size={16} />
          Need Help?
        </div>
        
        <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          Frequently <span className="text-blue-600">Asked</span> Questions
        </h2>
        
        <p className={`font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          Find quick answers to common questions about our payment solutions
        </p>
      </div>

      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        {/* Left: Question list */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center px-6 py-5 cursor-pointer border-b border-gray-100 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gray-50 border-l-4 border-l-blue-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${faq.bgColor} flex items-center justify-center mr-4 flex-shrink-0`}>
                  <Icon className={`${faq.textColor}`} size={18} />
                </div>
                <span
                  className={`flex-1 text-base font-medium ${
                    activeIndex === index
                      ? 'text-gray-900'
                      : 'text-gray-700'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`ml-2 transition-transform duration-300 ${
                    activeIndex === index ? 'text-gray-700 rotate-180' : 'text-gray-400'
                  }`} 
                  size={20} 
                />
              </div>
            );
          })}
        </div>

        {/* Right: Answer display with scroll effect */}
        <div 
          ref={answerRef}
          className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm overflow-y-auto max-h-[500px] scrollbar-hide"
        >
          <div className="sticky top-0 z-10 bg-white pb-4">
            <div className={`w-14 h-14 rounded-xl ${faqs[activeIndex].bgColor} flex items-center justify-center mb-6`}>
              {(() => {
                const IconComponent = faqs[activeIndex].icon;
                return <IconComponent className={`${faqs[activeIndex].textColor}`} size={24} />;
              })()}
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              {faqs[activeIndex].question}
            </h4>
          </div>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">{faqs[activeIndex].answer}</p>
            
            {/* Additional content example */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-100">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">Related Information</h5>
              <p className="text-gray-600 mb-4">Learn more about our payment solutions in our documentation center.</p>
              <button className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View Documentation
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <Zap className="text-yellow-400" size={24} />
      </div>
      <div className="absolute bottom-20 right-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
        <Sparkles className="text-purple-400" size={20} />
      </div>
    </section>
  );
};

export default FAQSection;