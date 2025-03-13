import { css } from '@emotion/react';

export const feedbackLoading = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #18171d;

  @media (width < 970px) and (width >= 768px) {
    padding: 0 2.4rem;
  }

  @media (width < 768px) {
    padding: 0 2rem;
  }
`;
