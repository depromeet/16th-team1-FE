import { createBrowserRouter } from 'react-router';

import LandingPage from '@/features/landing/landing-page';
import TotalEvalutionPage from '@/features/total-evaluation/total-evaluation-page';
import UploadPage from '@/features/upload/upload-page';

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
    path: '/total-evaluation',
    element: <TotalEvalutionPage />,
  },
]);
