import React from 'react';
import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import HomePagee from "./components/HomePagee";
import AboutPage from "./pages/AboutPage";
import Coursespage from "./pages/Coursespage";
import SpecializationsPage from "./pages/SpecializationsPage";
import CourseCard from './components/CourseCard';
import EnrollNow from './components/EnrollNow';
import CourseDetails from './components/CourseDetails';
import Checkout from './components/Checkout';


// Import all dashboard components
import DashboardLayout from './layout/dashboard';
import { StudyMaterials } from './pagesdash/StudyMaterials';
import { Questions } from './pagesdash/Questions';
import { CoursePage } from './pagesdash/CoursePage';
import Certificate from './pagesdash/Certificate';
import QuizResultHistory from './pagesdash/QuizResultHistory';

const App = () => {
  return (
    
    <div className="app-container">
      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<HomePagee />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Course" element={<Coursespage />} />
        <Route path="/Specializations" element={<SpecializationsPage />} />
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/enroll-now" element={<EnrollNow />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Dashboard Routes - All dashboard paths start with /dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<StudyMaterials />} /> Default dashboard view
          <Route path="study-materials" element={<StudyMaterials />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="questions" element={<Questions />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="quizresult" element={<QuizResultHistory />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    
  );
};

// Optional 404 component
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you're looking for doesn't existttt.
      </p>
    </div>
  );
};

export default App;