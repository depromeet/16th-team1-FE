import { useParams } from 'react-router';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import { evaluationData } from '@/features/total-evaluation/common/data';
import EvaluationTitle from '@/features/total-evaluation/components/evaluation-title/evaluation-title';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ImprovementSection from '@/features/total-evaluation/components/improvement-section/improvement-section';
import ImprovementTitle from '@/features/total-evaluation/components/improvement-title/improvement-title';
import LogicalLeap from '@/features/total-evaluation/components/logical-leap/logical-leap';
import NestedList from '@/features/total-evaluation/components/nested-list/nested-list';
import { EVALUATION_LABEL } from '@/features/total-evaluation/constants/evaluation-constant';

import SelectedPageProvider from './components/context/selected-page/selected-page-provider';
import SidebarProvider from './components/context/sidebar/sidebar-provider';
import OverallEvaluation from './components/overall-evaluation/overall-evaluation';
import {
  OverallEvaluationType,
  useGetPortfolioFeedback,
} from './services/use-get-portfolio-feedback';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvaluationPage() {
  const { feedbackId } = useParams();

  const { data, isLoading } = useGetPortfolioFeedback({ feedbackId: feedbackId as string });

  const { improvementData, positives, negatives, logicalLeaps } = evaluationData;

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

            <section css={styles.evaluationSection('1.6rem')}>
              <ImprovementTitle improvementTitle={improvementData.title} />
              <ImprovementSection improvementData={improvementData} />
            </section>

            <section css={styles.evaluationSection('2.4rem')}>
              <ImprovementTitle improvementTitle={logicalLeaps.title} />
              <LogicalLeap logicalLeapData={logicalLeaps} />
            </section>

            <section css={styles.evaluationSection('3.2rem')}>
              <EvaluationTitle
                title={EVALUATION_LABEL['positives']}
                icon={<Icon name="smile" color={theme.colors.SORA[400]} />}
                color={theme.colors.SORA[400]}
              />
              <NestedList listItems={positives} gap={3.2} />
            </section>
            <section css={styles.evaluationSection('3.2rem')}>
              <EvaluationTitle
                title={EVALUATION_LABEL['negatives']}
                icon={<Icon name="sad" color="#D6AA59" />}
                color="#D6AA59"
              />
              <NestedList listItems={negatives} gap={3.2} />
            </section>
          </div>
        </div>
      </SelectedPageProvider>
    </SidebarProvider>
  );
}
