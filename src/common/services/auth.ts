import axios from 'axios';

import { axiosInstance } from './service-config';
import { ReIssue } from '../types/auth';

export const AuthServices = {
  postReIssue: async (endPoint: string) => {
    const response = await axiosInstance.post<ReIssue>(endPoint);
    const { accessToken, expirationTime } = response.data.result;

    if (accessToken && expirationTime) {
      AuthServices.enrollAuthorizationHeader(accessToken);
      AuthServices.slientRefresh(expirationTime);
    }
  },

  enrollAuthorizationHeader: async (accessToken: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  },

  deleteAuthorizationHeader: async () => {
    delete axios.defaults.headers.common['Authorization'];
  },

  slientRefresh: (JWT_EXPIRRY_TIME: string) => {
    const refreshTime = Number(JWT_EXPIRRY_TIME) - 60000;
    setTimeout(AuthServices.postReIssue, refreshTime);
  },

  getUserInfo: async (endPoint: string) => {},

  updateUserinfo: () => {},
};
