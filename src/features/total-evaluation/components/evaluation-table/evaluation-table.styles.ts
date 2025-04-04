import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const evaluationTableWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const tableRow = withTheme(
  (theme) => css`
    display: flex;
    gap: 5rem;
    align-items: flex-start;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${theme.colors.GRAY[900]};
  `,
);

export const label = withTheme(
  (theme) => css`
    min-width: 10.2rem;
    width: 10.2rem;
    color: ${theme.colors.GRAY[300]};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 150%;
    white-space: nowrap;
    font-style: normal;
    letter-spacing: 0.016rem;
  `,
);

export const detailText = withTheme(
  (theme) => css`
    margin: 0;
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[300]};
  `,
);

export const score = css`
  color: #aee8ff;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto;
`;
