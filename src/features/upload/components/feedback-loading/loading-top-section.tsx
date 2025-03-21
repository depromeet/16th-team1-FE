import { useInView } from 'react-intersection-observer';

import logoSpinning from '@/assets/video/logoSpinning.mp4';
import Icon from '@/common/components/icon/icon';
import FadeInDiv from '@/common/components/interaction/fade-in-div';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './loading-top-section.styles';

export default function LoadingTopSection() {
  const { isMobile } = useDeviceType();

  const { ref: videoRef, inView: videoInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: iconRef, inView: iconInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <FadeInDiv ref={videoRef} inView={videoInView}>
        <video width={60} height={60} autoPlay loop muted>
          <source src={logoSpinning} type="video/mp4" />
        </video>
      </FadeInDiv>
      <Spacing size={1.2} />
      <h1 ref={titleRef} css={styles.title(titleInView)}>
        AI가 피드백을 진행 중이에요
      </h1>
      <Spacing size={2.4} />
      <h3 ref={descriptionRef} css={styles.description(descriptionInView)}>
        피드백이 완료될 때까지 페이지를 닫지 마세요
      </h3>
      <Spacing size={isMobile ? 38 : 30} />
      <FadeInDiv ref={iconRef} inView={iconInView} delay={0.6}>
        <div css={styles.bottomWrapper}>
          <span css={styles.exampleDescription}>피드백 예시 보기</span>
          <Icon name="feedback-loading-down-arrow" customStyle={styles.floating} />
        </div>
      </FadeInDiv>
    </>
  );
}
