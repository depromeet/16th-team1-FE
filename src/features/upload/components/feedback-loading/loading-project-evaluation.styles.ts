import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mediaQueries.mobile} {
    gap: 1.2rem;
  }
`;

export const contentWrapper = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;

    ${mediaQueries.desktop} {
      padding: 6.4rem 8.8rem;
      max-width: 90rem;
      background: ${theme.colors.GRAY[990]};
      border-radius: 3.2rem;
      gap: 3.2rem;
    }

    ${mediaQueries.tablet} {
      max-width: 90rem;
      padding: 6.4rem 8.8rem;
      background: ${theme.colors.GRAY[990]};
      border-radius: 3.2rem;
      gap: 3.2rem;
    }

    ${mediaQueries.mobile} {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.6rem;
      align-self: stretch;
      width: 100%;
    }
  `,
);

export const titleWrapper = css`
  ${mediaQueries.mobile} {
    display: none;
  }
`;

export const caption = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    ${theme.fonts.BODY.BODY4_M};
    color: ${theme.colors.GRAY[300]};
  `,
);

export const mainTitle = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD3};
    color: ${theme.colors.GRAY[100]};
  `,
);

export const image = css`
  width: 100%;
`;

export const descriptionWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    padding: 3.2rem 4rem;
    background: ${theme.colors.GRAY[950]};
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 2rem;

    ${mediaQueries.tablet} {
      width: 100%;
    }

    ${mediaQueries.mobile} {
      width: 100%;
      background: ${theme.colors.GRAY[990]};
    }
  `,
);

export const descriptionTitle = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_SB};
    color: ${theme.colors.GRAY[50]};

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${theme.colors.GRAY[50]};
    }
  `,
);

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_R};
    color: ${theme.colors.GRAY[300]};

    ${mediaQueries.mobile} {
      ${theme.fonts.BODY.BODY3_R};
      color: ${theme.colors.GRAY[300]};
    }
  `,
);

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
