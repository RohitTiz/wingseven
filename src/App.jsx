import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import HomePagee from "./components/HomePagee"
import AboutPage from "./pages/AboutPage"
import Coursespage from "./pages/Coursespage"
import SpecializationsPage from"./pages/SpecializationsPage"
import CourseCard from './components/CourseCard';
import EnrollNow from './components/EnrollNow';
import CourseDetails from './components/CourseDetails';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePagee />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/Course" element={<Coursespage />}/>
          <Route path="/Specializations" element={<SpecializationsPage />}/>
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/enroll-now" element={<EnrollNow />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        
    
        </Routes>
      </Router>
    </div>
     
    </>
  );
};

export default App;
