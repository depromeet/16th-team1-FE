import { EvaluationItemsType } from '../../types/evaluation-types';
import { getEvaluationData } from '../../utils/get-evaluation-data';

import * as styles from './evaluation-table.styles';

interface EvaluationTableProps {
  evaluationItems: EvaluationItemsType;
}

export default function EvaluationTable({ evaluationItems }: EvaluationTableProps) {
  const evaluationData = getEvaluationData(evaluationItems);

  return (
    <div css={styles.evaluationTableWrapper}>
      {evaluationData.map(({ criteria, label, score, text }) => (
        <div key={criteria} css={styles.tableRow}>
          <label css={styles.label}>{label}</label>
          <p css={styles.detailText}>{text}</p>
          <b css={styles.score}> {score}</b>
        </div>
      ))}
    </div>
  );
}
