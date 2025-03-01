import * as styles from './improvement-text.styles';

interface ImprovementTextProps {
  label: string;
  improvementText: string;
}

export default function ImprovementText({ label, improvementText }: ImprovementTextProps) {
  return (
    <div css={styles.improvementTextWrapper}>
      <span css={styles.label(label)}>{label}</span>
      <p css={styles.text}>{improvementText}</p>
    </div>
  );
}
