import { Outlet } from 'react-router';

import RecentFeedbackModal from '@/features/profile/components/recent-feedback-modal/recent-feedback-modal';
import { useAuthStore } from '@/store/user-auth';

import FeedbackStateObserver from '../feedback-state-observer/feedback-state-observer';

/** 전역적으로 사용되는 로직들을 라우팅 최상단에 배치하는 Config 컴포넌트 */
export default function GlobalRouteConfig() {
  const { isLogin, userInfo } = useAuthStore();

  return (
    <>
      {/* 실시간 피드백 flow를 처리하는 옵져버 */}
      <FeedbackStateObserver />

      {/* 최근 피드백 모달 */}
      {isLogin && userInfo && <RecentFeedbackModal />}

      <Outlet />
    </>
  );
}
