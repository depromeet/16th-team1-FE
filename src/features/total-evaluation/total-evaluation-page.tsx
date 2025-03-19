import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ProjectEvaluationList from '@/features/total-evaluation/components/project-evaluation/project-evaluation-list';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  return (
    <div css={styles.container}>
      <FeedbackSidebar />

      <FallbackBoundary>
        <div css={styles.totalEvaluationSection}>
          <OverallEvaluation />
          <ProjectEvaluationList />
        </div>
      </FallbackBoundary>
    </div>
  );
}
