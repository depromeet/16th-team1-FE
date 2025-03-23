import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { AUTH_SERVICE } from '@/common/services/auth';
import { useUserStore } from '@/store/user-auth';

interface AuthorizationProps {
  children: ReactNode;
}

function Authorization({ children }: AuthorizationProps) {
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

  if (isAuthenticated && userInfo) return <>{children}</>;
  return null;
}
// while에서 토큰 재발급 -> setInterval or setTimeout? && 뒷정리

export default Authorization;
