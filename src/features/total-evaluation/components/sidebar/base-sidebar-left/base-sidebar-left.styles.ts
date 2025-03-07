import { css } from '@emotion/react';

export const container = (
  isSidebarOpen: boolean,
  width: number,
  height: 'all' | number,
  gap: number,
  padding: number,
  duration: number,
  easing: string,
  backgroundColor: string,
) => css`
  --sidebar-bg: ${isSidebarOpen ? backgroundColor : 'transparent'};
  --sidebar-translate: ${isSidebarOpen ? `translateX(0)` : `translateX(-${width}rem)`};
  --sidebar-height: ${height === 'all' ? '100dvh' : height};

  display: flex;
  flex-direction: column;
  gap: ${gap}rem;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: ${width}rem;
  height: var(--sidebar-height);
  padding: ${padding}rem;
  transform: var(--sidebar-translate);
  transition:
    transform ${duration}ms ${easing},
    background-color ${duration}ms ${easing};
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
`;

export const sidebarPlaceholder = (isOpen: boolean, width: number, closedWidth: number) => css`
  width: 0;
  transition: flex 0.3s ease;
  flex: ${isOpen ? `0 0 ${width}rem` : `0 0 ${closedWidth}rem`};
`;
