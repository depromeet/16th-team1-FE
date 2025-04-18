import { Outlet } from 'react-router';

import MobileGuardModal from '@/common/components/mobile-guard-modal/mobile-guard-modal';
import Toast from '@/common/components/toast/toast';
import { useToast } from '@/common/hooks/use-toast';
import RecentFeedbackModal from '@/features/profile/components/recent-feedback-modal/recent-feedback-modal';
import { useAuthStore } from '@/store/user-auth';

import FeedbackStateObserver from '../feedback-state-observer/feedback-state-observer';

/** 전역적으로 사용되는 로직들을 라우팅 최상단에 배치하는 Config 컴포넌트 */
export default function GlobalRouteConfig() {
  const { toastType, toastOpen, setToastOpen, navigateTotalEvaluationPage } = useToast();

  const { isLogin, userInfo } = useAuthStore();

  return (
    <>
      {/* 실시간 피드백 flow를 처리하는 옵져버 */}
      <FeedbackStateObserver />

      {/* 최근 피드백 모달 */}
      {isLogin && userInfo && <RecentFeedbackModal />}

      {/* 모바일 접근 제한 모달 */}
      <MobileGuardModal />

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
