import { Outlet } from 'react-router';

import { useAuth } from '@/common/hooks/use-page-auth-service';

function Authorization() {
  useAuth();
  return <Outlet />;
}

export default Authorization;
