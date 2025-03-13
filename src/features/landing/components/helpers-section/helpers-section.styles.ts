import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const sectionWrapper = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 100%;

    @media (width < ${theme.deviceWidth.desktop}) {
      padding: 2.4rem;
    }

    @media (width <= ${theme.deviceWidth.mobile}) {
      gap: 3.2rem;
      padding: 0 2rem;
    }
  `,
);

export const titleWrapper = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;

    @media (width <= ${theme.deviceWidth.mobile}) {
      gap: 1.2rem;
    }
  `,
);

export const sectionBadge = withTheme(
  (theme, color: string) => css`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: fit-content;
    border-radius: 10rem;
    padding: ${theme.sizeToken.padding.sm_2} ${theme.sizeToken.padding.md_1};
    ${theme.fonts.SUBTITLE.SUB2_B}
    color: ${color} !important;
    background-color: #1a2024;

    @media (width <= ${theme.deviceWidth.mobile}) {
      gap: 0.2rem;
      padding: 1rem 1.8rem 1rem 1.4rem;
      ${theme.fonts.SUBTITLE.SUB5_SB}
    }
  `,
);

export const sectionTitle = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2}
    color: ${theme.colors.GRAY[100]} !important;
    text-align: center;

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.HEADLINE.HEAD6}
    }
  `,
);

export const contentWrapper = withTheme(
  (theme, direction?: 'row' | 'column') => css`
    display: flex;
    flex-direction: ${direction ? direction : 'row'};
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 103rem;

    @media (width < ${theme.deviceWidth.desktop}) {
      flex-direction: column;
    }

    @media (width <= ${theme.deviceWidth.mobile}) {
      gap: 1.6rem;
    }
  `,
);
