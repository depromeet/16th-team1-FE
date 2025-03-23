import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import { useCheckQueryStrings } from '@/common/hooks/use-check-query-strings';
import { AUTH_SERVICE } from '@/common/services/auth';
import { axiosInstance } from '@/common/services/service-config';

import GoogleAuthButton from './components/custom-buttons/google-auth-button';

import * as styles from './login-page.styles';

function LoginPage() {
  const navigate = useNavigate();
  const isRollback = useCheckQueryStrings({ rollback: 'true' });

  useEffect(() => {
    const loginPageAuth = async () => {
      const { accessToken, expirationTime } = (await AUTH_SERVICE.authenticate()) ?? {};
      if (accessToken && expirationTime) navigate('/upload');
    };

    if (!isRollback) loginPageAuth();
  }, [navigate, isRollback]);

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
          <button
            onClick={async () => {
              const response = await axiosInstance.get(`/api/v1/users/me`);
              console.log(response.data);
            }}
            css={css`
              font-size: 3rem;
            `}
          >
            내 정보 확인(테스트용)
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
