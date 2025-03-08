import * as styles from './step-card.styles';

interface StepCardProps {
  step: string;
  text: string;
  image: string;
  aspectRatio: number;
  width: number;
}

export default function StepCard({ step, text, image, aspectRatio, width }: StepCardProps) {
  return (
    <div css={styles.stepCard}>
      <div css={styles.stepTextWrapper}>
        <span css={styles.stepText}>{step}</span>
        <p css={styles.stepExplainText}>{text}</p>
      </div>
      <div>
        <img css={styles.image(aspectRatio, width)} src={image} alt={`${step}: ${text}`} />
      </div>
    </div>
  );
}
