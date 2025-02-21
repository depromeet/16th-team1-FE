import { css } from '@emotion/react';

export const container = css`
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.68rem;
`;

export const basicSelectedEffect = (isCurrentTriggerSelected: boolean) => css`
  font-size: ${isCurrentTriggerSelected && '1.6rem'};
  font-weight: ${isCurrentTriggerSelected && 'bolder'};
  line-height: ${isCurrentTriggerSelected && '1.92rem'};
  transition:
    font-size 0.3s ease-in-out,
    font-weight 0.3s ease-in-out,
    line-height 0.3s ease-in;
`;

export const accordionContent = css`
  overflow: hidden;
  margin-top: 1.4rem;
  padding-left: 1.7rem;
  border-left: 0.2rem solid lightgray;

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
  transform: translateY(3rem);
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
