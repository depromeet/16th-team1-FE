import LogicalError from './logical-error';
import LogicalImprovement from './logical-improvement';
import { LOGICAL_LEAP_CONSTANT } from '../../constants/evaluation-constant';

import * as styles from './logical-leap.styles';

interface LogicalLeapProps {
  logicalLeapData: {
    description: string;
    logicalErrors: string[];
    improvementText: string;
  };
}

export default function LogicalLeap({ logicalLeapData }: LogicalLeapProps) {
  return (
    <div css={styles.logicalLeapWrapper}>
      <p css={styles.logicalLeapDescription}>{logicalLeapData.description}</p>
      <LogicalError
        label={LOGICAL_LEAP_CONSTANT.logicalError}
        logicalErrorList={logicalLeapData.logicalErrors}
      />
      <LogicalImprovement
        label={LOGICAL_LEAP_CONSTANT.improvement}
        improvementText={logicalLeapData.improvementText}
      />
    </div>
  );
}
