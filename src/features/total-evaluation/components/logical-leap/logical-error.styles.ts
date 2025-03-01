import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const logicalErrorWrapper = css`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

export const redBlock = withTheme(
  (theme) => css`
    min-width: 0.2rem;
    background-color: ${theme.colors.RED[400]};
    align-self: stretch;
  `,
);

export const logicalErrorTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const label = withTheme(
  (theme) => css`
    display: inline-flex;
    align-items: center;
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: ${theme.colors.RED[400]};
  `,
);

export const errorItem = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[300]};
    list-style: disc;
    list-style-position: inside;
  `,
);
