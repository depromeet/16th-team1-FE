import { evaluationData } from './common/data';
import EvaluationChart from './components/EvaluationChart';
import EvaluationSummary from './components/EvaluationSummary';
import EvaluationTable from './components/EvaluationTable';

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
