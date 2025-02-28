import { css } from '@emotion/react';

export const container = css`
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.68rem;
`;

export const wrapper = css`
  margin-top: 1.4rem;
  border-left: 0.2rem solid lightgray;
  margin-left: 1.8rem;
  padding-left: 1rem;
`;

export const content = css`
  display: flex;

  &[data-orientation='horizontal'] {
    flex-direction: row;
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
  }
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
