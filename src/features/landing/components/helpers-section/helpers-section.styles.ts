import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const sectionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (width < 111rem) {
    padding: 2.4rem;
  }

  @media (width <= 37.5rem) {
    padding: 2rem;
  }
`;

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
`;

export const sectionBadge = withTheme(
  (theme, color: string) => css`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: fit-content;
    border-radius: 10rem;
    padding: ${theme.sizeToken.padding.sm_2} ${theme.sizeToken.padding.md_1};
    ${theme.fonts.SUBTITLE.SUB2_B}
    color: ${color};
    background-color: #1a2024;
  `,
);

export const sectionTitle = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2}
    color: ${theme.colors.GRAY[100]} !important;
    text-align: center;

    @media (width <= 37.5rem) {
      ${theme.fonts.HEADLINE.HEAD6}
    }
  `,
);

export const contentWrapper = (direction?: 'row' | 'column') => css`
  display: flex;
  flex-flow: ${direction ? direction : 'row'} wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 103rem;

  @media (width < 111rem) {
    flex-direction: column;
  }

  @media (width <= 37.5rem) {
    gap: 1.6rem;
  }
`;
