import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useAuthCycle, useClearAuth } from '@/common/hooks/use-auth-cycle';
import { axiosInstance } from '@/common/services/service-config';
import { useAuthStore } from '@/store/user-auth';

function Authorization() {
  const navigate = useNavigate();
  const { executeAuthCycle, createAuthCycle } = useAuthCycle();
  const { clearAuthInfo } = useClearAuth();

  const { isLogin } = useAuthStore();

  useEffect(() => {
    const controller = new AbortController();

    // 일반적인 인증 싸이클 빌더 옵션 적용
    const options = createAuthCycle().build();

    // 인증 싸이클 실행
    executeAuthCycle(options);

    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          clearAuthInfo();
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
  return isLogin && <Outlet />;
}

export default Authorization;
