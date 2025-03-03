import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = withTheme(
  (theme) => css`
    padding: 1.6rem 2.9rem;
    border-radius: 5rem;
    background-color: ${theme.colors.SORA[200]};
    ${theme.fonts.SUBTITLE.SUB3_SB}
    color: ${theme.colors.GRAY[950]};
  `,
);
