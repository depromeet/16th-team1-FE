import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const sectionWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;

  ${mediaQueries.mobileAndTablet} {
    padding: 2.4rem;
  }

  ${mediaQueries.mobile} {
    gap: 3.2rem;
    padding: 0 2rem;
  }
`;

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;

  ${mediaQueries.mobile} {
    gap: 1.2rem;
  }
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
    color: ${color} !important;
    background-color: #1a2024;

    ${mediaQueries.mobile} {
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

    ${mediaQueries.mobile} {
      ${theme.fonts.HEADLINE.HEAD6}
    }
  `,
);

export const contentWrapper = (direction?: 'row' | 'column') => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${direction ? direction : 'row'};
  gap: 2rem;
  max-width: 103rem;

  ${mediaQueries.mobileAndTablet} {
    flex-direction: column;
  }

  ${mediaQueries.mobile} {
    gap: 1.6rem;
  }
`;
