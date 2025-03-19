import { ErrorBoundary } from 'react-error-boundary';

import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ProjectEvaluationList from '@/features/total-evaluation/components/project-evaluation/project-evaluation-list';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  return (
    <div css={styles.container}>
      {/* TODO: Suspense적용 후, 조건부 렌더링 제거 예정 */}
      <ErrorBoundary fallback={<div>로딩</div>}>
        <FeedbackSidebar />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>로딩</div>}>
        <div css={styles.totalEvaluationSection}>
          <OverallEvaluation />
          <ProjectEvaluationList />
        </div>
      </ErrorBoundary>
    </div>
  );
}
