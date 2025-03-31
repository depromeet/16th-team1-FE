// import { css } from '@emotion/react';

// import { axiosInstance } from '@/common/services/service-config';

import { useGetFeedbackHistory } from '@features/feedback/services/use-get-feedback-history';

import PortfolioUpload from '../portfolio-upload/portfolio-upload';
import RecentFeedback from '../recent-feedback/recent-feedback';

import * as styles from './upload.styles';

export default function FeedbackUpload() {
  const { data: feedbackHistoryResponse } = useGetFeedbackHistory();
  const feedbackHistory = feedbackHistoryResponse?.result;

  return (
    <div css={styles.container}>
      <h1 css={styles.title}>PDF를 업로드해주세요</h1>
      <p css={styles.description}>PDF 용량은 최대 50MB, 장수는 최대 50장 가능해요.</p>
      <PortfolioUpload />
      {/* 테스트용 */}
      {/* <button
        onClick={async () => {
          const response = await axiosInstance.get(`/api/v1/users/me`);
          console.log(response.data);
        }}
        css={css`
          font-size: 3rem;
        `}
      >
        내 정보 확인(테스트용)
      </button> */}
      {feedbackHistory && feedbackHistory?.length > 0 && (
        <RecentFeedback history={feedbackHistory || []} />
      )}
    </div>
  );
}
