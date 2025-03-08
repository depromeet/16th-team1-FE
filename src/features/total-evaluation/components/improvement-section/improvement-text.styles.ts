import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const improvementTextWrapper = css`
  display: flex;
  align-items: baseline;
  gap: 2rem;
  align-self: stretch;
`;

export const label = (label: string) =>
  withTheme(
    (theme) => css`
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${label === '기존 문장' ? `${theme.colors.RED[400]}` : `${theme.colors.GREEN[400]}`};
      white-space: nowrap;
    `,
  );

export const text = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[300]};
  `,
);
