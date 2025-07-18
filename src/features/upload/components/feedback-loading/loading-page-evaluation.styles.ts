import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { Z_INDEX } from '@/common/constants/z-index';
import { withTheme } from '@/common/utils/with-theme';

export const contentWrapper = css`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-self: stretch;
  position: relative;

  ${mediaQueries.tablet} {
    max-width: 90rem;
  }

  ${mediaQueries.mobileAndTablet} {
    width: 100%;
    flex-direction: column;
    align-self: center;
    gap: 1.6rem;
  }
`;

export const scrollWrapper = css`
  display: flex;
  justify-content: center;
  ${mediaQueries.mobile} {
    align-items: safe center;
    justify-content: safe center;
    position: relative;
    left: -2rem;
    width: calc(100% + 4rem);
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-left: 2rem;
    padding-right: 2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const optionWrapper = css`
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    width: 27rem;
    gap: 1.2rem;
  }

  ${mediaQueries.tablet} {
    display: flex;
    gap: 0.8rem;
  }

  ${mediaQueries.mobile} {
    gap: 0.8rem;
    display: flex;
  }
`;

export const leftSensor = css`
  ${mediaQueries.mobile} {
    top: 0;
    left: 0;
    background: transparent;
  }
`;

export const rightSensor = css`
  ${mediaQueries.mobile} {
    top: 0;
    right: 0;
    background: transparent;
  }
`;

export const shadowRight = (isShow?: boolean) => css`
  ${mediaQueries.mobile} {
    position: absolute;
    top: -1rem;
    right: -2rem;
    z-index: ${Z_INDEX.shadow};
    width: 5.5rem;
    height: 6.2rem;
    background: linear-gradient(90deg, rgb(24 23 29 / 0%) 0%, #18171d 100%);
    transition: opacity 0.4s ease;
    opacity: ${isShow ? 1 : 0};
    pointer-events: none;
  }
`;

export const shadowLeft = (isShow?: boolean) => css`
  ${mediaQueries.mobile} {
    position: absolute;
    top: -1rem;
    left: -2rem;
    z-index: ${Z_INDEX.shadow};
    width: 5.5rem;
    height: 6.2rem;
    background: linear-gradient(270deg, rgb(24 23 29 / 0%) 0%, #18171d 100%);
    transition: opacity 0.4s ease;
    opacity: ${isShow ? 1 : 0};
    pointer-events: none;
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

      ${mediaQueries.desktop} {
        padding: 2rem 2.4rem;
      }

      ${mediaQueries.mobileAndTablet} {
        padding: 1.4rem 1.2rem;
      }

      ${mediaQueries.mobile} {
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

    ${mediaQueries.desktop} {
      gap: 1.6rem;
    }

    ${mediaQueries.tablet} {
      padding: 5rem;
      gap: 3.6rem;
      flex: 1 0 0;
      border-radius: 1.6rem;
      background: ${theme.colors.GRAY[990]};
    }

    ${mediaQueries.mobile} {
      gap: 2.4rem;
    }
  `,
);

export const image = css`
  ${mediaQueries.desktop} {
    max-width: 59rem;
  }

  ${mediaQueries.mobileAndTablet} {
    width: 100%;
  }
`;

export const contentBox = withTheme(
  (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    ${mediaQueries.desktop} {
      padding: 2.4rem;
      background: ${theme.colors.GRAY[990]};
      gap: 0.8rem;
      border-radius: 1.6rem;
      max-width: 59rem;
    }

    ${mediaQueries.tablet} {
      gap: 2rem;
    }

    ${mediaQueries.mobile} {
      gap: 1.2rem;
    }
  `,
);

export const sectionTitle = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;

    ${mediaQueries.desktop} {
      gap: 0.6rem;
      ${theme.fonts.HEADLINE.HEAD6};
      color: ${theme.colors.GRAY[200]};
    }

    ${mediaQueries.tablet} {
      gap: 0.8rem;
      ${theme.fonts.HEADLINE.HEAD4};
      color: ${theme.colors.GRAY[200]};
    }

    ${mediaQueries.mobile} {
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
  gap: 0.6rem;

  ${mediaQueries.tabletAndDesktop} {
    padding-left: 3.2rem;
  }

  ${mediaQueries.mobile} {
    gap: 0.8rem;
  }
`;

export const textWrapper = css`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  ${mediaQueries.mobile} {
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
    padding-top: 0.2rem;
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: ${theme.colors.RED[400]};

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_M};
      color: ${theme.colors.RED[400]};
    }
  `,
);

export const revisedText = withTheme(
  (theme) => css`
    min-width: 6rem;
    padding-top: 0.2rem;
    ${theme.fonts.SUBTITLE.SUB3_SB};
    color: ${theme.colors.GREEN[400]};

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_M};
      color: ${theme.colors.GREEN[400]};
    }
  `,
);

export const text = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M};
    color: ${theme.colors.GRAY[300]};

    ${mediaQueries.mobile} {
      ${theme.fonts.BODY.BODY3_R};
      color: ${theme.colors.GRAY[300]};
    }
  `,
);
