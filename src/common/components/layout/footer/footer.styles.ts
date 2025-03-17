import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const footer = withTheme(
  (theme, isShortFooter: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${isShortFooter ? 'calc(100% - 26.4rem)' : '100%'};
    margin-left: auto;
    padding: 1.2rem 2rem;
    color: ${theme.colors.GRAY[300]} !important;
    ${theme.fonts.SUBTITLE.SUB5_M}

    ${mediaQueries.mobile} {
      font-size: 1rem;
    }
  `,
);
