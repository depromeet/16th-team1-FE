import { css } from '@emotion/react';

export const improvementTextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const label = css`
  color: #979aa1;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.14px;
`;

export const improvementTextContent = css`
  display: flex;
  gap: 12px;
  align-items: center;
  line-height: 24px;
`;

export const colorBlock = (label: string) => css`
  min-width: 2px;
  background-color: ${label === '기존문장' ? '#ff6c6c' : '#4caf50'};
  flex-grow: 1;
  align-self: stretch;
`;

export const text = css`
  padding-top: 3px;
  color: #4d5159;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.16px;
`;
