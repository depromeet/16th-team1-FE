import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const footer = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    ${theme.fonts.SUBTITLE.SUB5_M}
    color:${theme.colors.GRAY[300]} !important;

    ${mediaQueries.mobile} {
      font-size: 1rem;
    }
  `,
);
