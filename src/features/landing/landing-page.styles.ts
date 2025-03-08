import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const landingPage = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    gap: 22rem;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    min-height: 100vh;
    background-color: ${theme.colors.GRAY[1000]};
  `,
);
