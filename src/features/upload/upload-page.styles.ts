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
