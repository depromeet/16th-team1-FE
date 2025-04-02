import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 2rem;

  ${mediaQueries.mobile} {
    gap: 1.2rem;
  }
`;

export const mainWrapper = withTheme(
  (theme) => css`
    ${mediaQueries.tabletAndDesktop} {
      display: flex;
      align-items: flex-start;
      padding: 6.4rem 8.8rem;
      background: ${theme.colors.GRAY[990]};
      flex-direction: column;
      border-radius: 3.2rem;
    }
  `,
);

export const image = css`
  width: 100%;
  max-width: 72.4rem;
`;

export const bottomWrapper = css`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-self: stretch;

  ${mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;
