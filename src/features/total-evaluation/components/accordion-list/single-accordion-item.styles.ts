import { css } from '@emotion/react';

export const container = css`
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.68rem;
`;

export const wrapper = css`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
  border-left: 0.2rem solid lightgray;
  padding-left: 1rem;
`;
export const accordionContent = css`
  overflow: hidden;

  &[data-state='open'] {
    animation: slide-down 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slide-up 300ms ease-out;
  }

  @keyframes slide-down {
    from {
      height: 0;
    }

    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slide-up {
    from {
      height: var(--radix-accordion-content-height);
    }

    to {
      height: 0;
    }
  }
`;

export const basicContentEffect = (
  index: number,
  isCurrentContentSelected: boolean,
  isSidebarOpen: boolean,
) => css`
  transform: translateY(3rem);
  opacity: 0;
  animation: fade-in 0.2s forwards;
  animation-delay: ${index * 0.07}s;

  &:hover {
    background-color: #e4e4e5;
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
    background-color: lightgray;
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
`;
