import { css } from '@emotion/react';

/* 공통(base) 스타일 */
export const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;
