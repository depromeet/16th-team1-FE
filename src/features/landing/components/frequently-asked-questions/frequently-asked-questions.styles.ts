import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const FAQWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`;

export const title = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD1}
    color: ${theme.colors.GRAY[10]};
  `,
);

export const accordionRoot = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 77.4rem;
`;

export const accordionItem = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem 2.8rem;

  &[data-state='open'] {
    border-radius: 1rem;
    background-color: #18171d;
  }
`;

export const accordionHeader = css`
  cursor: pointer;
`;

export const accordionTrigger = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: inherit;
    border: none;
    ${theme.fonts.HEADLINE.HEAD3}
    color: ${theme.colors.GRAY[100]};

    &[data-state='open'] {
      color: ${theme.colors.GRAY[10]};
    }
  `,
);

export const icon = css`
  transition: transform 0.2s ease-in-out;

  [data-state='open'] & {
    transform: rotate(270deg); /* 열릴 때 V 모양 */
  }

  [data-state='closed'] & {
    transform: rotate(180deg); /* 닫힐 때 > 모양 */
  }
`;

export const accordionContent = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[200]};
  `,
);
