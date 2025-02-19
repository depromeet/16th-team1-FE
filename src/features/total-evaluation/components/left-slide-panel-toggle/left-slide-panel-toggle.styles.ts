import { css } from '@emotion/react';

const SIDEBAR_WIDTH = 237;
const SIDEBAR_CLOSED_WIDTH = 40;

export const sidebarTopSection = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

export const controlButtons = css`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const container = (isSidebarOpen: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 80.75px;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  height: 100dvh;
  padding-left: 1rem;
  padding-right: 14px;
  padding-top: 15px;
  transform: ${isSidebarOpen
    ? `translateX(0)`
    : `translateX(-${SIDEBAR_WIDTH - SIDEBAR_CLOSED_WIDTH}px)`};
  transition: transform 0.3s ease;
  background-color: #f6f7f9;
`;

export const title = css`
  margin-bottom: 24px;
`;

export const sidebarPlaceholder = (isOpen: boolean) => css`
  width: 0;
  flex: ${isOpen ? `0 0 ${SIDEBAR_WIDTH}px` : `0 0 ${SIDEBAR_CLOSED_WIDTH}px`};
  transition: flex 0.3s ease;
`;
