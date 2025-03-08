import { css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: center;
  min-height: 5.4rem;
  padding: 1rem;
  background-color: transparent;
`;

export const leftSection = css`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const middleSection = css`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const rightSection = css`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
