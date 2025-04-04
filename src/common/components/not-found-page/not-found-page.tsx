import { useNavigate } from 'react-router';

import Icon from '../icon/icon';
import Spacing from '../spacing/spacing';

import * as styles from './not-found-page.styles';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div css={styles.container}>
      <Icon name="not-found" />
      <Spacing size={2} />
      <span css={styles.title}>404</span>
      <Spacing size={1.2} />
      <p css={styles.description}>앗! 존재하지 않는 페이지입니다.</p>
      <Spacing size={0.4} />
      <p css={styles.caption}>
        <span css={styles.link} onClick={() => navigate('/')}>
          홈페이지
        </span>
        로 돌아가 다시 시도해주세요.
      </p>
    </div>
  );
}
