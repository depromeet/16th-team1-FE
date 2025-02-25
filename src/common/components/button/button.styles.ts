import { css } from '@emotion/react';

import { ButtonVariant, Size, sizes, Usage, variants } from '@/assets/styles/button';

/** 전달받은 디자인 시스템의 props로 스타일을 계산하는 유틸함수 */
export const generateCss = (
  size: Size,
  usage: Usage,
  variant: ButtonVariant,
): ReturnType<typeof css> => {
  const buttonStyle = css`
    width: ${sizes[usage][size].width};
    height: ${sizes[usage][size].height};
    padding: ${sizes[usage][size].padding};
    background: ${variants[variant].default.background};
    color: ${variants[variant].default.color};
    font-size: ${usage === 'normal' ? sizes['normal'][size].fontSize : 'inherit'};
    border-radius: ${sizes[usage][size].borderRadius};

    &:hover {
      background: ${variants[variant].hover.background};
      color: ${variants[variant].hover.color};
    }

    &:active {
      background: ${variants[variant].pressed.background};
      color: ${variants[variant].pressed.color};
    }

    &:disabled {
      background: ${variants[variant].disabled.background};
      color: ${variants[variant].disabled.color};
    }
  `;

  return buttonStyle;
};
