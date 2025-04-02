import * as styles from './evaluation-analyze.styles';

/** 강점 분석 및 해결방안 섹션 */
interface EvaluationAnalyzeProps {
  analysisItems: AnalysisItemType[];
}

interface AnalysisItemType {
  title: string;
  content: string;
}

export default function EvaluationAnalyze({ analysisItems }: EvaluationAnalyzeProps) {
  return (
    <div css={styles.analysisItems}>
      {analysisItems.map((item) => (
        <div key={item.title} css={styles.analysisItem}>
          <span css={styles.highlightBox}>
            <p css={styles.titleText}>{item.title}</p>
          </span>
          <p css={styles.descriptionText}>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
