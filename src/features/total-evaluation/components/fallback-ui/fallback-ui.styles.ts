import { css } from '@emotion/react';

export const fallbackUI = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const flexBox = (isColumn?: boolean, gap = 0) => css`
  display: flex;
  flex-direction: ${isColumn ? 'column' : 'row'};
  gap: ${gap}rem;
`;

export const chartWrapper = css`
  display: flex;
  align-items: center;
  gap: 5.3rem;
  justify-content: space-between;
`;

export const tableRow = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const tableLeftSection = css`
  display: flex;
  gap: 5rem;
  align-items: flex-start;
`;

export const skeletonWrapper = css`
  padding: 0.8rem;
`;
