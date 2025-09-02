// componentsdash/courseContent.jsx
import React, { useState } from 'react';

const CourseContent = ({ courseContent }) => {
  const [openIndex, setOpenIndex] = useState(0);

  // Default content if no courseContent is provided
  const defaultContent = [
    {
      title: "01: Intro",
      duration: "22 min",
      lectures: [
        { title: "Introduction", duration: "2 min" },
        { title: "What is this about?", duration: "5 min" },
        { title: "Understanding the basics", duration: "12 min" },
        { title: "Interface tour", duration: "3 min" }
      ]
    },
    {
      title: "02: Intermediate Level Stuff",
      duration: "11.20 min",
      lectures: []
    },
    {
      title: "03: Advanced Stuff",
      duration: "36 min",
      lectures: []
    },
    {
      title: "04: Imports & Graphics",
      duration: "40 min",
      lectures: []
    },
    {
      title: "05: Components",
      duration: "11.12 min",
      lectures: []
    },
    {
      title: "06: Styles",
      duration: "41 min",
      lectures: []
    },
    {
      title: "07: Summary",
      duration: "8 min",
      lectures: []
    }
  ];

  const contentToUse = courseContent || defaultContent;

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full">
      <div className="text-lg font-bold mb-4">Course content</div>
      {contentToUse.map((section, idx) => (
        <div key={idx} className="mb-2 border-b last:border-b-0">
          <button
            className={`w-full grid grid-cols-[1fr_minmax(60px,110px)_32px] items-center py-3 text-left transition-colors group`}
            onClick={() => handleToggle(idx)}
          >
            <span className={`font-bold text-base truncate ${openIndex === idx ? 'text-[#7C3AED]' : 'text-gray-800'}`}>
              {section.title}
            </span>
            <span className="text-sm font-normal text-gray-500 pl-2 whitespace-nowrap text-right">
              {section.duration}
            </span>
            <span className="flex justify-end pl-2">
              <svg
                className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180 text-[#7C3AED]' : 'text-gray-400'}`}
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {openIndex === idx && section.lectures && section.lectures.length > 0 && (
            <div className="pt-2 pb-2 flex flex-col gap-2">
              {section.lectures.map((lec, lidx) => (
                <div
                  key={lidx}
                  className="flex items-center bg-[#F8F9FB] rounded-lg px-4 py-3 shadow-sm border border-gray-100"
                >
                  <span className="mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </span>
                  <span className="flex-1 text-gray-800 font-medium">{lec.title}</span>
                  <span className="text-xs text-gray-400 font-semibold">{lec.duration}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseContent;