import React from 'react';

const WhyJoinSection = () => {
  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with 5+ years of experience in AI, Web Dev, and Data Science.',
      highlight: 'Real-world expertise',
      image: 'https://images.unsplash.com/photo-1544739313-3b4137a6541b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjBjb21wYW55fGVufDB8fDB8fHww',
      bgColor: 'bg-green-200',
    },
    {
      title: '24/7 Chat Support',
      description: 'Instant doubt resolution with our technical support team available round the clock.',
      highlight: 'Never get stuck',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-purple-200',
    },
    {
      title: 'Industry-Ready Courses',
      description: 'Cutting-edge curriculum covering AI, Web Development, Data Science and Machine Learning.',
      highlight: 'Latest technologies',
      image: 'https://images.unsplash.com/photo-1540205428672-6322279185c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
      bgColor: 'bg-yellow-200',
    },
    {
      title: 'Internship Opportunities',
      description: 'Top performers get internship placements with our partner tech companies.',
      highlight: 'Career boost',
      image: 'https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
      bgColor: 'bg-blue-200',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose Let's Code Brain?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col justify-between"
            >
              <div className="p-5">
                <div className="inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-3">
                  {feature.highlight}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>

              <div className={`p-0 rounded-b-3xl overflow-hidden ${feature.bgColor}`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-36 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white hover:bg-gray-800 transition font-medium py-3 px-8 rounded-full text-sm">
            Explore Our Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;