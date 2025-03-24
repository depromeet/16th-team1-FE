import { AxiosResponse } from 'axios';

import { UserInfo, useUserStore } from '@/store/user-auth';

import { axiosInstance } from './service-config';
import { ReIssue } from '../types/auth';

/** 유저 인증 싸이클 인스턴스 클래스*/
class AuthService {
  private static instance: AuthService | null = null;
  private refreshTokenPromise: Promise<AxiosResponse<ReIssue, unknown>> | undefined;
  private endPoint: string = `/api/v1/reissue`;
  private userInfoEndPoint: string = `/api/v1/users/me`;
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

  /* 별도의 endPoint 설정 */
  public withEndPoint(endPoint: string): AuthService {
    this.endPoint = endPoint;
    return this;
  }

  /* 별도의 userInfoEndPoint 설정 */
  public withUserInfoEndPoint(userInfoEndPoint: string): AuthService {
    this.userInfoEndPoint = userInfoEndPoint;
    return this;
  }

  /**
   * 인증 싸이클 전체를 처리하는 통합 메소드
   * 1. 토큰 재발급(로그인)
   * 2. 토큰 저장 및 헤더 설정
   * 3. 자동 갱신 설정
   * 4. 사용자 정보 조회 및 상태 저장
   */
  public async authenticate(): Promise<{ accessToken: string; expirationTime: string } | null> {
    // 1. 토큰 재발급(로그인) 처리
    const tokenData = await this.postReIssue();
    if (!tokenData) return null;

    const { accessToken, expirationTime } = tokenData;

    // 2. 토큰을 Authorization 헤더에 등록
    this.enrollAuthorizationHeader(accessToken);

    // 3. 자동 갱신 설정
    this.silentRefresh(expirationTime);

    // 4. 사용자 정보 조회 및 Zustand 상태 저장
    const userInfo = await this.getUserInfo();
    if (!userInfo) return null;

    // Zustand 스토어에 사용자 정보 저장
    this.updateUserStateInZustand(userInfo);
    return { accessToken, expirationTime };
  }

  /** 토큰 재발급(로그인) 처리 && RTR 환경에서 strtictMode로 인한 API 2번 호출 문제 대응
   * - try와 함께 catch를 사용하지 않은 이유: 에러의 경우 상위 컨텍스트에서 일괄적으로 처리하기 위함
   * - finally를 적용한 이유: 에러가 발생했을 때도 refreshTokenPromise = undefined;는 반드시 실행
   */
  public async postReIssue(): Promise<ReIssue['result'] | null> {
    if (this.refreshTokenPromise !== undefined) return null;

    try {
      this.refreshTokenPromise = axiosInstance.post<ReIssue>(this.endPoint);
      const response = await this.refreshTokenPromise;

      return response.data.result;
    } finally {
      this.refreshTokenPromise = undefined;
    }
  }

  /* Authorization 헤더에 토큰 등록 */
  public enrollAuthorizationHeader(accessToken: string): void {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  /* Authorization 헤더에서 토큰 제거 */
  public deleteAuthorizationHeader(): void {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }

  /** 토큰 만료 전 자동 갱신 설정 */
  public silentRefresh(JWT_EXPIRY_MINUTE: string): void {
    // 기존 타이머가 있으면 제거
    if (this.refreshTimerId !== null) {
      clearTimeout(this.refreshTimerId);
    }

    const refreshTime = (Number(JWT_EXPIRY_MINUTE) - 60) * 1000;
    this.refreshTimerId = setTimeout(() => this.authenticate(), refreshTime);
  }

  /* 타이머 정리 메소드 - 로그아웃 시 호출 */
  public clearRefreshTimer(): void {
    if (this.refreshTimerId !== null) {
      clearTimeout(this.refreshTimerId);
      this.refreshTimerId = null;
    }
  }

  /* 사용자 정보 조회 */
  public async getUserInfo(): Promise<UserInfo | null> {
    const endpoint = this.userInfoEndPoint;
    const response = await axiosInstance.get<{ result: UserInfo }>(endpoint);
    return response.data.result;
  }

  /* Zustand 스토어에 사용자 정보 업데이트 */
  private updateUserStateInZustand(userInfo: UserInfo): void {
    const { setUserInfo } = useUserStore.getState();
    setUserInfo(userInfo);
  }

  /* 로그아웃 처리 */
  public logout(): void {
    this.deleteAuthorizationHeader();
    const { resetUserInfo } = useUserStore.getState();
    resetUserInfo();
  }
}

export const AUTH_SERVICE = AuthService.getInstance();
