import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const nestedList = css`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid #2f2f2f;
  padding-bottom: 5rem;
`;

export const orderedList = (gap?: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap ? `${gap}rem` : '4rem'};
`;

export const unorderedList = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const orderListText = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_B}
    list-style: decimal;
    list-style-position: inside;
    color: ${theme.colors.GRAY[200]};

    & > ul {
      margin-top: 0.8rem;
    }
  `,
);

export const unorderListText = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    list-style: disc;
    list-style-position: inside;
    margin-left: 0.4rem;
    color: ${theme.colors.GRAY[300]};
  `,
);
