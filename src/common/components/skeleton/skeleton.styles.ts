import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const skeleton = withTheme(
  (theme, isLoading: boolean) => css`
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }

      100% {
        background-position: -200% 0;
      }
    }

    width: 6.4rem;
    height: 2.2rem;
    border-radius: 0.4rem;
    background: linear-gradient(
      90deg,
      ${theme.colors.GRAY[950]} 25%,
      ${theme.colors.GRAY[900]} 50%,
      ${theme.colors.GRAY[950]} 75%
    );
    background-size: 200% 100%;
    animation: shimmer 2s infinite linear;

    ${!isLoading &&
    css`
      display: none;
    `}
  `,
);
