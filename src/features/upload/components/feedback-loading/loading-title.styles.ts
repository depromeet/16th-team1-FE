import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 4.8rem;

  ${mediaQueries.mobile} {
    gap: 1.6rem;
  }
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD3};
    color: ${theme.colors.GRAY[100]};
    text-align: center;

    ${mediaQueries.mobile} {
      ${theme.fonts.HEADLINE.HEAD6};
      color: ${theme.colors.GRAY[100]};
    }
  `,
);
