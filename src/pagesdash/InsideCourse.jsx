// pagesdash/InsideCourse.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoContent from '../componentsdash/videoContent';
import MoreInfo from '../componentsdash/moreInfo';
import CourseContent from '../componentsdash/courseContent'; // Make sure this matches exactly
import Header from '../componentsdash/DashHeader';
import { coursesData } from '../data/coursesData';

const InsideCourse = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Header showActions={true} courseTitle={course.title} />
      <div className="flex flex-col md:flex-row gap-8 p-6 bg-[#F6F8FA] min-h-screen">
        <div className="flex-1 max-w-2xl mx-auto md:mx-0">
          <VideoContent course={course} />
          <MoreInfo course={course} />
        </div>
        <div className="w-full md:w-[340px] flex-shrink-0 mx-auto md:mx-0">
          <CourseContent courseContent={course.courseContent} />
        </div>
      </div>
    </>
  );
};

export default InsideCourse;