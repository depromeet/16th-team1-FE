import { forwardRef } from 'react';

import FadeInDiv from '@/common/components/interaction/fade-in-div';

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
      <FadeInDiv ref={ref} inView={inView} delay={idx * 0.2} additionalStyles={styles.stepCard}>
        <div css={styles.stepTextWrapper}>
          <span css={styles.stepText}>{step}</span>
          <p css={styles.stepExplainText}>{text}</p>
        </div>
        <div>
          <img css={styles.image(aspectRatio, width)} src={image} alt={`${step}: ${text}`} />
        </div>
      </FadeInDiv>
    );
  },
);

StepCard.displayName = 'StepCard';

export default StepCard;
