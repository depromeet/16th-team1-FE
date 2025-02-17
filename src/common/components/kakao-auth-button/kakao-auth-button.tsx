import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../base-button/base-button';

import * as styles from './kakao-auth-button.styles';

/** 고정된 스타일과 로직 사용 */
const KakaoAuthButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  return (
    <BaseButton
      onClick={() => console.log('Kakao login!')}
      css={styles.kakaoButton}
      ref={ref}
      {...props}
    />
  );
});
KakaoAuthButton.displayName = 'KakaoAuthButton';

export { KakaoAuthButton };
