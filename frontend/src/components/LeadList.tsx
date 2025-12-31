// src/components/LeadList.tsx
import React, { useState, useEffect } from 'react';
import { fetchLeads, addLead } from '../api/api';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  status_display: string;
  created_at: string;
}

const LeadList: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const data = await fetchLeads();
      setLeads(data);
    } catch (err) {
      alert('Ошибка загрузки клиентов');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addLead({ name, email, phone, status });
      setName('');
      setEmail('');
      setPhone('');
      setStatus('new');
      loadLeads();
    } catch (err) {
      alert('Ошибка добавления клиента');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'blue';
      case 'in_progress': return 'orange';
      case 'converted': return 'green';
      case 'lost': return 'red';
      default: return 'gray';
    }
  };

  const handleExport = () => {
    const headers = ['Имя', 'Email', 'Телефон', 'Статус', 'Дата'];
    const csv = [
      headers.join(';'),
      ...leads.map(lead => 
        `${lead.name};${lead.email};${lead.phone || ''};${lead.status_display};${new Date(lead.created_at).toLocaleDateString('ru-RU')}`
      )
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'leads.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lead-list">
      <h2>Клиенты</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="new">Новый</option>
          <option value="in_progress">В работе</option>
          <option value="converted">Сделка</option>
          <option value="lost">Отказ</option>
        </select>

        <button type="submit">Добавить</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleExport} style={{ padding: '8px 12px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>
          Экспорт в CSV
        </button>
      </div>

      <ul style={{ marginTop: '20px' }}>
        {leads.map((lead) => (
          <li key={lead.id} style={{ marginBottom: '8px', padding: '10px', border: '1px solid #eee', borderRadius: '4px' }}>
            <strong>{lead.name}</strong> — {lead.email}
            {lead.phone && <span> ({lead.phone})</span>}
            <span style={{ 
              marginLeft: '10px', 
              color: getStatusColor(lead.status),
              fontWeight: 'bold' 
            }}>
              [{lead.status_display}]
            </span>
            <small style={{ color: '#999', marginLeft: '10px' }}>
              {new Date(lead.created_at).toLocaleDateString('ru-RU')}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;


