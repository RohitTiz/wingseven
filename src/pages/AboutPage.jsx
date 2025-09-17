import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';

const IconWrapper = ({ children, darkMode }) => (
  <div className={`w-12 h-12 rounded-full flex items-center justify-center p-2 shadow-lg ${
    darkMode 
      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
      : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-600'
  }`}>
    {children}
  </div>
);

const AboutPage = () => {
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Updated carousel images with more vibrant options
  const carouselImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  ];

  const stats = [
    { number: '50,000+', label: 'Active Learners', icon: () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1m-6 6H2v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 100-8 4 4 0 000 8z" /></svg>) },
    { number: '1,200+', label: 'Course Modules', icon: () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6l-2 2m0 0l2 2m-2-2h8m-4 6h4m-4 0a2 2 0 110-4 2 2 0 010 4z" /></svg>) },
    { number: '98%', label: 'Completion Rate', icon: () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z" /></svg>) },
    { number: '150+', label: 'Expert Instructors', icon: () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4.27 1.53 4.84 3.64C16.16 17.64 14.2 19 12 19s-4.16-1.36-4.84-3.36C7.73 13.53 9.72 12 12 12zM12 4c2.21 0 4 1.79 4 4 0 .74-.2 1.43-.55 2.03-.58.98-1.52 1.74-2.7 2.15-.17.05-.34.09-.52.12-.27.05-.55.08-.83.08-.28 0-.56-.03-.83-.08a4.963 4.963 0 01-.52-.12c-1.18-.41-2.12-1.17-2.7-2.15A3.978 3.978 0 018 8c0-2.21 1.79-4 4-4z" /></svg>) }
  ];

  const features = [
    { icon: stats[0].icon, title: 'Expert Faculty', description: 'Learn from industry veterans with 10+ years of real-world experience' },
    { icon: stats[1].icon, title: 'Comprehensive Courses', description: 'From beginner to advanced levels across multiple technologies' },
    { icon: stats[2].icon, title: 'Guaranteed Internships', description: 'Every student gets hands-on experience with our partner companies' },
    { icon: stats[3].icon, title: 'Career Support', description: 'Dedicated placement assistance and career guidance' }
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' },
    { name: 'David Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' },
    { name: 'Maria Rodríguez', role: 'Chief Education Officer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' }
  ];

  const testimonials = [
    { initials: 'AS', name: 'Aarav Sharma', role: 'Full Stack Developer', quote: '"CodeBrain transformed my career. The hands-on projects and expert guidance helped me land my dream job at Google!"' },
    { initials: 'PK', name: 'Priya Kumar', role: 'Data Scientist', quote: '"The curriculum is perfectly aligned with industry needs. I went from beginner to data scientist in just 9 months!"' },
    { initials: 'RS', name: 'Rohan Singh', role: 'DevOps Engineer', quote: '"The internship program gave me real-world experience that made my resume stand out. Got multiple job offers!"' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Theme classes
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-800';
  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-md';
  const sectionHeadingClass = darkMode ? 'text-white' : 'text-gray-800';
  const sectionSubtextClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const statNumberClass = darkMode ? 'text-white' : 'text-gray-900';
  const statLabelClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const buttonPrimaryClass = darkMode 
    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
    : 'bg-indigo-600 text-white hover:bg-indigo-700';
  const buttonSecondaryClass = darkMode 
    ? 'bg-transparent border-2 border-white text-white hover:bg-white/20' 
    : 'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50';

  return (
    <>
      <AuthSection />
      <div className={`min-h-screen overflow-hidden font-montserrat transition-colors duration-300 ${bgClass} ${textClass}`}>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-center bg-cover" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80)',
            height: '60vh',
            minHeight: '400px'
          }}>
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-blue-900/80 to-indigo-900/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'}`}></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-10">
            <div className="max-w-4xl">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transforming Education <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">for Tomorrow</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 font-light">
                We're building the future of learning with innovative technology and passionate educators.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${buttonPrimaryClass}`}>Our Team</button>
                <button className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${buttonSecondaryClass}`}>Our Courses</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-50 ${darkMode ? 'bg-gray-800' : 'bg-blue-200'}`}></div>
          <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-50 ${darkMode ? 'bg-gray-800' : 'bg-indigo-200'}`}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className={`p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cardClass}`}>
                  <div className="flex justify-center mb-4">
                    <IconWrapper darkMode={darkMode}><stat.icon /></IconWrapper>
                  </div>
                  <h3 className={`text-3xl font-bold mb-2 ${statNumberClass}`}>{stat.number}</h3>
                  <p className={`font-medium ${statLabelClass}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 relative inline-block ${sectionHeadingClass}`}>
              Our Mission & Vision
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform translate-y-2"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className={`p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cardClass}`}>
                <div className="text-blue-600 mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${sectionHeadingClass}`}>Our Mission</h3>
                <p className={`leading-relaxed ${sectionSubtextClass}`}>Empowering learners worldwide through accessible, innovative education that adapts to the needs of tomorrow's workforce.</p>
              </div>
              <div className={`p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cardClass}`}>
                <div className="text-indigo-600 mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${sectionHeadingClass}`}>Our Vision</h3>
                <p className={`leading-relaxed ${sectionSubtextClass}`}>A world where quality education fosters opportunity and drives personal and professional growth for everyone, everywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${sectionHeadingClass}`}>Learning Environment</h2>
            
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <div className="carousel-container relative h-64 md:h-96">
                {carouselImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={image} 
                      alt={`Learning environment ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className={`absolute -top-24 -left-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800 opacity-30' : 'bg-indigo-100 opacity-30'}`}></div>
          <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800 opacity-30' : 'bg-blue-100 opacity-30'}`}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${sectionHeadingClass}`}>Meet Our Team</h2>
            <p className={`mb-12 max-w-2xl mx-auto ${sectionSubtextClass}`}>The passionate educators and innovators driving our mission forward.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className={`group p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cardClass}`}>
                  <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'from-blue-900/40' : 'from-blue-600/40'}`}></div>
                  </div>
                  <h3 className={`text-xl font-semibold mb-1 ${sectionHeadingClass}`}>{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center text-blue-400 transition-colors ${darkMode ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-100 hover:bg-blue-200'}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center text-blue-400 transition-colors ${darkMode ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-100 hover:bg-blue-200'}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${sectionHeadingClass}`}>Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className={`group p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cardClass}`}>
                  <div className="mb-6">
                    <IconWrapper darkMode={darkMode}><feature.icon /></IconWrapper>
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors ${sectionHeadingClass}`}>{feature.title}</h3>
                  <p className={`leading-relaxed ${sectionSubtextClass}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800 opacity-30' : 'bg-blue-100 opacity-30'}`}></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${sectionHeadingClass}`}>What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cardClass}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                      {testimonial.initials}
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${sectionHeadingClass}`}>{testimonial.name}</h4>
                      <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className={`text-left italic ${sectionSubtextClass}`}>"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Banner Section */}
        <section className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`relative rounded-2xl shadow-2xl overflow-hidden ${darkMode ? 'bg-gradient-to-r from-indigo-900 to-indigo-800' : 'bg-gradient-to-r from-indigo-600 to-indigo-700'}`}>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="circuit-pattern" x="0" y="0" width="0.05" height="0.05">
                    <path d="M0,0 L10,10" stroke="white" strokeWidth="0.5" />
                    <path d="M10,0 L0,10" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <rect x="0" y="0" width="100" height="100" fill="url(#circuit-pattern)" />
                </svg>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-white/10 animate-pulse"></div>
              <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-white/5 animate-pulse delay-300"></div>
              <div className="absolute bottom-16 left-24 w-6 h-6 rounded-full bg-white/15 animate-pulse delay-700"></div>
              <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-white/8 animate-pulse delay-1000"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12">
                
                {/* Text content */}
                <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Ready to Start Your <span className="text-blue-200">Coding Journey</span>?
                  </h2>
                  <p className="text-lg md:text-xl text-indigo-100 mb-6 max-w-2xl mx-auto lg:mx-0">
                    Join our community of <span className="font-semibold text-white">50,000+ learners</span> transforming their careers through our innovative platform!
                  </p>
                  
                  {/* Stats badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white text-sm font-medium">98% Success Rate</span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-white text-sm font-medium">24/7 Support</span>
                    </div>
                  </div>
                  
                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Get Started Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      Explore Courses
                    </button>
                  </div>
                </div>
                
                {/* Visual element - Code snippet illustration */}
                <div className="hidden lg:block flex-shrink-0 ml-8">
                  <div className={`relative rounded-lg p-6 shadow-lg ${darkMode ? 'bg-indigo-800' : 'bg-indigo-500'} border border-indigo-400/30`}>
                    <div className="absolute top-3 left-3 flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="pt-6 font-mono text-sm text-white">
                      <div className="text-blue-300">// Start your journey today</div>
                      <div className="text-purple-300 mt-2"><span className="text-blue-300">const</span> success <span className="text-blue-300">=</span> <span className="text-green-300">await</span> startCodingJourney();</div>
                      <div className="text-gray-300 mt-2"><span className="text-blue-300">if</span> (success) &#123;</div>
                      <div className="text-yellow-300 ml-4">celebrateCareerChange();</div>
                      <div className="text-gray-300">&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Animation for elements on scroll */
        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Custom button hover effects */
        .btn-hover-effect {
          transition: all 0.3s ease;
        }
        
        .btn-hover-effect:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Custom animations for floating elements */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Gradient text effect */
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Custom shadow effects */
        .shadow-custom {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        
        .shadow-custom-hover:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
      `}</style>
      <Footer/>
    </>
  );
};

export default AboutPage;