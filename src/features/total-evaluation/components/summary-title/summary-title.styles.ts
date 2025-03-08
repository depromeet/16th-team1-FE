import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const summaryTitle = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    ${theme.fonts.CAPTION.CAPTION1_SB}
    color: ${theme.colors.GRAY[300]};
  `,
);
