import { css } from '@emotion/react';

import { theme } from '@/assets/styles/theme';
import { PageLabelKey } from '@/common/constants/path';

export const container = (pageLabel: PageLabelKey, isDesktop: boolean) => css`
  --background-bg: ${pageLabel === 'Landing' ? theme.colors.GRAY[1000] : theme.colors.GRAY.bg};
  --margin-top: ${isDesktop ? '0' : '4rem'};

  margin-top: 4rem;

  /* 가상 요소를 사용해 전체 배경을 지정 */
  &::before {
    position: fixed;
    inset: 0;
    z-index: -1;
    content: '';
    background-color: var(--background-bg);
  }
`;
