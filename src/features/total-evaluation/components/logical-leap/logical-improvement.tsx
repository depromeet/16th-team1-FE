import GreenPin from '../../../../assets/icons/greenPin.svg?react';

import * as styles from './logical-improvement.styles';

interface LogicalErrorProps {
  label: string;
  improvementText: string;
}

export default function LogicalError({ label, improvementText }: LogicalErrorProps) {
  return (
    <div css={styles.logicalImprovementWrapper}>
      <div css={styles.greenBlock} />
      <div css={styles.logicalImprovementTextWrapper}>
        <span css={styles.label}>
          {label}
          <GreenPin />
        </span>
        <p css={styles.improvementText}>{improvementText}</p>
      </div>
    </div>
  );
}
