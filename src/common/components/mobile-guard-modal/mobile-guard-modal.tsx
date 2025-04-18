import { useNavigate } from 'react-router';

import { theme } from '@/assets/styles/theme';
import { Button } from '@/common/components/button/Button';
import AlertModal from '@/common/components/modal/alert-modal';
import Spacing from '@/common/components/spacing/spacing';
import { PAGE_URL } from '@/common/constants/path';
import { useMobileGuardModalStore } from '@/store/mobile-guard-modal';
import { useModalStore } from '@/store/modal';

import * as styles from './mobile-guard-modal.styles';

export default function MobileGuardModal() {
  const navigate = useNavigate();
  const { isMobileGuardModalOpen, closeMobileGuardModal } = useMobileGuardModalStore();
  const { isOpen: isRecentFeedbackModalOpen, closeModal: closeRecentFeedbackModal } =
    useModalStore();

  /**
   * 모바일뷰 접근 제한 모달 닫을 경우 랜딩 페이지로 라우팅
   */
  const handleClickAlertModal = () => {
    closeMobileGuardModal();
    if (isRecentFeedbackModalOpen) {
      closeRecentFeedbackModal();
    }

    setTimeout(() => {
      document.body.style.pointerEvents = '';
      navigate(PAGE_URL.Landing, { replace: true });
    }, 0);
  };

  return (
    <AlertModal open={isMobileGuardModalOpen} onOpenChange={handleClickAlertModal}>
      <AlertModal.Root
        padding="2.4rem"
        gap="3.2rem"
        backgroundColor={theme.colors.GRAY[900]}
        width="28rem"
      >
        <div css={styles.flexColumn}>
          <span css={styles.modalIcon}>🏃🏼</span>
          <Spacing size={0.4} />
          <AlertModal.Title css={styles.modalTitle}>모바일은 아직 준비 중이에요</AlertModal.Title>
          <Spacing size={0.6} />
          <div css={styles.modalText}>
            모바일 버전이 완성되면
            <br />
            다시 방문할 때 알려드릴게요.
          </div>
        </div>
        <AlertModal.Cancel asChild>
          <Button size="xLarge" usage="text" variant="primary" style={{ width: '100%' }}>
            확인
          </Button>
        </AlertModal.Cancel>
      </AlertModal.Root>
    </AlertModal>
  );
}
