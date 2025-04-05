import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
      72.42% 50% at 50% 50%,
      rgb(81 9 117 / 13%) 0%,
      rgb(24 23 29 / 0%) 76%
    ),
    #18171d;
  flex-direction: column;
`;

export const title = css`
  background: linear-gradient(137deg, #e1c6fe 0%, #afe7ff 100%) border-box;
  font-size: 7rem;
  font-weight: 700;
  text-align: center;
  line-height: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  letter-spacing: 0.07rem;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  will-change: transform;
`;

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD6};
    color: ${theme.colors.GRAY[200]};
  `,
);

export const caption = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: ${theme.colors.GRAY[600]};
    text-align: center;
  `,
);

export const link = css`
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
`;
