import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const overallEvaluationWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export const summaryWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const summaryTitle = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    ${theme.fonts.CAPTION.CAPTION1_SB}
    color: ${theme.colors.GRAY[300]};
  `,
);

export const analysisWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;
