import React, { useState } from 'react';

const tabs = [
  { label: 'Overview', key: 'overview' },
  { label: 'Author', key: 'author' },
  { label: 'FAQ', key: 'faq' },
  { label: 'Announcements', key: 'announcements' },
  { label: 'Reviews', key: 'reviews' },
];

const tabContent = {
  overview: (
    <div>
      <div className="font-bold text-lg mb-2">About Course</div>
      <div className="text-gray-700 mb-4">
        Unlock the power of Figma, the leading collaborative design tool, with our comprehensive online course. Whether you're a novice or looking to enhance your skills, this course will guide you through Figma's robust features and workflows.<br/><br/>
        Perfect for UI/UX designers, product managers, and anyone interested in modern design tools. Join us to elevate your design skills and boost your productivity with Figma!
      </div>
      <div className="font-semibold mb-2">What You'll Learn</div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>✔ Setting up the environment</div>
        <div>✔ Understand HTML Programming</div>
        <div>✔ Advanced HTML Practices</div>
        <div>✔ Code HTML</div>
        <div>✔ Build a portfolio website</div>
        <div>✔ Start building beautiful websites</div>
      </div>
    </div>
  ),
  author: (
    <div className="flex items-center gap-4">
      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" className="w-14 h-14 rounded-full object-cover" />
      <div>
        <div className="font-bold">Crystal Lucas <span className="ml-1 text-blue-500">✔</span></div>
        <div className="text-xs text-gray-500 mb-1">UI/UX Specialist</div>
        <div className="flex items-center text-sm">
          <span className="text-yellow-400 mr-1">★</span> 4.8
        </div>
      </div>
    </div>
  ),
  faq: (
    <div>
      <div className="font-semibold mb-1">Q: Is this course beginner friendly?</div>
      <div className="text-gray-700 mb-2">A: Yes! This course is designed for all levels.</div>
      <div className="font-semibold mb-1">Q: Do I need Figma installed?</div>
      <div className="text-gray-700">A: No, Figma is browser-based and free to start.</div>
    </div>
  ),
  announcements: (
    <div className="text-gray-700">No announcements yet.</div>
  ),
  reviews: (
    <div className="text-gray-700">No reviews yet.</div>
  ),
};

const MoreInfo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full mt-6">
      <div className="flex gap-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 font-medium transition-colors border-b-2 -mb-px ${activeTab === tab.key ? 'border-[#7C3AED] text-[#7C3AED]' : 'border-transparent text-gray-600 hover:text-[#7C3AED]'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-2 min-h-[120px]">{tabContent[activeTab]}</div>
    </div>
  );
};

export default MoreInfo;
