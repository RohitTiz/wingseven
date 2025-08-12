import React, { useState } from 'react';
import Header from '../componentsdash/DashHeader';
import {modules} from '../dummydata/dummydata'
import QuizResult from '../componentsdash/QuizResult';


const QuizResultHistory = () => {
  const [selectedCourse, setSelectedCourse] = useState('Select Course');
  const [search, setSearch] = useState('');

  return (
    <>
      <Header />
      <div className="mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <select
              className="border border-gray-300 rounded px-4 py-2 bg-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={selectedCourse}
              onChange={e => setSelectedCourse(e.target.value)}
            >
              <option value="Select Course">Select Course</option>
              <option value="Menu option 1">Menu option 1</option>
              <option value="Menu option 2">Menu option 2</option>
              <option value="Menu option 3">Menu option 3</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full md:w-64 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="bg-gray-100 p-2 rounded ml-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg mt-2 md:mt-0">Modules</div>

          {modules.filter(m => m.name.toLowerCase().includes(search.toLowerCase())).map((mod, idx) => (
            <div key={idx} className="flex items-center bg-white rounded-xl shadow p-4 gap-4 hover:shadow-md transition">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${mod.color}`}>
                <img src={mod.icon} alt={mod.name} className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg mb-1">{mod.name}</div>
                <div className="text-gray-500 text-sm">{mod.questions} Question</div>
              </div>
              <div className={`flex items-center justify-center w-16 h-16 rounded-full ring-4 ${mod.ring} bg-white`}>
                <span className={`font-bold text-lg ${mod.text}`}>{mod.score}/30</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizResultHistory; 