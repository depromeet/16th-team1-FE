import { colors } from '@/assets/styles/colors';
import { BaseButton } from '@/common/components/button/base-button';
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
          <RecentFeedbackModalContent closeModal={closeModal} />
        </FallbackBoundary>
      </Modal.Root>
    </Modal>
  );
}

const fallbacks = {
  suspense: {
    fallbackUI: (
      <div css={styles.fallbackLoadingWrapper}>
        <Skeleton width="5.4rem" />
        <Skeleton height="4.6rem" />
      </div>
    ),
  },
  error: {
    fallbackUI: (onReset: VoidFunction) => (
      <div css={styles.fallbackErrorWrapper}>
        <p css={styles.errorText}>
          문제가 생겨
          <br />
          최근 피드백을 불러오는데 실패했어요
        </p>
        <BaseButton onClick={onReset}>
          <div css={styles.buttonWrapper}>
            <span css={styles.buttonText}>다시 불러오기</span>
            <Icon name="loading" width={14} color="#2C2C36" />
          </div>
        </BaseButton>
      </div>
    ),
  },
};
