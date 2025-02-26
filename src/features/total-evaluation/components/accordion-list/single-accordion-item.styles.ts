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
