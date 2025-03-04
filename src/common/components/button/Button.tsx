import { forwardRef } from 'react';

import { IconProps, MultiProps, TextProps } from '@/assets/styles/button';
import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './button.styles';

export type ButtonProps = TextProps | MultiProps | IconProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, usage, variant, icon, children, iconPosition, ...props }, ref) => {
    const content = usage !== 'icon' ? children : icon;

    return (
      <BaseButton
        ref={ref}
        css={styles.buttonsStyle(size, usage, variant)}
        data-icon-position={iconPosition}
        {...props}
      >
        {usage === 'multi' && iconPosition === 'left' && icon}
        {content}
        {usage === 'multi' && iconPosition === 'right' && icon}
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';

export { Button };
