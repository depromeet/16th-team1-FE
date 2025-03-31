import { useNavigate } from 'react-router';

import { AUTH_SERVICE } from '../services/auth-service';

type AuthType = 'Landing' | 'Login_Rollback' | 'Login_Start' | 'AuthPages';
type PageBuilderType = {
  [key in AuthType]: () => void;
};

export const useAuthBuilder = (page: AuthType) => {
  const navigate = useNavigate();

  const builder: PageBuilderType = {
    /** 랜딩 페이지에서는 인증 시도하되, 실패해도 별다른 조치를 취하지 않음 */
    Landing: async () => {
      await AUTH_SERVICE.createAuthCycle()
        .withoutRollback() // 롤백 비활성화
        .withSilentFailure() // 실패해도 패스
        .execute();
    },

    /** refreshToken 만료로 인한 401에러등 인증 싸이클에 문제가 생겼을 경우 재로그인 */
    Login_Rollback: async () => {
      await AUTH_SERVICE.createAuthCycle().withoutRollback().withForceRelogin().execute();
    },

    /** 최초 로그인 진행 */
    Login_Start: async () => {
      const { accessToken, expirationTime } =
        (await AUTH_SERVICE.createAuthCycle()
          .withoutRollback() // 이미 로그인 페이지에 있으므로 다시 롤백할 필요 없음
          .execute()) ?? {};

      if (accessToken && expirationTime) navigate('/upload');
    },

    /** 인증 기반 페이지에서는 표준 인증 사이클 적용 */
    AuthPages: async () => {
      await AUTH_SERVICE.createAuthCycle().execute();
    },
  };

  return builder[page];
};
