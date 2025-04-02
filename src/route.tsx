import { createBrowserRouter } from 'react-router';

import LandingPage from '@/features/landing/landing-page';
import FeedbackLoadingPage from '@/features/upload/components/feedback-loading/feedback-loading';
import UploadPage from '@/features/upload/upload-page';

import Authorization from './common/components/auth/Authorization';
import GlobalRouteConfig from './common/components/global-route-config/global-route-config';
import CommonLayout from './common/components/layout/common-layout';
import { PAGE_URL } from './common/constants/path';
import LoginPage from './features/login/login-page';
import TotalEvaluationPage from './features/total-evaluation/total-evaluation-page';

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
        element: <CommonLayout isHeader={false} pageLabel="Login" />,
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
    ],
  },
]);
