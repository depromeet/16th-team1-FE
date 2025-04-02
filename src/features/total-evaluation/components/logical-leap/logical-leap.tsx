import LogicalLeapContent from '@/features/total-evaluation/components/logical-leap/logical-leap-content';
import { LOGICAL_LEAP_CONSTANT } from '@/features/total-evaluation/constants/evaluation-constant';

import * as styles from './logical-leap.styles';

interface LogicalLeapProps {
  title: string;
  logicalLeapData: {
    beforeEdit: string;
    afterEdit: string;
  };
}

export default function LogicalLeap({ title, logicalLeapData }: LogicalLeapProps) {
  return (
    <div css={styles.logicalLeapWrapper}>
      <p css={styles.logicalLeapDescription}>{title}</p>
      <LogicalLeapContent
        label={LOGICAL_LEAP_CONSTANT.beforeEdit}
        text={logicalLeapData.beforeEdit}
      />
      <LogicalLeapContent
        label={LOGICAL_LEAP_CONSTANT.afterEdit}
        text={logicalLeapData.afterEdit}
      />
    </div>
  );
}
