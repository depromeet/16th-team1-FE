import { css } from '@emotion/react';

/* 공통(base) 스타일 */
export const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: inherit;
  font-size: inherit;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 0;
  font-family: inherit;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;
