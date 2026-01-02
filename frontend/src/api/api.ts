// frontend/src/api/api.ts
import axios from 'axios';

const API_URL = 'https://salesflow-backend-urx1.onrender.com';

export interface Lead {
  id?: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  status_display?: string; // ✅ Добавлено
}

export interface LoginData {
  username: string;
  password: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
  username: string;
}

export const login = async (data: LoginData): Promise<TokenResponse> => {
  const response = await axios.post<TokenResponse>(`${API_URL}/api/token/`, data);
  return response.data;
};

export const fetchLeads = async (token: string) => {
  const response = await axios.get<Lead[]>(`${API_URL}/api/leads/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createLead = async (lead: Omit<Lead, 'id' | 'status_display'>, token: string): Promise<Lead> => {
  const response = await axios.post<Lead>(`${API_URL}/api/leads/`, lead, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
