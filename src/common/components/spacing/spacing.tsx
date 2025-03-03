import * as styles from './spacing.styles';

type DirectionType = 'vertical' | 'horizontal';

export interface SpacingProps {
  direction?: DirectionType;
  size: number;
}

export default function Spacing({ direction = 'vertical', size }: SpacingProps) {
  return <div css={styles.spacing({ direction, size })} />;
}
