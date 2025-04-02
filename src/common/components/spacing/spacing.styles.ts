import { css } from '@emotion/react';

import { SpacingProps } from './spacing';

export const spacing = ({ direction, size }: SpacingProps) => css`
  width: ${direction === 'horizontal' ? `${size}rem` : 0};
  height: ${direction === 'vertical' ? `${size}rem` : 0};
`;
