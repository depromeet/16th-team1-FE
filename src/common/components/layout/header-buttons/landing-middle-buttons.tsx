import { css, useTheme } from '@emotion/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { Button } from '@/common/components/button/Button';
import { scrollToSection } from '@/common/utils/scroll-to-section';

import * as styles from './landing-middle-buttons.styles';

gsap.registerPlugin(ScrollToPlugin);

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
