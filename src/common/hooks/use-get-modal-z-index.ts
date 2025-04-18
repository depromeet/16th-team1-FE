/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';

import { useMobileGuardModalStore } from '@/store/mobile-guard-modal';
import { useModalStore } from '@/store/modal';

type ModalType = 'recentFeedbackModal' | 'mobileGuardModal';

export const useGetModalZIndex = () => {
  const { isOpen: isRecentFeedbackModalOpen } = useModalStore();
  const { isMobileGuardModalOpen } = useMobileGuardModalStore();

  const modalState = {
    recentFeedbackModal: isRecentFeedbackModalOpen,
    mobileGuardModal: isMobileGuardModalOpen,
  };

  const MIN_MODAL_Z_INDEX = 11;

  const openModals = useMemo(
    () =>
      Object.entries(modalState)
        .filter(([, isOpen]) => isOpen)
        .map(([key]) => key),
    [isRecentFeedbackModalOpen, isMobileGuardModalOpen],
  );

  const getModalZIndex = (id: ModalType): number => {
    const index = openModals.indexOf(id);
    return MIN_MODAL_Z_INDEX + (index >= 0 ? index * 2 : 0);
  };

  return { getModalZIndex };
};
