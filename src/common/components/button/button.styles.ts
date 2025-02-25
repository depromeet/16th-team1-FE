import { css } from '@emotion/react';

import { ButtonVariant, Size, sizes, Usage, variants } from '@/assets/styles/button';

export const buttonsStyle = (size: Size, usage: Usage, variant: ButtonVariant) => css`
  padding: ${sizes[usage][size].padding};
  background: ${variants[variant].default.background};
  color: ${variants[variant].default.color};
  font-size: ${usage === 'text' ? sizes['text'][size].fontSize : 'inherit'};
  border-radius: ${sizes[usage][size].borderRadius};

  ${usage === 'multi' && {
    display: 'flex',
    alignItems: 'center',
    gap: sizes['multi'][size].gap,
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
