import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const modalHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const title = withTheme(
  (theme) => css`
    padding: 0 1rem;
    ${theme.fonts.SUBTITLE.SUB3_SB}
    color: ${theme.colors.GRAY[200]};
  `,
);

export const closeIconWrapper = css`
  display: flex;
  align-items: center;
  margin: 0.8rem 1rem;
`;

export const fallbackLoadingWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;
  margin: 0 auto;
  gap: 0.8rem;
  padding: 0 1rem;
`;

export const fallbackErrorWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  align-self: stretch;
  flex-direction: column;
  gap: 2rem;
`;

export const errorText = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB};
    color: ${theme.colors.GRAY[300]};
    text-align: center;
  `,
);

export const buttonWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 1.2rem 0.7rem 1.6rem;
    background: ${theme.colors.GRAY[200]};
    border-radius: 0.8rem;
    gap: 0.2rem;

    &:hover {
      background: ${theme.colors.GRAY[300]};
    }
  `,
);

export const buttonText = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB5_SB}
    color: ${theme.colors.GRAY[950]};
  `,
);
