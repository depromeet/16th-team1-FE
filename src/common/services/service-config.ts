import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://211.188.53.83:8080',
});
