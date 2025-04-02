import { css } from '@emotion/react';

export const container = (isMobile: boolean) => css`
  --width: ${isMobile ? '3rem' : '3.8rem'};
  --pading-left: ${isMobile ? 0 : '0.8rem'};

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  height: 3rem;
  padding-right: var(--pading-left);
`;

export const img = css`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 100%;
`;
