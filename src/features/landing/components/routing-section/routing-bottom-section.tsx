import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';

import { Button } from '@/common/components/button/Button';
import Icon from '@/common/components/icon/icon';
import FadeInDiv from '@/common/components/interaction/fade-in-div';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './routing-section.styles';

export default function RoutingBottomSection() {
  const navigate = useNavigate();

  const { isMobile } = useDeviceType();

  const { ref: iconRef, inView: iconInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: iconInView ? 0.2 : 9999,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: textInView ? 0.2 : 9999,
  });

  const handleNavigateToUpload = () => {
    navigate('/upload');
  };

  return (
    <section css={styles.flexColumn}>
      <FadeInDiv ref={iconRef} inView={iconInView}>
        <Icon name="symbol" width={isMobile ? 40 : 60} />
      </FadeInDiv>
      <Spacing size={isMobile ? 1.6 : 3.2} />
      <p ref={textRef} css={styles.mainText('bottom', textInView)}>
        내 포트폴리오에 딱 맞는 피드백
        <br />
        지금 바로 시작해보세요.
      </p>
      <Spacing size={isMobile ? 3.1 : 4.8} />
      <Button
        ref={buttonRef}
        size={isMobile ? 'xLarge' : 'xxLarge'}
        usage="text"
        variant="primary"
        onClick={handleNavigateToUpload}
        css={styles.button(buttonInView)}
      >
        무료로 피드백 받기
      </Button>
    </section>
  );
}
