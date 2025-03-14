import { css } from '@emotion/react';

import { Button } from '@/common/components/button/Button';

import * as styles from './landing-auth-buttons.styles';

function LandingAuthButtons() {
  return (
    <div css={styles.container}>
      <Button
        size="small"
        variant="text"
        usage="text"
        css={css`
          width: 8.1rem;
          height: 3.4rem;
        `}
      >
        Login
      </Button>
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
