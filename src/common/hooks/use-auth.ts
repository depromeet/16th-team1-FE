import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useUserStore } from '@/store/user-auth';

import { AUTH_SERVICE } from '../services/auth';

export const useAuth = () => {
  const { userInfo, isAuthenticated } = useUserStore();
  console.log(userInfo);
  console.log(isAuthenticated);

  const navigate = useNavigate();
  useEffect(() => {
    const authCylcle = async () => {
      try {
        // 1. 전역 상태로 유저 정보 확인

        // 2. 로그인 인증 싸이클 진행
        const auth = AUTH_SERVICE;
        await auth.authenticate();
      } catch (e: unknown) {
        /** 위의 인증 싸이클에 하나라도 에러가 터진다면 로그인 페이지로 리다이렉션 */
        navigate('/login');
      }
    };

    authCylcle();
  }, []);
};
