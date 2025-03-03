import { css } from '@emotion/react';

import {
  BUTTON_SIZE,
  BUTTON_VARIANTS,
  RestSize,
  Size,
  TextSize,
  Usage,
} from '@/assets/styles/button';

const BUTTON_STYLE_SYSYEM = {
  createSizeStyle: (size: Size, usage: Usage) => {
    const sizeStyles: Record<Usage, ReturnType<typeof css>> = {
      text: css`
        padding: ${BUTTON_SIZE.text[size as TextSize].padding};
        border-radius: ${BUTTON_SIZE.text[size as TextSize].borderRadius};
      `,
      multi: css`
        padding: ${BUTTON_SIZE.multi[size as RestSize].padding};
        border-radius: ${BUTTON_SIZE.multi[size as RestSize].borderRadius};
      `,
      icon: css`
        padding: ${BUTTON_SIZE.icon[size as RestSize].padding};
        border-radius: ${BUTTON_SIZE.icon[size as RestSize].borderRadius};
      `,
    };

    return sizeStyles[usage];
  },

  createFontStyle: (size: Size, usage: Usage) => {
    const fontStyles: Record<Usage, ReturnType<typeof css>> = {
      text: css`
        font-size: ${BUTTON_SIZE.text[size as TextSize].fontSize};
        font-weight: ${BUTTON_SIZE.text[size as TextSize].fontWeight};
        line-height: ${BUTTON_SIZE.text[size as TextSize].lineHeight};
      `,

      multi: css`
        font-size: ${BUTTON_SIZE.multi[size as RestSize].fontSize};
        font-weight: ${BUTTON_SIZE.multi[size as RestSize].fontWeight};
        line-height: ${BUTTON_SIZE.multi[size as RestSize].lineHeight};
      `,

      icon: css``,
    };
    return fontStyles[usage];
  },

  createStateStyles: (variant: keyof typeof BUTTON_VARIANTS) => css`
    background-color: ${BUTTON_VARIANTS[variant].default.background};
    color: ${BUTTON_VARIANTS[variant].default.color};

    &:hover {
      background-color: ${BUTTON_VARIANTS[variant].hover.background};
      color: ${BUTTON_VARIANTS[variant].hover.color};
    }

    &:active {
      background-color: ${BUTTON_VARIANTS[variant].pressed.background};
      color: ${BUTTON_VARIANTS[variant].pressed.color};
    }

    &:disabled {
      background-color: ${BUTTON_VARIANTS[variant].disabled.background};
      color: ${BUTTON_VARIANTS[variant].disabled.color};
    }
  `,

  createAdditionalStyle: (usage: Usage, size: Size) => {
    const additionalStyle: Record<Usage, ReturnType<typeof css>> = {
      text: css``,
      multi: css`
        display: flex;
        align-items: center;
        gap: ${BUTTON_SIZE.multi[size as RestSize].gap};
      `,
      icon: css``,
    };

    return additionalStyle[usage];
  },
};

/* 최종 스타일 생성 */
export const buttonsStyle = (
  size: Size,
  usage: Usage,
  variant: keyof typeof BUTTON_VARIANTS,
) => css`
  ${BUTTON_STYLE_SYSYEM.createSizeStyle(size, usage)};
  ${BUTTON_STYLE_SYSYEM.createFontStyle(size, usage)};
  ${BUTTON_STYLE_SYSYEM.createStateStyles(variant)};
  ${BUTTON_STYLE_SYSYEM.createAdditionalStyle(usage, size)};
`;
