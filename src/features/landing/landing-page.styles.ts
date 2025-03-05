import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const landingPage = withTheme(
  (theme) => css`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    margin: auto;
    background-color: ${theme.colors.GRAY[1000]};
  `,
);
