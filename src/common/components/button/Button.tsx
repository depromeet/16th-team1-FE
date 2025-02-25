import { forwardRef } from 'react';

import { IconOnlyProps, TextAndIconProps, TextOnlyProps } from '@/assets/styles/button';
import { BaseButton } from '@/common/components/base-button/base-button';

import * as styles from './button.styles';

export type ButtonProps = TextOnlyProps | TextAndIconProps | IconOnlyProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, usage, variant, icon, children, iconPosition, ...props }, ref) => {
    const isMultiButton = icon !== undefined && usage === 'normal';
    const content = !isMultiButton && icon ? icon : children;

    return (
      <BaseButton
        ref={ref}
        css={styles.buttonsStyle(size, usage, variant, isMultiButton)}
        {...props}
      >
        {isMultiButton && iconPosition === 'left' && icon}
        {content}
        {isMultiButton && iconPosition === 'right' && icon}
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';

export { Button };
