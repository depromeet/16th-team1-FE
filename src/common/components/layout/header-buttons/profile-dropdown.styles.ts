import { css } from '@emotion/react';

import { Z_INDEX } from '@/common/constants/z-index';
import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 14.8rem;
`;

export const positionRelative = css`
  position: relative;
`;

export const profileContent = withTheme(
  (theme) => css`
    display: flex;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: ${Z_INDEX.dropdown};
    height: 14.9rem;
    padding: 0.6rem;
    transform: scale(0.8) translateY(1rem);
    min-width: 16.8rem;
    background-color: ${theme.colors.GRAY[990]};
    border-radius: 1.2rem;
    flex-direction: column;
    gap: 1rem;
    transform-origin: top right;
    opacity: 0;

    &[data-state='open'] {
      animation: open-dropdown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    &[data-state='closed'] {
      animation: close-dropdown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes open-dropdown {
      0% {
        opacity: 0;
        transform: scale(0.8) translateY(1rem);
      }

      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes close-dropdown {
      0% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }

      100% {
        opacity: 0;
        transform: scale(0.8) translateY(1rem);
      }
    }
  `,
);

export const subRemainFeebackCountPragraph = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0.8rem;
    color: ${theme.colors.GRAY[300]};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.012rem;
  `,
);
