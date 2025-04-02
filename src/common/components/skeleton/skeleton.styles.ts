import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const skeleton = withTheme(
  (theme, isLoading: boolean, width: string, height: string) => css`
    @keyframes shimmer {
      0% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0 50%;
      }
    }

    width: ${width};
    height: ${height};
    border-radius: 0.4rem;
    background: linear-gradient(
      270deg,
      ${theme.colors.GRAY.bg} 0%,
      rgb(135 133 146 / 50%) 51%,
      ${theme.colors.GRAY.bg} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite ease;

    ${!isLoading &&
    css`
      display: none;
    `}
  `,
);
