import React from 'react';

///earn certificate and best cources section which is just after the partners logo

const cards = [
  {
    title: 'Earn a Certificate',
    description: 'Get the right professional certificate program for you.',
    button: 'View Programs',
    bgImage:
      'https://media.istockphoto.com/id/2160707342/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=UKdF7StmfHxqV5Tm7yaaq9QuP6iJKkYoS3H4nhGOox4=', // professional laptop work
    avatar:
    'https://media.istockphoto.com/id/1472825782/photo/3d-minimal-team-collaboration-team-discussion-icon-work-together-3d-illustration.jpg?s=612x612&w=0&k=20&c=ZWDqK5Bl3ekUYU7l7x5ke1zWVEtfabh9j83IDnM2DIU='
  },
  {
    title: 'Best Rated Courses',
    description: 'Enroll now in the most popular and best rated courses.',
    button: 'View Courses',
    bgImage:
      'https://media.istockphoto.com/id/649346048/photo/working-through-some-concepts.webp?a=1&b=1&s=612x612&w=0&k=20&c=nl4_bQVZQbt6RHrqrLX3AjYWoZY3Up0eGitTOClwBj4=', // student learning
    avatar:
      'https://media.istockphoto.com/id/1472825782/photo/3d-minimal-team-collaboration-team-discussion-icon-work-together-3d-illustration.jpg?s=612x612&w=0&k=20&c=ZWDqK5Bl3ekUYU7l7x5ke1zWVEtfabh9j83IDnM2DIU='
  },
];

const NineSec = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Background Image */}
          <img
            src={card.bgImage}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 z-10" />
          {/* Content */}
          <div className="relative z-20 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={card.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full border-2 border-white shadow"
                />
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
              <p className="text-white/80 mb-6">{card.description}</p>
            </div>
            <button className="self-start bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-yellow-300 transition">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NineSec;
