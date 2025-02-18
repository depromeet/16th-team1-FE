import { css } from '@emotion/react';

export const selectedEffect = (isCurrentTriggerSelected: boolean) => css`
  font-weight: ${isCurrentTriggerSelected && 'bolder'};
`;

export const accordionContent = css`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  padding-left: 20px;
  border-left: 2px solid lightgray;

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

export const basicContentEffect = (index: number, isCurrentContentSelected: boolean) => css`
  margin: 0.5rem 0;
  transform: translateY(30px);
  opacity: 0;
  animation: fade-in 0.2s forwards;
  animation-delay: ${index * 0.07}s;

  ${isCurrentContentSelected &&
  css`
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1; /* 텍스트 뒤로 보내기 */
      width: 0;
      height: 100%;
      content: '';
      background-color: lightgray;
      animation: fill-right 0.3s forwards;
    }
  `}

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
