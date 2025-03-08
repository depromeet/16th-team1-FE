import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';

import * as styles from './feedback-loading.styles';

export default function feedbackLoading() {
  return (
    <div css={styles.contentWrapper}>
      <Spacing size={28.8} />
      <video width={60} height={60} autoPlay loop muted>
        <source src="./src/assets/video/logoSpinning.mp4" type="video/mp4" />
      </video>
      <Spacing size={1.2} />
      <h1 css={styles.title}>AI가 피드백을 진행 중이에요</h1>
      <Spacing size={2.4} />
      <h3 css={styles.description}>피드백이 완료될 때까지 페이지를 닫지 마세요</h3>
      <Spacing size={30} />
      <span css={styles.exampleDescription}>피드백 예시 보기</span>
      <Spacing size={2} />
      <Icon name="feedbackLoadingDownArrow" customStyle={styles.floating} />
      <Spacing size={28} />
    </div>
  );
}
