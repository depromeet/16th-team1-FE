import { css } from '@emotion/react';

import { PageLabelKey } from '@/common/constants/path';

export const HEADER_NAV_HEIGHT_REM = 6;

export const container = (pageLabel: PageLabelKey) => css`
  --header-padding: ${pageLabel === 'Landing' ? `1.1rem 2rem` : `1rem`};
  --blur: ${pageLabel === 'Landing' || pageLabel === 'TotalEvaluation' ? `1.2rem` : `0`};

  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: var(--header-padding);
  min-height: 5.4rem;
  backdrop-filter: blur(var(--blur));
  background-color: transparent;
`;

export const leftSection = css`
  display: flex;
  justify-content: flex-start;
`;

export const middleSection = css`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const rightSection = css`
  display: flex;
  justify-content: flex-end;
`;

export const placeHolder = css`
  height: ${HEADER_NAV_HEIGHT_REM}rem;
`;
