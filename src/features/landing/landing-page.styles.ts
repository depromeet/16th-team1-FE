import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const landingPage = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 12rem 0 22rem;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${theme.colors.GRAY[1000]};
    gap: 3.2rem;
  `,
);

export const flexColumn = (gap: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap}rem;
  width: 100%;

  @media (width <= 37.5rem) {
    gap: 10rem;
  }
`;

export const image = css`
  max-width: 134rem;
  width: 100%;
  object-fit: cover;
  height: auto;
`;
