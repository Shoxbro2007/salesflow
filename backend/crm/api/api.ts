// frontend/src/api/api.ts

// Базовый URL для API
const API_URL = 'http://localhost:8000/api';

// Общие заголовки
const getHeaders = () => {
  const token = localStorage.getItem('access');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

// === Аутентификация ===
export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

// === Клиенты (Leads) ===
export const fetchLeads = async () => {
  const response = await fetch(`${API_URL}/leads/`, {
    headers: getHeaders(),
  });
  return await response.json();
};

export const addLead = async (data: {
  name: string;
  email: string;
  phone: string;
}) => {
  const response = await fetch(`${API_URL}/leads/`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return await response.json();
};
