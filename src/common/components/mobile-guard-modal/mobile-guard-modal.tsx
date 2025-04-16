import { useNavigate } from 'react-router';

import { theme } from '@/assets/styles/theme';
import { Button } from '@/common/components/button/Button';
import Modal from '@/common/components/modal/base-modal';
import Spacing from '@/common/components/spacing/spacing';
import { PAGE_URL } from '@/common/constants/path';
import { useMobileGuardModalStore } from '@/store/mobile-guard-modal';

import * as styles from './mobile-guard-modal.styles';

export default function MobileGuardModal() {
  const navigate = useNavigate();
  const { isMobileGuardModalOpen, closeMobileGuardModal } = useMobileGuardModalStore();

  const handleClickAlertModal = () => {
    closeMobileGuardModal();
    navigate(PAGE_URL.Landing, { replace: true });
  };

  return (
    <Modal open={isMobileGuardModalOpen} onOpenChange={handleClickAlertModal}>
      <Modal.Root padding="2.4rem" gap="3.2rem" backgroundColor={theme.colors.GRAY[900]}>
        <div css={styles.flexColumn}>
          <span css={styles.modalIcon}>🏃🏼</span>
          <Spacing size={0.4} />
          <Modal.Title css={styles.modalTitle}>모바일은 아직 준비 중이에요</Modal.Title>
          <Spacing size={0.6} />
          <div css={styles.modalText}>
            모바일 버전이 완성되면
            <br />
            다시 방문할 때 알려드릴게요.
          </div>
        </div>
        <Modal.Close asChild>
          <Button size="xLarge" usage="text" variant="primary" style={{ width: '100%' }}>
            확인
          </Button>
        </Modal.Close>
      </Modal.Root>
    </Modal>
  );
}
