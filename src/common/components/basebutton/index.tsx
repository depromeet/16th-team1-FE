import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import * as styles from './BaseButton.styles';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

/** 기본 버튼 스타일 & 주입받은 props를 기반으로 UI를 렌더링하는 컴포넌트 */
const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp css={styles.buttonStyle} ref={ref} {...props} />;
});
BaseButton.displayName = 'BaseButton';

export { BaseButton };
