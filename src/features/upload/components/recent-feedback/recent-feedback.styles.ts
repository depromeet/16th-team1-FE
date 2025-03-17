import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  width: 100%;
  padding: 3.2rem 4rem;
  margin-top: 2.9rem;
  margin-bottom: 14.5rem;
  background: linear-gradient(0deg, rgb(0 0 0 / 20%) 0%, rgb(0 0 0 / 20%) 100%), rgb(32 32 40 / 18%);
  border: 1px solid #1c2633;
  border-radius: 2.4rem;
  backdrop-filter: blur(2.7rem);
  color: #fff;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_B};
    color: #d5d5d5;
  `,
);
