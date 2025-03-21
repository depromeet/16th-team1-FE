import loadingTotalEvaluationSmall from '@/assets/images/loading-total-evaluation-small.png';
import loadingTotalEvaluation from '@/assets/images/loading-total-evaluation.png';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import useDeviceType from '@/common/hooks/use-device-type';

import LoadingEvaluationBottom from './loading-evaluation-bottom';

import * as styles from './loading-total-evaluation.styles';

export default function LoadingTotalEvaluation() {
  const { isMobile } = useDeviceType();

  return (
    <div css={styles.Wrapper}>
      <FadeInWrapper
        as={'main'}
        additionalStyles={styles.mainWrapper()}
        intersectionOptions={{
          threshold: 0.3,
          triggerOnce: true,
        }}
      >
        <img
          src={isMobile ? loadingTotalEvaluationSmall : loadingTotalEvaluation}
          css={styles.image}
          alt="loading total evaluation image"
        />
      </FadeInWrapper>
      <section css={styles.bottomWrapper}>
        <LoadingEvaluationBottom type="strength" />
        <LoadingEvaluationBottom type="fix" delayTime={0.2} />
      </section>
    </div>
  );
}
