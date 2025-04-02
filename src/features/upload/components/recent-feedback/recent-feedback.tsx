import Spacing from '@/common/components/spacing/spacing';
import { useGetFeedbackHistory } from '@/features/feedback/services/use-get-feedback-history';

import RecentFeedbackList from './recent-feedback-list';
import RecentFeedbackListItem from './recent-feedback-list-item';

import * as styles from './recent-feedback.styles';

export default function RecentFeedback() {
  const { data: feedbackHistoryResponse, isLoading } = useGetFeedbackHistory();
  const feedbackHistory = feedbackHistoryResponse?.result;

  if (isLoading || feedbackHistory.length === 0) {
    return null;
  }

  return (
    <div css={styles.container}>
      <h3 css={styles.title}>최근 피드백</h3>
      <Spacing size={1.2} />
      <RecentFeedbackList>
        {feedbackHistory.slice(0, 2).map((item) => (
          <RecentFeedbackListItem
            key={item.feedbackId}
            feedbackId={item.feedbackId}
            date={item.date}
            fileName={item.title}
          ></RecentFeedbackListItem>
        ))}
      </RecentFeedbackList>
    </div>
  );
}
