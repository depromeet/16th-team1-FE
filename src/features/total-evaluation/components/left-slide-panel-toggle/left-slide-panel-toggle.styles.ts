import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

const SIDEBAR_WIDTH = 23.7;
const SIDEBAR_CLOSED_WIDTH = 4;

export const sidebarTopSection = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 2.4rem;
`;

export const controlButtons = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const container = withTheme(
  (theme, isSidebarOpen: boolean) => css`
    display: flex;
    flex-direction: column;
    gap: 8.075rem;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: ${SIDEBAR_WIDTH}rem;
    height: 100dvh;
    padding: 2rem;
    transform: ${isSidebarOpen ? `translateX(0)` : `translateX(-${SIDEBAR_WIDTH}rem)`};
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    background-color: ${isSidebarOpen ? theme.colors.BLACK : 'transparent'};

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: black;
    }

    &::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 10px;
    }
  `,
);

export const title = (isSidebarOpen: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${isSidebarOpen ? `translateX(0)` : `translateX(${1.5}rem)`};
`;

export const sidebarPlaceholder = (isOpen: boolean) => css`
  width: 0;
  padding: 2rem 2rem 2rem 1rem;
  transition: flex 0.3s ease;
  flex: ${isOpen ? `0 0 ${SIDEBAR_WIDTH}rem` : `0 0 ${SIDEBAR_CLOSED_WIDTH}rem`};
`;
