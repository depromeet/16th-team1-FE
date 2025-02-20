import { createBrowserRouter } from 'react-router';

import TotalEvalutionPage from './features/total-evaluation/total-evaluation-page';
import UploadPage from './features/upload/upload-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>메인 페이지</h1>
      </div>
    ),
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
