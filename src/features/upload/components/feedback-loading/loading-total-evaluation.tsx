import useBreakpoint from '@/common/hooks/use-break-point';

import LoadingEvaluationBottom from './loading-evaluation-bottom';
import loadingTotalEvaluationSmall from '../../../../../public/images/loading-total-evaluation-small.png';
import loadingTotalEvaluation from '../../../../../public/images/loading-total-evaluation.png';

import * as styles from './loading-total-evaluation.styles';

export default function LoadingTotalEvaluation() {
  const breakpoint = useBreakpoint();
  const imgUrl = breakpoint === 'mobile' ? loadingTotalEvaluationSmall : loadingTotalEvaluation;

  return (
    <div css={styles.Wrapper}>
      <main css={styles.mainWrapper}>
        <img src={imgUrl} css={styles.image} alt="loading total evaluation image" />
      </main>
      <section css={styles.bottomWrapper}>
        <LoadingEvaluationBottom type="strength" />
        <LoadingEvaluationBottom type="fix" />
      </section>
    </div>
  );
}
