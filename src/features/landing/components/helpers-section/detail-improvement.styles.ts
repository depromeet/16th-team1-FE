import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const detailImprovementWrapper = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.6rem;
  max-width: 103rem;
  flex-wrap: wrap;
`;

export const improvementItemWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 27rem;
  min-width: 27rem;
`;

export const improvementItemTitle = withTheme(
  (theme) => css`
    padding: ${theme.sizeToken.padding.md_1} ${theme.sizeToken.padding.md_3};
    ${theme.fonts.SUBTITLE.SUB2_B}
    color: ${theme.colors.GRAY[400]};
    cursor: pointer;

    &[data-is-current='true'] {
      border-radius: 1.2rem;
      background-color: ${theme.colors.GRAY[990]};
      color: ${theme.colors.GRAY[50]};
    }
  `,
);

export const improvementContentWrapper = css`
  display: flex;
  height: 100%;
  padding: 5rem;
  border-radius: 1.6rem;
  flex-direction: column;
  gap: 3.6rem;
  max-width: 72.4rem;
  flex: 1;
  background-color: #16161a;
`;

export const image = css`
  object-fit: cover;
`;

export const improvementTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
