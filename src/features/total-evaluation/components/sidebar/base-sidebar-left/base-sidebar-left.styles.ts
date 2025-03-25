import { css } from '@emotion/react';

type containerStyleFnType = (
  isSidebarOpen: boolean,
  size: {
    width: number;
    height: 'all' | number;
    gap: number;
    padding: number;
  },
  animation: {
    duration: number;
    easing: string;
  },
  variant: { backgroundColor: string },
) => ReturnType<typeof css>;

export const container: containerStyleFnType = (isSidebarOpen, size, animation, variant) => css`
  --sidebar-bg: ${isSidebarOpen ? variant.backgroundColor : 'transparent'};
  --sidebar-translate: ${isSidebarOpen ? `translateX(0)` : `translateX(-${size.width}rem)`};
  --sidebar-height: ${size.height === 'all' ? '100dvh' : size.height};

  display: flex;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: ${size.width}rem;
  height: var(--sidebar-height);
  padding: ${size.padding}rem;
  transform: var(--sidebar-translate);
  transition:
    transform ${animation.duration}ms ${animation.easing},
    background-color ${animation.duration}ms ${animation.easing};
  flex-direction: column;
  gap: ${size.gap}rem;
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

type sidebarPlaceholderStyleFnType = (
  isOpen: boolean,
  size: { width: number; closedWidth: number },
) => ReturnType<typeof css>;
export const sidebarPlaceholder: sidebarPlaceholderStyleFnType = (isOpen, size) => css`
  width: 0;
  transition: flex 0.3s ease;
  flex: ${isOpen ? `0 0 ${size.width}rem` : `0 0 ${size.closedWidth}rem`};
`;
