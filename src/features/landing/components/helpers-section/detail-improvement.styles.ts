import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const detailImprovementWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 3.6rem;
    max-width: 103rem;
    width: 100%;

    @media (width < ${theme.deviceWidth.desktop}) {
      flex-direction: column;
      gap: 1.6rem;
      align-items: center;
    }
  `,
);

export const improvementItemWrapper = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 27rem;
    min-width: 27rem;

    @media (width < ${theme.deviceWidth.desktop}) {
      width: 100%;
      flex-direction: row;
      gap: 0.8rem;
      overflow-x: auto;
    }
  `,
);

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

    @media (width < ${theme.deviceWidth.desktop}) {
      padding: ${theme.sizeToken.padding.sm_1} ${theme.sizeToken.padding.s_2};
    }

    @media (width <= ${theme.deviceWidth.mobile}) {
      ${theme.fonts.SUBTITLE.SUB5_SB}
    }
  `,
);

export const improvementContentWrapper = withTheme(
  (theme) => css`
    display: flex;
    height: 100%;
    padding: 5rem;
    border-radius: 1.6rem;
    flex-direction: column;
    gap: 3.6rem;
    max-width: 72.4rem;
    flex: 1;
    background-color: #16161a;

    @media (width <= ${theme.deviceWidth.mobile}) {
      padding: 0;
      gap: 2.4rem;
      background-color: transparent;
    }
  `,
);

export const image = withTheme(
  (theme) => css`
    object-fit: cover;

    @media (width < ${theme.deviceWidth.desktop}) {
      width: 100%;
    }
  `,
);

export const improvementTextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
