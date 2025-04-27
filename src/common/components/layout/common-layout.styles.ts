import { css } from '@emotion/react';

import { theme } from '@/assets/styles/theme';
import { PageLabelKey } from '@/common/constants/path';
import { Z_INDEX } from '@/common/constants/z-index';

export const container = (pageLabel: PageLabelKey) => css`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  --background-bg: ${pageLabel === 'Landing' ? theme.colors.GRAY[1000] : theme.colors.GRAY.bg};

  /* 가상 요소를 사용해 전체 배경을 지정 */
  &::before {
    position: fixed;
    inset: 0;
    z-index: ${Z_INDEX.underlay};
    content: '';
    background-color: var(--background-bg);
  }
`;

export const content = css`
  flex: 1;
`;
