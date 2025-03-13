import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const Wrapper = css`
  display: flex;
  flex-direction: column;

  @media (width >= 768px) {
    gap: 2rem;
  }

  @media (width < 768px) {
    gap: 1.2rem;
    margin: 0 2rem;
  }
`;

export const contentWrapper = withTheme(
  (theme) => css`
    @media (width >= 970px) {
      max-width: 90rem;
    }

    @media (width >= 768px) {
      display: flex;
      padding: 6.4rem 8.8rem;
      background: ${theme.colors.GRAY[990]};
      flex-direction: column;
      border-radius: 3.2rem;
      gap: 3.2rem;
    }

    @media (width < 970px) and (width >= 768px) {
      width: 100%;
    }

    @media (width < 768px) {
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
  @media (width < 768px) {
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

    @media (width < 970px) and (width >= 768px) {
      width: 100%;
    }

    @media (width < 768px) {
      width: 100%;
      background: ${theme.colors.GRAY[990]};
    }
  `,
);

export const descriptionTitle = withTheme(
  (theme) => css`
    @media (width >= 768px) {
      ${theme.fonts.SUBTITLE.SUB2_SB};
      color: ${theme.colors.GRAY[50]};
    }

    @media (width < 768px) {
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${theme.colors.GRAY[50]};
    }
  `,
);

export const description = withTheme(
  (theme) => css`
    @media (width >= 768px) {
      ${theme.fonts.BODY.BODY2_R};
      color: ${theme.colors.GRAY[300]};
    }

    @media (width < 768px) {
      ${theme.fonts.BODY.BODY3_R};
      color: ${theme.colors.GRAY[300]};
    }
  `,
);

export const bottomWrapper = css`
  @media (width >= 768px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-self: stretch;
  }

  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    align-self: stretch;
  }
`;
