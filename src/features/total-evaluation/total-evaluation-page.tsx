import { useState } from 'react';

import { evaluationData } from './common/data';
import EvaluationAnalyze from './components/evaluation-analyze';
import EvaluationChart from './components/evaluation-chart';
import EvaluationSummary from './components/evaluation-summary';
import EvaluationTable from './components/evaluation-table';
import EvaluationTitle from './components/evaluation-title';
import FeedbackSidebar from './components/feedback-sidebar/feedback-sidebar';
import NestedList from './components/nested-list/nested-list';
import { EVALUATION_LABEL } from './constants/evaluation-config';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvalutionPage() {
  const {
    evaluationSummary,
    overallEvaluationGrade,
    evaluationItems,
    strengths,
    solutions,
    positives,
    negatives,
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

          <EvaluationAnalyze
            evaluationTitle={<EvaluationTitle title="강점 분석" icon={<span>🔥</span>} />}
            analysisItems={strengths}
          />
          <EvaluationAnalyze
            evaluationTitle={
              <EvaluationTitle title="개선할 점 및 해결방안" icon={<span>👀</span>} />
            }
            analysisItems={solutions}
          />

          <div css={styles.evaluationCriteria('3.2rem')}>
            <EvaluationTitle title={EVALUATION_LABEL['positives']} icon={<span>🔥</span>} />
            <NestedList listItems={positives} />
          </div>
          <div css={styles.evaluationCriteria('3.2rem')}>
            <EvaluationTitle title={EVALUATION_LABEL['negatives']} icon={<span>🔥</span>} />
            <NestedList listItems={negatives} />
          </div>
        </div>
      </div>
    </div>
  );
}
