// frontend/src/components/LeadForm.tsx
import { useState } from 'react';

interface LeadFormProps {
  onAdd: (lead: { name: string; email: string; phone: string; status: string }) => void;
}

const LeadForm = ({ onAdd }: LeadFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('new');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, email, phone, status });
    setName('');
    setEmail('');
    setPhone('');
    setStatus('new');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="new">Новый</option>
        <option value="in_progress">В работе</option>
        <option value="converted">Переведён</option>
        <option value="lost">Потерян</option>
      </select>
      <button type="submit">Добавить клиента</button>
    </form>
  );
};

export default LeadForm;
