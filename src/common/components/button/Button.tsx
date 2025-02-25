import { forwardRef } from 'react';

import { IconOnlyProps, TextAndIconProps, TextOnlyProps } from '@/assets/styles/button';
import { BaseButton } from '@/common/components/base-button/base-button';

import * as styles from './button.styles';

export type ButtonProps = TextOnlyProps | TextAndIconProps | IconOnlyProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, usage, variant, icon, children, iconPosition, ...props }, ref) => {
    const content = usage !== 'icon' ? children : icon;

    return (
      <BaseButton ref={ref} css={styles.buttonsStyle(size, usage, variant)} {...props}>
        {usage === 'multi' && iconPosition === 'left' && icon}
        {content}
        {usage === 'multi' && iconPosition === 'right' && icon}
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';

export { Button };
