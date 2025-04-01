import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useAuthCycle, useLogout } from '@/common/hooks/use-auth-cycle';
import { axiosInstance } from '@/common/services/service-config';

function Authorization() {
  const navigate = useNavigate();
  const { executeAuthCycle, createAuthCycle } = useAuthCycle();
  const { logout } = useLogout();

  useEffect(() => {
    const controller = new AbortController();
    const options = createAuthCycle().build();

    // 인증 싸이클 실행
    executeAuthCycle(options);

    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          logout(options.logoutEndPoint);
          navigate('/login?rollback=true');
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
