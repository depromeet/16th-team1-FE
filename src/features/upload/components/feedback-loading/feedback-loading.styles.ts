import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const contentWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #18171d;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2};
    background: ${theme.colors.GRADIENT[300]};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
);

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB1_M}
    color: ${theme.colors.GRAY[400]};
  `,
);

export const exampleDescription = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: rgb(255 255 255 / 54%);
  `,
);

export const floating = css`
  animation: floating 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 300ms;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
