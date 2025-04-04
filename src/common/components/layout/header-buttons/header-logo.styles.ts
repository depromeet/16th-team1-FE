import { css } from '@emotion/react';

export const container = (isMobile: boolean) => css`
  --pading-left: ${isMobile ? '0' : '0.8rem'};

  display: flex;
  align-items: center;
  width: 16.2rem;
  height: 3.4rem;
  padding-left: var(--pading-left);
`;
