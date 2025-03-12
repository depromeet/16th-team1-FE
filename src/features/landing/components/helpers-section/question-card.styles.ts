import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const questionCard = withTheme(
  (theme) => css`
    display: flex;
    justify-content: space-between;
    width: 33rem;
    height: 38.5rem;
    padding: 3.4rem 4rem;
    flex-direction: column;
    border-radius: 3.2rem;
    background-color: ${theme.colors.GRAY.bg};

    @media (width <= 111rem) {
      width: 100%;
    }
  `,
);

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  @media (width <= 76.8rem) {
    gap: 1.6rem;
  }
`;

export const question = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4}
    color: ${theme.colors.SORA[200]} !important;
    white-space: pre-line;

    @media (width <= 37.5rem) {
      ${theme.fonts.SUBTITLE.SUB2_B}
    }
  `,
);

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY1_R}
    color: ${theme.colors.GRAY[300]} !important;
    white-space: pre-line;

    @media (width <= 37.5rem) {
      ${theme.fonts.BODY.BODY2_R}
    }
  `,
);

export const author = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB1_SB}
    color: ${theme.colors.GRAY[900]} !important;

    @media (width <= 37.5rem) {
      ${theme.fonts.SUBTITLE.SUB3_SB}
    }
  `,
);
