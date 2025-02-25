import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import * as styles from './base-button.styles';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

/** 기본 버튼 스타일 & 주입받은 props와 아이콘을 기반으로 최종 UI를 렌더링하는 컴포넌트 */
/** 주입받은 스타일이 기본 버튼 스타일 일부 오버라이딩 */
const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ asChild, icon, iconPosition, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp css={styles.button} ref={ref} {...props}>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </Comp>
    );
  },
);
BaseButton.displayName = 'BaseButton';

export { BaseButton };
