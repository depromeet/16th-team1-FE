import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useAuthBuilder } from '@/common/hooks/use-auth-builder';
import { axiosInstance } from '@/common/services/service-config';

function Authorization() {
  const AuthPagesBuilder = useAuthBuilder('AuthPages');

  useEffect(() => {
    AuthPagesBuilder();

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
    };
  }, [AuthPagesBuilder]);

  return <Outlet />;
}

export default Authorization;
