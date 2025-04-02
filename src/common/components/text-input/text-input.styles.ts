import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

import { TextInputStatusType } from './text-input';
import { textInputStatus } from './text-input-status';

//TODO: theme 적용되면 반영

interface TextInputProps {
  width?: number;
  height?: number;
  status?: TextInputStatusType;
}

export const textInputWrapper = withTheme(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 0.576rem;
  `,
);

export const textInput = ({ width, height, status }: TextInputProps) => css`
  width: ${width ? `${width}rem` : '100%'};
  height: ${height ? `${height}rem` : 'auto'};
  border-radius: 1.3rem;
  padding: 1.3rem 2rem;
  color: #fff;
  font-size: 1.1515rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  resize: none;
  background-color: rgb(255 255 255 / 5%);
  box-shadow: 0 0 0.5038rem 0 rgb(255 255 255 / 25%);

  &:hover {
    background-color: rgb(255 255 255 / 10%);
    box-shadow: 0 0 0.5038rem 0 rgb(255 255 255 / 35%);
  }

  &:focus {
    outline: none;
    border: 0.072rem solid rgb(255 255 255 / 30%);
  }

  &[data-has-value='true'] {
    box-shadow: 0 0 0.5038rem 0 rgb(255 255 255 / 35%);
  }

  &::placeholder {
    color: #b1b1b1;
    font-style: normal;
    font-weight: 500;
    line-height: 1.382rem;
  }

  ${status && textInputStatus[status]?.field}
`;

export const statusMessage = (status?: TextInputStatusType) => css`
  ${status && textInputStatus[status]?.message}
`;
