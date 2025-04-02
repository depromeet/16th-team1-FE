import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';

import { AxiosResponse } from 'axios';

import { clearGlobalRefreshTimer, setRefreshTimerId } from '@/auth-timer';
import { UserInfo, useAuthStore } from '@/store/user-auth';

import { catchAuthError, CustomAuthError } from '../error/custom-auth-error';
import { AuthCycleBuilder, AuthCycleOptions } from '../services/auth-builder';
import { axiosInstance } from '../services/service-config';
import { ReIssue } from '../types/auth';

/** API 요청 관련 함수들 */
const useAuthApi = () => {
  // RTR 환경에서 strtictMode로 인한 API 2번 호출 문제(=경쟁상태)를 해결하기 위한 ref
  const accessTokenPromiseRef = useRef<Promise<AxiosResponse<ReIssue, unknown>> | null>(null);

  const requestToken = useCallback(async (url: string): Promise<ReIssue['result'] | null> => {
    // 이미 진행 중인 토큰 요청이 있다면 재사용
    if (accessTokenPromiseRef.current) {
      try {
        const response = await accessTokenPromiseRef.current;
        return response.data.result;
      } catch (error) {
        return catchAuthError(error);
      } finally {
        accessTokenPromiseRef.current = null;
      }
    }

    // 첫 요청인 경우 프로미스를 저장
    try {
      accessTokenPromiseRef.current = axiosInstance.post(url);
      const response = await accessTokenPromiseRef.current;
      return response.data.result;
    } catch (error) {
      return catchAuthError(error);
    } finally {
      accessTokenPromiseRef.current = null;
    }
  }, []);

  const fetchUserInfo = useCallback(async (url: string): Promise<UserInfo | null> => {
    try {
      const response = await axiosInstance.get(url);
      return response.data.result;
    } catch (error) {
      return catchAuthError(error);
    }
  }, []);

  const deleteRefreshToken = useCallback(async (url: string) => {
    try {
      const response = await axiosInstance.post(url);
      return response.data.result;
    } catch (error) {
      return catchAuthError(error);
    }
  }, []);

  return { requestToken, fetchUserInfo, deleteRefreshToken };
};

/** 헤더 및 타이머 관리 관련 함수들 */
export const useAuthHelpers = () => {
  const navigate = useNavigate();

  /* Authorization 헤더에 토큰 등록 */
  const setAuthorizationHeader = useCallback((accessToken: string): void => {
    axiosInstance.defaults.headers.common = {
      ...axiosInstance.defaults.headers.common,
      Authorization: `Bearer ${accessToken}`,
    };
  }, []);

  /* Authorization 헤더에서 토큰 제거 */
  const deleteAuthorizationHeader = useCallback((): void => {
    const headers = { ...axiosInstance.defaults.headers.common };
    delete headers['Authorization'];
    axiosInstance.defaults.headers.common = headers;
  }, []);

  /** 토큰 만료 전 자동 갱신 설정 */
  const silentRefresh = useCallback(
    (
      expirationTime: string,
      options: AuthCycleOptions,
      executeAuthCycle: (opts: AuthCycleOptions) => Promise<void>,
    ) => {
      // 기존 타이머가 있으면 제거
      clearGlobalRefreshTimer();

      const refreshTime = (Number(expirationTime) - 60) * 1000;

      const id = setTimeout(() => {
        // bypass 옵션 활성화하여 재인증 실행
        executeAuthCycle({ ...options, bypass: true });
      }, refreshTime);
      setRefreshTimerId(id);
    },
    [],
  );

  return { setAuthorizationHeader, deleteAuthorizationHeader, silentRefresh, navigate };
};

/** 인증 정보 제거에 대한 커스텀 훅 */
export const useClearAuth = () => {
  const { deleteAuthorizationHeader } = useAuthHelpers();
  const { deleteRefreshToken } = useAuthApi();
  const { reset, setAuthError } = useAuthStore();
  const navigate = useNavigate();

  const clearAuthInfo = () => {
    deleteAuthorizationHeader();
    clearGlobalRefreshTimer();
    reset();
  };

  const logout = async (url: string = '/api/v1/logout'): Promise<void> => {
    try {
      await deleteRefreshToken(url);
    } catch (error) {
      if (error instanceof CustomAuthError) {
        setAuthError(error);
      }
    } finally {
      clearAuthInfo();
      navigate('/');
    }
  };

  return { clearAuthInfo, logout };
};

/** 메인 인증 싸이클 실행 커스텀 훅 */
export const useAuthCycle = () => {
  const { userInfo, isLogin, setIsAuthenticating, setUserInfo, setIsLogin, setAuthError } =
    useAuthStore();
  const { requestToken, fetchUserInfo } = useAuthApi();
  const { setAuthorizationHeader, silentRefresh, navigate } = useAuthHelpers();
  const { clearAuthInfo } = useClearAuth();

  const hasNavigatedOnSuccess = useRef(false);

  /**
   * 빌더 패턴에서 생성된 옵션으로 인증 싸이클을 실행하는 메인 함수
   */
  const executeAuthCycle = useCallback(
    async (options: AuthCycleOptions): Promise<void> => {
      setIsAuthenticating(true);
      setAuthError(null);

      try {
        if (!options.bypass && userInfo !== null && isLogin) return;

        // 1. 토큰 재발급
        const tokenData = await requestToken(options.tokenEndPoint);
        if (!tokenData) return;

        const { accessToken, expirationTime } = tokenData;

        // 2. 헤더 설정
        setAuthorizationHeader(accessToken);

        // 3. silent refresh 설정
        if (options.setupAutoRefresh) {
          silentRefresh(expirationTime, options, executeAuthCycle);
        }

        // 4. 사용자 정보 조회 및 업데이트
        const userData = await fetchUserInfo(options.userInfoEndPoint);
        if (!userData) return;
        setUserInfo(userData);
        setIsLogin(true);

        // 인증 성공 시 옵션에 따른 페이지 이동 처리
        if (options.shouldMoveOnSuccess && !hasNavigatedOnSuccess.current) {
          hasNavigatedOnSuccess.current = true;
          navigate(options.onSuccessPageUrl);
        }
      } catch (error) {
        // 예측 가능한 에러(axios 요청에서 발생한 에러)
        if (error instanceof CustomAuthError) {
          setAuthError(error);
          if (options.silentOnFailure) {
            clearAuthInfo();
            console.warn('silentOnFailure');
          } else if (options.shouldRollbackOnFailure) {
            clearAuthInfo();
            navigate(options.customRollbackUrl);
          }
        }
        // 예측 불가능한 에러
        else {
          throw error; // 상위 컨텍스트로 throw
        }
      } finally {
        // 인증 로딩 상태 종료
        setIsAuthenticating(false);
      }
    },
    [
      clearAuthInfo,
      fetchUserInfo,
      isLogin,
      navigate,
      requestToken,
      setAuthError,
      setAuthorizationHeader,
      setIsAuthenticating,
      setIsLogin,
      setUserInfo,
      silentRefresh,
      userInfo,
    ],
  );

  return {
    executeAuthCycle: executeAuthCycle,
    createAuthCycle: () => new AuthCycleBuilder(),
  };
};
