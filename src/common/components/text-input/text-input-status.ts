import { css } from '@emotion/react';

import { TextInputStatusType } from './text-input';

/** 각 상태별 field와 message 영역 스타일 정의 */
export const textInputStatus: Record<
  TextInputStatusType,
  { field: ReturnType<typeof css>; message: ReturnType<typeof css> }
> = {
  error: {
    field: css`
      border: 0.072rem solid #ff909066 !important;
      background-color: rgb(255 255 255 / 5%);
      box-shadow: none;
    `,
    message: css`
      color: #ff9090;
      padding-left: 1.382rem;
    `,
  },
};
