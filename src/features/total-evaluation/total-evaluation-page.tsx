import { useState } from 'react';

import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import Toast from '@/common/components/toast/toast';
import TotalEvaluationFallbackUI from '@/features/total-evaluation/components/fallback-ui/total-evaluation-fallback-ui';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ProjectEvaluationList from '@/features/total-evaluation/components/project-evaluation/project-evaluation-list';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';
import RecentFeedbackModal from '../profile/components/recent-feedback-modal/recent-feedback-modal';

import * as styles from './total-evaluation-page.styles';

//TODO: Toast 아이콘 reactNode로 수정
export default function TotalEvaluationPage() {
  const [toastOpen, setToastOpen] = useState(true);

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
      <RecentFeedbackModal />
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
