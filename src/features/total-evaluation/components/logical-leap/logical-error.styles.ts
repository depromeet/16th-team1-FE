import { css } from '@emotion/react';

export const logicalErrorWrapper = css`
  display: flex;
  gap: 1.4rem;
  margin-bottom: 2rem;
`;

export const redBlock = css`
  min-width: 0.2rem;
  background-color: #ff6c6c;
  align-self: stretch;
`;

export const logicalErrorTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 0.3rem;
`;

export const label = css`
  display: inline-flex;
  align-items: center;
  color: #ff6c6c;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.1rem;
  letter-spacing: 0.014rem;
`;

export const errorItem = css`
  color: #74767d;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.88rem;
  list-style: disc;
  list-style-position: inside;
  letter-spacing: 0.016rem;
`;
