import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const modalHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 4rem 4rem 1.6rem;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB}
    color: ${theme.colors.GRAY[400]};
  `,
);

export const modalDescription = css`
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  padding: 2.4rem 4rem 2.8rem;
  overflow-y: auto;
  flex-direction: column;
  gap: 2.4rem;
  align-self: stretch;
`;

export const dataWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1.4rem;
`;

export const yearAndMonth = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_B}
    color: ${theme.colors.GRAY[200]};
  `,
);

export const feedbackGap = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const totalDescriptionWrapper = css`
  display: flex;
  align-items: flex-start;
  padding: 0.8rem;
  align-self: stretch;
  gap: 4rem;
`;

export const date = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[400]};
    padding-right: 0.8rem;
  `,
);

export const descriptionWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[300]};
  `,
);

export const shadow = (isShow: boolean) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 10.1rem;
  background: linear-gradient(180deg, rgb(32 32 40 / 0%) 0%, #202028 100%);
  transition: opacity 0.2s ease;
  border-radius: 2.4rem;
  opacity: ${isShow ? 1 : 0};
`;

export const scrollbar = css`
  ::-webkit-scrollbar {
    z-index: 999;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(0 0 0 / 30%);
    border-radius: 4px;
  }
`;
