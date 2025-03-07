import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const questionCard = withTheme(
  (theme) => css`
    display: flex;
    justify-content: space-between;
    width: 33rem;
    height: 38.5rem;
    padding: 3.4rem 4rem;
    flex-direction: column;
    border-radius: 3.2rem;
    background-color: ${theme.colors.GRAY.bg};
  `,
);

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

export const question = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4}
    color: ${theme.colors.SORA[200]};
    white-space: pre-line;
  `,
);

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY1_R}
    color: ${theme.colors.GRAY[300]};
    white-space: pre-line;
  `,
);

export const author = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB1_SB}
    color: ${theme.colors.GRAY[900]};
  `,
);
