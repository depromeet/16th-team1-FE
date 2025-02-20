import { evaluationData } from '@/features/total-evaluation/common/data';
import EvaluationAnalyze from '@/features/total-evaluation/components/evaluation-analyze/evaluation-analyze';
import EvaluationChart from '@/features/total-evaluation/components/evaluation-chart/evaluation-chart';
import EvaluationSummary from '@/features/total-evaluation/components/evaluation-summary/evaluation-summary';
import EvaluationTable from '@/features/total-evaluation/components/evaluation-table/evaluation-table';
import EvaluationTitle from '@/features/total-evaluation/components/evaluation-title/evaluation-title';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';
import ImprovementSection from '@/features/total-evaluation/components/improvement-section/improvement-section';
import ImprovementTitle from '@/features/total-evaluation/components/improvement-title/improvement-title';
import LogicalLeap from '@/features/total-evaluation/components/logical-leap/logical-leap';
import NestedList from '@/features/total-evaluation/components/nested-list/nested-list';
import { EVALUATION_LABEL } from '@/features/total-evaluation/constants/evaluation-constant';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvalutionPage() {
  const {
    evaluationSummary,
    overallEvaluationGrade,
    evaluationItems,
    strengths,
    solutions,
    improvementData,
    positives,
    negatives,
    logicalLeaps,
  } = evaluationData;

  return (
    <div css={styles.container}>
      <FeedbackSidebar />

      <div css={styles.totalEvaluationSection}>
        <EvaluationSummary evaluationSummary={evaluationSummary} />
        <EvaluationChart
          overallEvaluationGrade={overallEvaluationGrade}
          evaluationItems={evaluationItems}
        />
        <EvaluationTable evaluationItems={evaluationItems} />

        <section css={styles.evaluationSection('2.2rem')}>
          <EvaluationTitle title={EVALUATION_LABEL['strengths']} icon={<span>🔥</span>} />
          <EvaluationAnalyze analysisItems={strengths} />
        </section>

        <section css={styles.evaluationSection('2.2rem')}>
          <EvaluationTitle title={EVALUATION_LABEL['solutions']} icon={<span>👀</span>} />
          <EvaluationAnalyze analysisItems={solutions} />
        </section>

        <section css={styles.evaluationSection('1rem')}>
          <ImprovementTitle improvementTitle={improvementData.title} />
          <ImprovementSection improvementData={improvementData} />
        </section>

        <section css={styles.evaluationSection('3.2rem')}>
          <ImprovementTitle improvementTitle={logicalLeaps.title} />
          <LogicalLeap logicalLeapData={logicalLeaps} />
        </section>

        <section css={styles.evaluationSection('3.2rem')}>
          <EvaluationTitle title={EVALUATION_LABEL['positives']} icon={<span>🔥</span>} />
          <NestedList listItems={positives} />
        </section>
        <section css={styles.evaluationSection('3.2rem')}>
          <EvaluationTitle title={EVALUATION_LABEL['negatives']} icon={<span>🔥</span>} />
          <NestedList listItems={negatives} />
        </section>
      </div>
    </div>
  );
}
