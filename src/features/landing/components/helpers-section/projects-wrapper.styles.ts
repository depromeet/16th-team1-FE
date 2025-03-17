import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';

export const projectContainer = css`
  display: flex;
  overflow: hidden;
  width: 100vw;
  max-width: 103rem;

  ${mediaQueries.tablet} {
    margin: 0 2.4rem;
  }

  ${mediaQueries.mobile} {
    margin: 0 2rem;
  }
`;

export const projectScrollContainer = css`
  width: 100%;
`;
