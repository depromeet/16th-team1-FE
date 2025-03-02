import { colors } from '@assets/styles/colors';

import Icon from '@/common/components/icon/icon';

import * as styles from './logical-improvement.styles';

interface LogicalImprovementProps {
  label: string;
  improvementText: string;
}

export default function LogicalImprovement({ label, improvementText }: LogicalImprovementProps) {
  return (
    <div css={styles.logicalImprovementWrapper}>
      <div css={styles.greenBlock} />
      <div css={styles.logicalImprovementTextWrapper}>
        <span css={styles.label}>
          {label}
          <Icon name="pin" color={colors.GREEN[400]} />
        </span>
        <p css={styles.improvementText}>{improvementText}</p>
      </div>
    </div>
  );
}
