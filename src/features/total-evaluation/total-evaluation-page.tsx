import { Button } from '@/common/components/button/Button';
import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import Skeleton from '@/common/components/skeleton/skeleton';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ProjectEvaluationList from '@/features/total-evaluation/components/project-evaluation/project-evaluation-list';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  return (
    <div css={styles.container}>
      <FeedbackSidebar />

      <FallbackBoundary suspense={fallbacks.suspense} error={fallbacks.error}>
        <div css={styles.totalEvaluationSection}>
          <OverallEvaluation />
          <ProjectEvaluationList />
        </div>
      </FallbackBoundary>
    </div>
  );
}

const fallbacks = {
  suspense: {
    fallbackUI: (
      <div css={styles.fallbackWrapper}>
        <Skeleton />
      </div>
    ),
  },
  error: {
    fallbackUI: (onReset: VoidFunction) => (
      <div css={styles.fallbackWrapper}>
        <Button size="xLarge" usage="text" variant="primary" onClick={onReset}>
          다시 시도
        </Button>
      </div>
      // <Toast name="getFeedbackFailure" open={true} setOpen={setToastOpen} onClick={onReset} />
    ),
  },
};
