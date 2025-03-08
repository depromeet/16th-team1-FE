import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 100dvh;
    padding: 12rem 34.3rem 35.9rem;
    background-color: ${theme.colors.GRAY.bg};
  `,
);

export const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65.3rem;
  height: 30.1rem;
  gap: 6rem;
`;

export const descriptioinWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 45.3rem;
  height: 19.3rem;
`;

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
  height: 8.1rem;
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
