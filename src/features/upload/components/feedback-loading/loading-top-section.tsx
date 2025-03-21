import logoSpinning from '@/assets/video/logoSpinning.mp4';
import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './loading-top-section.styles';

export default function LoadingTopSection() {
  const { isMobile } = useDeviceType();

  return (
    <>
      <FadeInWrapper
        as={'video'}
        intersectionOptions={{
          threshold: 0.3,
          triggerOnce: true,
        }}
        width={60}
        height={60}
        autoPlay
        loop
        muted
      >
        <source src={logoSpinning} type="video/mp4" />
      </FadeInWrapper>
      <Spacing size={1.2} />
      <FadeInWrapper
        as={'h1'}
        additionalStyles={styles.title()}
        intersectionOptions={{
          threshold: 0.3,
          triggerOnce: true,
        }}
        transitionOptions={{
          delay: 0.2,
        }}
      >
        AI가 피드백을 진행 중이에요
      </FadeInWrapper>
      <Spacing size={2.4} />
      <FadeInWrapper
        as={'h3'}
        additionalStyles={styles.description()}
        intersectionOptions={{
          threshold: 0.3,
          triggerOnce: true,
        }}
        transitionOptions={{
          delay: 0.4,
        }}
      >
        AI 피드백이 완료될 때까지 페이지를 닫지 마세요
      </FadeInWrapper>
      <Spacing size={isMobile ? 38 : 30} />
      <FadeInWrapper
        as={'h3'}
        additionalStyles={styles.bottomWrapper}
        intersectionOptions={{
          threshold: 0.3,
          triggerOnce: true,
        }}
        transitionOptions={{
          delay: 0.6,
        }}
      >
        <div css={styles.bottomWrapper}>
          <span css={styles.exampleDescription}>피드백 예시 보기</span>
          <Icon name="feedback-loading-down-arrow" customStyle={styles.floating} />
        </div>
      </FadeInWrapper>
    </>
  );
}
