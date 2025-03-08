import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';

import GoogleAuthButton from './components/custom-buttons/google-auth-button';

import * as styles from './login-page.styles';

function LoginPage() {
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <Icon
          name="logo-full-login"
          customStyle={css`
            flex-shrink: 0;
          `}
        />
        <div css={styles.descriptioinWrapper}>
          <div css={styles.titleWrapper}>
            <h1 css={styles.title}>만나서 반가워요!</h1>
            <p css={styles.subTitle}>회원가입하고 무료 포트폴리오 피드백 받아보세요</p>
          </div>

          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
