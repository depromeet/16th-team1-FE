import { css } from '@emotion/react';

import { PageLabelKey } from '@/common/constants/path';

export const HEADER_PLACEHOLER_HEIGHT_REM = 6;

type ContentType = {
  [key in PageLabelKey]: {
    padding: string;
  };
};
const getPaddingByPage = (pageLabel: PageLabelKey, isDesktop: boolean) => {
  const paddingInfo: ContentType = {
    Landing: {
      padding: `1.1rem 2rem`,
    },
    Upload: {
      padding: isDesktop ? `1rem` : `1.1rem 2rem`,
    },
    TotalEvaluation: {
      padding: `1.1rem 2rem`,
    },
    Login: {
      padding: '0',
    },
  };

  return paddingInfo[pageLabel].padding;
};

export const container = (pageLabel: PageLabelKey, isDesktop: boolean) => css`
  --blur: ${pageLabel === 'Landing' || pageLabel === 'TotalEvaluation' ? `1.2rem` : `0`};

  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: ${getPaddingByPage(pageLabel, isDesktop)};
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
