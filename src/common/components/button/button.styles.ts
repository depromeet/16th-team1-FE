import { css } from '@emotion/react';

/* 임시 - variant별 스타일 */
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
    border: 0.1rem solid #ccc;
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

/* 임시 - ize별 스타일 */
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
