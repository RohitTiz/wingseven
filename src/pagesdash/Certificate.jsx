import React, { useEffect, useState } from "react";
import Header from "../componentsdash/DashHeader";

const Certificate = () => {
  const [certificateData, setCertificateData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCertificateData({
        studentName: "Mark Brown",
        courseName: "UI/UX Bootcamp",
        instructorName: "Alexa Bright",
        directorName: "Notes n Frames"
      });
    }, 1000);
  }, []);

  return (
    <>
      <Header/>
      {!certificateData ? (
        <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading certificate...</div>
      ) : (
        <div className="flex flex-col items-center mt-8 px-2">
          <div className="bg-purple-900 border-4 border-purple-400 rounded-2xl p-6 md:p-12 text-white w-full max-w-3xl shadow-2xl relative">
            <h1 className="text-yellow-400 font-bold text-2xl md:text-4xl text-center mb-2 font-pacifico">Certificate of Achievement</h1>
            <p className="text-center text-base md:text-lg">This certificate is proudly presented to</p>
            <h2 className="text-purple-200 text-xl md:text-3xl text-center my-4 font-bold">{certificateData.studentName}</h2>
            <hr className="border-white my-2 md:my-4" />
            <p className="text-center text-base md:text-lg mb-2">
              for successfully completing the <b>{certificateData.courseName}</b> organized by <b>NotesnFrames</b>.
            </p>
            <p className="text-center text-sm md:text-base mb-6">
              This certificate is awarded in recognition of their dedication, creativity, and excellence in mastering User Interface and User Experience design principles.
            </p>
            <div className="flex flex-col md:flex-row justify-end mt-8 gap-8 md:gap-2">
              <div className="flex flex-col items-center">
                <div className="font-pacifico text-lg md:text-xl border-b border-white w-40 text-center mb-1">{certificateData.instructorName}</div>
                <div className="text-center text-xs md:text-sm">Course Instructor</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-pacifico text-lg md:text-xl border-b border-white w-40 text-center mb-1">{certificateData.directorName}</div>
                <div className="text-center text-xs md:text-sm">Program Director</div>
              </div>
            </div>
          </div>
          <button className="mt-8 px-8 py-3 text-lg rounded-lg border-2 border-purple-900 bg-white text-purple-900 hover:bg-purple-900 hover:text-white transition-colors font-semibold">Download</button>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
            .font-pacifico { font-family: 'Pacifico', cursive; }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Certificate;
