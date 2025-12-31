// src/pages/LeadsPage.tsx
import React from 'react';
import LeadList from '../components/LeadList';

const LeadsPage: React.FC = () => {
  return (
    <div className="leads-page">
      <h1>Панель клиентов</h1>
      <LeadList />
    </div>
  );
};

export default LeadsPage;

