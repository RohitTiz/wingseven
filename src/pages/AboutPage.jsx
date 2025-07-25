import React, { useState, useEffect } from 'react';

import AuthSection from '../components/AuthSection';

const IconWrapper = ({ children }) => (
  <div className="w-8 h-8 text-white">{children}</div>
);

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '10,000+', label: 'Students Trained', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1m-6 6H2v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 100-8 4 4 0 000 8z" /></svg></IconWrapper>) },
    { number: '500+', label: 'Courses Offered', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6l-2 2m0 0l2 2m-2-2h8m-4 6h4m-4 0a2 2 0 110-4 2 2 0 010 4z" /></svg></IconWrapper>) },
    { number: '95%', label: 'Placement Rate', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z" /></svg></IconWrapper>) },
    { number: '50+', label: 'Industry Partners', icon: () => (<IconWrapper><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4.27 1.53 4.84 3.64C16.16 17.64 14.2 19 12 19s-4.16-1.36-4.84-3.36C7.73 13.53 9.72 12 12 12zM12 4c2.21 0 4 1.79 4 4 0 .74-.2 1.43-.55 2.03-.58.98-1.52 1.74-2.7 2.15-.17.05-.34.09-.52.12-.27.05-.55.08-.83.08-.28 0-.56-.03-.83-.08a4.963 4.963 0 01-.52-.12c-1.18-.41-2.12-1.17-2.7-2.15A3.978 3.978 0 018 8c0-2.21 1.79-4 4-4z" /></svg></IconWrapper>) }
  ];

  const features = [
    { icon: stats[0].icon, title: 'Expert Faculty', description: 'Learn from industry veterans with 10+ years of real-world experience' },
    { icon: stats[1].icon, title: 'Comprehensive Courses', description: 'From beginner to advanced levels across multiple technologies' },
    { icon: stats[2].icon, title: 'Guaranteed Internships', description: 'Every student gets hands-on experience with our partner companies' },
    { icon: stats[3].icon, title: 'Career Support', description: 'Dedicated placement assistance and career guidance' }
  ];

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To bridge the gap between academic learning and industry requirements by providing world-class education, practical training, and career opportunities that empower students to excel in their chosen fields.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To become the leading educational platform that transforms lives through technology education, creating a skilled workforce ready for the digital future.'
    },
    values: {
      title: 'Our Values',
      content: 'Excellence in education, integrity in practice, innovation in approach, and commitment to student success. We believe in fostering a culture of continuous learning and growth.'
    }
  };

  return (
    <>
      <AuthSection />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Remaining JSX content stays unchanged */}
      </div>
    </>
  );
};

export default AboutPage;
