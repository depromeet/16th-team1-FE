import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const modalContentWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: flex-start;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 558px;
    padding: 2.4rem 1.6rem 2.8rem;
    background: ${theme.colors.GRAY[990]};
    transform: translate(-50%, -50%);
    flex-direction: column;
    gap: 1.4rem;
    border-radius: 1.6rem;
    box-shadow: 0 0.4rem 1.05rem 0 rgb(0 0 0 / 82%);
    outline: none;
  `,
);

export const modalHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_SB}
    padding: 0 10px;
    color: ${theme.colors.GRAY[200]};
  `,
);

export const closeIcon = css`
  display: flex;
  align-items: center;
  margin: 0.8rem 1rem;
  gap: 1rem;
`;

export const modalDescription = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  align-self: stretch;
`;

export const dataWrapper = (isChosen: boolean) =>
  withTheme(
    (theme) => css`
      display: flex;
      align-items: center;
      padding: 0.6rem 1rem;
      gap: 4rem;
      align-self: stretch;
      cursor: pointer;

      ${isChosen &&
      `border-radius: 8px;
      background-color: ${theme.colors.GRAY[950]};`}

      ${!isChosen &&
      `&:hover {
        border-radius: 8px;
        background-color: ${theme.colors.GRAY[900]};
      }`}
    `,
  );

export const date = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY3_R}
    color: ${theme.colors.GRAY[400]};
  `,
);

export const descriptionWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  align-self: stretch;
`;

export const description = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[300]};
  `,
);
