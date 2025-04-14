import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';

import { TMP_AWS_IMAGE_BASE_URL } from '../../landing-page';
import { extractImageFilename } from '../../utils/extract-image-file-name';

import * as styles from './step-card.styles';

interface StepCardProps {
  idx: number;
  step: string;
  text: string;
  image: string;
  aspectRatio: number;
  width: number;
}

export default function StepCard({ idx, step, text, image, aspectRatio, width }: StepCardProps) {
  return (
    <FadeInWrapper
      additionalStyles={styles.stepCard}
      transitionOptions={{
        delay: idx * 0.2,
      }}
      intersectionOptions={{
        threshold: 0.3,
        triggerOnce: true,
      }}
    >
      <div css={styles.stepTextWrapper}>
        <span css={styles.stepText}>{step}</span>
        <p css={styles.stepExplainText}>{text}</p>
      </div>
      <div>
        {/* 
        TODO: S3참조 제거
        <img css={styles.image(aspectRatio, width)} src={image} alt={`${step}: ${text}`} /> */}
        <img
          css={styles.image(aspectRatio, width)}
          src={`${TMP_AWS_IMAGE_BASE_URL}/${extractImageFilename(image)}`}
          alt={`${step}: ${text}`}
          onLoad={() => ScrollTrigger.refresh()}
        />
      </div>
    </FadeInWrapper>
  );
}
