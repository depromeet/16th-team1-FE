import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const contentWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    padding: 4.8rem;
    background: ${theme.colors.GRAY[990]};
    flex-direction: column;
    gap: 1.2rem;
    flex: 1 0 0;
    border-radius: 3.2rem;

    ${mediaQueries.tabletAndDesktop} {
      max-width: 44rem;
    }

    ${mediaQueries.mobile} {
      width: 100%;
      padding: 3.2rem 4rem;
      gap: 1.4rem;
      flex-shrink: 0;
    }
  `,
);

export const title = ({ color }: { color: string }) =>
  withTheme(
    (theme) => css`
      display: flex;
      align-items: center;
      ${theme.fonts.HEADLINE.HEAD4};
      color: ${color};

      ${mediaQueries.mobile} {
        ${theme.fonts.SUBTITLE.SUB2_B};
        color: ${color};
      }
    `,
  );

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB};
    background: ${theme.colors.GRAY[200]};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
);
