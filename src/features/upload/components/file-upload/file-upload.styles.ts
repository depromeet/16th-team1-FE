import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const form = css`
  position: relative;
`;

export const container = css`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: min(5rem, 3dvh) min(22rem, 15dvw);
  background:
    linear-gradient(#1c1c1f 0 0) padding-box,
    linear-gradient(45deg, #afe7ff, #e1c6fe) border-box;
  border: 1px dashed #18171d;
  flex-direction: column;
  gap: 1.8rem;
  border-radius: 2.4rem;
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
    ${theme.fonts.SUBTITLE.SUB1_SB}
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
