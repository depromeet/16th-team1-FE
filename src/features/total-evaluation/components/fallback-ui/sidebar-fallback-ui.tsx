import Skeleton from '@/common/components/skeleton/skeleton';
import Spacing from '@/common/components/spacing/spacing';

import * as styles from './fallback-ui.styles';

export default function SidebarFallbackUI() {
  return (
    <div css={styles.fallbackUI}>
      <SkeletonContent width="10rem" />
      <Spacing size={0.8} />
      <div css={styles.flexBox(true, 0.4)}>
        <SkeletonContent width="20rem" />
        <SkeletonContent width="16.7rem" />
        <SkeletonContent width="16.7rem" />
      </div>
    </div>
  );
}

const SkeletonContent = ({ width }: { width: string }) => {
  return (
    <div css={styles.skeletonWrapper}>
      <Skeleton width={width} height="1.6rem" />
    </div>
  );
};
