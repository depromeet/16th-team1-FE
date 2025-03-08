import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const landingPage = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    min-height: 100vh;
    background-color: ${theme.colors.GRAY[1000]};
    gap: 3.2rem;
    padding: 12rem 22rem;
  `,
);

export const flexColumn = (gap: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap}rem;
`;

export const image = css`
  width: 100%;
`;
