import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';
import useBreakpoint from '@/common/hooks/use-break-point';

import * as styles from './loading-title.styles';

interface TitleProps {
  text: string;
  color: string;
}

export default function LoadingTitle({ text, color }: TitleProps) {
  const breakpoint = useBreakpoint();
  const iconSize = breakpoint === 'mobile' ? 24 : 32;

  return (
    <header css={styles.titleWrapper}>
      <Icon name="spark" width={iconSize} color={color} />
      <h2 css={styles.title} dangerouslySetInnerHTML={{ __html: text }} />
      <Spacing size={4.8} />
    </header>
  );
}
