import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';

const IconWrapper = ({ children }) => (
  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white p-2 shadow-lg">
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

  return (
    <>
      <AuthSection />
      <div className={`min-h-screen overflow-hidden font-montserrat transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        {/* Hero Section with Parallax Background */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transforming Education <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">for Tomorrow</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-light">
              We're building the future of learning with innovative technology and passionate educators.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">Our Team</button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">Our Courses</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-white'}`}>
          <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-50 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}></div>
          <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-50 ${darkMode ? 'bg-gray-800' : 'bg-indigo-100'}`}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'dark-card' : 'bg-gradient-to-br from-white to-blue-50'}`}>
                  <div className="flex justify-center mb-4 text-blue-600">
                    <IconWrapper><stat.icon /></IconWrapper>
                  </div>
                  <h3 className={`text-3xl font-bold mb-2 ${darkMode ? 'light-text' : 'text-gray-800'}`}>{stat.number}</h3>
                  <p className={`font-medium ${darkMode ? 'light-text' : 'text-gray-600'}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-gradient-to-b from-white to-blue-50'}`}>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 relative inline-block ${darkMode ? 'light-text' : 'text-gray-800'}`}>
              Our Mission & Vision
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform translate-y-2"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'dark-card' : 'bg-white'}`}>
                <div className="text-blue-600 mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'light-text' : 'text-gray-800'}`}>Our Mission</h3>
                <p className={`leading-relaxed ${darkMode ? 'light-text' : 'text-gray-600'}`}>Empowering learners worldwide through accessible, innovative education that adapts to the needs of tomorrow's workforce.</p>
              </div>
              <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'dark-card' : 'bg-white'}`}>
                <div className="text-indigo-600 mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'light-text' : 'text-gray-800'}`}>Our Vision</h3>
                <p className={`leading-relaxed ${darkMode ? 'light-text' : 'text-gray-600'}`}>A world where quality education fosters opportunity and drives personal and professional growth for everyone, everywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className={`py-16 transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-gradient-to-b from-blue-50 to-indigo-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'light-text' : 'text-gray-800'}`}>Learning Environment</h2>
            
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
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-white'}`}>
          <div className={`absolute -top-24 -left-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800 opacity-30' : 'bg-indigo-100 opacity-30'}`}></div>
          <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800 opacity-30' : 'bg-blue-100 opacity-30'}`}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'light-text' : 'text-gray-800'}`}>Meet Our Team</h2>
            <p className={`mb-12 max-w-2xl mx-auto ${darkMode ? 'light-text' : 'text-gray-600'}`}>The passionate educators and innovators driving our mission forward.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className={`group p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'dark-card' : 'bg-gradient-to-br from-white to-blue-50'}`}>
                  <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'light-text' : 'text-gray-800'}`}>{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center text-blue-600 transition-colors ${darkMode ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-100 hover:bg-blue-200'}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center text-blue-600 transition-colors ${darkMode ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-100 hover:bg-blue-200'}`}>
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
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-gradient-to-b from-indigo-50 to-blue-50'}`}>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${darkMode ? 'light-text' : 'text-gray-800'}`}>Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className={`group p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'dark-card' : 'bg-white'}`}>
                  <div className="text-blue-600 mb-6">
                    <IconWrapper><feature.icon /></IconWrapper>
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors ${darkMode ? 'light-text' : 'text-gray-800'}`}>{feature.title}</h3>
                  <p className={`leading-relaxed ${darkMode ? 'light-text' : 'text-gray-600'}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`py-16 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-white'}`}>
          <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gray-800 opacity-30' : 'bg-blue-100 opacity-30'}`}></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${darkMode ? 'light-text' : 'text-gray-800'}`}>What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'dark-card' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                      {testimonial.initials}
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${darkMode ? 'light-text' : 'text-gray-800'}`}>{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className={`text-left italic ${darkMode ? 'light-text' : 'text-gray-600'}`}>"{testimonial.quote}"</p>
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

        {/* CTA Banner Section - Clean and Elegant */}
        <section className={`py-8 relative transition-colors duration-300 ${darkMode ? 'dark-bg' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-visible min-h-[280px]">
              
              {/* Main content container */}
              <div className="flex flex-col md:flex-row items-end justify-between p-6 md:p-8 relative z-10 h-full">
                
                {/* Left side - Student image that extends above banner */}
                <div className="md:flex-shrink-0 md:mr-6 mb-4 md:mb-0 relative flex items-end" style={{ height: '320px' }}>
                  {/* Image container */}
                  <div className="relative h-full flex items-end" style={{ width: '220px' }}>
                    <img 
                      src="/aboutus/girl.png" 
                      alt="Student learning" 
                      className="w-full object-contain"
                      style={{ 
                        height: '150%',
                        filter: 'drop-shadow(0 12px 10px rgba(0, 0, 0, 0.2))',
                        transform: 'translateY(7%)',
                        alignSelf: 'flex-end',
                        maxWidth: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Center content */}
                <div className="flex-1 text-white text-center md:text-left pb-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    Ready to Start Your <span className="text-blue-100">Coding Journey</span>?
                  </h2>
                  <p className="text-base md:text-lg mb-4 opacity-95 max-w-2xl">
                    Join our community of 50,000+ learners transforming their careers through our platform!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md text-base">
                      Get Started Now
                    </button>
                    <button className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-full hover:bg-white/10 transition-all duration-300 text-base">
                      Explore Courses
                    </button>
                  </div>
                </div>

                {/* Right side - Minimal decorative element */}
                <div className="hidden lg:flex flex-shrink-0 ml-6 items-end pb-4">
                  <div className="text-blue-200 opacity-80">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 15.18L5 13.18Z"/>
                    </svg>
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
        
        /* Dark mode classes */
        .dark-bg {
          background-color: #1a202c;
          color: #e2e8f0;
        }
        
        .light-text {
          color: #e2e8f0;
        }
        
        .dark-text {
          color: #2d3748;
        }
        
        .dark-border {
          border-color: #4a5568;
        }
        
        .light-border {
          border-color: #e2e8f0;
        }
        
        .dark-card {
          background-color: #2d3748;
          color: #e2e8f0;
        }
        
        .light-card {
          background-color: #ffffff;
          color: #2d3748;
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