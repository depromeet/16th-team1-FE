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
  ({ size, usage, variant, icon, ...props }, ref) => {
    const buttonStyle = generateCss(size, usage, variant, icon !== undefined && usage === 'normal');

    // 텍스트만 >> size, usage, variant
    // 아이콘만 >> size, usage, variant, icon
    // 텍스트+아이콘  >> size, usage, variant, icon, position

    return <BaseButton ref={ref} css={buttonStyle} icon={icon} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button };
