import { useNavigate } from 'react-router';

import { BaseButton } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';

import * as styles from './routing-section.styles';

//TODO: 업로드하기 버튼 디자인시스템에 있는 버튼과 다름
export default function RoutingBottomSection() {
  const navigate = useNavigate();

  const handleNavigateToUpload = () => {
    navigate('/upload');
  };

  return (
    <section css={styles.flexColumn}>
      <Icon name="symbol" width={60} />
      <Spacing size={3.2} />
      <p css={styles.mainText('bottom')}>
        내 포트폴리오에 딱 맞는 피드백
        <br />
        지금 바로 시작해보세요.
      </p>
      <Spacing size={4.8} />
      <BaseButton type="button" css={styles.routingButton} onClick={handleNavigateToUpload}>
        무료로 피드백 받기
      </BaseButton>
    </section>
  );
}
