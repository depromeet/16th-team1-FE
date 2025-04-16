import { useEffect, useState } from 'react';

import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import Toast from '@/common/components/toast/toast';
import useDeviceType from '@/common/hooks/use-device-type';
import TotalEvaluationFallbackUI from '@/features/total-evaluation/components/fallback-ui/total-evaluation-fallback-ui';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ProjectEvaluationList from '@/features/total-evaluation/components/project-evaluation/project-evaluation-list';
import { useMobileGuardModalStore } from '@/store/mobile-guard-modal';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  const { isMobile } = useDeviceType();
  const [toastOpen, setToastOpen] = useState(true);

  const { openMobileGuardModal } = useMobileGuardModalStore();

  useEffect(() => {
    if (isMobile) {
      openMobileGuardModal();
    }
  }, [isMobile, openMobileGuardModal]);

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
      {!isMobile ? (
        <div css={styles.container}>
          <FeedbackSidebar />

          <FallbackBoundary suspense={fallbacks.suspense} error={fallbacks.error}>
            <div css={styles.totalEvaluationSection}>
              <OverallEvaluation />
              <ProjectEvaluationList />
            </div>
          </FallbackBoundary>
        </div>
      ) : null}
    </>
  );
}
