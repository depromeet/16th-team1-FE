import { css } from '@emotion/react';

import { theme } from '@/assets/styles/theme';
import { PageUrlType } from '@/common/constants/path';

export const container = (usage: PageUrlType) => css`
  --background-bg: ${usage === '/' ? theme.colors.GRAY[1000] : theme.colors.GRAY.bg};

  overflow-y: auto;
  overscroll-behavior-y: contain;

  /* 가상 요소를 사용해 전체 배경을 지정 */
  &::before {
    position: fixed;
    inset: 0;
    z-index: -1;
    content: '';
    background-color: var(--background-bg);
  }
`;
