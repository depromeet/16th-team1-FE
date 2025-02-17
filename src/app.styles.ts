/** 테스트용 임시 파일 */

import { css } from '@emotion/react';

const baseButtonStyles = css`
  display: flex;
  padding: 8px 16px;
  border: none;
  color: white;
  transition: background-color 0.2s;
  cursor: pointer;
  border-radius: 4px;
`;

const hoverStyles = css`
  &:hover {
    background-color: #0056b3;
  }
`;

const focusStyles = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgb(0 123 255 / 30%);
  }
`;

const combinedButtonStyles = css`
  ${baseButtonStyles}
  ${hoverStyles}
  ${focusStyles}
  background-color: #007bff;
`;

export { baseButtonStyles, hoverStyles, focusStyles, combinedButtonStyles };
