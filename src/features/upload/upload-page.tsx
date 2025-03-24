import { useGetFeedbackHistory } from '../feedback-history/services/use-get-feedback-history';
import PortfolioUpload from './components/portfolio-upload/portfolio-upload';
import RecentFeedback from './components/recent-feedback/recent-feedback';

import * as styles from './upload-page.styles';

export default function UploadPage() {
  const { data: feedbackHistoryResponse } = useGetFeedbackHistory('650e6f9b14a5f12a6b5c3f92');
  const feedbackHistory = feedbackHistoryResponse?.result;

  return (
    <div css={styles.container}>
      <h1 css={styles.title}>PDF를 업로드해주세요</h1>
      <p css={styles.description}>PDF 용량은 최대 50MB, 장수는 최대 50장 가능해요.</p>
      <PortfolioUpload />

      {feedbackHistory && feedbackHistory?.length > 0 && (
        <RecentFeedback history={feedbackHistory || []} />
      )}
    </div>
  );
}
