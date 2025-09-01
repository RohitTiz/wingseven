import React, { useState, useEffect, useRef } from 'react';
import AuthSection from '../components/AuthSection';

const IconWrapper = ({ children }) => (
  <div className="w-8 h-8 text-white">{children}</div>
);

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
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

  // Carousel images from Unsplash (free platform)
  const carouselImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ];

  const stats = [
    { number: '10,000+', label: 'Students Trained', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1m-6 6H2v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 100-8 4 4 0 000 8z" /></svg></IconWrapper>) },
    { number: '500+', label: 'Courses Offered', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6l-2 2m0 0l2 2m-2-2h8m-4 6h4m-4 0a2 2 0 110-4 2 2 0 010 4z" /></svg></IconWrapper>) },
    { number: '95%', label: 'Placement Rate', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z" /></svg></IconWrapper>) },
    { number: '50+', label: 'Industry Partners', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4.27 1.53 4.84 3.64C16.16 17.64 14.2 19 12 19s-4.16-1.36-4.84-3.36C7.73 13.53 9.72 12 12 12zM12 4c2.21 0 4 1.79 4 4 0 .74-.2 1.43-.55 2.03-.58.98-1.52 1.74-2.7 2.15-.17.05-.34.09-.52.12-.27.05-.55.08-.83.08-.28 0-.56-.03-.83-.08a4.963 4.963 0 01-.52-.12c-1.18-.41-2.12-1.17-2.7-2.15A3.978 3.978 0 018 8c0-2.21 1.79-4 4-4z" /></svg></IconWrapper>) }
  ];

  const features = [
    { icon: stats[0].icon, title: 'Expert Faculty', description: 'Learn from industry veterans with 10+ years of real-world experience' },
    { icon: stats[1].icon, title: 'Comprehensive Courses', description: 'From beginner to advanced levels across multiple technologies' },
    { icon: stats[2].icon, title: 'Guaranteed Internships', description: 'Every student gets hands-on experience with our partner companies' },
    { icon: stats[3].icon, title: 'Career Support', description: 'Dedicated placement assistance and career guidance' }
  ];

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To bridge the gap between academic learning and industry requirements by providing world-class education, practical training, and career opportunities that empower students to excel in their chosen fields.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To become the leading educational platform that transforms lives through technology education, creating a skilled workforce ready for the digital future.'
    },
    values: {
      title: 'Our Values',
      content: 'Excellence in education, integrity in practice, innovation in approach, and commitment to student success. We believe in fostering a culture of continuous learning and growth.'
    }
  };

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Hero Section with animated background */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="circuit-board" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100" height="100" fill="transparent" />
                <path d="M0,50 L100,50 M50,0 L50,100" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                <circle cx="50" cy="50" r="10" fill="transparent" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-board)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-montserrat`}>
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">CodeBrain</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-light">
              Empowering the next generation of tech professionals through quality education and practical experience.
            </p>
            <div className="mt-10">
              <div className="inline-flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse delay-150"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-montserrat">Our Learning Environment</h2>
            
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl" ref={carouselRef}>
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img 
                      src={image} 
                      alt={`CodeBrain environment ${index + 1}`} 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold">State-of-the-Art Facilities</h3>
                        <p className="text-blue-100">Modern learning spaces designed for collaboration and innovation</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-500">
                      <stat.icon />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission/Vision/Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex border-b border-gray-200 mb-6">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    className={`py-3 px-6 font-medium text-lg transition-all duration-300 ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tabContent[tab].title}
                  </button>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{tabContent[activeTab].title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{tabContent[activeTab].content}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-montserrat">Why Choose CodeBrain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-montserrat">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">AS</div>
                  <div>
                    <h4 className="font-semibold">Aarav Sharma</h4>
                    <p className="text-blue-600 text-sm">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">"CodeBrain transformed my career. The hands-on projects and expert guidance helped me land my dream job at Google!"</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">PK</div>
                  <div>
                    <h4 className="font-semibold">Priya Kumar</h4>
                    <p className="text-blue-600 text-sm">Data Scientist</p>
                  </div>
                </div>
                <p className="text-gray-600">"The curriculum is perfectly aligned with industry needs. I went from beginner to data scientist in just 9 months!"</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold mr-4">RS</div>
                  <div>
                    <h4 className="font-semibold">Rohan Singh</h4>
                    <p className="text-blue-600 text-sm">DevOps Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">"The internship program gave me real-world experience that made my resume stand out. Got multiple job offers!"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Our Location</h2>
              <p className="text-gray-600 text-lg mb-8">
                Based in the heart of Noida's technology hub, we're at the center of innovation and growth.
              </p>
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-64 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20"></div>
                <div className="w-full h-full flex items-center justify-center text-white relative z-10">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xl font-semibold">Noida, India</p>
                    <p className="text-blue-100 mt-2">Tech Hub, Sector 62</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 font-montserrat">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
              Join thousands of students who have transformed their careers with CodeBrain's industry-relevant courses.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Explore Our Courses
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 font-montserrat">CodeBrain</h3>
                <p className="text-gray-400">
                  Empowering the next generation of technology professionals through quality education.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Courses</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <address className="text-gray-400 not-italic">
                  <p>Tech Hub, Sector 62</p>
                  <p>Noida, Uttar Pradesh</p>
                  <p className="mt-2">info@codebrain.com</p>
                  <p>+91 9876543210</p>
                </address>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-125">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-125">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-125">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} CodeBrain. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default AboutPage;