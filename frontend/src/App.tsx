// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LeadsPage from './pages/LeadsPage';
import { Navigate } from 'react-router-dom';

const App: React.FC = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('access');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/leads"
          element={isAuthenticated() ? <LeadsPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

