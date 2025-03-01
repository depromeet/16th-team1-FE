import { css } from '@emotion/react';

import { withTheme } from '../../../../common/utils/with-theme';

export const logicalImprovementWrapper = css`
  display: flex;
  gap: 1.2rem;
`;

export const greenBlock = withTheme(
  (theme) => css`
    min-width: 0.2rem;
    background-color: ${theme.colors.GREEN[400]};
    align-self: stretch;
  `,
);

export const logicalImprovementTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const label = withTheme(
  (theme) => css`
    display: inline-flex;
    align-items: center;
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: ${theme.colors.GREEN[400]};
  `,
);

export const improvementText = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: ${theme.colors.GRAY[300]};
  `,
);
