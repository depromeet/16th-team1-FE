import { useState } from 'react';
import { useNavigate } from 'react-router';

import { theme } from '@/assets/styles/theme';
import { Button } from '@/common/components/button/Button';
import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import Modal from '@/common/components/modal/base-modal';
import Spacing from '@/common/components/spacing/spacing';
import Toast from '@/common/components/toast/toast';
import { PAGE_URL } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';
import TotalEvaluationFallbackUI from '@/features/total-evaluation/components/fallback-ui/total-evaluation-fallback-ui';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ProjectEvaluationList from '@/features/total-evaluation/components/project-evaluation/project-evaluation-list';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  const navigate = useNavigate();

  const { isMobile } = useDeviceType();
  const [toastOpen, setToastOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);

  const handleClickAlertModal = () => {
    setModalOpen((prev) => !prev);
    navigate(PAGE_URL.Landing, { replace: true });
  };

  if (isMobile) {
    return (
      <Modal open={modalOpen} onOpenChange={handleClickAlertModal}>
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

  const fallbacks = {
    suspense: {
      fallbackUI: (
        <div css={styles.fallbackWrapper}>
          <TotalEvaluationFallbackUI />
        </div>
      ),
    },
    error: {
      fallbackUI: (onReset: VoidFunction) => (
        <div css={styles.fallbackWrapper}>
          <TotalEvaluationFallbackUI />
          <Toast
            name="getFeedbackFailure"
            open={toastOpen}
            setOpen={setToastOpen}
            onClick={onReset}
          />
        </div>
      ),
    },
  };

  return (
    <>
      <div css={styles.container}>
        <FeedbackSidebar />

        <FallbackBoundary suspense={fallbacks.suspense} error={fallbacks.error}>
          <div css={styles.totalEvaluationSection}>
            <OverallEvaluation />
            <ProjectEvaluationList />
          </div>
        </FallbackBoundary>
      </div>
    </>
  );
}
