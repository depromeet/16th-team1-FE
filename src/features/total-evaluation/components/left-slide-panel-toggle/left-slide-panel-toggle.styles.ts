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
    padding-left: 1rem;
    padding-right: 1.4rem;
    padding-top: 1.5rem;
    transform: ${isSidebarOpen
      ? `translateX(0)`
      : `translateX(-${SIDEBAR_WIDTH - SIDEBAR_CLOSED_WIDTH}rem)`};
    transition: transform 0.3s ease;
    background-color: ${isSidebarOpen ? theme.colors.BLACK : 'transparent'};
  `,
);

export const title = css`
  margin-bottom: 2.4rem;
`;

export const sidebarPlaceholder = (isOpen: boolean) => css`
  width: 0;
  flex: ${isOpen ? `0 0 ${SIDEBAR_WIDTH}rem` : `0 0 ${SIDEBAR_CLOSED_WIDTH}rem`};
  transition: flex 0.3s ease;
`;
