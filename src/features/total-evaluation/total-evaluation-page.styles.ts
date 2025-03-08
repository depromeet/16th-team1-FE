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
  padding: 2rem;
  flex-direction: column;
  gap: 5rem;
`;

export const evaluationSection = (gap: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;
