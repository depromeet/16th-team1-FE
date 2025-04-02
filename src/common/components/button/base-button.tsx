import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import * as styles from './base-button.styles';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

/** 기본 버튼 스타일 & 주입받은 props와 아이콘을 기반으로 최종 UI를 렌더링하는 컴포넌트 */
/** 상황에 따라 주입받은 스타일이 기본 버튼 스타일에 대한 오버라이딩 가능 */
const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp css={styles.button} ref={ref} {...props} />;
});
BaseButton.displayName = 'BaseButton';

export { BaseButton };
