// pagesdash/AssignmentsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentsdash/DashHeader';
import { useDarkMode } from '../context/DarkModeContext';

const AssignmentsPage = () => {
  const { id } = useParams();
  const { darkMode } = useDarkMode();

  return (
    <>
      <Header showActions={false} courseTitle={`Assignments for Course ${id}`} />
      <div className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark-bg dark-text' : 'light-bg dark-text'
      }`}>
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>
        <p>This is the assignments page for course {id}.</p>
        {/* Add your assignments content here */}
      </div>
    </>
  );
};

export default AssignmentsPage;