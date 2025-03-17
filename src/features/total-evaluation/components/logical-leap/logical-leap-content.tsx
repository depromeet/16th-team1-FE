import * as styles from './logical-leap-content.styles';

interface LogicalImprovementProps {
  label: string;
  text: string;
}

export default function LogicalImprovement({ label, text }: LogicalImprovementProps) {
  return (
    <div css={styles.logicalImprovementWrapper}>
      <div css={styles.block(label)} />
      <div css={styles.logicalImprovementTextWrapper}>
        <span css={styles.label(label)}>{label}</span>
        <p css={styles.improvementText}>{text}</p>
      </div>
    </div>
  );
}
