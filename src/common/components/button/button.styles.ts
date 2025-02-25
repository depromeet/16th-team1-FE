import { css } from '@emotion/react';

import { ButtonVariant, ICON_TEXT_GAP, Size, sizes, Usage, variants } from '@/assets/styles/button';

export const buttonsStyle = (
  size: Size,
  usage: Usage,
  variant: ButtonVariant,
  isMultiButton: boolean,
) => css`
  padding: ${sizes[usage][size].padding};
  background: ${variants[variant].default.background};
  color: ${variants[variant].default.color};
  font-size: ${usage === 'normal' ? sizes['normal'][size].fontSize : 'inherit'};
  border-radius: ${sizes[usage][size].borderRadius};

  ${isMultiButton && {
    display: 'flex',
    alignItems: 'center',
    gap: `${ICON_TEXT_GAP}`,
  }}

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
