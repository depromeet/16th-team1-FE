import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

import { FOOTER_HEIGHT } from './../../common/constants/layout';

export const container = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: calc(100dvh - ${FOOTER_HEIGHT.DEFAULT});
    background-color: ${theme.colors.GRAY.bg};

    ${mediaQueries.mobile} {
      height: calc(100dvh - ${FOOTER_HEIGHT.MOBILE});
      margin: auto;
    }
  `,
);

export const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  margin: 12rem auto auto;
`;

export const descriptioinWrapper = css`
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-direction: column;
  gap: 4rem;
`;

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2}
    background: ${theme.colors.GRADIENT[300]};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
);

export const subTitle = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB}
    color: ${theme.colors.GRAY[200]};
  `,
);
