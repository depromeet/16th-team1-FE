import { create } from 'zustand';

import { CustomAuthError } from '@/common/error/custom-auth-error';

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

  authError: CustomAuthError | null;
  setAuthError: (authError: CustomAuthError | null) => void;

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
  setAuthError: (authError: CustomAuthError | null) => {
    set({
      authError: authError,
    });
  },

  reset: () =>
    set({
      userInfo: null,
      isLogin: false,
      isAuthenticating: false,
      authError: null,
    }),
}));
