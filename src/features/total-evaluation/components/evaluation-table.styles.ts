import { css } from '@emotion/react';

export const evaluationTableWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const tableRow = css`
  display: flex;
  gap: 52px;
  align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid #eceef2;
`;

export const label = css`
  width: 102px;
  color: #4a5468;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  white-space: nowrap;
  font-style: normal;
  letter-spacing: 0.16px;
`;

export const detailText = css`
  margin: 0;
  color: #73767d;
  font-size: 16px;
  font-weight: 500;
  line-height: 170%;
  font-style: normal;
  letter-spacing: 0.16px;
`;

export const score = css`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto;
`;
