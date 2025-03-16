import { css } from '@emotion/react';

import { mediaQueries } from '@/assets/styles/device-width';
import { withTheme } from '@/common/utils/with-theme';

export const FAQWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 77.4rem;
  max-width: 77.4rem;
  margin: auto;

  ${mediaQueries.mobileAndTablet} {
    width: 100%;
  }

  ${mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  ${mediaQueries.mobile} {
    padding: 0 2rem;
    gap: 3.2rem;
  }
`;

export const title = withTheme(
  (theme, inView: boolean) => css`
    ${theme.fonts.HEADLINE.HEAD1}
    color: ${theme.colors.GRAY[100]} !important;

    ${mediaQueries.mobile} {
      ${theme.fonts.HEADLINE.HEAD6}
    }

    opacity: ${inView ? 1 : 0};
    transform: translateY(${inView ? '0' : '2rem'});
    transition:
      opacity 0.6s ease-out,
      transform 0.6s ease-out;
  `,
);

export const accordionRoot = (inView: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;

  ${mediaQueries.mobile} {
    gap: 1.6rem;
  }

  opacity: ${inView ? 1 : 0};
  transform: translateY(${inView ? '0' : '2rem'});
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: ${inView ? '0.5s' : '0s'};
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

    ${mediaQueries.mobile} {
      padding: 1.8rem 2rem;
      gap: 1.6rem;
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
    ${theme.fonts.HEADLINE.HEAD4}
    color: ${theme.colors.GRAY[300]} !important;
    text-align: left;

    &[data-state='open'] {
      color: ${theme.colors.GRAY[100]} !important;
    }

    ${mediaQueries.mobile} {
      ${theme.fonts.SUBTITLE.SUB2_B}
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

    ${mediaQueries.mobile} {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 170%;
      letter-spacing: -0.015rem;
    }
  `,
);
