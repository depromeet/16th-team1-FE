import { useEffect } from 'react';

import { axiosInstance } from '../services/service-config';

export const useAuth = () => {
  useEffect(() => {
    const endPoint = '/api/v1/reissue';
    const getToken = async () => {
      const response = await axiosInstance.post(endPoint);
      console.log(response.data);
    };
    getToken();
  }, []);
};
