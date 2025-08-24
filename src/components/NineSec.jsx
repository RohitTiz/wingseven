import React from 'react';

const cards = [
  {
    title: 'Earn a Certificate',
    description: 'Get the right professional certificate program for you.',
    button: 'View Programs',
    bgColor: 'bg-gray-100',
    image: '/secnine/left.png',
  },
  {
    title: 'Best Rated Courses',
    description: 'Enroll now in the most popular and best rated courses.',
    button: 'View Courses',
    bgColor: 'bg-gray-100',
    image: '/secnine/right.png',
  },
];

const NineSec = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg ${card.bgColor} min-h-[240px] sm:min-h-[280px] md:min-h-[320px] group hover:shadow-xl transition-all duration-300`}
          >
            {/* Decorative curved background elements - hidden on small screens */}
            <div className="hidden sm:block absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-green-400 rounded-full -translate-y-8 md:-translate-y-16 translate-x-8 md:translate-x-16 opacity-80"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-green-300 rounded-full translate-y-6 md:translate-y-12 translate-x-6 md:translate-x-12 opacity-60"></div>
            <div className="hidden sm:block absolute top-1/2 right-0 w-12 h-12 md:w-16 md:h-16 bg-blue-400 rounded-full translate-x-4 md:translate-x-8 opacity-70"></div>
            
            {/* Content */}
            <div className="relative z-20 p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs">
                  {card.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 sm:px-6 sm:py-2.5 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 min-h-[44px] flex items-center justify-center">
                  {card.button}
                </button>
              </div>
              
              {/* Illustration area - increased by 200% */}
              <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-end justify-end">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-64 object-contain" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NineSec;