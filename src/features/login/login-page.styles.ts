import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const container = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.GRAY.bg};
    margin: 12rem auto auto;

    ${mediaQueries.mobile} {
      margin: 9rem auto auto;
    }
  `,
);

export const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  width: 65.3rem;
  height: 30.1rem;

  ${mediaQueries.mobile} {
    width: auto;
    height: auto;
    gap: 4.2rem;
  }
`;

export const descriptioinWrapper = css`
  display: flex;
  align-items: center;
  width: 45.3rem;
  height: 19.3rem;
  white-space: nowrap;
  flex-direction: column;
  gap: 4rem;

  ${mediaQueries.mobile} {
    width: auto;
    height: auto;
    gap: 2.8rem;
  }
`;

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  height: 8.1rem;

  ${mediaQueries.mobile} {
    width: auto;
    height: auto;
    gap: 0.6rem;
  }
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2}
    background: ${theme.colors.GRADIENT[300]};
    background-clip: text;
    -webkit-text-fill-color: transparent;

    ${mediaQueries.mobile} {
      ${theme.fonts.HEADLINE.HEAD5}
    }
  `,
);

export const subTitle = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB}
    color: ${theme.colors.GRAY[200]} !important;

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_SB}
    }
  `,
);
