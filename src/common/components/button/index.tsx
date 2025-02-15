import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../basebutton';

import * as styles from './Button.styles';

/** TODO: 디자인 시스템에 따라 추가 및 세분화 예정 */
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

/** 디자인 시스템을 따르는 버튼 */
export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return <BaseButton css={[styles.sizes[size], styles.variants[variant]]} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button };
