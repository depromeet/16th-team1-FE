import { css } from '@emotion/react';

import { PageLabelKey } from '@/common/constants/path';

export const HEADER_PLACEHOLER_HEIGHT_REM = 6;

export const container = (pageLabel: PageLabelKey) => css`
  --header-padding: ${pageLabel === 'Landing' ? `1.1rem 2rem` : `1rem`};
  --blur: ${pageLabel === 'Landing' || pageLabel === 'TotalEvaluation' ? `1.2rem` : `0`};

  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: var(--header-padding);
  backdrop-filter: blur(var(--blur));
  background-color: transparent;
`;

export const leftSection = css`
  display: flex;
  justify-content: flex-start;
`;

export const middleSection = css`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const rightSection = css`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

export const placeHolder = css`
  height: ${HEADER_PLACEHOLER_HEIGHT_REM}rem;
`;
