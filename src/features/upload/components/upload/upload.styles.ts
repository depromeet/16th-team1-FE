import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 18.3rem 3.2rem 0;
  background: radial-gradient(
    72.42% 50% at 50% 50%,
    rgb(81 9 117 / 13%) 0%,
    rgb(24 23 29 / 0%) 76%
  );
  flex-direction: column;
  max-width: 65rem;

  ${mediaQueries.mobile} {
    margin: auto;
  }
`;

export const title = withTheme(
  (theme) => css`
    width: 100%;
    max-width: 77rem;
    margin-bottom: 0.8rem;
    background: linear-gradient(137deg, #e1c6fe 0%, #afe7ff 100%) border-box;
    border: 1px dashed #18171d;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    ${theme.fonts.HEADLINE.HEAD2};
  `,
);

export const description = withTheme(
  (theme) => css`
    width: 100%;
    max-width: 77rem;
    margin-bottom: 3.8rem;
    ${theme.fonts.SUBTITLE.SUB2_SB};
    color: ${theme.colors.GRAY[200]};
    text-align: center;
  `,
);
