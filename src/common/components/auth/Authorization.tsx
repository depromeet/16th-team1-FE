import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { AUTH_SERVICE } from '@/common/services/auth';
import { axiosInstance } from '@/common/services/service-config';
import { useUserStore } from '@/store/user-auth';

function Authorization() {
  // const navigate = useNavigate();
  // const { isAuthenticated, userInfo } = useUserStore();

  // useEffect(() => {
  //   const authCylcle = async () => {
  //     await AUTH_SERVICE.authenticate();
  //   };

  //   authCylcle();
  // }, [navigate, isAuthenticated, userInfo]);

  useEffect(() => {
    (async () => {
      try {
        // 인증 기반 페이지에서는 표준 인증 사이클 사용
        await AUTH_SERVICE.createAuthCycle().execute();
      } catch (e) {
        console.error(e);
      }
    })();

    // Axios 인터셉터 설정 (401 에러 시 로그인 페이지로 리다이렉트)
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 && window.location.pathname !== '/login') {
          window.location.href = '/login?rollback=true';
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);

  return <Outlet />;
}

export default Authorization;
