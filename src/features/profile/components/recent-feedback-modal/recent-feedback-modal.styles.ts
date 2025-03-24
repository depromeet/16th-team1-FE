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

export const fallbackWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;
  margin: 0 auto;
  gap: 0.8rem;
  padding: 0 1rem;
`;
