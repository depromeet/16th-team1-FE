import { forwardRef } from 'react';

import { Button, ButtonProps } from '../button';

import * as styles from './KakaoAuthButton.styles';

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
