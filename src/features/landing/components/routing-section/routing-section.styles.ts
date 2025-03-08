import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

type RoutingSectionPositionType = 'start' | 'bottom';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const mainText = withTheme(
  (theme, type: RoutingSectionPositionType) => css`
    background: linear-gradient(180deg, #fff 0%, #c6dfe9 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;

    ${type === 'start' &&
    css`
      font-size: 7.4rem;
      font-weight: 600;
      line-height: 118%;
      font-family: GeneralSans, sans-serif;
      font-style: normal;
      letter-spacing: -0.148rem;
    `}

    ${type === 'bottom' &&
    css`
      ${theme.fonts.HEADLINE.HEAD2}
    `}
  `,
);

export const explainText = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD5}
    color: ${theme.colors.GRAY[200]};
  `,
);

export const routingButton = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_B}
    padding: 2.1rem 3.1rem;
    border-radius: 5rem;
    background-color: ${theme.colors.SORA[200]};

    &:hover {
      background-color: ${theme.colors.SORA[100]};
      color: ${theme.colors.GRAY[950]};
    }

    &:active {
      background-color: ${theme.colors.SORA[400]};
      color: ${theme.colors.GRAY[950]};
    }
  `,
);
