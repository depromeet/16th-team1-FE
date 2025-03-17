import { useInView } from 'react-intersection-observer';

import Icon from '@/common/components/icon/icon';
import FadeInDiv from '@/common/components/interaction/fade-in-div';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './loading-title.styles';

interface TitleProps {
  text: string;
  color: string;
}

export default function LoadingTitle({ text, color }: TitleProps) {
  const { isMobile } = useDeviceType();

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <FadeInDiv ref={titleRef} inView={titleInView} additionalStyles={styles.titleWrapper}>
      {/* // <header css={styles.titleWrapper}> */}
      <Icon name="spark" width={isMobile ? 24 : 32} color={color} />
      <h2 css={styles.title} dangerouslySetInnerHTML={{ __html: text }} />
      <Spacing size={4.8} />
      {/* // </header> */}
    </FadeInDiv>
  );
}
