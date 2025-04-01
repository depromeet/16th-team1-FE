import { AxiosResponse } from 'axios';

import { UserInfo, useAuthStore } from '@/store/user-auth';

import { AuthCycleBuilder, AuthCycleOptions } from './auth-builder';
import { axiosInstance } from './service-config';
import { ReIssue } from '../types/auth';

/** 유저 인증 싸이클에 필요한 싱글톤 인스턴스 클래스*/
class AuthService {
  private static instance: AuthService | null = null;
  private accessTokenPromise: Promise<AxiosResponse<ReIssue, unknown>> | null = null;
  private refreshTimerId: ReturnType<typeof setTimeout> | null = null;

  /* 생성자는 private으로 외부에서 직접 인스턴스 생성 x */
  private constructor() {}

  /* 싱글톤 인스턴스 반환 */
  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  /** 새 인증 사이클 빌더 생성 */
  public createAuthCycle(): AuthCycleBuilder {
    return new AuthCycleBuilder();
  }

  /** 빌더 패턴에서 생성된 옵션으로 인증 싸이클을 일괄 처리하는 메소드 */
  public async executeAuthCycle(options: AuthCycleOptions) {
    const { isLogin, userInfo } = useAuthStore.getState();

    if (options.forceLogout) return this.logout();
    if (!options.bypass && userInfo !== null && isLogin) return;

    try {
      // 1. 토큰 재발급(로그인) 처리
      const tokenData = await this.requestToken(options.endPoint);
      if (!tokenData) return;
      const { accessToken, expirationTime } = tokenData;

      // 2. 헤더 등록
      this.setAuthorizationHeader(accessToken);

      // 3. 자동 갱신 설정
      if (options.setupAutoRefresh) this.silentRefresh(expirationTime, options);

      // 4. 사용자 정보 조회 및 상태 업데이트
      const userData = await this.fetchUserInfo(options.userInfoEndPoint);
      if (!userData) return;
      this.updateUserStore(userData);
    } catch (e) {
      // 실패 시 silentOnFailure 옵션이 활성화되어 있으면 에러 무시
      if (options.silentOnFailure) {
        console.warn('silentOnFailure');
        return;
      }
      // 롤백 옵션이 활성화되어 있으면 로그인 페이지로 리다이렉트
      if (options.shouldRollbackOnFailure) {
        window.location.href = options.customRollbackUrl;
      }
      // 롤백 옵션이 비활성화되어 있으면 상위 컨텍스트로 에러 전파
      throw e;
    }
  }

  /** 토큰 재발급(로그인) 처리 && RTR 환경에서 strtictMode로 인한 API 2번 호출 문제(=경쟁상태) 대응
   * - catch를 사용하지 않은 이유: 에러의 경우 상위 컨텍스트에서 일괄적으로 처리
   * - finally를 적용한 이유: 에러가 발생했을 때도 accessTokenPromise = null;은 실행
   */
  private async requestToken(url: string): Promise<ReIssue['result'] | null> {
    if (this.accessTokenPromise) {
      // 이미 진행 중인 재발급 요청이 있다면, 해당 프로미스가 해결될 때까지 기다렸다가 그 요청의 결과를 공유
      const response = await this.accessTokenPromise;
      return response.data.result;
    }
    try {
      // 첫 요청인 경우 프로미스를 저장
      this.accessTokenPromise = axiosInstance.post(url);
      const response = await this.accessTokenPromise;
      return response.data.result;
    } finally {
      this.accessTokenPromise = null;
    }
  }

  /* Authorization 헤더에 토큰 등록 */
  private setAuthorizationHeader(accessToken: string) {
    axiosInstance.defaults.headers.common = {
      ...axiosInstance.defaults.headers.common,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  /* Authorization 헤더에서 토큰 제거 */
  public deleteAuthorizationHeader(): void {
    const headers = { ...axiosInstance.defaults.headers.common };
    delete headers['Authorization'];
    axiosInstance.defaults.headers.common = headers;
  }

  /** 토큰 만료 전 자동 갱신 설정 */
  public silentRefresh(expirationTime: string, options: AuthCycleOptions): void {
    // 기존 타이머가 있으면 제거
    this.clearRefreshTimer();

    const refreshTime = (Number(expirationTime) - 60) * 1000;

    this.refreshTimerId = setTimeout(() => {
      this.executeAuthCycle({ ...options, bypass: true });
    }, refreshTime);
  }

  /* 타이머 정리 메소드 - 로그아웃 시 호출 */
  public clearRefreshTimer(): void {
    if (this.refreshTimerId) {
      clearTimeout(this.refreshTimerId);
      this.refreshTimerId = null;
    }
  }

  /* 사용자 정보 조회 */
  private async fetchUserInfo(url: string): Promise<UserInfo | null> {
    const response = await axiosInstance.get(url);
    return response.data.result;
  }

  /* 스토어에 사용자 정보 업데이트 */
  private updateUserStore(userInfo: UserInfo): void {
    const { setUserInfo } = useAuthStore.getState();
    setUserInfo(userInfo);
  }

  /* 로그아웃 처리 - TODO: 백엔드에게 쿠키 지워달라고 요청 필요 */
  public logout(): void {
    this.deleteAuthorizationHeader();
    this.clearRefreshTimer();
    const { reset } = useAuthStore.getState();
    reset();
  }
}

export const AUTH_SERVICE = AuthService.getInstance();
