import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { AUTH_SERVICE } from '@/common/services/auth';
import { useUserStore } from '@/store/user-auth';

function Authorization() {
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useUserStore();

  useEffect(() => {
    const authCylcle = async () => {
      await AUTH_SERVICE.authenticate();
    };

    authCylcle();
  }, [navigate, isAuthenticated, userInfo]);

  return <Outlet />;
}

export default Authorization;
