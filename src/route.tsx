import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router';

import LandingPage from '@/features/landing/landing-page';
import UploadPage from '@/features/upload/upload-page';

import Authorization from './common/components/auth/Authorization';
import CommonLayout from './common/components/layout/common-layout';
import { PAGE_URL, PageLabelKey } from './common/constants/path';
import LoginPage from './features/login/login-page';
import TotalEvaluationPage from './features/total-evaluation/total-evaluation-page';

interface RouterInfoType {
  path: string;
  element: ReactNode;
  withAuthorization: boolean;
  label: PageLabelKey;
  isHeader: boolean;
}

const RouterInfo: RouterInfoType[] = [
  {
    path: PAGE_URL.Landing,
    withAuthorization: false,
    element: <LandingPage />,
    label: 'Landing',
    isHeader: true,
  },
  {
    path: PAGE_URL.Login,
    withAuthorization: false,
    element: <LoginPage />,
    label: 'Login',
    isHeader: false,
  },
  {
    path: PAGE_URL.Upload,
    withAuthorization: true,
    element: <UploadPage />,
    label: 'Upload',
    isHeader: true,
  },
  {
    path: `${PAGE_URL.TotalEvaluation}/:feedbackId`,
    withAuthorization: true,
    element: <TotalEvaluationPage />,
    label: 'TotalEvaluation',
    isHeader: true,
  },
];

export const router = createBrowserRouter(
  RouterInfo.map((routerInfo) => ({
    path: routerInfo.path,
    element: <CommonLayout isHeader={routerInfo.isHeader} pageLabel={routerInfo.label} />,
    children: [
      {
        index: true,
        element: routerInfo.withAuthorization ? (
          <Authorization> {routerInfo.element}</Authorization>
        ) : (
          routerInfo.element
        ),
      },
    ],
  })),
);
