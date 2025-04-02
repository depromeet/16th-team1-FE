import { css } from '@emotion/react';

export const evaluationAnalyze = css`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const analysisItems = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const analysisItem = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const highlightBox = css`
  width: fit-content;
  padding: 0 0.6rem;
  transform: skewX(-15deg);
  background-color: #eceef2;
`;

export const titleText = css`
  color: #4a5468;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 145%;
  transform: skewX(15deg);
  font-style: normal;
`;

export const descriptionText = css`
  color: #74767d;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;
