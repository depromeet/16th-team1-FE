import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2};
    ${mediaQueries.mobile} {
      ${theme.fonts.HEADLINE.HEAD4};
    }

    background: var(--gradient, linear-gradient(137deg, #e1c6fe 0%, #afe7ff 100%));
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
);

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB1_M};
    color: ${theme.colors.GRAY[400]};

    ${mediaQueries.mobile} {
      ${theme.fonts.BODY.BODY2_M};
      color: ${theme.colors.GRAY[400]};
    }
  `,
);

export const exampleDescription = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: rgb(255 255 255 / 54%);
  `,
);

export const bottomWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
`;

export const floating = css`
  animation: floating 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 300ms;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-0.5rem);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
