import { evaluationData } from './common/data';
import EvaluationChart from './components/evaluation-chart';
import EvaluationSummary from './components/evaluation-summary';
import EvaluationTable from './components/evaluation-table';

import * as styles from './index.styles';

export default function TotalEvalutionPage() {
  const { evaluationSummary, overallEvaluationGrade, evaluationItems } = evaluationData;

  return (
    <div css={styles.totalEvaluationPage}>
      <EvaluationSummary evaluationSummary={evaluationSummary} />
      <EvaluationChart
        overallEvaluationGrade={overallEvaluationGrade}
        evaluationItems={evaluationItems}
      />
      <EvaluationTable evaluationItems={evaluationItems} />
    </div>
  );
}
