import { css } from '@emotion/react';

/* 공통(base) 스타일 */
export const baseStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 0.375rem;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

/* variant별 스타일 */
export const variants = {
  default: css`
    background-color: transparent;
    color: black;

    &:hover {
      background-color: #05d;
    }
  `,
  destructive: css`
    background-color: #f44;
    color: #fff;

    &:hover {
      background-color: #d22;
    }
  `,
  outline: css`
    border: 1px solid #ccc;
    background-color: #fff;

    &:hover {
      background-color: #f9f9f9;
    }
  `,
  secondary: css`
    background-color: #f5f5f5;
    color: #333;

    &:hover {
      background-color: #ebebeb;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #333;

    &:hover {
      background-color: rgb(0 0 0 / 8%);
    }
  `,
  link: css`
    background-color: transparent;
    color: #06f;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  `,
};

/* size별 스타일 */
export const sizes = {
  default: css`
    height: 2.25rem;
    padding: 0.5rem 1rem;
  `,
  sm: css`
    height: 2rem;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  `,
  lg: css`
    height: 2.5rem;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  `,
  icon: css`
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    padding: 0;
  `,
};
