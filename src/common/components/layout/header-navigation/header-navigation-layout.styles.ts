import { css } from '@emotion/react';

import { PageLabelKey } from '@/common/constants/path';

export const HEADER_PLACEHOLER_HEIGHT_REM = 6;

type ContentType = {
  [key in PageLabelKey]: {
    padding: string;
  };
};
const getPaddingByPage = (pageLabel: PageLabelKey, isMobile: boolean) => {
  const paddingInfo: ContentType = {
    Landing: {
      padding: `1.1rem 2rem`,
    },
    Upload: {
      padding: isMobile ? `1.1rem 2rem` : `1rem`,
    },
    TotalEvaluation: {
      padding: `1rem`,
    },
    Login: {
      padding: '0',
    },
    Loading: {
      padding: '0',
    },
  };

  return paddingInfo[pageLabel].padding;
};

export const container = (pageLabel: PageLabelKey, isMobile: boolean) => css`
  --blur: ${pageLabel === 'Landing' || pageLabel === 'TotalEvaluation' ? `1.2rem` : `0`};

  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: ${getPaddingByPage(pageLabel, isMobile)};
  backdrop-filter: blur(1.2rem);
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
