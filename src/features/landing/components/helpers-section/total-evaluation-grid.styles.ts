import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const firstLine = css`
  display: flex;
  gap: 2rem;

  & > div:nth-child(1) {
    flex-basis: 38.7rem;
    background: rgb(174 232 255 / 3%);
    border: 0 solid rgb(174 232 255 / 15%);
  }

  & > div:nth-child(2) {
    flex: 1;
    background: rgb(215 176 255 / 3%);
    border: 0 solid rgb(213 178 255 / 15%);
  }
`;

export const secondLine = css`
  display: flex;
  gap: 2rem;

  & > div:nth-child(1) {
    background: rgb(58 255 10 / 4%);
    border: 0 solid #24242b;
    flex: 1;
  }

  & > div:nth-child(2) {
    background: rgb(255 117 104 / 3%);
    border: 0 solid #24242b;
    flex: 1;
  }
`;

export const item = css`
  position: relative;
  padding: 3.4rem 4rem;
  border-radius: 3.2rem;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4};
    color: ${theme.colors.GRAY[200]};
    white-space: normal;
    margin-top: 0.8rem;
  `,
);

export const pin = css`
  display: block;
  color: #b6eaff;
`;

export const list = withTheme(
  (theme, listColor: string) => css`
    margin-top: 3.2rem;

    & > li {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      ${theme.fonts.SUBTITLE.SUB2_SB};
      color: #fff;

      &:not(:first-of-type) {
        margin-top: 3.2rem;
      }

      &::before {
        display: inline-block;
        content: '';
        position: relative;
        width: 0.2rem;
        height: 2.5rem;
        background-color: ${listColor};
      }
    }
  `,
);

export const gradeExample = css`
  width: 100%;
  max-width: 30.7rem;
  aspect-ratio: 307/202;
  margin-top: 2.4rem;
`;

export const chartExample = css`
  width: 100%;
  max-width: 54.3rem;
  aspect-ratio: 543/236;
  margin-top: 2.4rem;
`;
