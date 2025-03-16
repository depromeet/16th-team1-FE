import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});
axios.defaults.withCredentials = true;
