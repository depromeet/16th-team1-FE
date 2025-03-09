import Icon from '@/common/components/icon/icon';

import BarChart from '../../../../common/components/bar-chart/bar-chart';
import { EvaluationItemsType } from '../../types/evaluation-types';
import { getEvaluationData } from '../../utils/get-evaluation-data';
import { GradeType } from '../overall-evaluation/overall-evaluation';

import * as styles from './evaluation-chart.styles';

interface EvaluationChartProps {
  overallEvaluationGrade: GradeType;
  evaluationItems: EvaluationItemsType;
}

export default function EvaluationChart({
  overallEvaluationGrade,
  evaluationItems,
}: EvaluationChartProps) {
  const evaluationData = getEvaluationData(evaluationItems);

  return (
    <div css={styles.evaluationChart}>
      <div css={styles.evaluationChartWrapper}>
        {evaluationData.map(({ criteria, label, score }) => (
          <div key={criteria} css={styles.evaluationItem}>
            <span css={styles.criteria}>{label}</span>
            <BarChart value={score} />
          </div>
        ))}
      </div>
      <Icon name={`grade_${overallEvaluationGrade}`} />
    </div>
  );
}
