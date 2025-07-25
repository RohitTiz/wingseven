import React from 'react';

const FeatureSection = () => {
  // Array of feature objects to be displayed as cards
  const features = [
    {
      image: 'feature/first.png',
      title: 'Daily Live',
      subtitle: 'Interactive classes',
    },
    {
      image: 'feature/second.png',
      title: '10 Million +',
      subtitle: 'Tests, sample papers & notes',
    },
    {
      image: 'feature/three.png',
      title: '24 x 7',
      subtitle: 'Doubt solving sessions',
    },
    {
      image: 'feature/four.png',
      title: '100 +',
      subtitle: 'Offline centres',
    },
  ];

  return (
    <section className="w-full bg-white pt-[100px] pb-[60px] flex justify-center font-roboto">
      <div className="mt-[-120px] flex flex-wrap justify-center items-center gap-5 w-[1160px] max-w-[95%] bg-white shadow-[0px_5px_30px_rgba(0,0,0,0.05)] rounded-xl p-[30px_20px] z-10 relative">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex-1 min-w-[180px] flex flex-col items-center justify-center text-center p-3"
          >
            {/* Feature image */}
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-16 h-16 object-contain mb-3.5" 
            />
            
            {/* Feature title */}
            <div className="text-xl font-semibold mb-1.5 text-gray-800">
              {feature.title}
            </div>
            
            {/* Feature subtitle */}
            <div className="text-sm text-gray-600">
              {feature.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;