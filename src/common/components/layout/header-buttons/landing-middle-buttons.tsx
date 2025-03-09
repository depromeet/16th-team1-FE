import { css, useTheme } from '@emotion/react';

import { Button } from '@/common/components/button/Button';

import * as styles from './landing-middle-buttons.styles';

function LandingMiddleButtons() {
  const theme = useTheme();
  return (
    <div css={styles.container}>
      <Button
        size="small"
        usage="text"
        variant="text"
        css={css`
          color: ${theme.colors.GRAY[500]};
        `}
      >
        Start
      </Button>
      <Button
        size="small"
        usage="text"
        variant="text"
        css={css`
          color: ${theme.colors.GRAY[500]};
        `}
      >
        Features
      </Button>
      <Button
        size="small"
        usage="text"
        variant="text"
        css={css`
          color: ${theme.colors.GRAY[500]};
        `}
      >
        Help
      </Button>
    </div>
  );
}

export default LandingMiddleButtons;
