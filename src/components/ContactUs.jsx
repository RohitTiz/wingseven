import React from 'react';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4 relative overflow-hidden"
    >
      {/* Decorative blur shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Block */}
        <div className="relative h-[480px] w-full overflow-hidden rounded-3xl shadow-2xl hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1680783954745-3249be59e527?w=800&auto=format&fit=crop&q=80"
            alt="Contact Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-3xl font-semibold text-center px-6">
              Let's Collaborate & Create Something Great!
            </h2>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-xl mx-auto border border-white/30">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            GET IN TOUCH
          </h3>
          
          {/* Simple centered paragraph */}
          <p className="text-center mb-8 text-gray-600 bold">"JOIN US IN MAKING BETTER"</p>

          <form className="space-y-6">
            {['Your Name', 'Email Address', 'Phone Number'].map((label, i) => (
              <div className="relative" key={i}>
                <input
                  type={label.includes('Email') ? 'email' : label.includes('Phone') ? 'tel' : 'text'}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                  {label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                rows="4"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-[#ec4899] via-[#10b981] to-[#06b6d4] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
