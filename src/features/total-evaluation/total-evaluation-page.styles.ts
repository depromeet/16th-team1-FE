import { css } from '@emotion/react';

export const container = css`
  background-color: #18171d;
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
`;

export const totalEvaluationSection = css`
  display: flex;
  width: 82rem;
  margin: auto;
  flex-direction: column;
  gap: 20rem;
`;

export const evaluationSection = (gap: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;

export const hr = css`
  height: 0.1rem;
  margin: 5rem 0;
  background-color: #2f2f2f;
  border: none;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const fallbackWrapper = css`
  display: flex;
  width: 82rem;
  align-self: flex-start;
  margin: 0 auto;
`;
