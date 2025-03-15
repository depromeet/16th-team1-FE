import { css } from '@emotion/react';

export const desktop = (isDesktop: boolean) => css`
  --pading-left: ${isDesktop ? '0.8rem' : '0'};

  display: flex;
  align-items: center;
  height: 3.4rem;
  padding-left: var(--pading-left);
`;
