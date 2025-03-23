import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});
axios.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      window.location.href = '/login?rollback=true';
    }
    return Promise.reject(error);
  },
);
