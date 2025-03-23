import { ReactNode } from 'react';

import { useAuth } from '@/common/hooks/use-auth';

interface AuthorizationProps {
  children: ReactNode;
}

function Authorization({ children }: AuthorizationProps) {
  useAuth();
  return <>{children}</>;
}

export default Authorization;
