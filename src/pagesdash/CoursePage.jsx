import React from 'react'
import VideoContent from '../componentsdash/videoContent'
import MoreInfo from '../componentsdash/moreInfo'
import CourseContent from '../componentsdash/courseContent'
import Header from '../componentsdash/DashHeader'

export const CoursePage = () => {
  return (
    <>
      <Header showActions={true}/>
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-[#F6F8FA] min-h-screen">
          <div className="flex-1 max-w-2xl mx-auto md:mx-0">
            <VideoContent />
            <MoreInfo />
          </div>
          <div className="w-full md:w-[340px] flex-shrink-0 mx-auto md:mx-0">
            <CourseContent />
          </div>
    </div>
    </>
  )
}
