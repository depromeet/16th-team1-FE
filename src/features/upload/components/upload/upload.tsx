// import { css } from '@emotion/react';

// import { axiosInstance } from '@/common/services/service-config';

import { useGetFeedbackHistory } from '@features/feedback/services/use-get-feedback-history';
import { useGetStartFeedback } from '@features/feedback/services/use-get-start-feedback';

import { setLocalStorage } from '@/common/utils/storage';
import { useFeedbackStore } from '@/store/feedback';

import PortfolioUpload from '../portfolio-upload/portfolio-upload';
import RecentFeedback from '../recent-feedback/recent-feedback';

import * as styles from './upload.styles';

export default function FeedbackUpload() {
  const { data: feedbackHistoryResponse } = useGetFeedbackHistory('650e6f9b14a5f12a6b5c3f92');
  const feedbackHistory = feedbackHistoryResponse?.result;
  const { mutateAsync: startFeedback } = useGetStartFeedback();
  const { changeState } = useFeedbackStore();

  return (
    <div css={styles.container}>
      <h1 css={styles.title}>PDF를 업로드해주세요</h1>
      <p css={styles.description}>PDF 용량은 최대 50MB, 장수는 최대 50장 가능해요.</p>
      <PortfolioUpload
        onSuccess={async (data) => {
          try {
            const { id } = data.result;

            await startFeedback(id);

            changeState('PENDING', id);
            setLocalStorage('feedbackId', id);
          } catch (error) {
            // TODO: 피드백 조회 시작 실패 안내 처리

            changeState('ERROR');
          }
        }}
      />
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
