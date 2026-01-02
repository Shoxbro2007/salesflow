// frontend/src/components/LeadList.tsx
import { useState, useEffect } from 'react';
import { fetchLeads, createLead } from '../api/api';
import LeadForm from './LeadForm';
import { Lead } from '../api/api';

const LeadList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [token] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    const loadLeads = async () => {
      if (token) {
        const data = await fetchLeads(token);
        setLeads(data);
      }
    };
    loadLeads();
  }, [token]);

  const handleAddLead = async (newLead: Omit<Lead, 'id'>) => {
    if (token) {
      const createdLead = await createLead({ ...newLead }, token);
      setLeads([...leads, createdLead]);
    }
  };

  return (
    <div className="lead-list">
      <h2>Список клиентов</h2>
      <LeadForm onAdd={handleAddLead} />
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            <strong>{lead.name}</strong> — {lead.email}, {lead.phone}, {lead.status_display || lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
