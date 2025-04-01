import { create } from 'zustand';

export interface UserInfo {
  email: string;
  name: string;
  profileImageUrl: string;
}

export interface UserStore {
  userInfo: UserInfo | null;
  setUserInfo: (user: UserInfo) => void;

  isLogin: boolean;
  setIsLogin: (status: boolean) => void;

  isAuthenticating: boolean;
  setIsAuthenticating: (status: boolean) => void;

  authError: unknown | null;
  setAuthError: () => void;

  reset: () => void;
}

export const useAuthStore = create<UserStore>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: UserInfo) =>
    set({
      userInfo,
    }),

  isLogin: false,
  setIsLogin: (status: boolean) => {
    set({
      isLogin: status,
    });
  },

  isAuthenticating: false,
  setIsAuthenticating: (status: boolean) => {
    set({
      isAuthenticating: status,
    });
  },

  authError: null,
  setAuthError: () => {},

  reset: () =>
    set({
      userInfo: null,
      isLogin: false,
      isAuthenticating: false,
      authError: null,
    }),
}));
