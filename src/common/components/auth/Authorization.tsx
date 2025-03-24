import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { AUTH_SERVICE } from '@/common/services/auth';
import { useUserStore } from '@/store/user-auth';

function Authorization() {
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useUserStore();

  useEffect(() => {
    const authCylcle = async () => {
      try {
        /** 전역 상태에 유저 정보가 없다면 인증 싸이클 진행  */
        if (userInfo === null || !isAuthenticated) {
          await AUTH_SERVICE.authenticate();
        }
      } catch (e: unknown) {
        navigate('/login?rollback=true');
      }
    };

    authCylcle();
  }, [navigate, isAuthenticated, userInfo]);

  if (isAuthenticated && userInfo) return <Outlet />;
  return null;
}

export default Authorization;
