import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './App.css';
import { ProfileProvider } from './context/ProfileContext'; // Add this import

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider> {/* Wrap your App with ProfileProvider */}
        <App />
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);