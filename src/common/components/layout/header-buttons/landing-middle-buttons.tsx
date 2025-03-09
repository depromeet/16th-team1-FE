import { css, useTheme } from '@emotion/react';

import { Button } from '@/common/components/button/Button';

import * as styles from './landing-middle-buttons.styles';

function LandingMiddleButtons() {
  const theme = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div css={styles.container}>
      <Button
        size="small"
        usage="text"
        variant="text"
        css={css`
          color: ${theme.colors.GRAY[500]};
        `}
        onClick={() => scrollToSection('start-section')}
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
        onClick={() => scrollToSection('features-section')}
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
        onClick={() => scrollToSection('help-section')}
      >
        Help
      </Button>
    </div>
  );
}

export default LandingMiddleButtons;
