import { css } from '@emotion/react';

export const container = css`
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
`;

export const contents = (isOpen: boolean) => css`
  flex: 1;
  margin-left: ${isOpen ? '300px' : '0'};
  transition: margin-left 0.2s ease-in-out;
`;
