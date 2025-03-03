import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  padding: 0 3.2rem;
`;

export const logo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.7rem;
  height: 6.5rem;
  color: #969696;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 2.4rem;
  font-style: normal;
  letter-spacing: -0.048rem;
`;

export const title = withTheme(
  (theme) => css`
    margin-bottom: 5rem;
    background: linear-gradient(90deg, #fff 0%, #ace4fa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    ${theme.fonts.HEADLINE.HEAD2}
  `,
);
