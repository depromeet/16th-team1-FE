import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const logicalLeapWrapper = css`
  margin-left: 2.4rem;
`;

export const logicalLeapDescription = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_B};
    color: ${theme.colors.GRAY[200]};
    margin-bottom: 1.6rem;
  `,
);
