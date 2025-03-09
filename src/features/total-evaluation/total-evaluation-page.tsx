import { useParams } from 'react-router';

import { evaluationData } from '@/features/total-evaluation/common/data';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ImprovementSection from '@/features/total-evaluation/components/improvement-section/improvement-section';
import ImprovementTitle from '@/features/total-evaluation/components/improvement-title/improvement-title';
import LogicalLeap from '@/features/total-evaluation/components/logical-leap/logical-leap';

import SelectedPageProvider from './components/context/selected-page/selected-page-provider';
import SidebarProvider from './components/context/sidebar/sidebar-provider';
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

  const { improvementData, logicalLeaps } = evaluationData;

  if (isLoading) {
    return <div>로딩</div>;
  }

  return (
    <SidebarProvider>
      <SelectedPageProvider>
        <div css={styles.container}>
          <FeedbackSidebar />

          <div css={styles.totalEvaluationSection}>
            <OverallEvaluation
              overallEvaluation={data?.result.overallEvaluation as OverallEvaluationType}
            />

            {data?.result?.projectEvaluation?.map((project) => (
              <ProjectEvaluation key={project.projectName} projectEvaluation={project} />
            ))}

            {/* TODO: 장표별 상세 평가 완료 후 제거 */}
            <section css={styles.evaluationSection('1.6rem')}>
              <ImprovementTitle improvementTitle={improvementData.title} />
              <ImprovementSection improvementData={improvementData} />
            </section>

            <section css={styles.evaluationSection('2.4rem')}>
              <ImprovementTitle improvementTitle={logicalLeaps.title} />
              <LogicalLeap logicalLeapData={logicalLeaps} />
            </section>
          </div>
        </div>
      </SelectedPageProvider>
    </SidebarProvider>
  );
}
