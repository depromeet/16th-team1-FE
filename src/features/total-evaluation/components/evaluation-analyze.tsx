import { ReactNode } from 'react';

import * as styles from './evaluation-analyze.styles';

/** 강점 분석 및 해결방안 섹션 */
interface EvaluationAnalyzeProps {
  evaluationTitle: ReactNode; // EvaluationTitle 컴포넌트 사용하여 넘김
  analysisItems: AnalysisItemType[];
}

interface AnalysisItemType {
  title: string;
  description: string;
}

export default function EvaluationAnalyze({
  evaluationTitle,
  analysisItems,
}: EvaluationAnalyzeProps) {
  return (
    <section css={styles.evaluationAnalyze}>
      {evaluationTitle}
      <div css={styles.analysisItems}>
        {analysisItems.map((item) => (
          <div key={item.title} css={styles.analysisItem}>
            <span css={styles.highlightBox}>
              <p css={styles.titleText}>{item.title}</p>
            </span>
            <p css={styles.descriptionText}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
