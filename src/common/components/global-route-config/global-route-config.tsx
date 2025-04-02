import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';

import Toast from '@/common/components/toast/toast';
import RecentFeedbackModal from '@/features/profile/components/recent-feedback-modal/recent-feedback-modal';
import { useFeedbackStore, ProcessState } from '@/store/feedback';
import { useUserStore } from '@/store/user-auth';

import FeedbackStateObserver from '../feedback-state-observer/feedback-state-observer';

/** 전역적으로 사용되는 로직들을 라우팅 최상단에 배치하는 Config 컴포넌트 */
export default function GlobalRouteConfig() {
  const navigate = useNavigate();

  const { isAuthenticated, userInfo } = useUserStore();

  const { state, feedbackId, changeState } = useFeedbackStore();

  const [toastOpen, setToastOpen] = useState(true);

  const mapProcessStateToToastType = (state: ProcessState) => {
    switch (state) {
      case 'PENDING':
      case 'IN_PROGRESS':
        return 'feedbackPending';
      case 'COMPLETE':
        return 'feedbackSuccess';
      case 'ERROR':
        return 'feedbackError';
      default:
        return null;
    }
  };

  const navigateTotalEvaluationPage = () => {
    if (state === 'COMPLETE') {
      changeState('IDLE');
      navigate(`/total-evaluation/${feedbackId}`);
    }
  };

  const toastType = mapProcessStateToToastType(state);

  return (
    <>
      {/* 실시간 피드백 flow를 처리하는 옵져버 */}
      <FeedbackStateObserver />

      {/* 최근 피드백 모달 */}
      {isAuthenticated && userInfo && <RecentFeedbackModal />}

      {/* 피드백 로딩 상태에 따른 토스트 메세지 */}
      {toastType && (
        <Toast
          name={toastType}
          open={toastOpen}
          setOpen={setToastOpen}
          onClick={navigateTotalEvaluationPage}
        />
      )}

      <Outlet />
    </>
  );
}
