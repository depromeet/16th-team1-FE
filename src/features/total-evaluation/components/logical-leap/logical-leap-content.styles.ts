import { css } from '@emotion/react';

import { withTheme } from '../../../../common/utils/with-theme';

export const logicalImprovementWrapper = css`
  display: flex;
  gap: 1.2rem;
`;

export const block = (label: string) =>
  withTheme(
    (theme) => css`
      min-width: 0.2rem;
      background: ${label === '논리적 오류'
        ? `${theme.colors.RED[400]}`
        : `${theme.colors.GREEN[400]}`};
      align-self: stretch;
    `,
  );

export const logicalImprovementTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const label = (label: string) =>
  withTheme(
    (theme) => css`
      display: inline-flex;
      align-items: center;
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${label === '논리적 오류' ? `${theme.colors.RED[400]}` : `${theme.colors.GREEN[400]}`};
    `,
  );

export const improvementText = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[300]};
  `,
);
