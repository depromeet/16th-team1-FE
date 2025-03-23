import { create } from 'zustand';

export interface UserInfo {
  email: string;
  name: string;
  profileImageUrl: string;
}

export interface UserStore {
  userInfo: UserInfo | null;
  isAuthenticated: boolean;
  setUserInfo: (user: UserInfo) => void;
  resetUserInfo: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: null,
  isAuthenticated: false,
  setUserInfo: (userInfo: UserInfo) =>
    set({
      userInfo,
      isAuthenticated: true,
    }),

  resetUserInfo: () =>
    set({
      userInfo: null,
      isAuthenticated: false,
    }),
}));
