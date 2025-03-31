import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import { useAuthBuilder } from '@/common/hooks/use-auth-builder';
import { useCheckQueryStrings } from '@/common/hooks/use-check-query-strings';
import { useUserStore } from '@/store/user-auth';

import GoogleAuthButton from './components/custom-buttons/google-auth-button';

import * as styles from './login-page.styles';

function LoginPage() {
  const { rollback: rollbackAuthBuilder, start: startAuthBuilder } = useAuthBuilder('Login');

  const { isAuthenticated, userInfo } = useUserStore();
  const navigate = useNavigate();
  const isRollback = useCheckQueryStrings({ rollback: 'true' });

  useEffect(() => {
    // 인증 싸이클에 문제가 발생했기 때문에, 강제 로그아웃
    if (isRollback) rollbackAuthBuilder();

    // 최초 진입시, 로그인 진행
    if (!isRollback && (!isAuthenticated || userInfo === null)) startAuthBuilder();

    // 이미 로그인이 돼있을 경우
    if (!isRollback && isAuthenticated && userInfo !== null) navigate('/upload');
  }, [navigate, rollbackAuthBuilder, startAuthBuilder, isRollback, isAuthenticated, userInfo]);

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
