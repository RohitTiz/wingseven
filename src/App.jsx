// App.jsx
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePagee from "./components/HomePagee";
import AboutPage from "./pages/AboutPage";
import Coursespage from "./pages/Coursespage";
import BlogArticlePage from './pages/BlogArticlePage';
import BlogPage from './pages/Blogpa';
import Testimon from './pages/Testimon';

import CourseCard from './components/CourseCard';
import EnrollNow from './components/EnrollNow';
import CourseDetails from './components/CourseDetails';
import Checkout from './components/Checkout';
import AuthSection from './components/AuthSection';

// Dashboard components
import DashboardLayout from './layout/dashboard';
import { StudyMaterials } from './pagesdash/StudyMaterials';
import { Questions } from './pagesdash/Questions';
import { CoursePage } from './pagesdash/CoursePage';
import Certificate from './pagesdash/Certificate';
import QuizResultHistory from './pagesdash/QuizResultHistory';
import DashPanel from './pagesdash/DashPanel';
import InsideCourse from './pagesdash/InsideCourse';
import CourseCards from './componentsdash/CourseCards';
import EditProfile from './pagesdash/EditProfile'; // Add this import

// Admin components
import AdminLayout from './admin/layout/AdminLayout';
import AdminDashboard from './admin/pages/Dashboard';
import AdminCourses from './admin/pages/Courses';
import AdminUsers from './admin/pages/Users';
import AdminEnrollments from './admin/pages/Enrollments';
import AdminAnalytics from './admin/pages/Analytics';

// Import blog data
import blogData from './data/blogdata';
import { ProfileProvider } from './context/ProfileContext'; // Add this import

const App = () => {
  return (
    <ProfileProvider>
      <div className="app-container">
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<HomePagee />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Course" element={<Coursespage />} />
          <Route path="/specializations/:id" element={<BlogArticlePage />} />
          <Route path="/specializations" element={<BlogPage />} />
          <Route path="/testimonials" element={<Testimon />} /> 
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/enroll-now" element={<EnrollNow />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashPanel />} />
            <Route path="overview" element={<DashPanel />} />
            <Route path="study-materials" element={<StudyMaterials />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="questions" element={<Questions />} />
            <Route path="courses" element={<CourseCards />} />
            <Route path="courses/:id" element={<InsideCourse />} />
            <Route path="quizresult" element={<QuizResultHistory />} />
            <Route path="edit-profile" element={<EditProfile />} /> {/* Add this route */}
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="enrollments" element={<AdminEnrollments />} />
            <Route path="analytics" element={<AdminAnalytics />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ProfileProvider>
  );
};

// 404 Component
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you're looking for doesn't exist...
      </p>
      <a 
        href="/" 
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Return Home
      </a>
    </div>
  );
};

export default App;