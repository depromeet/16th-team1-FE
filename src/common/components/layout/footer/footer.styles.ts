import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { FOOTER_HEIGHT } from '@/common/constants/layout';
import { withTheme } from '@/common/utils/with-theme';

export const footer = withTheme(
  (theme, isShortFooter: boolean, background: string) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${isShortFooter ? 'calc(100% - 26.4rem)' : '100%'};
    height: ${FOOTER_HEIGHT.DEFAULT};
    padding: 1.2rem 2rem;
    color: ${theme.colors.GRAY[300]} !important;
    margin-left: auto;
    margin-top: auto;
    background-color: ${background};
    ${theme.fonts.SUBTITLE.SUB5_M}

    ${mediaQueries.mobile} {
      height: ${FOOTER_HEIGHT.MOBILE};
      font-size: 1rem;
    }
  `,
);
