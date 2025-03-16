import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './loading-title.styles';

interface TitleProps {
  text: string;
  color: string;
}

export default function LoadingTitle({ text, color }: TitleProps) {
  const { isMobile } = useDeviceType();

  return (
    <header css={styles.titleWrapper}>
      <Icon name="spark" width={isMobile ? 24 : 32} color={color} />
      <h2 css={styles.title} dangerouslySetInnerHTML={{ __html: text }} />
      <Spacing size={4.8} />
    </header>
  );
}
