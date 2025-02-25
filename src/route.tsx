import { createBrowserRouter } from 'react-router';

import TotalEvalutionPage from '@/features/total-evaluation/total-evaluation-page';
import UploadPage from '@/features/upload/upload-page';

import { Button } from './common/components/button/Button';
import Icon from './common/components/icon/icon';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        {/* icon은 props로 넘겨주기 && 아이콘 정렬 방향 따로 지정 */}
        <Button
          size="large"
          usage="normal"
          variant="purlple"
          icon={<Icon name="pin" width={24} />}
          iconPosition="right"
        >
          hahaha
        </Button>

        <Button
          size="large"
          usage="iconOnly"
          variant="purlple"
          icon={<Icon name="pin" width={24} />}
          iconPosition="right"
        />

        <Button size="large" usage="normal" variant="purlple">
          hahaha
        </Button>
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
