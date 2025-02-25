import { forwardRef, ReactNode } from 'react';

import { Usage, ButtonVariant, Size } from '@/assets/styles/button';
import { BaseButton, BaseButtonProps } from '@/common/components/base-button/base-button';

import { generateCss } from './button.styles';

export interface ButtonProps extends BaseButtonProps {
  size: Size;
  usage: Usage;
  variant: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, usage, variant, icon, children, iconPosition, ...props }, ref) => {
    const isMultiButton = icon !== undefined && usage === 'normal';
    const buttonStyle = generateCss(size, usage, variant, isMultiButton);

    // 텍스트만 >> size, usage, variant
    // 아이콘만 >> size, usage, variant, icon
    // 텍스트+아이콘  >> size, usage, variant, icon, iconPosition

    return (
      <BaseButton ref={ref} css={buttonStyle} {...props}>
        {isMultiButton && iconPosition === 'left' && icon}
        {!isMultiButton && icon ? icon : children}
        {isMultiButton && iconPosition === 'right' && icon}
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';

export { Button };
