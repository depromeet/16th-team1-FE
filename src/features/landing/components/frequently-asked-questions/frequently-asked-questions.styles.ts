import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const FAQWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
  align-items: center;
  width: 77.4rem;
  max-width: 77.4rem;
  margin: auto;
`;

export const title = withTheme(
  (theme) => css`
    color: ${theme.colors.GRAY[50]};
    font-family: GeneralSans, sans-serif;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 118%;
    letter-spacing: -0.08rem;
  `,
);

export const accordionRoot = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
`;

export const accordionItem = withTheme(
  (theme) => css`
    display: flex;
    padding: 2.4rem 2.8rem;
    flex-direction: column;
    gap: 2.4rem;

    &[data-state='open'] {
      border-radius: 1rem;
      background-color: ${theme.colors.GRAY.bg};
    }
  `,
);

export const accordionHeader = css`
  cursor: pointer;
`;

export const accordionTrigger = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    gap: 6.6rem;
    justify-content: space-between;
    width: 100%;
    background-color: inherit;
    border: none;
    ${theme.fonts.HEADLINE.HEAD3}
    color: ${theme.colors.GRAY[300]};

    &[data-state='open'] {
      color: ${theme.colors.GRAY[100]};
    }
  `,
);

export const icon = withTheme(
  (theme) => css`
    transition: transform 0.2s ease-in-out;

    [data-state='open'] & {
      transform: rotate(270deg); /* 열릴 때 V 모양 */
      path {
        fill: ${theme.colors.GRAY[100]};
      }
    }

    [data-state='closed'] & {
      transform: rotate(180deg); /* 닫힐 때 > 모양 */
      path {
        fill: ${theme.colors.GRAY[400]};
      }
    }
  `,
);

export const accordionContent = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[400]};
  `,
);
