import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import { Button } from '@/common/components/button/Button';
import { useAuthStore } from '@/store/user-auth';

import AuthProfileMenu from '../auth-profile-menu';

import * as styles from './landing-auth-buttons.styles';

function LandingAuthButtons() {
  const navigate = useNavigate();

  const { isLogin } = useAuthStore();
  return (
    <div css={styles.container}>
      {isLogin ? (
        <AuthProfileMenu />
      ) : (
        <Button
          size="small"
          variant="primary"
          usage="text"
          onClick={() => navigate('/login')}
          css={css`
            width: 8.1rem;
            height: 3.4rem;
          `}
        >
          Login
        </Button>
      )}
    </div>
  );
}

export default LandingAuthButtons;
