import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import { Button } from '@/common/components/button/Button';
import useDeviceType from '@/common/hooks/use-device-type';
import { useAuthStore } from '@/store/user-auth';

import AuthProfileModalDropdown from '../auth-profile-modal-dropdown';

import * as styles from './landing-auth-buttons.styles';

function LandingAuthButtons() {
  const navigate = useNavigate();
  const { isMobile } = useDeviceType();
  const { isLogin } = useAuthStore();
  return (
    <div css={styles.container}>
      {isLogin ? (
        <AuthProfileModalDropdown />
      ) : (
        <>
          {!isMobile && (
            <Button
              size="small"
              variant="text"
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

          <Button
            size="small"
            variant="primary"
            usage="text"
            css={css`
              width: 8.1rem;
              height: 3.4rem;
            `}
          >
            Sign up
          </Button>
        </>
      )}
    </div>
  );
}

export default LandingAuthButtons;
