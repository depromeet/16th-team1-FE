import { css } from '@emotion/react';

import { ButtonVariant, Size, SIZE, Usage, VARIANTS } from '@/assets/styles/button';

const BUTTON_STYLE_SYSYEM = {
  // 사이즈 관련 스타일
  createSizeStyle: (size: Size, usage: Usage) => css`
    padding: ${SIZE[usage][size].padding};
    border-radius: ${SIZE[usage][size].borderRadius};
  `,

  // 버튼 상태 관련 스타일
  createStateStyles: (variant: ButtonVariant) => css`
    background-color: ${VARIANTS[variant]['default'].background};
    color: ${VARIANTS[variant]['default'].color};

    &:hover {
      background-color: ${VARIANTS[variant].hover.background};
      color: ${VARIANTS[variant].hover.color};
    }

    &:active {
      background-color: ${VARIANTS[variant].pressed.background};
      color: ${VARIANTS[variant].pressed.color};
    }

    &:disabled {
      background-color: ${VARIANTS[variant].disabled.background};
      color: ${VARIANTS[variant].disabled.color};
    }
  `,

  // 용도별 고유 스타일
  createUsageStyle: (usage: Usage, size: Size) => {
    const usageStyles = {
      text: css`
        font-size: ${SIZE['text'][size].fontSize};
        line-height: ${SIZE['text'][size].lineHeight};
      `,
      icon: css``,
      multi: css`
        display: flex;
        align-items: center;
        gap: ${SIZE['multi'][size].gap};
        font-size: ${SIZE['multi'][size].fontSize};
        line-height: ${SIZE['multi'][size].lineHeight};
      `,
    };
    return usageStyles[usage];
  },
};

/* 최종 스타일 생성 함수 */
export const buttonsStyle = (size: Size, usage: Usage, variant: ButtonVariant) => css`
  ${BUTTON_STYLE_SYSYEM.createSizeStyle(size, usage)};
  ${BUTTON_STYLE_SYSYEM.createStateStyles(variant)}
  ${BUTTON_STYLE_SYSYEM.createUsageStyle(usage, size)}
`;
