import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:20128/api',
});

// Request interceptor to add JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const contactService = {
  send: async (data) => {
    const response = await API.post('/contact', data);
    return response.data;
  },
};

export const authService = {
  login: async (credentials) => {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('adminToken');
  },
};

export const adminService = {
  getMessages: async () => {
    const response = await API.get('/contact');
    return response.data;
  },
  deleteMessage: async (id) => {
    const response = await API.delete(`/contact/${id}`);
    return response.data;
  },
};

export default API;
