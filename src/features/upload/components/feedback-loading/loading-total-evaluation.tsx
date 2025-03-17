import loadingTotalEvaluationSmall from '@/assets/images/loading-total-evaluation-small.png';
import loadingTotalEvaluation from '@/assets/images/loading-total-evaluation.png';
import useDeviceType from '@/common/hooks/use-device-type';

import LoadingEvaluationBottom from './loading-evaluation-bottom';

import * as styles from './loading-total-evaluation.styles';

export default function LoadingTotalEvaluation() {
  const { isMobile } = useDeviceType();

  return (
    <div css={styles.Wrapper}>
      <main css={styles.mainWrapper}>
        <img
          src={isMobile ? loadingTotalEvaluationSmall : loadingTotalEvaluation}
          css={styles.image}
          alt="loading total evaluation image"
        />
      </main>
      <section css={styles.bottomWrapper}>
        <LoadingEvaluationBottom type="strength" />
        <LoadingEvaluationBottom type="fix" />
      </section>
    </div>
  );
}
