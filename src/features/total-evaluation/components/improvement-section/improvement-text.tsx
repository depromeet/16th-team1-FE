import * as styles from './improvement-text.styles';

interface ImprovementTextProps {
  label: string;
  improvementText: string;
}

export default function ImprovementText({ label, improvementText }: ImprovementTextProps) {
  return (
    <div css={styles.improvementTextWrapper}>
      <span css={styles.label}>{label}</span>
      <div css={styles.improvementTextContent}>
        <div css={styles.colorBlock(label)} />
        <p css={styles.text}>{improvementText}</p>
      </div>
    </div>
  );
}
