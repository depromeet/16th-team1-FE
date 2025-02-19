import { useState } from 'react';

import { evaluationData } from './common/data';
import EvaluationAnalyze from './components/evaluation-analyze/evaluation-analyze';
import EvaluationChart from './components/evaluation-chart/evaluation-chart';
import EvaluationSummary from './components/evaluation-summary/evaluation-summary';
import EvaluationTable from './components/evaluation-table/evaluation-table';
import EvaluationTitle from './components/evaluation-title/evaluation-title';
import FeedbackSidebar from './components/feedback-sidebar/feedback-sidebar';
import ImprovementSection from './components/improvement-section/improvement-section';
import ImprovementTitle from './components/improvement-title/improvement-title';
import LogicalLeap from './components/logical-leap/logical-leap';
import NestedList from './components/nested-list/nested-list';
import { EVALUATION_LABEL } from './constants/evaluation-constant';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div css={styles.container}>
      <FeedbackSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div css={styles.totalEvaluation(isSidebarOpen)}>
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
    </div>
  );
}
