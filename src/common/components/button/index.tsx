import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import * as styles from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp css={styles.buttonStyle} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button };
