import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const stepCard = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 36.5rem;
  padding: 3.4rem 0 0 4rem;
  border-radius: 3.2rem;
  background-color: #141418;
  gap: 7.5rem;

  ${mediaQueries.tablet} {
    min-height: 25.2rem;
    padding: 2rem 0 2rem 2.4rem;
  }

  ${mediaQueries.mobile} {
    gap: 2.4rem;
    min-height: fit-content;
    flex-flow: column wrap;
    padding: 2rem 0 2rem 2.4rem;
  }
`;

export const stepTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex-shrink: 0;
`;

export const stepText = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB}
    color: ${theme.colors.PURPLE[300]} !important;

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_SB}
    }
  `,
);

export const stepExplainText = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD3}
    color: ${theme.colors.GRAY[200]} !important;
    white-space: pre-line;

    ${mediaQueries.mobileAndTablet} {
      ${theme.fonts.HEADLINE.HEAD4}
    }

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB2_B}
    }
  `,
);

export const imageWrapper = css`
  text-align: right;
`;

export const image = (aspectRatio: number, width: number) => css`
  aspect-ratio: ${aspectRatio};
  object-fit: cover;
  width: 100%;
  max-width: ${width}rem;
  height: auto;
`;
