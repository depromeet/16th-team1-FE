import { useState } from 'react';

import { evaluationData } from './common/data';
import EvaluationChart from './components/evaluation-chart';
import EvaluationSummary from './components/evaluation-summary';
import EvaluationTable from './components/evaluation-table';
import FeedbackSidebar from './components/feedback-sidebar/feedback-sidebar';

import * as styles from './total-evaluation-page.styles';

export default function TotalEvalutionPage() {
  const { evaluationSummary, overallEvaluationGrade, evaluationItems } = evaluationData;
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
        </div>
      </div>
    </div>
  );
}
