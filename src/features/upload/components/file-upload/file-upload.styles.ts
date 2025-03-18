import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const form = (isDisabled?: boolean) => css`
  position: relative;
  width: 100%;
  max-width: 65rem;
  max-height: 29.6rem;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 9.7rem;
  background:
    linear-gradient(#18171d, #18171d) padding-box,
    linear-gradient(137deg, #abe4fa 0%, #d7adfe 100%) border-box;
  border: 1px dashed #18171d;
  gap: 1.55rem;
  border-radius: 2.4rem;
  backdrop-filter: blur(14.5px);
`;

export const preview = css`
  color: #484848;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const description = withTheme(
  (theme) => css`
    margin-bottom: 7.2rem;
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[300]};
    text-align: center;

    & > p {
      white-space: nowrap;

      @media screen and (width <= 400px) {
        white-space: normal;
      }
    }

    & > p > strong {
      color: ${theme.colors.SORA[200]};
    }
  `,
);

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

export const folder = (isDisabled?: boolean) => css`
  opacity: ${isDisabled ? 0.3 : 1};
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
`;
