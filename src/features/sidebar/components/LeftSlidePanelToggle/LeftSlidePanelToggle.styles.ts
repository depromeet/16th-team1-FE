import { css } from '@emotion/react';

export const content = (isOpen: boolean) => css`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  min-height: 100vh;
  padding: 1rem;
  transform: translateX(${isOpen ? '0' : '-100%'});
  transition: transform 0.2s ease-in-out;
  background-color: white;
`;
