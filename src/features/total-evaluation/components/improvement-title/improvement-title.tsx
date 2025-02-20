import CheckIcon from '@assets/icons/checkIcon.svg?react';

import * as styles from './improvement-title.styles';

interface ImprovementTitleProps {
  improvementTitle: string;
}

export default function ImprovementTitle({ improvementTitle }: ImprovementTitleProps) {
  return (
    <div css={styles.improvementTitleWrapper}>
      <CheckIcon />
      <span css={styles.improvementTitle}>{improvementTitle}</span>
    </div>
  );
}
