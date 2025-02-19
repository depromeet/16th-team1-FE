import { css } from '@emotion/react';

export const evaluationTableWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const tableRow = css`
  display: flex;
  gap: 5.2rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #eceef2;
`;

export const label = css`
  width: 10.2rem;
  color: #4a5468;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  white-space: nowrap;
  font-style: normal;
  letter-spacing: 0.016rem;
`;

export const detailText = css`
  margin: 0;
  color: #73767d;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 170%;
  font-style: normal;
  letter-spacing: 0.016rem;
`;

export const score = css`
  color: #000;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto;
`;
