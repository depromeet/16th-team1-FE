import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import useDeviceType from '@/common/hooks/use-device-type';
import { iconTypes } from '@/common/types/icon-types';

import { LOADING_BOTTOM } from '../../constants/loading-constant';

import * as styles from './loading-evaluation-bottom.styles';

export interface TotalEvaluationBottomProps {
  type: 'strength' | 'fix' | 'smile' | 'sad';
  delayTime?: number;
}

export default function TotalEvaluationBottom({ type, delayTime = 0 }: TotalEvaluationBottomProps) {
  const { isMobile, isTablet } = useDeviceType();
  const data = LOADING_BOTTOM[type];

  let content = [...data.content];

  const nameIconMap: Record<TotalEvaluationBottomProps['type'], iconTypes> = {
    strength: 'fist',
    fix: 'bulb',
    smile: 'smile',
    sad: 'bad',
  };

  if (type === 'fix' && isTablet) {
    content = ['1. UI/UX 디자인 과정 추가하기', ...data.content.slice(1)];
  } else if (type === 'smile' && isMobile) {
    content = [data.content[0], '2. 그로스 전략 적용', ...data.content.slice(2)];
  }

  return (
    <FadeInWrapper
      additionalStyles={styles.contentWrapper()}
      intersectionOptions={{
        threshold: 0.3,
        triggerOnce: true,
      }}
      transitionOptions={{
        delay: delayTime,
      }}
    >
      <h1 css={styles.title({ color: data.color })}>
        {data.title}
        <Icon name={nameIconMap[type]} color={data.color} />
      </h1>
      {content.map((item, index) => (
        <p key={index} css={styles.description}>
          {item}
        </p>
      ))}
    </FadeInWrapper>
  );
}
