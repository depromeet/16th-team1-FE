import { css } from '@emotion/react';

export const container = css`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.68rem;
`;

export const wrapper = css`
  margin-top: 0.4rem;
  border-left: 0.2rem solid lightgray;
  margin-left: 2rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const defaultAnimation = css`
  overflow: hidden;

  &[data-state='open'] {
    animation: slide-down 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slide-up 300ms ease-out;
  }

  @keyframes slide-down {
    from {
      max-height: 0;
    }

    to {
      max-height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slide-up {
    from {
      max-height: var(--radix-accordion-content-height);
    }

    to {
      max-height: 0;
    }
  }
`;
