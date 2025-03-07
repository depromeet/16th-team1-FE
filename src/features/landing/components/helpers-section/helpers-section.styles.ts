import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const sectionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const sectionTitle = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2}
    color: ${theme.colors.GRAY[100]};
    text-align: center;
  `,
);

export const contentWrapper = (direction?: 'row' | 'column') => css`
  display: flex;
  flex-flow: ${direction ? direction : 'row'} wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 103rem;
`;
