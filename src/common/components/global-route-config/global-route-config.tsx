import { Outlet } from 'react-router';

import RecentFeedbackModal from '@/features/profile/components/recent-feedback-modal/recent-feedback-modal';
import { useUserStore } from '@/store/user-auth';

import FeedbackStateObserver from '../feedback-state-observer/feedback-state-observer';

export default function GlobalRouteConfig() {
  const { isAuthenticated, userInfo } = useUserStore();
  return (
    <>
      <FeedbackStateObserver />
      {isAuthenticated && userInfo && <RecentFeedbackModal />}
      <Outlet />
    </>
  );
}
