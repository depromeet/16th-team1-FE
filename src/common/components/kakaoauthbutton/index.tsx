import { forwardRef } from 'react';

import { Button, ButtonProps } from '../button';

import * as styles from './KakaoAuthButton.styles';

/** 고정된 로직과 스타일 사용*/
const KakaoAuthButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <Button
      onClick={() => console.log('Kakao login!')}
      css={styles.kakaoButtonStyle}
      ref={ref}
      {...props}
    />
  );
});
KakaoAuthButton.displayName = 'KakaoAuthButton';

export { KakaoAuthButton };
