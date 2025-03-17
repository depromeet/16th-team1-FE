import { useParams } from 'react-router';

import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';

import OverallEvaluation from './components/overall-evaluation/overall-evaluation';
import ProjectEvaluation from './components/project-evaluation/project-evaluation';
import {
  OverallEvaluationType,
  useGetPortfolioFeedback,
} from './services/use-get-portfolio-feedback';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  const { feedbackId } = useParams();

  const { data, isLoading } = useGetPortfolioFeedback({ feedbackId: feedbackId as string });

  if (isLoading) {
    return <div>로딩</div>;
  }

  return (
    <div css={styles.container}>
      {/* TODO: Suspense적용 후, 조건부 렌더링 제거 예정 */}
      {data?.result.projectEvaluation && (
        <FeedbackSidebar projectEvaluation={data?.result.projectEvaluation} />
      )}

      <div css={styles.totalEvaluationSection}>
        <OverallEvaluation
          overallEvaluation={data?.result.overallEvaluation as OverallEvaluationType}
        />

        {data?.result?.projectEvaluation?.map((project) => (
          <ProjectEvaluation key={project.projectName} projectEvaluation={project} />
        ))}
      </div>
    </div>
  );
}
