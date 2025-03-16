import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';

export const feedbackLoading = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #18171d;

  ${mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  ${mediaQueries.mobile} {
    padding: 0 2rem;
  }
`;
