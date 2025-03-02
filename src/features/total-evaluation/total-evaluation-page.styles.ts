import { css } from '@emotion/react';

export const container = css`
  background-color: #18171d;
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
`;

export const totalEvaluationSection = css`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  padding: 2rem;
`;

export const evaluationSection = (gap: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;
