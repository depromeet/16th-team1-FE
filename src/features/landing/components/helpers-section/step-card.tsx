import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from '@/common/components/image/Image';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import { getImageUrl } from '@/common/utils/get-image-url';

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
        {/* 랜딩 페이지 이미지 - "한 번의 PDF 업로드로 맞춤형 피드백을 받아보세요" 이미지 */}
        <Image
          css={styles.image(aspectRatio, width)}
          src={getImageUrl(image)}
          alt={`${step}: ${text}`}
          onLoad={() => ScrollTrigger.refresh()}
        />
      </div>
    </FadeInWrapper>
  );
}
