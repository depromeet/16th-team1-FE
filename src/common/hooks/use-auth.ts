import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { AuthServices } from '../services/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const endPoint = '/api/v1/reissue';
    const authCylcle = async () => {
      try {
        await AuthServices.postReIssue(endPoint);
        await AuthServices.getUserInfo('');
        AuthServices.updateUserinfo();
      } catch (e: unknown) {
        // 위의 기본 인증 싸이클에 하나라도 에러가 터진다면 로그인 페이지로 리다이렉션
        navigate('/login');
      }
    };

    authCylcle();
  }, []);
};
