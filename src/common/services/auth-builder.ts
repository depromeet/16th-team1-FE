import { AUTH_SERVICE } from './auth-service';

/** 인증 사이클 구성 옵션 타입 */
export interface AuthCycleOptions {
  shouldRollbackOnFailure: boolean; // 실패 시 로그인 페이지로 리다이렉트 여부
  bypass: boolean; // 이미 인증된 상태를 무시하고 강제 재인증 여부
  silentOnFailure: boolean; // 실패해도 조용히 넘어갈지 여부 (랜딩 페이지용)
  customRollbackUrl: string; // 커스텀 롤백 URL (기본값은 /login?rollback=true)
  setupAutoRefresh: boolean; // 자동 재발급 타이머 설정 여부
  forceLogout: boolean; // 강제 로그아웃 처리 여부 (rollback=true 쿼리)
  endPoint: string;
  userInfoEndPoint: string;
}

/** 인증 사이클 빌더 클래스 */
export class AuthCycleBuilder {
  private options: AuthCycleOptions = {
    shouldRollbackOnFailure: true,
    bypass: false,
    silentOnFailure: false,
    customRollbackUrl: '/login?rollback=true',
    setupAutoRefresh: true,
    forceLogout: false,
    endPoint: `/api/v1/reissue`,
    userInfoEndPoint: `/api/v1/users/me`,
  };

  /** 실패 시 롤백 비활성화 (랜딩 페이지용) */
  public withoutRollback(): AuthCycleBuilder {
    this.options.shouldRollbackOnFailure = false;
    return this;
  }

  /** 재발급 실패해도 넘어가기 (랜딩 페이지용) */
  public withSilentFailure(): AuthCycleBuilder {
    this.options.silentOnFailure = true;
    return this;
  }

  /** 이미 인증된 상태 무시하고 강제 재인증 */
  public withBypass(): AuthCycleBuilder {
    this.options.bypass = true;
    return this;
  }

  /** 커스텀 롤백 URL 설정 */
  public withCustomRollbackUrl(url: string): AuthCycleBuilder {
    this.options.customRollbackUrl = url;
    return this;
  }

  /** 재발급 endPoint URL 설정 */
  public withEndPoint(url: string): AuthCycleBuilder {
    this.options.endPoint = url;
    return this;
  }

  /** 유저 정보 endPoint URL 설정 */
  public withUserInfoEndPoint(url: string): AuthCycleBuilder {
    this.options.userInfoEndPoint = url;
    return this;
  }

  /** 자동 재발급 타이머 비활성화 */
  public withoutAutoRefresh(): AuthCycleBuilder {
    this.options.setupAutoRefresh = false;
    return this;
  }

  /** 강제 재로그인 모드 (rollback=true 쿼리 용) */
  public withForceLogout(): AuthCycleBuilder {
    this.options.forceLogout = true;
    return this;
  }
  /** 현재 빌더 인스턴스의 설정을 그대로 복제하는 메서드 */
  public clone(): AuthCycleBuilder {
    const newBuilder = new AuthCycleBuilder();
    newBuilder.options = { ...this.options };
    return newBuilder;
  }

  /** 인증 사이클 실행 */
  public async execute(): Promise<{ accessToken: string; expirationTime: string } | undefined> {
    // 빌더 인스턴스를 그대로 전달하여 실행하도록 변경
    return AUTH_SERVICE.executeAuthCycle(this.options, this);
  }
}
