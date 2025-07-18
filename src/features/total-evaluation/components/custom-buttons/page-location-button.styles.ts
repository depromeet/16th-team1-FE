import { css } from '@emotion/react';

import { Z_INDEX } from '@/common/constants/z-index';
import { withTheme } from '@/common/utils/with-theme';

export const pageLocationButton = withTheme(
  (theme, buttonIndex: number, isCurrentContentSelected: boolean, isSidebarOpen: boolean) => css`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0.8rem 1rem;
    border: none;
    ${theme.fonts.CAPTION.CAPTION1_M}
    color: ${theme.colors.GRAY[100]};

    /* transform: translateY(3rem); */

    background-color: transparent;
    opacity: 0;
    animation: fade-in 0.2s forwards;
    animation-delay: ${buttonIndex * 0.03}s;

    &:hover {
      background-color: ${theme.colors.GRAY.bg};
      border-radius: 0.8rem;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: ${Z_INDEX.underlay};
      width: ${isCurrentContentSelected ? (isSidebarOpen ? '100%' : '0') : '0'};
      height: 100%;
      transition: width 0.3s ease;
      content: '';
      background-color: #3f3f4e;
      border-radius: 0.8rem;
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
