import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const SingleButton = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    width: 15.6rem;
    height: 3.2rem;
    padding: 0.6rem 0.8rem;
    flex-direction: column;
    border-radius: 1.2rem;

    &:hover {
      background-color: ${theme.colors.GRAY[900]};
    }
  `,
);

export const ButtonLabel = withTheme(
  (theme, disabled: boolean) => css`
    --color: ${disabled ? theme.colors.GRAY[800] : theme.colors.GRAY[100]};

    ${theme.fonts.SUBTITLE.SUB5_SB}
    color: var(--color);
  `,
);
