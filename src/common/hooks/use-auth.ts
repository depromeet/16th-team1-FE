import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { AuthServices } from '../services/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authCylcle = async () => {
      try {
        // 전역 상태로 유저 정보 확인

        await AuthServices.postReIssue();
        // await AuthServices.getUserInfo('');
        // AuthServices.updateUserinfo();
      } catch (e: unknown) {
        // 위의 기본 인증 싸이클에 하나라도 에러가 터진다면 로그인 페이지로 리다이렉션
        navigate('/login');
      }
    };

    authCylcle();
  }, []);
};
