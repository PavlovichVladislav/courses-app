import axios from 'axios';
import { USER_LS_KEY } from 'shared/const/localStorage';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(USER_LS_KEY) || '',
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem(USER_LS_KEY) || '';

  return config;
});
