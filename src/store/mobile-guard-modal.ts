import { create } from 'zustand';

interface MobileGuardModalState {
  isMobileGuardModalOpen: boolean;
  openMobileGuardModal: () => void;
  closeMobileGuardModal: () => void;
}

export const useMobileGuardModalStore = create<MobileGuardModalState>((set) => ({
  isMobileGuardModalOpen: false,
  openMobileGuardModal: () => set({ isMobileGuardModalOpen: true }),
  closeMobileGuardModal: () => set({ isMobileGuardModalOpen: false }),
}));
