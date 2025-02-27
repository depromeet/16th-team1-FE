import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const accordionTriggerButton = withTheme(
  (theme, isCurrentTriggerSelected: boolean) => css`
    color: ${isCurrentTriggerSelected ? theme.colors.SORA[200] : theme.colors.GRAY[200]};
    font-size: ${isCurrentTriggerSelected && '1.6rem'};
    font-weight: ${isCurrentTriggerSelected && 'bolder'};
    line-height: ${isCurrentTriggerSelected && '1.92rem'};
    transition:
      font-size 0.3s ease-in-out,
      color 0.3s ease-in-out,
      font-weight 0.3s ease-in-out,
      line-height 0.3s ease-in;

    /* Radix의 접근성으로 인한 기본 포커스 스타일 제거 */
    &:focus {
      outline: none;
    }
  `,
);
