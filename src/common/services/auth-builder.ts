import { AUTH_SERVICE } from './auth-service';

/** 인증 사이클 구성 옵션 타입 */
export interface AuthCycleOptions {
  shouldRollbackOnFailure: boolean; // 실패 시 로그인 페이지로 리다이렉트 여부
  bypass: boolean; // 이미 인증된 상태를 무시하고 강제 재인증 여부 (slient refresh)
  silentOnFailure: boolean; // 실패해도 조용히 넘어갈지 여부 (랜딩 페이지)
  customRollbackUrl: string; // 커스텀 롤백 페이지 URL (기본값은 /login?rollback=true)
  shouldMoveOnSuccess: boolean; // 인증 성공 시 페이지 이동 여부
  onSuccessPageUrl: string; // 인증 성공 시 이동히는 페이지 URL (기본값은 /upload)
  setupAutoRefresh: boolean; // 자동 재발급 타이머 설정 여부
  forceLogout: boolean; // 강제 로그아웃 처리 여부 (rollback=true 쿼리)
  tokenEndPoint: string;
  userInfoEndPoint: string;
  logoutEndPoint: string;
}
const defaultOptions: AuthCycleOptions = {
  shouldRollbackOnFailure: true,
  bypass: false,
  silentOnFailure: false,
  customRollbackUrl: '/login?rollback=true',
  shouldMoveOnSuccess: false,
  onSuccessPageUrl: '/upload',
  setupAutoRefresh: true,
  forceLogout: false,
  tokenEndPoint: `/api/v1/reissue`,
  userInfoEndPoint: `/api/v1/users/me`,
  logoutEndPoint: `/api/v1/logout`,
};

export class AuthCycleBuilder {
  private options: AuthCycleOptions;

  constructor(options: AuthCycleOptions = defaultOptions) {
    this.options = options;
  }

  /** 실패 시 롤백 비활성화 (랜딩 페이지) */
  public withoutRollback(): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, shouldRollbackOnFailure: false });
  }

  /** 재발급 실패해도 넘어가기 (랜딩 페이지) */
  public withSilentFailure(): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, silentOnFailure: true });
  }

  /** 이미 인증된 상태 무시하고 강제 재인증 (slient refresh) */
  public withBypass(): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, bypass: true });
  }

  /** 커스텀 롤백 URL 설정 */
  public withCustomRollbackUrl(url: string): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, customRollbackUrl: url });
  }

  /** 인증 성공시 이동하는 URL 설정 */
  public withMoveOnSuccess(): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, shouldMoveOnSuccess: true });
  }

  /** 인증 성공시 이동하는 URL 설정 */
  public withOnsuccessPageUrl(url: string): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, onSuccessPageUrl: url });
  }

  /** accessToken tokenEndPoint URL 설정 */
  public withEndPoint(url: string): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, tokenEndPoint: url });
  }

  /** 유저 정보 endPoint URL 설정 */
  public withUserInfoEndPoint(url: string): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, userInfoEndPoint: url });
  }

  /** 로그아웃  endPoint URL 설정 */
  public withLogoutEndPoint(url: string): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, logoutEndPoint: url });
  }

  /** 자동 재발급 타이머 비활성화 */
  public withoutAutoRefresh(): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, setupAutoRefresh: false });
  }

  /** 강제 로그아웃 모드 (rollback=true 쿼리) */
  public withForceLogout(): AuthCycleBuilder {
    return new AuthCycleBuilder({ ...this.options, forceLogout: true });
  }

  public build(): AuthCycleOptions {
    return this.options;
  }

  /** 인증 싸이클 실행 */
  public async execute() {
    return AUTH_SERVICE.executeAuthCycle(this.options);
  }
}
