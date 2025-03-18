import { ReactNode } from 'react';

import * as styles from './recent-feedback-list.style';

export default function RecentFeedbackList({ children }: { children: ReactNode }) {
  return <ul css={styles.container}>{children}</ul>;
}
