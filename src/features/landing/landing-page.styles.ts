import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const landingPage = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
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
  align-items: center;
  gap: ${gap}rem;
  width: 100%;
`;

export const image = (inView: boolean) => css`
  width: 100%;
  height: auto;
  transform: ${inView ? 'scale(1)' : 'scale(0.8)'};
  transition: transform 0.3s ease-in-out;
  max-width: 134rem;
  object-fit: cover;
`;
