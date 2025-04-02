import { ReactNode } from 'react';

import * as styles from './evaluation-title.styles';

/** 각 평가 항목별 제목 */
interface EvaluationTitleProps {
  title: string;
  icon?: ReactNode;
  color?: string;
}

export default function EvaluationTitle({ title, icon, color }: EvaluationTitleProps) {
  return (
    <h2 css={styles.evaluationTitle(color)}>
      {title}
      {icon && icon}
    </h2>
  );
}
