import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import { Button } from '@/common/components/button/Button';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './landing-auth-buttons.styles';

function LandingAuthButtons() {
  const navigate = useNavigate();
  const { isMobile } = useDeviceType();
  return (
    <div css={styles.container}>
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
    </div>
  );
}

export default LandingAuthButtons;
