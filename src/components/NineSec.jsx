import React from 'react';

const cards = [
  {
    title: 'Earn a Certificate',
    description: 'Get the right professional certificate program for you.',
    button: 'View Programs',
    bgColor: 'bg-gray-100',
    image: '/secnine/left.png', // Using your left.png image
  },
  {
    title: 'Best Rated Courses',
    description: 'Enroll now in the most popular and best rated courses.',
    button: 'View Courses',
    bgColor: 'bg-gray-100',
    image: '/secnine/right.png', // Using your right.png image
  },
];

const NineSec = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl overflow-hidden shadow-lg ${card.bgColor} min-h-[280px] sm:min-h-[320px] group hover:shadow-xl transition-all duration-300`}
          >
            {/* Decorative curved background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full -translate-y-16 translate-x-16 opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-300 rounded-full translate-y-12 translate-x-12 opacity-60"></div>
            <div className="absolute top-1/2 right-0 w-16 h-16 bg-blue-400 rounded-full translate-x-8 opacity-70"></div>
            
            {/* Content */}
            <div className="relative z-20 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed max-w-xs">
                  {card.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  {card.button}
                </button>
              </div>
              
              {/* Illustration area - removed white circle and increased size by 150% */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-78 h-78 sm:w-66 sm:h-58 object-contain" // Increased by 150%
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