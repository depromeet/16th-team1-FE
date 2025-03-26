import { ReactNode, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getLocalStorage, removeLocalStorage } from '@/common/utils/storage';
import { useGetPortfolioFeedbackForStatus } from '@/features/feedback/services/use-get-portfolio-feedback';
import { useFeedbackStore } from '@/store/feedback';

interface FeedbackStateProps {
  children: ReactNode;
}

const POLLING_INTERVAL = 5000;

/**
 * 피드백 상태에 따른 작업을 수행하는 컴포넌트
 */
export default function FeedbackStateObserver({ children }: FeedbackStateProps) {
  const navigate = useNavigate();
  const { state, feedbackId, changeState } = useFeedbackStore();
  const { data: feedback, refetch } = useGetPortfolioFeedbackForStatus({
    feedbackId,
  });

  const getFeedbackState = useCallback(() => {
    const { overallStatus, projectStatus } = feedback?.result || {};
    if (overallStatus === 'COMPLETE' && projectStatus === 'COMPLETE') {
      // 피드백 생성 성공 시
      removeLocalStorage('feedbackId');

      changeState('COMPLETE');

      navigate(`/total-evaluation/${feedbackId}`);
    } else if (overallStatus === 'ERROR' || projectStatus === 'ERROR') {
      // 피드백 생성 실패 시
      changeState('ERROR');
    } else if (overallStatus === 'IN_PROGRESS' || projectStatus === 'IN_PROGRESS') {
      // 피드백 생성 중
      changeState('IN_PROGRESS');

      refetch();
    } else if (overallStatus === 'PENDING' && projectStatus === 'PENDING') {
      // 피드백 생성 대기 중
      changeState('PENDING');

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
  }, [feedbackId, getFeedbackState, state]);

  useEffect(() => {
    const feedbackIdinProgress = getLocalStorage('feedbackId', undefined);

    if (feedbackIdinProgress) {
      changeState('PENDING', feedbackIdinProgress);
    }
  }, [changeState]);

  return children;
}
