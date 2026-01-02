// src/api/api.ts
import axios from 'axios';

const API_URL = 'https://salesflow-backend-urx1.onrender.com';


interface LoginData {
  username: string;
  password: string;
}

interface TokenResponse {
  access: string;
  refresh: string;
  username: string;
}

export const login = async (data: LoginData): Promise<TokenResponse> => {
  const response = await axios.post<TokenResponse>(`${API_URL}/api/token/`, data);
  return response.data;
};

export const fetchLeads = async (token: string) => {
  const response = await axios.get(`${API_URL}/api/leads/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createLead = async (lead: { name: string; email: string; phone: string; status: string }, token: string) => {
  const response = await axios.post(`${API_URL}/api/leads/`, lead, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
