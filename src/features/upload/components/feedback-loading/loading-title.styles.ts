import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (width >= 768px) {
    gap: 2.4rem;
  }

  @media (width < 768px) {
    gap: 1.6rem;
  }
`;

export const title = withTheme(
  (theme) => css`
    @media (width >= 768px) {
      ${theme.fonts.HEADLINE.HEAD3};
      color: ${theme.colors.GRAY[100]};
      text-align: center;
    }

    @media (width < 768px) {
      ${theme.fonts.HEADLINE.HEAD6};
      color: ${theme.colors.GRAY[100]};
      text-align: center;
    }
  `,
);
