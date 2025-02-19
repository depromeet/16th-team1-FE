import { css } from '@emotion/react';

export const improvementTextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const label = css`
  color: #979aa1;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.1rem;
  letter-spacing: 0.014rem;
`;

export const improvementTextContent = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  line-height: 2.4rem;
`;

export const colorBlock = (label: string) => css`
  min-width: 0.2rem;
  background-color: ${label === '기존문장' ? '#ff6c6c' : '#4caf50'};
  flex-grow: 1;
  align-self: stretch;
`;

export const text = css`
  padding-top: 0.3rem;
  color: #4d5159;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: 0.016rem;
`;
