import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useUserStore } from '@/store/user-auth';

import { AUTH_SERVICE } from '../services/auth';

export const useAuth = () => {
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
        // 위의 인증 싸이클에 하나라도 에러가 터진다면 로그인 페이지로 리다이렉션
        navigate('/login?rollback=true');
      }
    };

    authCylcle();
  }, [navigate, isAuthenticated, userInfo]);
};
