import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const evaluationTitle = withTheme(
  (theme, color?: string) => css`
    display: flex;
    gap: 0.2rem;
    align-items: center;
    ${theme.fonts.HEADLINE.HEAD3}
    color: ${color ? color : '#fff'};
  `,
);
