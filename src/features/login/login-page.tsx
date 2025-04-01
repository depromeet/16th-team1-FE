import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import { useAuthCycle } from '@/common/hooks/use-auth-cycle';
import { useCheckQueryStrings } from '@/common/hooks/use-check-query-strings';
import { axiosInstance } from '@/common/services/service-config';
import { useUserStore } from '@/store/user-auth';

import GoogleAuthButton from './components/custom-buttons/google-auth-button';

import * as styles from './login-page.styles';

function LoginPage() {
  const { executeAuthCycle, createAuthCycle } = useAuthCycle();

  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useUserStore();
  const isRollback = useCheckQueryStrings({ rollback: 'true' });

  useEffect(() => {
    /** 인증 싸이클에 문제가 발생했기 때문에, 강제 로그아웃 */

    if (isRollback) {
      const options = createAuthCycle()
        .withoutRollback() // (로그인 페이지에 있으므로) 롤백 비활성화
        .withForceLogout() // 강제 로그아웃
        .build();

      executeAuthCycle(options);
    }

    /** 로그인 페이지 진입 시, 로그인 진행
     * 스토어에 값이 없을 때:
     * - 서버 사이드 라우팅일 때, refreshToken은 남아 있기 때문에 재발급 요청 후 /upload로 이동
     * - 최초 로그인 및 로그아웃 상태일 때, 재발급 요청시 401이 발생하지만 롤백없이 유지(=재로그인 유도)
     */
    if (!isRollback && (!isAuthenticated || userInfo === null)) {
      const options = createAuthCycle()
        .withoutRollback() // (로그인 페이지에 있으므로) 롤백 비활성화
        .build();

      executeAuthCycle(options);
      navigate('/upload');
    }

    // 이미 로그인이 돼있을 경우
    if (!isRollback && isAuthenticated && userInfo !== null) navigate('/upload');
  }, []);

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
