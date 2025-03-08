import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const landingPage = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    margin: auto;
    background-color: ${theme.colors.GRAY[1000]};
    gap: 22rem;
  `,
);
