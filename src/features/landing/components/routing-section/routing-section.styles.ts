import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

type RoutingSectionPositionType = 'start' | 'bottom';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const icon = (inView: boolean) => css`
  opacity: ${inView ? 1 : 0};
  transform: translateY(${inView ? '0' : '2rem'});
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`;

export const mainText = withTheme(
  (theme, type: RoutingSectionPositionType, inView?: boolean) => css`
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

      ${mediaQueries.mobile} {
        font-size: 4rem;
        letter-spacing: -0.08rem;
      }
    `}

    ${type === 'bottom' &&
    css`
      ${theme.fonts.HEADLINE.HEAD2}

      ${mediaQueries.mobile} {
        ${theme.fonts.HEADLINE.HEAD6}
      }

      opacity: ${inView ? 1 : 0};
      transform: translateY(${inView ? '0' : '2rem'});
      transition:
        opacity 0.6s ease-out,
        transform 0.6s ease-out;
      transition-delay: ${inView ? '0.4s' : '0s'};
    `}
  `,
);

export const explainText = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD5}
    color: ${theme.colors.GRAY[200]} !important;

    ${mediaQueries.mobile} {
      ${theme.fonts.BODY.BODY2_M}
    }
  `,
);

export const button = (inView: boolean) => css`
  opacity: ${inView ? 1 : 0};
  transform: translateY(${inView ? '0' : '2rem'});
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: 0.6s;
`;
