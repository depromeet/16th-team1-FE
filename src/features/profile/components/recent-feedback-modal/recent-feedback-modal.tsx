import { colors } from '@/assets/styles/colors';
import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import Icon from '@/common/components/icon/icon';
import Modal from '@/common/components/modal/base-modal';
import Skeleton from '@/common/components/skeleton/skeleton';
import { useModalStore } from '@/store/modal';

import RecentFeedbackModalContent from './recent-feedback-modal-content';

import * as styles from './recent-feedback-modal.styles';

export default function RecentFeedbackModal() {
  const { isOpen, closeModal } = useModalStore();

  return (
    <Modal open={isOpen} onOpenChange={closeModal}>
      <Modal.Root
        width="55.8rem"
        height="47.1rem"
        padding="2.4rem 1.6rem 2.8rem 1.6rem"
        gap="2.4rem"
        backgroundColor={colors.GRAY[990]}
      >
        <header css={styles.modalHeader}>
          <Modal.Title css={styles.title}>최근 피드백</Modal.Title>
          <Modal.Close asChild>
            <Icon name="x" color={colors.GRAY[400]} customStyle={styles.closeIconWrapper} />
          </Modal.Close>
        </header>
        <FallbackBoundary suspense={fallbacks.suspense} error={fallbacks.error}>
          <RecentFeedbackModalContent />
        </FallbackBoundary>
      </Modal.Root>
    </Modal>
  );
}

const fallbacks = {
  suspense: {
    fallbackUI: (
      <div css={styles.fallbackWrapper}>
        <Skeleton width="5.4rem" />
        <Skeleton height="4.6rem" />
      </div>
    ),
  },
  error: {
    // 에러 처리 디자인 나오면 적용할 예정입니다!
    fallbackUI: <div css={styles.fallbackWrapper}>다시 시도</div>,
  },
};
