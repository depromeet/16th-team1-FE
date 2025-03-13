import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const stepCard = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 36.5rem;
  padding: 3.4rem 0 0 4rem;
  border-radius: 3.2rem;
  background-color: #141418;
  gap: 7.5rem;
`;

export const stepTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const stepText = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB}
    color: ${theme.colors.PURPLE[300]} !important;

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.SUBTITLE.SUB5_SB}
    }
  `,
);

export const stepExplainText = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD3}
    color: ${theme.colors.GRAY[200]} !important;
    white-space: pre-line;

    @media (width < ${theme.deviceWidth.desktop}) {
      ${theme.fonts.HEADLINE.HEAD4}
    }

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.SUBTITLE.SUB2_B}
    }
  `,
);

export const image = (aspectRatio: number, width: number) => css`
  aspect-ratio: ${aspectRatio};
  object-fit: cover;
  width: 100%;
  max-width: ${width}rem;
  height: auto;
`;
