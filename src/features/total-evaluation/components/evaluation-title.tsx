import { ReactNode } from 'react';

import * as styles from './evaluation.title.styles';

/** 각 평가 항목별 제목 */
interface EvaluationTitleProps {
  title: string;
  icon?: ReactNode;
}

export default function EvaluationTitle({ title, icon }: EvaluationTitleProps) {
  return (
    <h2 css={styles.evaluationTitle}>
      {title}
      {icon && icon}
    </h2>
  );
}
