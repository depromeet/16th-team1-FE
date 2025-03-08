import { useNavigate } from 'react-router';

import { Button } from '@/common/components/button/Button';
import Spacing from '@/common/components/spacing/spacing';

import * as styles from './routing-section.styles';

export default function RoutingStartSection() {
  const navigate = useNavigate();

  const handleNavigateToUpload = () => {
    navigate('/upload');
  };

  return (
    <section css={styles.flexColumn}>
      <p css={styles.mainText('start')}>
        Just upload <br />
        Your Portfolio
      </p>
      <Spacing size={3.2} />
      <p css={styles.explainText}>PDF 업로드만 하면, 포트폴리오 분석을 해드려요</p>
      <Spacing size={4.8} />
      <Button size="xxLarge" usage="text" variant="primary" onClick={handleNavigateToUpload}>
        포트폴리오 업로드하기
      </Button>
    </section>
  );
}
