import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import { useAuthCycle } from '@/common/hooks/use-auth-cycle';
import { useCheckQueryStrings } from '@/common/hooks/use-check-query-strings';
// import { axiosInstance } from '@/common/services/service-config';
import { useAuthStore } from '@/store/user-auth';

import GoogleAuthButton from './components/custom-buttons/google-auth-button';

import * as styles from './login-page.styles';

function LoginPage() {
  const { executeAuthCycle, createAuthCycle } = useAuthCycle();

  const navigate = useNavigate();
  const { isLogin } = useAuthStore();
  const isRollback = useCheckQueryStrings({ rollback: 'true' });

  useEffect(() => {
    if (isRollback) return;

    if (!isLogin) {
      /**
       *  스토어에 isLogin이 false:
       *  - 서버 사이드 라우팅으로 스토어가 비워졌지만, refreshToken은 남아 있을 수 있기 때문에 재발급 요청
       *  - 만약 여기서 에러 발생한다면 최초 로그인 및 로그아웃 상태(=재로그인 진행)
       */
      const options = createAuthCycle()
        .withMoveOnSuccess() // 성공 시, '/upload' 페이지로 이동
        .withoutRollback() // 실패 시, (로그인 페이지에 있으므로) 롤백 비활성화로 재로그인 진행
        .build();

      executeAuthCycle(options);
    } else navigate('/upload');
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
