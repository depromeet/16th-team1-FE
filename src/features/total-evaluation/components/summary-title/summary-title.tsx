import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';

import * as styles from './summary-title.styles';

interface SummaryTitleProps {
  title: string;
}
export default function SummaryTitle({ title }: SummaryTitleProps) {
  return (
    <h2 css={styles.summaryTitle}>
      {title} <Icon name="pin" width={21} color={theme.colors.GRAY[300]} />
    </h2>
  );
}
