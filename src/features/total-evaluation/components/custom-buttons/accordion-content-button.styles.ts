import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const singleContentButton = withTheme(
  (theme, buttonIndex: number, isCurrentContentSelected: boolean, isSidebarOpen: boolean) => css`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    border: none;
    color: ${theme.colors.GRAY[200]};
    transform: translateY(3rem);
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 0.5rem;
    background-color: transparent;
    opacity: 0;
    animation: fade-in 0.2s forwards;
    animation-delay: ${buttonIndex * 0.07}s;

    &:hover {
      background-color: #25252e;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: ${isCurrentContentSelected ? (isSidebarOpen ? '100%' : '0') : '0'};
      height: 100%;
      transition: width 0.3s ease;
      content: '';
      background-color: #3f3f4e;
    }

    @keyframes fill-right {
      from {
        width: 0;
      }

      to {
        width: 100%;
      }
    }

    @keyframes fade-in {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
);
