import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useUserStore } from '@/store/user-auth';

import { useCheckQueryStrings } from './use-check-query-strings';
import { AUTH_SERVICE } from '../services/auth-service';
import { axiosInstance } from '../services/service-config';

/** 랜딩 페이지 인증 커스텀 훅 */
export const useLandginPageAuth = () => {
  const landingAuthBuilder = useCallback(async () => {
    await AUTH_SERVICE.createAuthCycle()
      .withoutRollback() // 롤백 비활성화
      .withSilentFailure() // 실패해도 패스 (추후 로그인 페이지에서 다시 로그인 진행)
      .execute();
  }, []);

  useEffect(() => {
    landingAuthBuilder();
  }, [landingAuthBuilder]);
};

/** 로그인 페이지 인증 커스텀 훅 */
export const useLoginPageAuth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useUserStore();
  const isRollback = useCheckQueryStrings({ rollback: 'true' });

  const startAuthBuilder = useCallback(async () => {
    await AUTH_SERVICE.createAuthCycle()
      .withoutRollback() // (로그인 페이지에 있으므로) 롤백 비활성화
      .execute();

    navigate('/upload');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rollbackAuthBuilder = useCallback(async () => {
    await AUTH_SERVICE.createAuthCycle()
      .withoutRollback() // (로그인 페이지에 있으므로) 롤백 비활성화
      .withForceLogout() // 강제 로그아웃
      .execute();
  }, []);

  useEffect(() => {
    /** 인증 싸이클에 문제가 발생했기 때문에, 강제 로그아웃 */

    if (isRollback) rollbackAuthBuilder();

    /** 로그인 페이지 진입 시, 로그인 진행
     * 스토어에 값이 없을 때:
     * - 서버 사이드 라우팅일 때, refreshToken은 남아 있기 때문에 재발급 요청 후 /upload로 이동
     * - 최초 로그인 및 로그아웃 상태일 때, 재발급 요청시 401이 발생하지만 롤백없이 유지(=재로그인 유도)
     */
    if (!isRollback && (!isAuthenticated || userInfo === null)) startAuthBuilder();

    // 이미 로그인이 돼있을 경우
    if (!isRollback && isAuthenticated && userInfo !== null) navigate('/upload');
  }, [navigate, rollbackAuthBuilder, startAuthBuilder, isRollback, isAuthenticated, userInfo]);
};

/** 그 외 인증 기반 페이지 커스텀 훅 */
export const useAuth = () => {
  const authBuilder = useCallback(async () => {
    await AUTH_SERVICE.createAuthCycle().execute();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    authBuilder();

    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = '/login?rollback=true';
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
      controller.abort();
    };
  }, [authBuilder]);
};
