import React, { useState } from 'react'
import VideoContent from '../componentsdash/videoContent'
import MoreInfo from '../componentsdash/moreInfo'
import CourseContent from '../componentsdash/courseContent'
import Header from '../componentsdash/DashHeader'
import { coursesData } from '../data/coursesData'

export const CoursePage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Use the first course as an example for this page
  const course = coursesData[0];
  
  // Set the first video as default when component loads
  React.useEffect(() => {
    if (course && course.courseContent && course.courseContent.length > 0) {
      const firstSection = course.courseContent[0];
      if (firstSection.lectures && firstSection.lectures.length > 0) {
        setSelectedVideo(firstSection.lectures[0]);
      }
    }
  }, [course]);
  
  return (
    <>
      <Header showActions={true}/>
      <div className="flex flex-col md:flex-row gap-8 p-6 bg-[#F6F8FA] min-h-screen">
        <div className="flex-1 max-w-2xl mx-auto md:mx-0">
          <VideoContent course={course} selectedVideo={selectedVideo} />
          <MoreInfo course={course} />
        </div>
        <div className="w-full md:w-[340px] flex-shrink-0 mx-auto md:mx-0">
          <CourseContent 
            courseContent={course.courseContent} 
            onVideoSelect={setSelectedVideo}
          />
        </div>
      </div>
    </>
  )
}