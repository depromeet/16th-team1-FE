import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    padding: 0.6rem 1rem;
    border-radius: 0.8rem;
    ${theme.fonts.BODY.BODY2_M};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.GRAY[950]};
    }
  `,
);

export const date = withTheme(
  (theme) => css`
    flex-basis: 7rem;
    flex-shrink: 0;
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[600]};
    white-space: nowrap;
  `,
);

export const fileName = withTheme(
  (theme) => css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    min-width: 0;
    gap: 0.4rem;
    color: ${theme.colors.GRAY[300]};

    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
);
