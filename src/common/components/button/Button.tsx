import { forwardRef } from 'react';

import { Usage, ButtonVariant, Size } from '@/assets/styles/button';
import { BaseButton, BaseButtonProps } from '@/common/components/base-button/base-button';

import { generateCss } from './button.styles';

export interface ButtonProps extends BaseButtonProps {
  size: Size;
  usage: Usage;
  variant: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, usage, variant, ...props }, ref) => {
    const buttonStyle = generateCss(size, usage, variant);

    return <BaseButton ref={ref} css={buttonStyle} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button };
