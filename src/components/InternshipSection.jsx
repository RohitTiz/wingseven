import React, { useState } from 'react';
import CourseCard from './CourseCard';

const InternshipSection = () => {
  const [showAllInternships, setShowAllInternships] = useState(false);
  
  // Sample internship data - keeping only 2 cards
  const internshipPrograms = [
    {
      id: 'internship-1',
      title: 'Software Development Internship',
      description: 'Gain hands-on experience in full-stack development with real-world projects and mentorship from industry experts.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Technology',
      duration: '3 months',
      type: 'Paid Internship',
      rating: 4.8,
      applicants: 245,
      deadline: '2023-11-30',
      isPopular: true
    },
    {
      id: 'internship-2',
      title: 'Digital Marketing Internship',
      description: 'Learn SEO, social media marketing, and content strategy while working with real clients and campaigns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Marketing',
      duration: '2 months',
      type: 'Stipend Available',
      rating: 4.6,
      applicants: 189,
      deadline: '2023-12-15',
      isPopular: true
    }
  ];
  
  // Since we only have 2 cards, we'll show both as featured
  const featuredInternships = internshipPrograms;
  
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Launch Your Career with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Internship Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain real-world experience, build your portfolio, and jumpstart your career with our carefully designed internship programs.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left side - Heading and decorative content */}
          <div className="lg:w-2/5 relative">
            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100">
              {/* Curvy line elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-tr-full bg-blue-500 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-tl-full bg-indigo-500 opacity-20"></div>
              
              <svg className="absolute top-8 right-8 w-16 h-16 text-blue-400 opacity-30" viewBox="0 0 100 100">
                <path d="M20,20 Q40,5 50,30 T90,30" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,50 Q30,35 40,60 T80,60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30,80 Q50,65 60,90 T100,90" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              
              <div className="relative z-10">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                  From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Learning</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Earning</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our internship programs bridge the gap between academic knowledge and professional experience. Work on real projects, receive mentorship, and build your network.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Real-world project experience</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Professional mentorship & networking</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Certificate & potential job offers</p>
                  </div>
                </div>
                
                <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Internship cards */}
          <div className="lg:w-3/5 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {featuredInternships.map((internship) => (
                <div key={internship.id} className="flex justify-center">
                  <CourseCard 
                    course={internship}
                    isInternship={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles */}
      <style jsx>{`
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
    </section>
  );
};

export default InternshipSection;