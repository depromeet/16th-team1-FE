import { createBrowserRouter } from 'react-router';

import LandingPage from '@/features/landing/landing-page';
import TotalEvaluationPage from '@/features/total-evaluation/total-evaluation-page';
import UploadPage from '@/features/upload/upload-page';

import LoginPage from './features/login/login-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/upload',
    element: <UploadPage />,
  },
  {
    path: '/auth',
    element: <LoginPage />,
  },
  {
    path: '/total-evaluation/:feedbackId',
    element: <TotalEvaluationPage />,
  },
]);
