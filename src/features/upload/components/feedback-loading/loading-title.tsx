import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './loading-title.styles';

interface TitleProps {
  text: string;
  color: string;
}

export default function LoadingTitle({ text, color }: TitleProps) {
  const { isMobile } = useDeviceType();

  return (
    <FadeInWrapper
      as={'header'}
      additionalStyles={styles.titleWrapper}
      intersectionOptions={{
        threshold: 0.3,
        triggerOnce: true,
      }}
    >
      <Icon name="spark" width={isMobile ? 24 : 32} color={color} />
      <h2 css={styles.title} dangerouslySetInnerHTML={{ __html: text }} />
    </FadeInWrapper>
  );
}
