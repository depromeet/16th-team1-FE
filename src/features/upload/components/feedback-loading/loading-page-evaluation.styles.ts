import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const contentWrapper = css`
  @media (width >= 970px) {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 4rem;
    align-self: stretch;
  }

  @media (width < 970px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1.6rem;
  }
`;

export const optionWrapper = css`
  @media (width >= 970px) {
    display: flex;
    flex-direction: column;
    width: 27rem;
    gap: 1.2rem;
  }

  @media (width < 970px) and (width >= 768px) {
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    justify-content: space-between;
  }

  @media (width < 768px) {
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    gap: 0.8rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const optionButton = (selected: boolean) =>
  withTheme(
    (theme) => css`
      display: flex;
      align-items: center;
      align-self: stretch;
      border-radius: 1.2rem;
      ${selected ? theme.fonts.SUBTITLE.SUB2_B : theme.fonts.SUBTITLE.SUB2_SB};
      background: ${selected ? theme.colors.GRAY[990] : 'transparent'};
      color: ${selected ? theme.colors.GRAY[50] : theme.colors.GRAY[400]};
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        background: ${!selected && theme.colors.GRAY[900]};
      }

      @media (width >= 970px) {
        padding: 2rem 2.4rem;
      }

      @media (width < 970px) {
        padding: 1.4rem 1.2rem;
      }

      @media (width < 768px) {
        ${theme.fonts.SUBTITLE.SUB5_SB}
        background: ${selected ? theme.colors.GRAY[990] : 'transparent'};
        color: ${selected ? theme.colors.GRAY[50] : theme.colors.GRAY[400]};
      }
    `,
  );

export const mainContent = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (width >= 970px) {
      gap: 1.6rem;
    }

    @media (width >= 768px) and (width < 970px) {
      padding: 5rem;
      gap: 3.6rem;
      flex: 1 0 0;
      border-radius: 1.6rem;
      background: ${theme.colors.GRAY[990]};
    }

    @media (width < 768px) {
      gap: 2.4rem;
    }
  `,
);

export const image = css`
  @media (width >= 970px) {
    max-width: 59rem;
  }

  @media (width < 970px) {
    width: 100%;
  }
`;

export const contentBox = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    @media (width >= 970px) {
      padding: 2.4rem;
      background: ${theme.colors.GRAY[990]};
      gap: 0.8rem;
      border-radius: 1.6rem;
      max-width: 59rem;
    }

    @media (width >= 768px) and (width < 970px) {
      gap: 2rem;
    }

    @media (width < 768px) {
      gap: 1.2rem;
    }
  `,
);

export const sectionTitle = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;

    @media (width >= 970px) {
      gap: 0.6rem;
      ${theme.fonts.HEADLINE.HEAD6};
      color: ${theme.colors.GRAY[200]};
    }

    @media (width >= 768px) and (width < 970px) {
      gap: 0.8rem;
      ${theme.fonts.HEADLINE.HEAD4};
      color: ${theme.colors.GRAY[200]};
    }

    @media (width < 768px) {
      gap: 0.4rem;
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${theme.colors.GRAY[200]};
    }
  `,
);

export const descriptionWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  @media (width >= 768px) {
    padding-left: 3.2rem;
    gap: 0.6rem;
  }

  @media (width < 768px) {
    gap: 0.8rem;
  }
`;

export const textWrapper = css`
  @media (width >= 768px) {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
  }

  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
    align-self: stretch;
  }
`;

export const originalText = withTheme(
  (theme) => css`
    min-width: 6rem;

    @media (width >= 768px) {
      padding-top: 0.2rem;
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${theme.colors.RED[400]};
    }

    @media (width < 768px) {
      ${theme.fonts.SUBTITLE.SUB5_M};
      color: ${theme.colors.RED[400]};
    }
  `,
);

export const revisedText = withTheme(
  (theme) => css`
    min-width: 6rem;

    @media (width >= 768px) {
      padding-top: 0.2rem;
      ${theme.fonts.SUBTITLE.SUB3_SB};
      color: ${theme.colors.GREEN[400]};
    }

    @media (width < 768px) {
      ${theme.fonts.SUBTITLE.SUB5_M};
      color: ${theme.colors.GREEN[400]};
    }
  `,
);

export const text = withTheme(
  (theme) => css`
    @media (width >= 768px) {
      ${theme.fonts.BODY.BODY2_M};
      color: ${theme.colors.GRAY[300]};
    }

    @media (width < 768px) {
      ${theme.fonts.BODY.BODY3_R};
      color: ${theme.colors.GRAY[300]};
    }
  `,
);
