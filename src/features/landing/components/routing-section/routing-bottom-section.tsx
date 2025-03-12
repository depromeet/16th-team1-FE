import { useNavigate } from 'react-router';

import { Button } from '@/common/components/button/Button';
import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './routing-section.styles';

export default function RoutingBottomSection() {
  const navigate = useNavigate();

  const { isMobile } = useDeviceType();

  const handleNavigateToUpload = () => {
    navigate('/upload');
  };

  return (
    <section css={styles.flexColumn}>
      <Icon name="symbol" width={isMobile ? 40 : 60} />
      <Spacing size={isMobile ? 1.6 : 3.2} />
      <p css={styles.mainText('bottom')}>
        내 포트폴리오에 딱 맞는 피드백
        <br />
        지금 바로 시작해보세요.
      </p>
      <Spacing size={isMobile ? 3.1 : 4.8} />
      <Button
        size={isMobile ? 'xLarge' : 'xxLarge'}
        usage="text"
        variant="primary"
        onClick={handleNavigateToUpload}
      >
        무료로 피드백 받기
      </Button>
    </section>
  );
}
