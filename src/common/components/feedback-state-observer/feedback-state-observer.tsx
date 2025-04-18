import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getLocalStorage, setLocalStorage } from '@/common/utils/storage';
import { useGetPortfolioFeedbackForStatus } from '@/features/feedback/services/use-get-portfolio-feedback';
import { useFeedbackStore } from '@/store/feedback';
import { useAuthStore } from '@/store/user-auth';

const POLLING_INTERVAL = 5000;

/**
 * 피드백 상태에 따른 작업을 수행하는 컴포넌트
 */
export default function FeedbackStateObserver() {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  const { feedbackId, changeState } = useFeedbackStore();
  const { data: feedback, refetch } = useGetPortfolioFeedbackForStatus({
    feedbackId,
  });

  const getFeedbackState = useCallback(() => {
    const { overallStatus, projectStatus } = feedback?.result.feedback || {};

    const isComplete = overallStatus === 'COMPLETE' && projectStatus === 'COMPLETE';
    const isError = overallStatus === 'ERROR' || projectStatus === 'ERROR';
    const isInProgress = overallStatus === 'IN_PROGRESS' || projectStatus === 'IN_PROGRESS';
    const isPending = overallStatus === 'PENDING' && projectStatus === 'PENDING';

    if (isComplete) {
      // 피드백 생성 성공 시
      const feedbacks = JSON.parse(getLocalStorage('feedbacks', undefined) || '{}');
      const { email } = userInfo || {};

      if (!email) return;

      delete feedbacks[email];

      setLocalStorage('feedbacks', JSON.stringify(feedbacks));

      changeState('COMPLETE');

      navigate(`/total-evaluation/${feedbackId}`);

      changeState('IDLE');
    } else if (isError) {
      // 피드백 생성 실패 시
      changeState('ERROR');
    } else if (isInProgress) {
      // 피드백 생성 중
      changeState('IN_PROGRESS', feedbackId);

      refetch();
    } else if (isPending) {
      // 피드백 생성 대기 중
      changeState('PENDING', feedbackId);

      refetch();
    }
  }, [changeState, feedback?.result, feedbackId, navigate, refetch]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (feedbackId) {
      // 5초마다 피드백 상태 확인
      // 5초는 임의로 설정한 값
      timeoutId = setTimeout(function tick() {
        getFeedbackState();

        timeoutId = setTimeout(tick, POLLING_INTERVAL);
      }, POLLING_INTERVAL);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [feedbackId, getFeedbackState]);

  useEffect(() => {
    const { email } = userInfo || {};
    if (!email) return;

    const feedbacks = JSON.parse(getLocalStorage('feedbacks', undefined) || '{}');

    if (!feedbacks) return;

    const feedbackIdinProgress = feedbacks[email];

    if (feedbackIdinProgress) {
      changeState('PENDING', feedbackIdinProgress);
    }
  }, [changeState, userInfo]);

  return null;
}
