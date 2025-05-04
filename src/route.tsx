import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const LandingPage = lazy(() => import('@/features/landing/landing-page'));
const LoginPage = lazy(() => import('@/features/login/login-page'));
const UploadPage = lazy(() => import('@/features/upload/upload-page'));
const FeedbackLoadingPage = lazy(
  () => import('@/features/upload/components/feedback-loading/feedback-loading'),
);
const TotalEvaluationPage = lazy(() => import('@/features/total-evaluation/total-evaluation-page'));
const NotFoundPage = lazy(() => import('./common/components/not-found-page/not-found-page'));

import Authorization from './common/components/auth/Authorization';
import GlobalRouteConfig from './common/components/global-route-config/global-route-config';
import CommonLayout from './common/components/layout/common-layout';
import { PAGE_URL } from './common/constants/path';

export const router = createBrowserRouter([
  {
    element: <GlobalRouteConfig />,
    children: [
      /** 인증이 필요 없는 라우트 */
      {
        path: PAGE_URL.Landing,
        element: <CommonLayout isHeader={true} pageLabel="Landing" />,
        children: [{ index: true, element: <LandingPage /> }],
      },
      {
        path: PAGE_URL.Login,
        element: <CommonLayout isHeader={true} pageLabel="Login" />,
        children: [{ index: true, element: <LoginPage /> }],
      },

      /** 인증이 필요한 라우트 */
      {
        element: <Authorization />,
        children: [
          {
            path: PAGE_URL.Upload,
            element: <CommonLayout isHeader={true} pageLabel="Upload" />,
            children: [{ index: true, element: <UploadPage /> }],
          },
          {
            path: PAGE_URL.Loading,
            element: <CommonLayout isHeader={true} pageLabel="Loading" />,
            children: [{ index: true, element: <FeedbackLoadingPage /> }],
          },
          {
            path: `${PAGE_URL.TotalEvaluation}/:feedbackId`,
            element: <CommonLayout isHeader={true} pageLabel="TotalEvaluation" />,
            children: [{ index: true, element: <TotalEvaluationPage /> }],
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
