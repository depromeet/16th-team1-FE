import { css, useTheme } from '@emotion/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { Button } from '@/common/components/button/Button';
import { scrollToSection } from '@/common/utils/scroll-to-section';

import * as styles from './landing-middle-buttons.styles';

gsap.registerPlugin(ScrollToPlugin);

function LandingMiddleButtons() {
  const theme = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const projectsContainer = document.getElementById('projects-container');

    if (element) {
      if (id === 'help-section') {
        // 기존 scrollIntoView 메서드로는 중간 가로 스크롤 영역 때문에 제대로 동작하지 않음.
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: element.offsetTop + (projectsContainer?.clientWidth || 0) * 4,
          },
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
