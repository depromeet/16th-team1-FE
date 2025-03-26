import { Outlet } from 'react-router';

import FeedbackStateObserver from '../feedback-state-observer/feedback-state-observer';

export default function GlobalRouteConfig() {
  return (
    <>
      <FeedbackStateObserver />
      <Outlet />
    </>
  );
}
