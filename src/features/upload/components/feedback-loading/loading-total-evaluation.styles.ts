import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  @media (width >= 768px) {
    gap: 2rem;
  }

  @media (width < 768px) {
    gap: 1.2rem;
    margin: 0 2rem;
  }
`;

export const mainWrapper = withTheme(
  (theme) => css`
    @media (width >= 768px) {
      display: flex;
      align-items: flex-start;
      padding: 6.4rem 8.8rem;
      background: ${theme.colors.GRAY[990]};
      flex-direction: column;
      border-radius: 3.2rem;
    }
  `,
);

export const image = css`
  width: 100%;
  max-width: 72.4rem;
`;

export const bottomWrapper = css`
  @media (width >= 768px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-self: stretch;
  }

  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    align-self: stretch;
  }
`;
