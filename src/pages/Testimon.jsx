import React, { useState, useEffect } from 'react';
import AuthSection from '../components/AuthSection';
import Footer from '../components/Footer';

const Testimon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Full Stack Developer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      quote: "CodeBrain transformed my career. The hands-on projects and expert guidance helped me land my dream job at Google!",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Priya Kumar",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      quote: "The curriculum is perfectly aligned with industry needs. I went from beginner to data scientist in just 9 months!",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      name: "Rohan Singh",
      role: "DevOps Engineer",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      quote: "The internship program gave me real-world experience that made my resume stand out. Got multiple job offers!",
      rating: 5,
      featured: true
    },
    {
      id: 4,
      name: "Neha Patel",
      role: "Frontend Developer",
      company: "Netflix",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
      quote: "The mentorship program was incredible. My mentor helped me navigate complex React concepts that I now use daily.",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      name: "Vikram Mehta",
      role: "Backend Engineer",
      company: "Uber",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      quote: "The project-based learning approach prepared me for real-world challenges. I was productive from day one at my new job.",
      rating: 5,
      featured: false
    },
    {
      id: 6,
      name: "Sanya Joshi",
      role: "UX Designer",
      company: "Adobe",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      quote: "The design thinking course completely changed my approach to problem-solving. I've been promoted twice since completing it!",
      rating: 5,
      featured: false
    },
    {
      id: 7,
      name: "Arjun Kapoor",
      role: "Product Manager",
      company: "Facebook",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      quote: "The product management certification gave me the framework I needed to transition from engineering to product leadership.",
      rating: 5,
      featured: false
    },
    {
      id: 8,
      name: "Meera Desai",
      role: "AI Researcher",
      company: "OpenAI",
      image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      quote: "The machine learning specialization had exactly the right balance of theory and practical implementation. Highly recommend!",
      rating: 5,
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      <AuthSection />
      
      {/* Hero Section with Parallax Background */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
          minHeight: '50vh'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Student Testimonials
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-light`}>
            Hear from our students who have transformed their careers through our programs
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600 font-medium">Completion Rate</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-gray-600 font-medium">Satisfaction Score</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600 font-medium">Companies Hiring</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 shadow-md"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm">{testimonial.role} • {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            More Student Experiences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {regularTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 shadow-md"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Join thousands of learners who have achieved their dream careers through our platform.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Read More Stories
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimon;