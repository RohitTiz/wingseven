import React from 'react';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-20 relative overflow-hidden"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Section - Futuristic with floating elements */}
        <div className="relative h-full flex flex-col justify-center">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <img
              src="/contactus/contact.png"
              alt="Contact Visual"
              className="absolute z-10 w-full h-full object-contain transition-all duration-700 hover:scale-105"
            />
            
            {/* Floating tech elements */}
            <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-300/30 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-300/30 animate-float-delay"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-teal-500/10 backdrop-blur-sm border border-teal-300/30 animate-float-delay-2"></div>
          </div>
          
          <div className="mt-8 text-center lg:text-left">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Our team is ready to collaborate on innovative solutions that push boundaries.
            </p>
          </div>
        </div>

        {/* Contact Form - Premium design */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-2xl p-10 rounded-2xl shadow-2xl w-full border border-white/20 relative overflow-hidden">
            {/* Form glow effect */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
            
            <div className="relative z-10">
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Contact Our Team
                </h3>
                <p className="text-blue-600 font-medium">We respond within 24 hours</p>
              </div>

              <form className="space-y-6">
                {[
                  { label: 'Your Name', type: 'text', icon: '👤' },
                  { label: 'Email Address', type: 'email', icon: '✉️' },
                  { label: 'Phone Number', type: 'tel', icon: '📱' }
                ].map((field, i) => (
                  <div className="relative group" key={i}>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      required
                      placeholder=" "
                      className="peer w-full pl-12 pr-4 pt-6 pb-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                    <label className="absolute left-12 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                      {field.label}
                    </label>
                  </div>
                ))}

                <div className="relative group">
                  <div className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500">
                    💬
                  </div>
                  <textarea
                    rows="4"
                    required
                    placeholder=" "
                    className="peer w-full pl-12 pr-4 pt-6 pb-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none transition-all"
                  ></textarea>
                  <label className="absolute left-12 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              🔒 Secure form
            </div>
            <div className="flex items-center">
              ⚡ Fast response
            </div>
            <div className="flex items-center">
              🌐 Global support
            </div>
          </div>
        </div>
      </div>
      
      {/* Add this to your globals.css */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out infinite 1s; }
        .animate-float-delay-2 { animation: float 6s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

export default ContactUs;