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

export const contentAnimation = (index: number) => css`
  transform: translateY(30px);
  opacity: 0;
  animation: fade-in 0.2s forwards;
  animation-delay: ${index * 0.07}s;

  @keyframes fade-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
