import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';

import { AxiosResponse } from 'axios';

import { clearGlobalRefreshTimer, setRefreshTimerId } from '@/auth-timer';
import { UserInfo, useAuthStore } from '@/store/user-auth';

import { catchAuthError, CustomAuthError } from '../error/custom-auth-error';
import { AuthCycleBuilder, AuthCycleOptions } from '../services/auth-builder';
import { axiosInstance } from '../services/service-config';
import { ReIssue } from '../types/auth';

/**
 * 커스텀 훅: useAuthCycle
 * - 인증 싸이클 실행 함수를 반환하며, 진행 상태 및 에러 상태를 관리
 */
export const useAuthCycle = () => {
  const { userInfo, isLogin, setIsAuthenticating, setUserInfo, setIsLogin, setAuthError, reset } =
    useAuthStore();

  const navigate = useNavigate();

  // 경쟁 상태를 대비한 ref
  const accessTokenPromiseRef = useRef<Promise<AxiosResponse<ReIssue, unknown>> | null>(null);

  const requestToken = useCallback(async (url: string): Promise<ReIssue['result'] | null> => {
    // 이미 진행 중인 토큰 요청이 있다면 해당 프로미스를 재사용
    if (accessTokenPromiseRef.current) {
      const response = await accessTokenPromiseRef.current;
      return response.data.result;
    }

    try {
      accessTokenPromiseRef.current = axiosInstance.post(url);
      const response = await accessTokenPromiseRef.current;
      return response.data.result;
    } catch (error) {
      return catchAuthError(error);
    } finally {
      // 요청 완료 후 항상 초기화하여 다음 요청이 가능하도록 함
      accessTokenPromiseRef.current = null;
    }
  }, []);

  const setAuthorizationHeader = useCallback((accessToken: string): void => {
    axiosInstance.defaults.headers.common = {
      ...axiosInstance.defaults.headers.common,
      Authorization: `Bearer ${accessToken}`,
    };
  }, []);

  const deleteAuthorizationHeader = useCallback((): void => {
    const headers = { ...axiosInstance.defaults.headers.common };
    delete headers['Authorization'];
    axiosInstance.defaults.headers.common = headers;
  }, []);

  const silentRefresh = useCallback((expirationTime: string, options: AuthCycleOptions) => {
    clearGlobalRefreshTimer();
    const refreshTime = (Number(expirationTime) - 60) * 1000;
    const id = setTimeout(() => {
      // bypass 옵션 활성화하여 강제 재인증 진행
      executeAuthCycle({ ...options, bypass: true });
    }, refreshTime);
    setRefreshTimerId(id);
  }, []);

  const fetchUserInfo = useCallback(async (url: string): Promise<UserInfo | null> => {
    try {
      const response = await axiosInstance.get(url);
      return response.data.result;
    } catch (error) {
      return catchAuthError(error);
    }
  }, []);

  const updateUserInfoStore = useCallback(
    (userInfo: UserInfo): void => {
      setUserInfo(userInfo);
    },
    [setUserInfo],
  );

  const updateIsLoginStore = useCallback(
    (status: boolean): void => {
      setIsLogin(status);
    },
    [setIsLogin],
  );

  const logout = useCallback((): void => {}, []);

  /**
   * executeAuthCycle
   * - 빌더 패턴으로 생성한 옵션을 전달받아 인증 싸이클을 실행하는 함수
   */
  const executeAuthCycle = useCallback(
    async (options: AuthCycleOptions): Promise<void> => {
      setIsAuthenticating(true);
      setAuthError(null);

      // 이미 인증된 상태면 인증 진행 생략
      if (!options.bypass && userInfo !== null && isLogin) {
        setIsAuthenticating(false);
        return;
      }

      try {
        // 강제 로그아웃 옵션이면 로그아웃 후 종료
        if (options.forceLogout) {
          logout();
          deleteAuthorizationHeader();
          clearGlobalRefreshTimer();
          reset();
          setIsAuthenticating(false);
          return;
        }

        // 1. 토큰 재발급 (로그인) 처리
        const tokenData = await requestToken(options.endPoint);
        if (!tokenData) {
          setIsAuthenticating(false);
          return;
        }
        const { accessToken, expirationTime } = tokenData;

        // 2. 헤더 등록
        setAuthorizationHeader(accessToken);

        // 3. 자동 갱신 설정
        if (options.setupAutoRefresh) {
          silentRefresh(expirationTime, options);
        }

        // 4. 사용자 정보 조회 및 상태 업데이트
        const userData = await fetchUserInfo(options.userInfoEndPoint);
        if (!userData) {
          setIsAuthenticating(false);
          return;
        }

        updateUserInfoStore(userData);
        updateIsLoginStore(true);

        if (options.shouldMoveOnSuccess) {
          navigate(options.onSuccessPageUrl);
        }
      } catch (error: unknown) {
        if (options.silentOnFailure) {
          console.warn('silentOnFailure');
        } else if (options.shouldRollbackOnFailure) {
          window.location.href = options.customRollbackUrl;
        }

        if (error instanceof CustomAuthError) {
          setAuthError(error);
        } else throw error; // 예측 가능한 범위의 에러가 아닐 경우, 상위 컨텍스트로 throw
      } finally {
        setIsAuthenticating(false);
      }
    },
    [
      deleteAuthorizationHeader,
      fetchUserInfo,
      isLogin,
      logout,
      navigate,
      requestToken,
      reset,
      setAuthError,
      setAuthorizationHeader,
      setIsAuthenticating,
      silentRefresh,
      updateIsLoginStore,
      updateUserInfoStore,
      userInfo,
    ],
  );

  return {
    executeAuthCycle,
    createAuthCycle: () => new AuthCycleBuilder(),
  };
};
