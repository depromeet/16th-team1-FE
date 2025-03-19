import { AxiosResponse } from 'axios';

import { axiosInstance } from './service-config';
import { ReIssue } from '../types/auth';

const END_POINT = '/api/v1/reissue';

let refreshTokenPromise: Promise<AxiosResponse<ReIssue, unknown>> | undefined;

export const AuthServices = {
  postReIssue: async () => {
    if (refreshTokenPromise !== undefined) return;

    /** RTR 환경에서 strtictMode로 인한 API 2번 호출 문제 대응
     * - 에러의 경우 상위 컨텍스트에서 처리하고 있기에 별도로 catch를 작성하지 않았으며
     * - 그럼에도 try finally를 적용한 이유는 에러가 발생했을 때도 refreshTokenPromise = undefined; 를 실행하기 위함
     */
    try {
      refreshTokenPromise = axiosInstance.post<ReIssue>(END_POINT);
      const response = await refreshTokenPromise;
      const { accessToken, expirationTime } = response.data.result;

      if (accessToken && expirationTime) {
        AuthServices.enrollAuthorizationHeader(accessToken);
        AuthServices.silentRefresh(expirationTime);
      }
    } finally {
      refreshTokenPromise = undefined;
    }
  },

  enrollAuthorizationHeader: (accessToken: string) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  },

  deleteAuthorizationHeader: () => {
    delete axiosInstance.defaults.headers.common['Authorization'];
  },

  silentRefresh: (JWT_EXPIRRY_MINUTE: string) => {
    const refreshTime = (Number(JWT_EXPIRRY_MINUTE) - 60) * 1000;
    setTimeout(AuthServices.postReIssue, refreshTime);
  },

  getUserInfo: async (END_POINT: string) => {},

  updateUserinfo: () => {},
};
