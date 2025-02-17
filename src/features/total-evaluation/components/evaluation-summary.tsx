import DOMPurify from 'dompurify';

import * as styles from './evaluation-summary.styles';
interface EvaluationSummaryProps {
  evaluationSummary: string;
}

export default function EvaluationSummary({ evaluationSummary }: EvaluationSummaryProps) {
  /** XSS 방지를 위해 HTML을 정제 */
  const sanitizedEvaluation = DOMPurify.sanitize(evaluationSummary);

  return (
    <p css={styles.evaluationSummary} dangerouslySetInnerHTML={{ __html: sanitizedEvaluation }} />
  );
}
