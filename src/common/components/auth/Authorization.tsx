import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Cookies from 'js-cookie';

import { PAGE_URL } from '@/common/constants/path';
interface AuthorizationProps {
  children: ReactNode;
}

// 어디서든 refreshToken이 있으면 재발급
// 없으면 튕겨내면 될듯?
function Authorization({ children }: AuthorizationProps) {
  const navigate = useNavigate();
  const refreshToken = Cookies.get('aaa');

  useEffect(() => {
    if (refreshToken) {
      // 토근 발급
    } else {
      navigate(PAGE_URL.Login);
    }
  }, [refreshToken]);

  return <>{children}</>;
}

export default Authorization;
