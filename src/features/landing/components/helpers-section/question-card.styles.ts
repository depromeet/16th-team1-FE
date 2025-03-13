import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const questionCard = withTheme(
  (theme) => css`
    display: flex;
    justify-content: space-between;
    width: 33rem;
    height: 38.5rem;
    padding: 3.4rem 4rem;
    max-width: 33rem;
    flex-direction: column;
    border-radius: 3.2rem;
    background-color: ${theme.colors.GRAY.bg};

    @media (width < ${theme.deviceWidth.desktop}) {
      width: 100%;
      height: auto;
      gap: 4rem;
      max-width: initial;
    }

    @media (width <= ${theme.deviceWidth.mobile}) {
      padding: 2rem 2.4rem;
    }
  `,
);

export const textWrapper = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    @media (width < ${theme.deviceWidth.desktop}) {
      gap: 1.6rem;
    }
  `,
);

export const question = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4}
    color: ${theme.colors.SORA[200]} !important;
    white-space: pre-line;

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.SUBTITLE.SUB2_B}
    }
  `,
);

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY1_R}
    color: ${theme.colors.GRAY[300]} !important;
    white-space: pre-line;

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.BODY.BODY2_R}
    }
  `,
);

export const author = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB1_SB}
    color: ${theme.colors.GRAY[900]} !important;

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.SUBTITLE.SUB3_SB}
    }
  `,
);
