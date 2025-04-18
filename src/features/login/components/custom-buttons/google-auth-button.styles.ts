import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const buttonWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 2.2rem 3rem 2.2rem 3.2rem;
    background-color: #fff;
    border-radius: 10rem;
    ${theme.fonts.SUBTITLE.SUB1_SB}

    ${mediaQueries.mobile} {
      padding: 1.5rem 2.1rem 1.5rem 2.2rem;
      ${theme.fonts.SUBTITLE.SUB5_SB}
    }
  `,
);
