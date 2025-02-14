import { forwardRef } from 'react';

import { Button, ButtonProps } from '../button';

import * as styles from './BaseButton.styles';

/** TODO: 디자인 시스템에 따라 추가 예정 */
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface BaseButtonProps extends ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return <Button css={[styles.sizes[size], styles.variants[variant]]} ref={ref} {...props} />;
  },
);
BaseButton.displayName = 'BaseButton';

export { BaseButton };
