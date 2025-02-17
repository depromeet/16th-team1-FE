import { evaluationData } from './common/data';
import EvaluationAnalyze from './components/evaluation-analyze';
import EvaluationChart from './components/evaluation-chart';
import EvaluationSummary from './components/evaluation-summary';
import EvaluationTable from './components/evaluation-table';
import EvaluationTitle from './components/evaluation-title';

import * as styles from './index.styles';

export default function TotalEvalutionPage() {
  const { evaluationSummary, overallEvaluationGrade, evaluationItems, strengths, solutions } =
    evaluationData;

  return (
    <div css={styles.totalEvaluationPage}>
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
        evaluationTitle={<EvaluationTitle title="개선할 점 및 해결방안" icon={<span>👀</span>} />}
        analysisItems={solutions}
      />
    </div>
  );
}
