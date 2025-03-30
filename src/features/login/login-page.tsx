import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import { useCheckQueryStrings } from '@/common/hooks/use-check-query-strings';
import { AUTH_SERVICE } from '@/common/services/auth-service';
import { useUserStore } from '@/store/user-auth';

import GoogleAuthButton from './components/custom-buttons/google-auth-button';

import * as styles from './login-page.styles';

function LoginPage() {
  const { isAuthenticated, userInfo } = useUserStore();
  const navigate = useNavigate();
  const isRollback = useCheckQueryStrings({ rollback: 'true' });

  useEffect(() => {
    if ((!isAuthenticated || userInfo === null) && !isRollback) {
      (async () => {
        const { accessToken, expirationTime } =
          (await AUTH_SERVICE.createAuthCycle()
            .withoutRollback() // 이미 로그인 페이지에 있으므로 다시 롤백할 필요 없음
            .execute()) ?? {};

        if (accessToken && expirationTime) navigate('/upload');
      })();
    }

    if (isAuthenticated && userInfo !== null) navigate('/upload');
  }, [navigate, isRollback, isAuthenticated, userInfo]);

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

          {/* 테스트용 */}
          {/* <button
            onClick={async () => {
              const response = await axiosInstance.get(`/api/v1/users/me`);
              console.log(response.data);
            }}
            css={css`
              font-size: 3rem;
            `}
          >
            내 정보 확인(테스트용)
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
