import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';

import { LOADING_BOTTOM } from '../../constants/loading-constant';

import * as styles from './loading-evaluation-bottom.styles';

export interface TotalEvaluationBottomProps {
  type: 'strength' | 'fix' | 'smile' | 'sad';
}

export default function TotalEvaluationBottom({ type }: TotalEvaluationBottomProps) {
  const { isMobile, isTablet } = useDeviceType();
  const data = LOADING_BOTTOM[type];

  let content = [...data.content];

  if (type === 'fix' && isTablet) {
    content = ['1. UI/UX 디자인 과정 추가하기', ...data.content.slice(1)];
  } else if (type === 'smile' && isMobile) {
    content = [data.content[0], '2. 그로스 전략 적용', ...data.content.slice(2)];
  }

  return (
    <div css={styles.contentWrapper}>
      <h1 css={styles.title({ color: data.color })}>
        {data.title}
        <Icon name={type} color={data.color} />
      </h1>
      {content.map((item, index) => (
        <p key={index} css={styles.description}>
          {item}
        </p>
      ))}
    </div>
  );
}
