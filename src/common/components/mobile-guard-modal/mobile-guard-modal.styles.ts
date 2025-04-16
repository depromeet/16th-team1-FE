import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const modalIcon = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4}
  `,
);

export const modalTitle = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_B}
    color:#fff;
  `,
);

export const modalText = withTheme(
  (theme) => css`
    ${theme.fonts.CAPTION.CAPTION1_SB}
    color: ${theme.colors.GRAY[400]};
    text-align: center;
  `,
);
