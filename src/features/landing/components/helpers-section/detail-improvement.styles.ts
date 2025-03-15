import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const detailImprovementWrapper = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.6rem;
  max-width: 103rem;
  width: 100%;

  ${mediaQueries.mobileAndTablet} {
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
  }
`;

export const improvementItemWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 27rem;
  min-width: 27rem;

  ${mediaQueries.mobileAndTablet} {
    width: 100%;
    flex-direction: row;
    gap: 0.8rem;
    overflow-x: auto;
  }
`;

export const improvementItemTitle = withTheme(
  (theme) => css`
    padding: ${theme.sizeToken.padding.md_1} ${theme.sizeToken.padding.md_3};
    ${theme.fonts.SUBTITLE.SUB2_B}
    color: ${theme.colors.GRAY[400]} !important;
    white-space: nowrap;
    cursor: pointer;

    &[data-is-current='true'] {
      border-radius: 1.2rem;
      background-color: ${theme.colors.GRAY[990]};
      color: ${theme.colors.GRAY[50]} !important;
    }

    ${mediaQueries.mobileAndTablet} {
      padding: ${theme.sizeToken.padding.sm_1} ${theme.sizeToken.padding.s_2};
    }

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_SB}
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

  ${mediaQueries.mobile} {
    padding: 0;
    gap: 2.4rem;
    background-color: transparent;
  }
`;

export const image = css`
  object-fit: cover;

  ${mediaQueries.mobileAndTablet} {
    width: 100%;
  }
`;

export const improvementTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mediaQueries.mobile} {
    gap: 1.2rem;
  }
`;

export const improvementTitleWrapper = withTheme(
  (theme) => css`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    ${theme.fonts.HEADLINE.HEAD4};
    color: ${theme.colors.GRAY[200]} !important;

    ${mediaQueries.mobile} {
      gap: 0.4rem;
      ${theme.fonts.SUBTITLE.SUB3_SB};
    }
  `,
);

export const improvementSection = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ${mediaQueries.mobile} {
    gap: 0.8rem;
  }
`;

export const improvementDetailTextWrapper = css`
  display: flex;
  align-items: baseline;
  gap: 2rem;

  ${mediaQueries.mobile} {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const improvementCategory = withTheme(
  (theme, color: string) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB}
    color: ${color} !important;
    white-space: nowrap;

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_M}
    }
  `,
);

export const detailText = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[300]} !important;

    ${mediaQueries.mobile} {
      ${theme.fonts.BODY.BODY3_R}
    }
  `,
);
