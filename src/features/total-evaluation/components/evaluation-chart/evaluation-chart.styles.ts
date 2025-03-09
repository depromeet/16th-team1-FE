import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const evaluationChart = css`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const evaluationChartWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex: 1;
`;

export const evaluationItem = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const criteria = withTheme(
  (theme) => css`
    ${theme.fonts.CAPTION.CAPTION1_M}
    color: #83828a;
  `,
);
