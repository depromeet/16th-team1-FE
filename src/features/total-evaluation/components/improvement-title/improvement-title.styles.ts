import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const improvementTitleWrapper = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const improvementTitle = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4};
    color: ${theme.colors.GRAY[200]};
  `,
);
