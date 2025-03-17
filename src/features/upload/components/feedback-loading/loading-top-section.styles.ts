import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const title = withTheme(
  (theme, inView?: boolean) => css`
    ${theme.fonts.HEADLINE.HEAD1};
    background: var(--gradient, linear-gradient(137deg, #e1c6fe 0%, #afe7ff 100%));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: ${inView ? 1 : 0};
    transform: translateY(${inView ? '0' : '2rem'});
    transition:
      opacity 0.6s ease-out,
      transform 0.6s ease-out;
    transition-delay: ${inView ? '0.2s' : '0s'};
  `,
);

export const description = withTheme(
  (theme, inView?: boolean) => css`
    ${theme.fonts.SUBTITLE.SUB1_M}
    color: ${theme.colors.GRAY[400]};
    opacity: ${inView ? 1 : 0};
    transform: translateY(${inView ? '0' : '2rem'});
    transition:
      opacity 0.6s ease-out,
      transform 0.6s ease-out;
    transition-delay: ${inView ? '0.4s' : '0s'};
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
