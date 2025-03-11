import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL, // http://211.188.53.83:8080
  baseURL: '',
});
