import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { AUTH_SERVICE } from '../services/auth-service';

type AuthType = 'Landing' | 'Login' | 'AuthPages';

type BuilderMap = {
  Landing: () => Promise<void>;
  Login: {
    rollback: () => Promise<void>;
    start: () => Promise<void>;
  };
  AuthPages: () => Promise<void>;
};

export function useAuthBuilder<T extends AuthType>(page: T): BuilderMap[T] {
  const navigate = useNavigate();

  const builder: BuilderMap = {
    /** 랜딩 페이지에서는 인증 시도하되, 실패해도 별다른 조치를 취하지 않음 */
    Landing: useCallback(async () => {
      await AUTH_SERVICE.createAuthCycle()
        .withoutRollback() // 롤백 비활성화
        .withSilentFailure() // 실패해도 패스 ('/login'페이지에서 다시 로그인 진행)
        .execute();
    }, []),

    /** Login 키: rollback과 start 두 가지 기능 분리 */
    Login: {
      /** 최초 로그인 진행 */
      start: useCallback(async () => {
        const { accessToken, expirationTime } =
          (await AUTH_SERVICE.createAuthCycle()
            .withoutRollback() // (로그인 페이지에 있으므로) 롤백 비활성화
            .execute()) ?? {};

        if (accessToken && expirationTime) {
          navigate('/upload');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []),

      /** refreshToken 만료 등 인증 싸이클 문제 발생 시 강제 로그아웃 처리 */
      rollback: useCallback(async () => {
        await AUTH_SERVICE.createAuthCycle()
          .withoutRollback() // (로그인 페이지에 있으므로) 롤백 비활성화
          .withForceLogout() // 강제 로그아웃
          .execute();
      }, []),
    },

    /** 인증 기반 페이지에서는 표준 인증 사이클 적용 */
    AuthPages: useCallback(async () => {
      await AUTH_SERVICE.createAuthCycle().execute();
    }, []),
  };

  return builder[page];
}
