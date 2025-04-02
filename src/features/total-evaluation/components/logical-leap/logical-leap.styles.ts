import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const logicalLeapWrapper = css`
  display: flex;
  padding-left: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
`;

export const logicalLeapDescription = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_B};
    color: ${theme.colors.GRAY[200]};
  `,
);
