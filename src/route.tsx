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
        <Button size="medium" usage="text" variant="purlple">
          purple-L
        </Button>

        <Button size="small" usage="text" variant="sora">
          sora-S
        </Button>

        <Button size="large" usage="icon" variant="sora" icon={<Icon name="pin" width={24} />} />

        <Button
          size="medium"
          usage="icon"
          variant="purlple"
          icon={<Icon name="pin" width={24} />}
        />

        <Button
          size="medium"
          usage="multi"
          icon={<Icon name="pin" width={24} />}
          iconPosition="right"
          variant="sora"
        >
          sora-multi-left-M
        </Button>

        <Button
          size="small"
          usage="multi"
          icon={<Icon name="pin" width={24} />}
          iconPosition="left"
          variant="purlple"
        >
          purlple-multi-left-S
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
