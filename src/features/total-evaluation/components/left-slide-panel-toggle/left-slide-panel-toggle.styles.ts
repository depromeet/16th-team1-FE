import { css } from '@emotion/react';

const SIDEBAR_WIDTH = 250;

export const content = (isSidebarOpen: boolean) => css`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  height: 100dvh;
  padding: 4rem 1rem 2rem;
  transform: ${isSidebarOpen ? `translateX(0)` : `translateX(-${SIDEBAR_WIDTH}px)`};
  transition: transform 0.3s ease;
  background-color: #f6f7f9;
`;

export const sidebarPlaceholder = (isOpen: boolean) => css`
  width: 0;
  flex: ${isOpen ? `0 0 ${SIDEBAR_WIDTH}px` : `0 0 0`};
  transition: flex 0.3s ease;
`;
