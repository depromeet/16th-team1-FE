import { css } from '@emotion/react';

export const form = css`
  position: relative;
`;

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 88.9rem;
  height: 10.5rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
  background-color: #efefef;
`;

export const preview = css`
  color: #484848;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const uploadButton = css`
  position: absolute;
  right: 2.8rem;
  width: 4.8rem;
  height: 4.8rem;
  background-color: #c5c5c5;
  border: none;
  border-radius: 999rem;
  outline: none;

  &:hover {
    background-color: rgb(172 172 172);
  }
`;

export const errorText = css`
  position: absolute;
  top: 100%;
  color: red;
  font-size: 1.6rem;
`;
