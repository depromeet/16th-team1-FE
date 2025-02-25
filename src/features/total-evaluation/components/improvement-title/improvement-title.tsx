import Icon from '@common/components/icon/icon';

import * as styles from './improvement-title.styles';

interface ImprovementTitleProps {
  improvementTitle: string;
}

export default function ImprovementTitle({ improvementTitle }: ImprovementTitleProps) {
  return (
    <div css={styles.improvementTitleWrapper}>
      <Icon name="checkIcon" />
      <span css={styles.improvementTitle}>{improvementTitle}</span>
    </div>
  );
}
