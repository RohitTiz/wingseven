// componentsdash/CourseCards.jsx
import React from 'react';
import FreeCourseCard from './FreeCourseCard';
import LiveCourseCard from './LiveCourseCard';
import { coursesData } from '../data/coursesData';

const CourseCards = () => {
  return (
    <div className="p-6 bg-[#F6F8FA] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Course</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map(course => (
          course.type === 'free' 
            ? <FreeCourseCard key={course.id} course={course} />
            : <LiveCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCards;