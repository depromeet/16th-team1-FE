import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

// scrollbar 스타일 적용
export const scrollbar = css`
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(0 0 0 / 30%);
  }
`;

export const modalHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const title = withTheme(
  (theme) => css`
    padding: 0 1rem;
    ${theme.fonts.SUBTITLE.SUB3_SB}
    color: ${theme.colors.GRAY[200]};
  `,
);

export const closeIconWrapper = css`
  display: flex;
  align-items: center;
  margin: 0.8rem 1rem;
`;

export const modalDescription = css`
  display: flex;
  align-items: flex-start;
  z-index: 1;
  overflow-y: auto;
  flex-direction: column;
  gap: 2.4rem;
  align-self: stretch;
  padding-right: 0.4rem;
  ${scrollbar}
`;

export const dataWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.8rem;
`;

export const yearWrapper = withTheme(
  (theme) => css`
    padding: 0 1rem 0.2rem;
    ${theme.fonts.SUBTITLE.SUB3_B}
    color: ${theme.colors.GRAY[300]};
  `,
);

export const feedbackGap = css`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const totalDescriptionWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    padding: 0.6rem 1rem;
    gap: 0.8rem;
    align-self: stretch;
    border-radius: 0.8rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.GRAY[900]};
    }
  `,
);

export const date = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    width: 7.2rem;
    height: 100%;
    ${theme.fonts.BODY.BODY3_R};
    color: ${theme.colors.GRAY[400]};
  `,
);

export const descriptionWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  align-self: stretch;
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
  pointer-events: none;
`;

export const bottomWrapper = css`
  height: 0.01rem;
  flex-shrink: 0;
  margin-top: -2.4rem;
`;
