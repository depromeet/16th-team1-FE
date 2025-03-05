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
  padding-left: 0.8rem;
`;

export const controlButtons = css`
  display: flex;
  align-items: center;
`;

export const container = withTheme(
  (theme, isSidebarOpen: boolean) => css`
    --sidebar-bg: ${isSidebarOpen ? theme.colors.GRAY[1000] : 'transparent'};

    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: ${SIDEBAR_WIDTH}rem;
    height: 100dvh;
    padding: 1.2rem;
    transform: ${isSidebarOpen ? `translateX(0)` : `translateX(-${SIDEBAR_WIDTH}rem)`};
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    background-color: var(--sidebar-bg);

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--sidebar-bg);
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${isSidebarOpen ? '#555' : 'transparent'};
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
  transition: flex 0.3s ease;
  flex: ${isOpen ? `0 0 ${SIDEBAR_WIDTH}rem` : `0 0 ${SIDEBAR_CLOSED_WIDTH}rem`};
`;
