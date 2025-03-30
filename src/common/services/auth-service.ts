import { AxiosResponse } from 'axios';

import { UserInfo, useUserStore } from '@/store/user-auth';

import { AuthCycleBuilder, AuthCycleOptions } from './auth-builder';
import { axiosInstance } from './service-config';
import { ReIssue } from '../types/auth';

/** 유저 인증 싸이클 인스턴스 클래스*/
class AuthService {
  private static instance: AuthService | null = null;
  private accessTokenPromise: Promise<AxiosResponse<ReIssue, unknown>> | null = null;
  private refreshTimerId: ReturnType<typeof setTimeout> | null = null;
  private lastUsedBuilder: AuthCycleBuilder | null = null;

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

  /**
   * 인증 싸이클 전체를 실행하는 내부 메소드
   * 빌더 패턴에서 생성된 옵션으로 실행됨
   * 1. 토큰 재발급(로그인)
   * 2. 토큰 저장 및 헤더 설정
   * 3. 자동 갱신 설정
   * 4. 사용자 정보 조회 및 상태 저장
   */
  public async executeAuthCycle(
    options: AuthCycleOptions,
    builder: AuthCycleBuilder, // 빌더 인스턴스 전달
  ): Promise<{ accessToken: string; expirationTime: string } | undefined> {
    const { isAuthenticated, userInfo } = useUserStore.getState();

    // 빌더 인스턴스를 저장해두어 silentRefresh 시 재사용
    this.lastUsedBuilder = builder.clone();

    // bypass가 아니면서 이미 인증된 상태라면 바로 리턴
    if (!options.bypass && userInfo !== null && isAuthenticated) return;

    // 강제 재로그인 모드라면 기존 인증 정보 삭제
    if (options.forceRelogin) {
      this.logout();
      return;
    }

    try {
      // 1. 토큰 재발급(로그인) 처리
      const tokenData = await this.postReIssue(options.endPoint);
      if (!tokenData) return;

      const { accessToken, expirationTime } = tokenData;

      // 2. 토큰을 Authorization 헤더에 등록
      this.enrollAuthorizationHeader(accessToken);

      // 3. 자동 갱신 설정 (옵션에 따라)
      if (options.setupAutoRefresh) {
        this.silentRefresh(expirationTime);
      }

      // 4. 사용자 정보 조회 및 Zustand 상태 저장
      const userData = await this.getUserInfo(options.userInfoEndPoint);
      if (!userData) return;

      // 스토어에 사용자 정보 저장
      this.updateUserStore(userData);
      return { accessToken, expirationTime };
    } catch (e) {
      // 실패 시 조용히 넘어가기 옵션이 활성화되어 있으면 에러 무시
      if (options.silentOnFailure) {
        console.warn('silentOnFailure');
        return;
      }

      // 롤백 옵션이 활성화되어 있으면 로그인 페이지로 리다이렉트
      if (options.shouldRollbackOnFailure) {
        const rollbackUrl = options.customRollbackUrl;
        window.location.href = rollbackUrl;
      }

      // 롤백 옵션이 비활성화되어 있으면 상위 컨텍스트로 에러 전파
      throw e;
    }
  }

  /** 토큰 재발급(로그인) 처리 && RTR 환경에서 strtictMode로 인한 API 2번 호출 문제 대응
   * - try와 함께 catch를 사용하지 않은 이유: 에러의 경우 상위 컨텍스트에서 일괄적으로 처리하기 위함
   * - finally를 적용한 이유: 에러가 발생했을 때도 accessTokenPromise = null;은 반드시 실행
   */
  public async postReIssue(url: string): Promise<ReIssue['result'] | null> {
    // 경쟁상태 해결(2번 연속 요청 >> 둘 중 하나가 먼저 수행되면 나머지 1개는 무조건 실패)
    // 이미 진행 중인 재발급 요청이 있다면, 해당 프로미스가 해결될 때까지 기다렸다가 그 요청의 결과를 공유
    if (this.accessTokenPromise !== null) {
      const response = await this.accessTokenPromise;
      return response.data.result;
    }

    try {
      // 첫 요청인 경우 프로미스를 저장
      this.accessTokenPromise = axiosInstance.post<ReIssue>(url);
      const response = await this.accessTokenPromise;
      return response.data.result;
    } finally {
      // 요청 완료 후 항상 프로미스 초기화
      this.accessTokenPromise = null;
    }
  }

  /* Authorization 헤더에 토큰 등록 */
  public enrollAuthorizationHeader(accessToken: string): void {
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
  public silentRefresh(JWT_EXPIRY_MINUTE: string): void {
    // 기존 타이머가 있으면 제거
    this.clearRefreshTimer();

    const refreshTime = (Number(JWT_EXPIRY_MINUTE) - 60) * 1000;

    this.refreshTimerId = setTimeout(() => {
      // 이전 빌더 인스턴스가 있다면 clone하여 그대로 사용
      if (this.lastUsedBuilder) {
        // 기존 설정을 유지하면서 bypass 추가
        const cycle = this.lastUsedBuilder.clone().withBypass();
        cycle.execute();
      } else {
        // 설정이 없으면 기본 빌더로 실행
        this.createAuthCycle().withBypass().execute();
      }
    }, refreshTime);
  }

  /* 타이머 정리 메소드 - 로그아웃 시 호출 */
  public clearRefreshTimer(): void {
    if (this.refreshTimerId !== null) {
      clearTimeout(this.refreshTimerId);
      this.refreshTimerId = null;
    }
  }

  /* 사용자 정보 조회 */
  public async getUserInfo(url: string): Promise<UserInfo | null> {
    const response = await axiosInstance.get<{ result: UserInfo }>(url);
    return response.data.result;
  }

  /* 스토어에 사용자 정보 업데이트 */
  private updateUserStore(userInfo: UserInfo): void {
    const { setUserInfo } = useUserStore.getState();
    setUserInfo(userInfo);
  }

  /* 로그아웃 처리 - TODO: 백엔드에게 쿠키 지워달라고 요청 필요 */
  public logout(): void {
    this.deleteAuthorizationHeader();
    this.clearRefreshTimer();
    const { resetUserInfo } = useUserStore.getState();
    resetUserInfo();
  }
}

export const AUTH_SERVICE = AuthService.getInstance();
