import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  position: relative;
  margin: 0 auto;

  ${mediaQueries.tablet} {
    width: calc(100% - 4.8rem);
  }

  ${mediaQueries.mobile} {
    width: calc(100% - 4rem);
  }
`;

export const imageContainer = css`
  position: relative;
`;

export const imageWrapper = css`
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 83.7rem;
  height: auto;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: gray;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB1_SB};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -2.8rem;
    left: 50%;
    width: 100%;
    max-width: 44.4rem;
    padding: 2.8rem 3.2rem;
    background: linear-gradient(180deg, rgb(0 0 0 / 15%) 0%, rgb(63 188 95 / 15%) 100%);
    border: 1px solid rgb(255 255 255 / 56%);
    gap: 1rem;
    border-radius: 1.6rem;
    backdrop-filter: blur(5rem);
    color: #fff !important;
    text-align: center;
    transform: translateX(-50%);
    white-space: pre-wrap;
    word-break: keep-all;

    ${mediaQueries.mobile} {
      max-width: 26.4rem;
      padding: 1.2rem 2rem;
      ${theme.fonts.BODY.BODY4_M};
    }
  `,
);

export const process = css`
  position: relative;
  width: 100%;
  padding-top: 7.972rem;
  padding-bottom: 6.706rem;
`;

export const iconWrapper = (backgroundColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6rem;
  height: 6rem;
  padding: 1.5906rem 1.4537rem 1.4094rem 1.5463rem;
  background-color: ${backgroundColor};
  border-radius: 50%;
  transform: translate(-50%, calc(-50% + 0.6rem));
`;

export const feedbackType = withTheme(
  (theme) => css`
    position: absolute;
    left: 50%;
    margin-top: 5.128rem;
    ${theme.fonts.SUBTITLE.SUB1_SB};
    color: ${theme.colors.GRAY[300]} !important;
    transform: translateX(-50%);

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB5_SB};
    }
  `,
);
