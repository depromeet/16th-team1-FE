import { css } from '@emotion/react';

export const container = css`
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
`;

export const totalEvaluation = (isOpen: boolean) => css`
  flex: 1;
  margin-left: ${isOpen ? '300px' : '0'};
  transition: margin-left 0.2s ease-in-out;
`;

export const totalEvaluationSection = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

export const evaluationCriteria = (gap: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;
