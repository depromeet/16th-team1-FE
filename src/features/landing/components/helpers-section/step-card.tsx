import { forwardRef } from 'react';

import * as styles from './step-card.styles';

interface StepCardProps {
  inView: boolean;
  idx: number;
  step: string;
  text: string;
  image: string;
  aspectRatio: number;
  width: number;
}

const StepCard = forwardRef<HTMLDivElement, StepCardProps>(
  ({ inView, idx, step, text, image, aspectRatio, width }, ref) => {
    return (
      <div ref={ref} css={styles.stepCard(inView, idx * 0.2)}>
        <div css={styles.stepTextWrapper}>
          <span css={styles.stepText}>{step}</span>
          <p css={styles.stepExplainText}>{text}</p>
        </div>
        <div>
          <img css={styles.image(aspectRatio, width)} src={image} alt={`${step}: ${text}`} />
        </div>
      </div>
    );
  },
);

StepCard.displayName = 'StepCard';

export default StepCard;
