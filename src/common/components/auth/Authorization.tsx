import { ReactNode } from 'react';

import { useAuth } from '@/common/hooks/use-auth';

interface AuthorizationProps {
  children: ReactNode;
}

// accessToken을 기반으로하는건 안될듯? 휘발성이 너무 강해서
// 어차피 accessToken이 사라지면 rt로 재발급을 항상 하는거라
// 인증 여부틑 rt로 해야할 것 같다.
// 401이 뜨면
function Authorization({ children }: AuthorizationProps) {
  useAuth();

  return <>{children}</>;
}

export default Authorization;
