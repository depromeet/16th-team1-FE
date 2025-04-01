import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useAuthCycle } from '@/common/hooks/use-auth-cycle';
import { axiosInstance } from '@/common/services/service-config';

function Authorization() {
  const { executeAuthCycle, createAuthCycle } = useAuthCycle();

  useEffect(() => {
    const controller = new AbortController();
    const options = createAuthCycle().build();

    // 인증 싸이클 실행
    executeAuthCycle(options);

    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = '/login?rollback=true';
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
      controller.abort();
    };
  }, []);
  return <Outlet />;
}

export default Authorization;
