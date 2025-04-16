// import loadingProjectEvaluation from '@/assets/images/loading-project-evaluation.png';
import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';
import { getImageUrl } from '@/common/utils/get-image-url';

import TotalEvaluationBottom from './loading-evaluation-bottom';

import * as styles from './loading-project-evaluation.styles';

export default function LoadingProjectEvaluation() {
  const { isDesktop } = useDeviceType();
  const descriptionText = !isDesktop
    ? '문제정의와 회고가 부족해요. 문제정의에서 말하고자 하는 문제가 논리적으로 전달이 안돼요. 문제를 더 명확하게 도출하면 좋을 것 같아요.'
    : '문제정의와 회고가 부족해요. 문제정의에서 말하고자 하는 문제가 논리적으로 전달이 안돼요. 문제를 더 명확하게 집어주면 좋을 것 같아요. 회고에도 이 프로젝트를 통해 어떤 러닝이 있었는지, 앞으로 어떻게 할 건지에 대한 내용이 보충되면 더욱 풍부한 포트폴리오가 될 것 같아요.';

  return (
    <div css={styles.Wrapper}>
      <FadeInWrapper
        as={'main'}
        additionalStyles={styles.contentWrapper()}
        intersectionOptions={{
          threshold: 0.3,
          triggerOnce: true,
        }}
      >
        <article>
          <figure css={styles.titleWrapper}>
            <span css={styles.caption}>
              프로젝트 평가
              <Icon name="pin" color="#C3C3C6" width={18} />
            </span>
            <Spacing size={1.2} />
            <h2 css={styles.mainTitle}>카페 쿠폰 적립 프로젝트</h2>
            <Spacing size={2.4} />
          </figure>
          <img
            src={getImageUrl('loading-project-evaluation')}
            css={styles.image}
            alt="loading progect evaluation image"
          />
        </article>
        <section css={styles.descriptionWrapper}>
          <h3 css={styles.descriptionTitle}>프로세스 평가</h3>
          <p css={styles.description}>{descriptionText}</p>
        </section>
      </FadeInWrapper>
      <section css={styles.bottomWrapper}>
        <TotalEvaluationBottom type="smile" />
        <TotalEvaluationBottom type="sad" delayTime={0.2} />
      </section>
    </div>
  );
}
