import { forwardRef } from 'react';

import { Interpolation } from '@emotion/react';
import { Slot } from '@radix-ui/react-slot';

import * as styles from './button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  cssProps?: Interpolation; // 오버라이딩
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = 'default', size = 'default', cssProps, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        css={[styles.baseStyle, styles.variants[variant], styles.sizes[size], cssProps]}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
