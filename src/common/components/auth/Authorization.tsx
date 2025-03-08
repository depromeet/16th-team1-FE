import { ReactNode } from 'react';

interface AuthorizationProps {
  children: ReactNode;
}

function Authorization({ children }: AuthorizationProps) {
  return <>{children}</>;
}

export default Authorization;
