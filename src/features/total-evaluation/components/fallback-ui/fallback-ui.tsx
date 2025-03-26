import Skeleton from '@/common/components/skeleton/skeleton';
import Spacing from '@/common/components/spacing/spacing';

import * as styles from './fallback-ui.styles';

export default function FallbackUI() {
  return (
    <div css={styles.fallbackUI}>
      <Skeleton width="12rem" height="1.6rem" />
      <Spacing size={2.2} />
      <Skeleton width="76.5rem" height="1.6rem" />
      <Spacing size={1.2} />
      <Skeleton width="70rem" height="1.6rem" />
      <Spacing size={3.6} />

      <div css={styles.chartWrapper}>
        <div css={styles.flexBox(true, 1.2)}>
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} css={styles.flexBox(true, 0.8)}>
                <Skeleton width="8.1rem" height="1.2rem" />
                <Skeleton width="61.7rem" height="1.6rem" />
              </div>
            ))}
        </div>
        <Skeleton width="15rem" height="15rem" />
      </div>
      <Spacing size={5.3} />

      <div css={styles.flexBox(true, 3)}>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <TableRow key={i} />
          ))}
      </div>
    </div>
  );
}

const TableRow = () => (
  <div css={styles.tableRow}>
    <div css={styles.tableLeftSection}>
      <Skeleton width="6.4rem" height="1.6rem" />
      <div css={styles.flexBox(true, 1.2)}>
        <Skeleton width="44.5rem" height="1.6rem" />
        <Skeleton width="29rem" height="1.6rem" />
      </div>
    </div>
    <Skeleton width="6.8rem" height="3.2rem" />
  </div>
);
