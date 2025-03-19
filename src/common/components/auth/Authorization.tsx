import { ReactNode } from 'react';

import { useAuth } from '@/common/hooks/use-auth';

interface AuthorizationProps {
  children: ReactNode;
}

// accessToken은 휘발성이 너무 강해서 이걸 기반으로 체크하는건 안될듯?
function Authorization({ children }: AuthorizationProps) {
  // (토큰 베어러 등록 => 내 정보 API 호출 및 전역상태 등록 => setTimeout으로 slientRefresh) >> 로그인 싸이클
  // 1. (페이지마다 reissue API 호출 >> 로그인 싸이클)
  // 2. slientRefresh는 1번 로직 진행

  // 3. 위 과정에서 하나라도 401이 발생한다면 /login 페이지로 튕김
  useAuth();

  return <>{children}</>;
}

export default Authorization;
