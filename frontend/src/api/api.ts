// src/api/api.ts

const API_URL = 'https://salesflow-backend-bn0i.onrender.com';


// Получить заголовки с токеном
const getHeaders = () => {
  const token = localStorage.getItem('access');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

// 🔐 Авторизация
export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

// 📋 Получить всех лидов
export const fetchLeads = async () => {
  const response = await fetch(`${API_URL}/leads/`, {
    headers: getHeaders(),
  });
  if (!response.ok) throw new Error('Ошибка загрузки лидов');
  return await response.json();
};

// ➕ Добавить нового лида (с учётом статуса)
export const addLead = async (data: {
  name: string;
  email: string;
  phone: string;
  status: string;
}) => {
  const response = await fetch(`${API_URL}/leads/`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Ошибка добавления лида');
  return await response.json();
};
