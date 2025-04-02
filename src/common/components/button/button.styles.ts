import { css } from '@emotion/react';

import {
  BUTTON_FONTS,
  BUTTON_SIZE,
  BUTTON_VARIANTS,
  RestSize,
  SizeKey,
  Usage,
  VariantKey,
} from '@/assets/styles/button';

const BUTTON_STYLE_SYSYEM = {
  createSizeStyle: (size: SizeKey, usage: Usage) => {
    const sizeStyles = {
      text: (size: SizeKey) => css`
        padding: ${BUTTON_SIZE.text[size].padding};
        border-radius: ${BUTTON_SIZE.text[size].borderRadius};
      `,
      multi: (size: SizeKey) => {
        return css`
          padding-top: ${BUTTON_SIZE.multi[size as RestSize].paddingY};
          padding-bottom: ${BUTTON_SIZE.multi[size as RestSize].paddingY};
          border-radius: ${BUTTON_SIZE.multi[size as RestSize].borderRadius};
          gap: ${BUTTON_SIZE.multi[size as RestSize].gap};

          &[data-icon-position='left'] {
            padding-left: ${BUTTON_SIZE.multi[size as RestSize].paddingIconSide};
            padding-right: ${BUTTON_SIZE.multi[size as RestSize].paddingTextSide};
          }

          &[data-icon-position='right'] {
            padding-left: ${BUTTON_SIZE.multi[size as RestSize].paddingTextSide};
            padding-right: ${BUTTON_SIZE.multi[size as RestSize].paddingIconSide};
          }
        `;
      },
      icon: (size: SizeKey) => css`
        padding: ${BUTTON_SIZE.icon[size as RestSize].padding};
        border-radius: ${BUTTON_SIZE.icon[size as RestSize].borderRadius};
      `,
    };

    return sizeStyles[usage](size);
  },

  createFontStyle: (size: SizeKey, usage: Usage) => {
    const fontStyles = {
      text: (size: SizeKey) => css`
        font-size: ${BUTTON_FONTS.text[size].fontSize};
        font-weight: ${BUTTON_FONTS.text[size].fontWeight};
        line-height: ${BUTTON_FONTS.text[size].lineHeight};
      `,

      multi: (size: SizeKey) => css`
        font-size: ${BUTTON_FONTS.multi[size as RestSize].fontSize};
        font-weight: ${BUTTON_FONTS.multi[size as RestSize].fontWeight};
        line-height: ${BUTTON_FONTS.multi[size as RestSize].lineHeight};
      `,

      icon: () => css``,
    };
    return fontStyles[usage](size);
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

  createAdditionalStyle: (usage: Usage) => {
    const additionalStyle: Record<Usage, ReturnType<typeof css>> = {
      text: css``,
      multi: css`
        display: flex;
        align-items: center;
      `,
      icon: css``,
    };

    return additionalStyle[usage];
  },
};

/* 최종 스타일 생성 */
export const buttonsStyle = (size: SizeKey, usage: Usage, variant: VariantKey) => css`
  ${BUTTON_STYLE_SYSYEM.createSizeStyle(size, usage)};
  ${BUTTON_STYLE_SYSYEM.createFontStyle(size, usage)};
  ${BUTTON_STYLE_SYSYEM.createStateStyles(variant)};
  ${BUTTON_STYLE_SYSYEM.createAdditionalStyle(usage)};
`;
