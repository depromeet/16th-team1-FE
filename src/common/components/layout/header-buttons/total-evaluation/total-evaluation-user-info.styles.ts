import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  height: 100%;
`;

export const date = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.9rem;
    height: 2.6rem;
    ${theme.fonts.BODY.BODY5_M};
    color: ${theme.colors.GRAY[500]};
    background-color: ${theme.colors.GRAY[950]};
    border-radius: 2.7rem;
  `,
);

export const pdf = withTheme(
  (theme) => css`
    padding: 0.8rem 0;
    ${theme.fonts.CAPTION.CAPTION1_SB}
    color: ${theme.colors.GRAY[500]};
  `,
);
