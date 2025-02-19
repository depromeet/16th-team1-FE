import { css } from '@emotion/react';

export const content = (isOpen: boolean) => css`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 30rem;
  min-height: 100vh;
  padding: 4rem 1rem 2rem;
  transform: translateX(${isOpen ? '0' : '-100%'});
  transition: transform 0.2s ease-in-out;
  background-color: #f6f7f9;
`;
