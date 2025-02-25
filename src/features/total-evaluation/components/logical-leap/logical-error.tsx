import Icon from '@/common/components/icon/icon';

import * as styles from './logical-error.styles';

interface LogicalErrorProps {
  label: string;
  logicalErrorList: string[];
}

export default function LogicalError({ label, logicalErrorList }: LogicalErrorProps) {
  return (
    <div css={styles.logicalErrorWrapper}>
      <div css={styles.redBlock} />
      <div css={styles.logicalErrorTextWrapper}>
        <span css={styles.label}>
          {label}
          <Icon name="pin" />
        </span>
        <ul>
          {logicalErrorList.map((error) => (
            <li key={error} css={styles.errorItem}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
