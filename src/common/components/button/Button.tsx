import { forwardRef } from 'react';

import { IconProps, MultiProps, TextProps } from '@/assets/styles/button';
import { BaseButton } from '@/common/components/button/base-button';
import { iconTypes } from '@/common/types/icon-types';

import Icon from '../icon/icon';

import * as styles from './button.styles';

export type ButtonProps = TextProps | MultiProps | IconProps;

const iconSizeMap = {
  small: 16,
  medium: 20,
  large: 24,
};

const multiIconSizeMap = {
  small: 10.62,
  medium: 11.95,
  large: 13.27,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, usage, variant, iconName, children, iconPosition, ...props }, ref) => {
    const content =
      usage !== 'icon' ? children : <Icon name={iconName as iconTypes} width={iconSizeMap[size]} />;

    return (
      <BaseButton
        type="button"
        ref={ref}
        css={styles.buttonsStyle(size, usage, variant)}
        data-icon-position={iconPosition}
        {...props}
      >
        {usage === 'multi' && iconPosition === 'left' && (
          <Icon name={iconName as iconTypes} width={multiIconSizeMap[size]} />
        )}
        {content}
        {usage === 'multi' && iconPosition === 'right' && (
          <Icon name={iconName as iconTypes} width={multiIconSizeMap[size]} />
        )}
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';

export { Button };
