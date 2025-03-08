import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router';

import LandingPage from '@/features/landing/landing-page';
import UploadPage from '@/features/upload/upload-page';

import Authorization from './common/components/auth/Authorization';
import CommonLayout from './common/components/layout/common-layout';
import { PAGE_URL, PageUrlType } from './common/constants/path';
import LoginPage from './features/login/login-page';
import TotalEvaluationPage from './features/total-evaluation/total-evaluation-page';

// 인증 관련 컴포넌트 (미리 정의되어 있어야 함)

interface RouterInfoType {
  path: PageUrlType;
  element: ReactNode;
  withAuthorization: boolean;
  label: string;
  isHeader: boolean;
}

const RouterInfo: RouterInfoType[] = [
  {
    path: PAGE_URL.Login,
    withAuthorization: false,
    element: <LoginPage />,
    label: '로그인 페이지',
    isHeader: false,
  },
  {
    path: PAGE_URL.Landing,
    withAuthorization: false,
    element: <LandingPage />,
    label: '랜딩 페이지',
    isHeader: true,
  },
  {
    path: PAGE_URL.Upload,
    withAuthorization: true,
    element: <UploadPage />,
    label: '업로드 페이지',
    isHeader: true,
  },
  {
    path: PAGE_URL.TotalEvaluation,
    withAuthorization: true,
    element: <TotalEvaluationPage />,
    label: '피드백 결과 페이지',
    isHeader: true,
  },
];

export const router = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    const WrappedElement = routerInfo.withAuthorization ? (
      <Authorization> {routerInfo.element}</Authorization>
    ) : (
      routerInfo.element
    );

    return {
      path: routerInfo.path,
      element: <CommonLayout isHeader={routerInfo.isHeader} pageUrl={routerInfo.path} />,
      children: [
        {
          index: true,
          element: WrappedElement,
        },
      ],
    };
  }),
);
