import { forwardRef, ReactNode } from 'react';

import { Usage, ButtonVariant, Size } from '@/assets/styles/button';
import { BaseButton, BaseButtonProps } from '@/common/components/base-button/base-button';

import { generateCss } from './button.styles';

// 공통 prop들
type CommonProps = {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size: Size;
  variant: ButtonVariant;
} & BaseButtonProps;

// 텍스트만 있는 경우 (normal)
type TextOnlyProps = CommonProps & {
  usage: 'normal';
  children: ReactNode;
  icon?: never;
  iconPosition?: never;
};

// 텍스트와 아이콘이 모두 있는 경우 (normal)
type TextAndIconProps = CommonProps & {
  usage: 'normal';
  children: ReactNode;
  icon: ReactNode;
  iconPosition: 'left' | 'right';
};

// 아이콘만 있는 경우 (iconOnly)
type IconOnlyProps = CommonProps & {
  usage: 'iconOnly';
  icon: ReactNode;
  children?: never;
};

// 최종 ButtonProps
export type ButtonProps = TextOnlyProps | TextAndIconProps | IconOnlyProps;

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
